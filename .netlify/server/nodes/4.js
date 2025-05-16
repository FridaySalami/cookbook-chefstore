import * as universal from '../entries/pages/recipes/_slug_/_page.ts.js';
import * as server from '../entries/pages/recipes/_slug_/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/recipes/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/recipes/[slug]/+page.ts";
export { server };
export const server_id = "src/routes/recipes/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.CK9iSvdZ.js","_app/immutable/chunks/zgZ6Ox4Q.js","_app/immutable/chunks/BS3VPGu7.js","_app/immutable/chunks/0gok4b8t.js","_app/immutable/chunks/HM0JOz4S.js","_app/immutable/chunks/BW6RMtbH.js","_app/immutable/chunks/Bq_SOUKs.js","_app/immutable/chunks/Bx3z9SYf.js","_app/immutable/chunks/D9bD1tqV.js","_app/immutable/chunks/ejHIXeQ7.js","_app/immutable/chunks/C-J17NlM.js","_app/immutable/chunks/3KERwzV8.js","_app/immutable/chunks/B2lPZlHj.js","_app/immutable/chunks/Coo6MJq6.js","_app/immutable/chunks/CtZX8aRm.js","_app/immutable/chunks/WMNvhlWH.js","_app/immutable/chunks/DN8I1r33.js","_app/immutable/chunks/CV71p-Yc.js"];
export const stylesheets = ["_app/immutable/assets/4.TG1l-nGk.css"];
export const fonts = [];
