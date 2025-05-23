import * as universal from '../entries/pages/recipes/_slug_/_page.ts.js';
import * as server from '../entries/pages/recipes/_slug_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/recipes/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/recipes/[slug]/+page.ts";
export { server };
export const server_id = "src/routes/recipes/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.G2OHSqMx.js","_app/immutable/chunks/DhyU_hAo.js","_app/immutable/chunks/Dp1pzeXC.js","_app/immutable/chunks/CI4rja_b.js","_app/immutable/chunks/4vaMFqZK.js","_app/immutable/chunks/s5JVa5A-.js","_app/immutable/chunks/Bc_6D4pl.js","_app/immutable/chunks/BpteuS9X.js","_app/immutable/chunks/9aaorIqW.js","_app/immutable/chunks/DiI1qRr-.js","_app/immutable/chunks/BOLYCJ8V.js","_app/immutable/chunks/CW4MaTrp.js","_app/immutable/chunks/DwF_yFBY.js","_app/immutable/chunks/D6XSVEYi.js","_app/immutable/chunks/C-6X5dRN.js","_app/immutable/chunks/DbG1EQkS.js","_app/immutable/chunks/BSKi8heT.js","_app/immutable/chunks/D5v1dkYg.js","_app/immutable/chunks/DI7JOHYy.js","_app/immutable/chunks/BiVx0ahq.js","_app/immutable/chunks/CV71p-Yc.js"];
export const stylesheets = ["_app/immutable/assets/5.cIRxjqUL.css"];
export const fonts = [];
