import * as universal from '../entries/pages/recipes/_slug_/_page.ts.js';
import * as server from '../entries/pages/recipes/_slug_/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/recipes/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/recipes/[slug]/+page.ts";
export { server };
export const server_id = "src/routes/recipes/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.CLiwIO7F.js","_app/immutable/chunks/LFvvH551.js","_app/immutable/chunks/BS3VPGu7.js","_app/immutable/chunks/0gok4b8t.js","_app/immutable/chunks/lVuwUMS0.js","_app/immutable/chunks/D5I3jwuB.js","_app/immutable/chunks/Bq_SOUKs.js","_app/immutable/chunks/CDj8gESl.js","_app/immutable/chunks/D9bD1tqV.js","_app/immutable/chunks/ejHIXeQ7.js","_app/immutable/chunks/C-J17NlM.js","_app/immutable/chunks/8_CH7A0u.js","_app/immutable/chunks/B2lPZlHj.js","_app/immutable/chunks/CTnDxuD5.js","_app/immutable/chunks/CtZX8aRm.js","_app/immutable/chunks/D_Lgm7m4.js","_app/immutable/chunks/DN8I1r33.js","_app/immutable/chunks/CV71p-Yc.js"];
export const stylesheets = ["_app/immutable/assets/4.TG1l-nGk.css"];
export const fonts = [];
