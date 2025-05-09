import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.Da9sDoP3.js","_app/immutable/chunks/BkeFLxFa.js","_app/immutable/chunks/C7fTvnaU.js","_app/immutable/chunks/Bzpmke3e.js","_app/immutable/chunks/CH4jzdM7.js","_app/immutable/chunks/R9irknVh.js","_app/immutable/chunks/BKEgg3QS.js","_app/immutable/chunks/CdEb6xGa.js","_app/immutable/chunks/B9mDuHfx.js","_app/immutable/chunks/CFWmFXoL.js","_app/immutable/chunks/BHmZr75h.js","_app/immutable/chunks/BgzfGfvw.js"];
export const stylesheets = [];
export const fonts = [];
