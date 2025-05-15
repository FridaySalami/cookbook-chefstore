import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.DRPcgTQ9.js","_app/immutable/chunks/lVuwUMS0.js","_app/immutable/chunks/0gok4b8t.js","_app/immutable/chunks/D5I3jwuB.js","_app/immutable/chunks/Bq_SOUKs.js","_app/immutable/chunks/CDj8gESl.js","_app/immutable/chunks/D9bD1tqV.js","_app/immutable/chunks/ejHIXeQ7.js","_app/immutable/chunks/C-J17NlM.js","_app/immutable/chunks/B2lPZlHj.js","_app/immutable/chunks/CmRkWwDd.js","_app/immutable/chunks/CtZX8aRm.js","_app/immutable/chunks/DpQr8thX.js"];
export const stylesheets = [];
export const fonts = [];
