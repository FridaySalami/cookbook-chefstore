import * as universal from '../entries/pages/recipes/_slug_/_page.ts.js';
import * as server from '../entries/pages/recipes/_slug_/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/recipes/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/recipes/[slug]/+page.ts";
export { server };
export const server_id = "src/routes/recipes/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.DHIVnHli.js","_app/immutable/chunks/BsroeKhz.js","_app/immutable/chunks/ChQ9MJuq.js","_app/immutable/chunks/DqEayQNK.js","_app/immutable/chunks/C7asDorP.js","_app/immutable/chunks/Dm4k7e1w.js","_app/immutable/chunks/BbABRMcR.js","_app/immutable/chunks/DtL4H0qx.js","_app/immutable/chunks/0lCJ9Yvc.js","_app/immutable/chunks/C5EarfMV.js","_app/immutable/chunks/BuwvQY1T.js","_app/immutable/chunks/COkpjRsk.js","_app/immutable/chunks/BuBj9Po9.js","_app/immutable/chunks/DRxHBU8Y.js","_app/immutable/chunks/B_IiKFSo.js","_app/immutable/chunks/BYrfDCjE.js","_app/immutable/chunks/BwyjfTjG.js","_app/immutable/chunks/beVgfawf.js","_app/immutable/chunks/CV71p-Yc.js"];
export const stylesheets = ["_app/immutable/assets/4.TG1l-nGk.css"];
export const fonts = [];
