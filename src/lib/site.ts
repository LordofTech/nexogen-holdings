export const COMPANY_NAME = "Nexogen Limited";
export const COMPANY_NAME_CAPS = "NEXOGEN LIMITED";
export const CONTACT_EMAIL = "arthur.chukwurah@nexogenltd.com";
export const MAILTO_SUBJECT = "Enquiry from Nexogen Limited website";

export function contactMailto() {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(MAILTO_SUBJECT)}`;
}
