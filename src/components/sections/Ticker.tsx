const items = [
  "FINTECH",
  "EDUTECH",
  "GOVTECH",
  "HARDWARE",
  "CROSS-BORDER PAYMENTS",
  "AFRICA-FIRST",
  "GLOBAL SCALE",
];

export function Ticker() {
  const content = [...items, ...items];

  return (
    <section className="overflow-hidden border-y border-[#D4AF37]/30 bg-black py-4">
      <div className="animate-ticker flex w-max whitespace-nowrap">
        {content.map((item, i) => (
          <span key={`${item}-${i}`} className="font-mono flex items-center text-xs tracking-[0.2em] text-[#B8A882] uppercase">
            <span className="mx-8">{item}</span>
            <span className="h-1 w-1 rounded-full bg-[#D4AF37]" />
          </span>
        ))}
      </div>
    </section>
  );
}
