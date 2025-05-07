import * as universal from '../entries/pages/recipes/_slug_/_page.ts.js';
import * as server from '../entries/pages/recipes/_slug_/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/recipes/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/recipes/[slug]/+page.ts";
export { server };
export const server_id = "src/routes/recipes/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.DVsb-W_U.js","_app/immutable/chunks/CA-qPWm7.js","_app/immutable/chunks/B0QAeMhy.js","_app/immutable/chunks/Dh5oHfRH.js","_app/immutable/chunks/Bw3dGci5.js","_app/immutable/chunks/vW00Cco6.js","_app/immutable/chunks/BTvQdhsi.js","_app/immutable/chunks/ieKHc6N8.js","_app/immutable/chunks/BbsuJMov.js","_app/immutable/chunks/e5L6D3mJ.js","_app/immutable/chunks/349ZHIUq.js","_app/immutable/chunks/Dj3JT8cN.js","_app/immutable/chunks/BT3t4PSN.js","_app/immutable/chunks/DNTpGgBc.js","_app/immutable/chunks/CXeEppPn.js","_app/immutable/chunks/BUKNPLMJ.js","_app/immutable/chunks/w0IdKGaZ.js","_app/immutable/chunks/wtmgUzit.js","_app/immutable/chunks/D0PXDTK-.js"];
export const stylesheets = ["_app/immutable/assets/4.Rlg9CDWI.css"];
export const fonts = [];
