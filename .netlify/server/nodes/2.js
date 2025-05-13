import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.BJGrpLbx.js","_app/immutable/chunks/C7asDorP.js","_app/immutable/chunks/DqEayQNK.js","_app/immutable/chunks/Dm4k7e1w.js","_app/immutable/chunks/BbABRMcR.js","_app/immutable/chunks/DtL4H0qx.js","_app/immutable/chunks/0lCJ9Yvc.js","_app/immutable/chunks/C5EarfMV.js","_app/immutable/chunks/BuwvQY1T.js","_app/immutable/chunks/DRxHBU8Y.js","_app/immutable/chunks/DyewXzYb.js","_app/immutable/chunks/BYrfDCjE.js"];
export const stylesheets = [];
export const fonts = [];
