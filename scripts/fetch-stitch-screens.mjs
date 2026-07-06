import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { stitch } from "@google/stitch-sdk";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const PROJECT_ID = "12369773356667041094";
const PROJECT_TITLE = "Nexogen Group Tech Portal";
const DESIGN_SYSTEM_ASSET_ID = "02174d1f084949cea296207efc02a924";

const SCREENS = [
  { slug: "02-three-js", title: "Three.js", id: "a574863a83a044f9b211ccff20698b85", ext: "html" },
  { slug: "03-nexogen-ui-ux-flow", title: "Nexogen UI/UX Flow", id: "115f3334d6754f7fb7f9df3dd92e1b17", ext: "md" },
  { slug: "04-shader", title: "Shader", id: "b60ab6ec011f4215a50894cddc149e1e", ext: "html" },
  { slug: "05-nexogen-ecosystem", title: "Nexogen | Ecosystem", id: "a6f771d2a37945c382be3dcbb2595ab1", ext: "html" },
  { slug: "06-nexogen-hero-protocol", title: "Nexogen | Hero Protocol", id: "623a04ee08114cd7a1c884fb7aa77130", ext: "html" },
  { slug: "07-nexogen-intelligence-hub", title: "Nexogen | Intelligence Hub", id: "9ee3921c5a7742a6b7c8e1c6505ccec4", ext: "html" },
  { slug: "08-nexogen-secure-uplink", title: "Nexogen | Secure Uplink", id: "40e09745f232443186fc26170d134251", ext: "html" },
];

const outDir = path.join(rootDir, ".stitch", "nexogen-holdings-tech-portal");
const htmlDir = path.join(outDir, "html");
const imageDir = path.join(outDir, "images");
const designDir = path.join(outDir, "design-system");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function download(url, dest) {
  if (!url?.trim()) return false;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Download failed (${response.status})`);
  await writeFile(dest, Buffer.from(await response.arrayBuffer()));
  return true;
}

async function exportDesignSystem() {
  await mkdir(designDir, { recursive: true });
  const parsed = await stitch.callTool("list_design_systems", { projectId: PROJECT_ID });
  const entry = parsed?.designSystems?.find((ds) =>
    ds.name?.includes(DESIGN_SYSTEM_ASSET_ID)
  );
  if (!entry) throw new Error("Design system asset not found");

  const { designSystem } = entry;
  const designMd = designSystem?.theme?.designMd ?? designSystem?.styleGuidelines ?? "";

  await writeFile(
    path.join(designDir, "design-system.json"),
    JSON.stringify(entry, null, 2)
  );
  await writeFile(path.join(designDir, "DESIGN.md"), designMd);
  await writeFile(
    path.join(designDir, "theme.json"),
    JSON.stringify(designSystem?.theme ?? {}, null, 2)
  );

  return {
    slug: "01-design-system",
    title: "Design System",
    id: `assets/${DESIGN_SYSTEM_ASSET_ID}`,
    displayName: designSystem?.displayName ?? "Design System",
    designSystem: path.relative(rootDir, designDir).replace(/\\/g, "/"),
    files: {
      json: `${path.relative(rootDir, designDir).replace(/\\/g, "/")}/design-system.json`,
      designMd: `${path.relative(rootDir, designDir).replace(/\\/g, "/")}/DESIGN.md`,
      theme: `${path.relative(rootDir, designDir).replace(/\\/g, "/")}/theme.json`,
    },
  };
}

async function fetchScreen(project, screen) {
  const screenRef = await project.getScreen(screen.id);
  const htmlUrl = await screenRef.getHtml();
  let imageUrl = await screenRef.getImage();
  const mimeType = screenRef.data?.htmlCode?.mimeType ?? "text/html";
  const ext = screen.ext ?? (mimeType.includes("markdown") ? "md" : "html");

  if (imageUrl?.includes("googleusercontent.com") && !imageUrl.includes("=w")) {
    imageUrl = `${imageUrl}=w1280`;
  }

  const codePath = path.join(htmlDir, `${screen.slug}.${ext}`);
  const imagePath = path.join(imageDir, `${screen.slug}.png`);

  const codeSaved = htmlUrl ? await download(htmlUrl, codePath) : false;
  let imageSaved = false;
  try {
    imageSaved = imageUrl ? await download(imageUrl, imagePath) : false;
  } catch {
    // code-only screens may lack screenshots
  }

  return {
    ...screen,
    mimeType,
    code: codeSaved ? path.relative(rootDir, codePath).replace(/\\/g, "/") : null,
    image: imageSaved ? path.relative(rootDir, imagePath).replace(/\\/g, "/") : null,
    htmlUrl: htmlUrl || null,
    imageUrl: imageUrl || null,
    metadata: screenRef.data ?? {},
  };
}

async function main() {
  if (!process.env.STITCH_API_KEY) {
    throw new Error("STITCH_API_KEY is required");
  }

  await mkdir(htmlDir, { recursive: true });
  await mkdir(imageDir, { recursive: true });

  const project = stitch.project(PROJECT_ID);
  const results = [];
  const failures = [];

  process.stdout.write("[design-system] exporting... ");
  try {
    const ds = await exportDesignSystem();
    results.push(ds);
    console.log("done");
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    failures.push({ slug: "01-design-system", title: "Design System", error: message });
    results.push({ slug: "01-design-system", title: "Design System", error: message });
    console.log(`FAILED: ${message}`);
  }

  for (let i = 0; i < SCREENS.length; i++) {
    const screen = SCREENS[i];
    process.stdout.write(`[${i + 1}/${SCREENS.length}] ${screen.slug}... `);
    try {
      const entry = await fetchScreen(project, screen);
      results.push(entry);
      console.log(entry.code && entry.image ? "done" : `done (code: ${!!entry.code}, image: ${!!entry.image})`);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      failures.push({ ...screen, error: message });
      results.push({ ...screen, error: message });
      console.log(`FAILED: ${message}`);
    }
    if (i < SCREENS.length - 1) await sleep(300);
  }

  const manifest = {
    projectId: PROJECT_ID,
    projectTitle: PROJECT_TITLE,
    exportedAt: new Date().toISOString(),
    screens: results,
    failures,
  };

  await writeFile(path.join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2));
  await writeFile(
    path.join(outDir, "SCREENS.md"),
    [
      `# ${PROJECT_TITLE}`,
      "",
      `Project ID: \`${PROJECT_ID}\``,
      `Exported: ${manifest.exportedAt}`,
      "",
      "| # | Slug | Title | Code | Image |",
      "|---|------|-------|------|-------|",
      ...results.map((s, i) => {
        const code = s.code ?? s.files?.designMd ?? "—";
        const image = s.image ?? "—";
        return `| ${i + 1} | \`${s.slug}\` | ${s.title} | ${code ? "✓" : "—"} | ${image ? "✓" : "—"} |`;
      }),
      "",
      "## Re-run",
      "",
      "```bash",
      "STITCH_API_KEY=... npm run fetch:stitch",
      "```",
      "",
    ].join("\n")
  );

  console.log(`\nExported to ${path.relative(rootDir, outDir)}`);
  if (failures.length) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
