import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.CRvE8U7r.js","_app/immutable/chunks/Bw3dGci5.js","_app/immutable/chunks/Dh5oHfRH.js","_app/immutable/chunks/vW00Cco6.js","_app/immutable/chunks/BTvQdhsi.js","_app/immutable/chunks/ieKHc6N8.js","_app/immutable/chunks/BbsuJMov.js","_app/immutable/chunks/e5L6D3mJ.js","_app/immutable/chunks/349ZHIUq.js","_app/immutable/chunks/DNTpGgBc.js","_app/immutable/chunks/CgzZwM0t.js","_app/immutable/chunks/BUKNPLMJ.js"];
export const stylesheets = [];
export const fonts = [];
