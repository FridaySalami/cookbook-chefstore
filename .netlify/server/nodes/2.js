import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.D8xiRWqt.js","_app/immutable/chunks/CI4rja_b.js","_app/immutable/chunks/4vaMFqZK.js","_app/immutable/chunks/9aaorIqW.js","_app/immutable/chunks/BOLYCJ8V.js","_app/immutable/chunks/CW4MaTrp.js","_app/immutable/chunks/DwF_yFBY.js","_app/immutable/chunks/C-6X5dRN.js","_app/immutable/chunks/DiI1qRr-.js","_app/immutable/chunks/BHRdR4-B.js","_app/immutable/chunks/DbG1EQkS.js","_app/immutable/chunks/BSKi8heT.js","_app/immutable/chunks/Bc_6D4pl.js","_app/immutable/chunks/BpteuS9X.js","_app/immutable/chunks/C6ijBYwQ.js"];
export const stylesheets = [];
export const fonts = [];
