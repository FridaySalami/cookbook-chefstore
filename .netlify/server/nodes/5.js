import * as universal from '../entries/pages/recipes/_slug_/_page.ts.js';
import * as server from '../entries/pages/recipes/_slug_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/recipes/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/recipes/[slug]/+page.ts";
export { server };
export const server_id = "src/routes/recipes/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.D1SlkCEu.js","_app/immutable/chunks/D8YwlqbC.js","_app/immutable/chunks/Dp1pzeXC.js","_app/immutable/chunks/HxF4sPrO.js","_app/immutable/chunks/BNX1CnT-.js","_app/immutable/chunks/Cwbw4VRM.js","_app/immutable/chunks/DjljZn8g.js","_app/immutable/chunks/CcT6tQUc.js","_app/immutable/chunks/unnTnTlV.js","_app/immutable/chunks/DBb4VFYs.js","_app/immutable/chunks/N1DSbHQ9.js","_app/immutable/chunks/fV8yg2hr.js","_app/immutable/chunks/RShCK2s9.js","_app/immutable/chunks/B1uTYVpT.js","_app/immutable/chunks/DoMcYyOd.js","_app/immutable/chunks/C9eEwBZL.js","_app/immutable/chunks/D_eB9-4z.js","_app/immutable/chunks/CVLlKoNf.js","_app/immutable/chunks/OxouhyAS.js","_app/immutable/chunks/CQ4wxL3p.js","_app/immutable/chunks/CV71p-Yc.js"];
export const stylesheets = ["_app/immutable/assets/5.TG1l-nGk.css"];
export const fonts = [];
