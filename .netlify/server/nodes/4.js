import * as universal from '../entries/pages/recipes/_slug_/_page.ts.js';
import * as server from '../entries/pages/recipes/_slug_/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/recipes/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/recipes/[slug]/+page.ts";
export { server };
export const server_id = "src/routes/recipes/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.DClq0pbP.js","_app/immutable/chunks/uRAaiTHg.js","_app/immutable/chunks/D8VMeV2H.js","_app/immutable/chunks/DaXcugfL.js","_app/immutable/chunks/BscduWRZ.js","_app/immutable/chunks/BcQBXTmp.js","_app/immutable/chunks/Cxw7w9jF.js","_app/immutable/chunks/CcLb7TRd.js","_app/immutable/chunks/caGatdLF.js","_app/immutable/chunks/Bw8YEbZj.js","_app/immutable/chunks/DXqAIOwq.js","_app/immutable/chunks/Bxy0J6iM.js","_app/immutable/chunks/yB3EITM6.js","_app/immutable/chunks/C7_pkZj_.js","_app/immutable/chunks/DFDnNaPN.js","_app/immutable/chunks/BLN3ifcg.js","_app/immutable/chunks/BUmB7qKv.js"];
export const stylesheets = ["_app/immutable/assets/card-title.Rlg9CDWI.css"];
export const fonts = [];
