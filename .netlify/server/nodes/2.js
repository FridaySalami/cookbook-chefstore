import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.ClQCdnIB.js","_app/immutable/chunks/CoBTcq88.js","_app/immutable/chunks/DhXIVpNw.js","_app/immutable/chunks/Cjp9xGs_.js","_app/immutable/chunks/B47DL7qs.js","_app/immutable/chunks/Bh7Z4szw.js","_app/immutable/chunks/AI5Yz0m9.js","_app/immutable/chunks/D58dr5Nc.js","_app/immutable/chunks/C-UQWbZX.js","_app/immutable/chunks/MEzvg1ZD.js","_app/immutable/chunks/LQXbGVLr.js","_app/immutable/chunks/DlfcsGGc.js","_app/immutable/chunks/Dmk4-4IZ.js","_app/immutable/chunks/JukGlCaC.js","_app/immutable/chunks/BoOnspXK.js"];
export const stylesheets = [];
export const fonts = [];
