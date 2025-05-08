import * as universal from '../entries/pages/recipes/_slug_/_page.ts.js';
import * as server from '../entries/pages/recipes/_slug_/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/recipes/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/recipes/[slug]/+page.ts";
export { server };
export const server_id = "src/routes/recipes/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.Uuw90YUm.js","_app/immutable/chunks/3n7JEMgE.js","_app/immutable/chunks/RisGGN0a.js","_app/immutable/chunks/C7fTvnaU.js","_app/immutable/chunks/Df0bnMwu.js","_app/immutable/chunks/Bzpmke3e.js","_app/immutable/chunks/CH4jzdM7.js","_app/immutable/chunks/R9irknVh.js","_app/immutable/chunks/BKEgg3QS.js","_app/immutable/chunks/CdEb6xGa.js","_app/immutable/chunks/B9mDuHfx.js","_app/immutable/chunks/CdLVjsEi.js","_app/immutable/chunks/DOQSkmOj.js","_app/immutable/chunks/CFWmFXoL.js","_app/immutable/chunks/Ce0YPcRe.js","_app/immutable/chunks/BgzfGfvw.js","_app/immutable/chunks/2uq7DtVo.js","_app/immutable/chunks/C06NgXp8.js","_app/immutable/chunks/CV71p-Yc.js"];
export const stylesheets = ["_app/immutable/assets/4.B3wuGmy0.css"];
export const fonts = [];
