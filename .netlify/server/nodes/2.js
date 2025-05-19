import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.B9xAafjr.js","_app/immutable/chunks/B_KVdMf9.js","_app/immutable/chunks/BNX1CnT-.js","_app/immutable/chunks/Cwbw4VRM.js","_app/immutable/chunks/DjljZn8g.js","_app/immutable/chunks/DheKhdAz.js","_app/immutable/chunks/unnTnTlV.js","_app/immutable/chunks/DBb4VFYs.js","_app/immutable/chunks/N1DSbHQ9.js","_app/immutable/chunks/fV8yg2hr.js","_app/immutable/chunks/RShCK2s9.js","_app/immutable/chunks/C9eEwBZL.js","_app/immutable/chunks/CUWs4inh.js","_app/immutable/chunks/DoMcYyOd.js","_app/immutable/chunks/dJ3aWk1A.js"];
export const stylesheets = [];
export const fonts = [];
