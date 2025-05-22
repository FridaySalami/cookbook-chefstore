import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.LFSDUqZO.js","_app/immutable/chunks/3Q1rwCLh.js","_app/immutable/chunks/C2wqu5z9.js","_app/immutable/chunks/DqT9xrIu.js","_app/immutable/chunks/Bc3vTCdl.js","_app/immutable/chunks/i9F67-Pt.js","_app/immutable/chunks/B0SnFE21.js","_app/immutable/chunks/By8KKj4o.js","_app/immutable/chunks/KTHA1viR.js","_app/immutable/chunks/CZUsShI0.js","_app/immutable/chunks/CgL4d3KN.js","_app/immutable/chunks/3OfZg533.js","_app/immutable/chunks/DRHdv_Sm.js","_app/immutable/chunks/EgCCIXJA.js","_app/immutable/chunks/i2pzHkcY.js"];
export const stylesheets = [];
export const fonts = [];
