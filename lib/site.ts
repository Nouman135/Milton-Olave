// Site-wide constants. Values that differ per deployment come from the environment (see .env.example).
export const SITE_NAME = 'Milton Olave';
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.miltonolave.com').replace(/\/$/, '');
// Meta Pixel installed on the original Webflow site.
export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID ?? '579339168295301';
// GoHighLevel embed runtime; sizes the newsletter iframe in the footer.
export const GHL_FORM_EMBED_SRC = 'https://link.miltonolave.com/js/form_embed.js';
