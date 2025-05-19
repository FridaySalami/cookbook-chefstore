import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.DFMFtBzN.js","_app/immutable/chunks/HM0JOz4S.js","_app/immutable/chunks/0gok4b8t.js","_app/immutable/chunks/BW6RMtbH.js","_app/immutable/chunks/Bq_SOUKs.js","_app/immutable/chunks/Bx3z9SYf.js","_app/immutable/chunks/D9bD1tqV.js","_app/immutable/chunks/ejHIXeQ7.js","_app/immutable/chunks/C-J17NlM.js","_app/immutable/chunks/B2lPZlHj.js","_app/immutable/chunks/CX6dTBbt.js","_app/immutable/chunks/CtZX8aRm.js","_app/immutable/chunks/CVZ259rW.js"];
export const stylesheets = [];
export const fonts = [];
