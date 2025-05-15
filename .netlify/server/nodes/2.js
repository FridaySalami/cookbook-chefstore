import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.BvbWFBy1.js","_app/immutable/chunks/rXh7rP2_.js","_app/immutable/chunks/CeGAe43q.js","_app/immutable/chunks/mW9Xvd0U.js","_app/immutable/chunks/DjPAE2bA.js","_app/immutable/chunks/2eQvsz4C.js","_app/immutable/chunks/BSpdhOx-.js","_app/immutable/chunks/B1N_D3ZJ.js","_app/immutable/chunks/DZ9IFRMn.js","_app/immutable/chunks/Cxz2lbe-.js","_app/immutable/chunks/Bpdlwn84.js","_app/immutable/chunks/CeNLNt7x.js"];
export const stylesheets = [];
export const fonts = [];
