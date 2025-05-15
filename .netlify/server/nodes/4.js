import * as universal from '../entries/pages/recipes/_slug_/_page.ts.js';
import * as server from '../entries/pages/recipes/_slug_/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/recipes/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/recipes/[slug]/+page.ts";
export { server };
export const server_id = "src/routes/recipes/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.DD87Yste.js","_app/immutable/chunks/B_4Rfc4A.js","_app/immutable/chunks/DodxzdDd.js","_app/immutable/chunks/CeGAe43q.js","_app/immutable/chunks/rXh7rP2_.js","_app/immutable/chunks/mW9Xvd0U.js","_app/immutable/chunks/DjPAE2bA.js","_app/immutable/chunks/2eQvsz4C.js","_app/immutable/chunks/BSpdhOx-.js","_app/immutable/chunks/B1N_D3ZJ.js","_app/immutable/chunks/DZ9IFRMn.js","_app/immutable/chunks/buk8Aog8.js","_app/immutable/chunks/nJNMrujL.js","_app/immutable/chunks/Cxz2lbe-.js","_app/immutable/chunks/DST6Q9N6.js","_app/immutable/chunks/CeNLNt7x.js","_app/immutable/chunks/BbHcurRa.js","_app/immutable/chunks/CY89O86o.js","_app/immutable/chunks/CV71p-Yc.js"];
export const stylesheets = ["_app/immutable/assets/4.TG1l-nGk.css"];
export const fonts = [];
