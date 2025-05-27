import * as universal from '../entries/pages/recipes/_slug_/_page.ts.js';
import * as server from '../entries/pages/recipes/_slug_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/recipes/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/recipes/[slug]/+page.ts";
export { server };
export const server_id = "src/routes/recipes/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.CAvSobwA.js","_app/immutable/chunks/mdxVZvxr.js","_app/immutable/chunks/Dp1pzeXC.js","_app/immutable/chunks/CoBTcq88.js","_app/immutable/chunks/DhXIVpNw.js","_app/immutable/chunks/By7lnlPc.js","_app/immutable/chunks/Dmk4-4IZ.js","_app/immutable/chunks/JukGlCaC.js","_app/immutable/chunks/Cjp9xGs_.js","_app/immutable/chunks/C-UQWbZX.js","_app/immutable/chunks/B47DL7qs.js","_app/immutable/chunks/Bh7Z4szw.js","_app/immutable/chunks/AI5Yz0m9.js","_app/immutable/chunks/BEhtUHta.js","_app/immutable/chunks/D58dr5Nc.js","_app/immutable/chunks/LQXbGVLr.js","_app/immutable/chunks/DlfcsGGc.js","_app/immutable/chunks/CRix_-60.js","_app/immutable/chunks/CD5eWdqL.js","_app/immutable/chunks/D5KeIIbf.js","_app/immutable/chunks/CV71p-Yc.js"];
export const stylesheets = ["_app/immutable/assets/5.BzHNtIj_.css"];
export const fonts = [];
