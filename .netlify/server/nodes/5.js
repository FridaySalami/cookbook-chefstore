import * as universal from '../entries/pages/recipes/_slug_/_page.ts.js';
import * as server from '../entries/pages/recipes/_slug_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/recipes/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/recipes/[slug]/+page.ts";
export { server };
export const server_id = "src/routes/recipes/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.Bk9n6Es_.js","_app/immutable/chunks/CUxy7uzD.js","_app/immutable/chunks/Dp1pzeXC.js","_app/immutable/chunks/BI-Erv37.js","_app/immutable/chunks/C2wqu5z9.js","_app/immutable/chunks/DqT9xrIu.js","_app/immutable/chunks/Bc3vTCdl.js","_app/immutable/chunks/i9F67-Pt.js","_app/immutable/chunks/B0SnFE21.js","_app/immutable/chunks/By8KKj4o.js","_app/immutable/chunks/KTHA1viR.js","_app/immutable/chunks/CZUsShI0.js","_app/immutable/chunks/CgL4d3KN.js","_app/immutable/chunks/CSTZC4BZ.js","_app/immutable/chunks/EgCCIXJA.js","_app/immutable/chunks/3OfZg533.js","_app/immutable/chunks/D8VxpRFf.js","_app/immutable/chunks/BKiLEkA0.js","_app/immutable/chunks/DWrC6vJE.js","_app/immutable/chunks/BAscA0a-.js","_app/immutable/chunks/CV71p-Yc.js"];
export const stylesheets = ["_app/immutable/assets/5.TG1l-nGk.css"];
export const fonts = [];
