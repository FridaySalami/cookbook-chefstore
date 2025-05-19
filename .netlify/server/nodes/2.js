import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.DLXDoP0s.js","_app/immutable/chunks/eBVz85oa.js","_app/immutable/chunks/CDaFnU6p.js","_app/immutable/chunks/DsC4fuIf.js","_app/immutable/chunks/ohqfmYRs.js","_app/immutable/chunks/D4n9QnhA.js","_app/immutable/chunks/-BlIj9Yp.js","_app/immutable/chunks/CX-epZ7F.js","_app/immutable/chunks/Czzrws5u.js","_app/immutable/chunks/DofF9-AZ.js","_app/immutable/chunks/CmWkLgxZ.js","_app/immutable/chunks/B8MQcQKG.js","_app/immutable/chunks/CQTxNUE_.js","_app/immutable/chunks/BCkh1oB6.js","_app/immutable/chunks/Dz4O9uYg.js"];
export const stylesheets = [];
export const fonts = [];
