import * as universal from '../entries/pages/recipes/_slug_/_page.ts.js';
import * as server from '../entries/pages/recipes/_slug_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/recipes/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/recipes/[slug]/+page.ts";
export { server };
export const server_id = "src/routes/recipes/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.L27W_thY.js","_app/immutable/chunks/DaLGowQu.js","_app/immutable/chunks/Dp1pzeXC.js","_app/immutable/chunks/eBVz85oa.js","_app/immutable/chunks/CDaFnU6p.js","_app/immutable/chunks/DsC4fuIf.js","_app/immutable/chunks/ohqfmYRs.js","_app/immutable/chunks/D4n9QnhA.js","_app/immutable/chunks/-BlIj9Yp.js","_app/immutable/chunks/CX-epZ7F.js","_app/immutable/chunks/Czzrws5u.js","_app/immutable/chunks/DofF9-AZ.js","_app/immutable/chunks/CmWkLgxZ.js","_app/immutable/chunks/Dz4O9uYg.js","_app/immutable/chunks/BCkh1oB6.js","_app/immutable/chunks/B8MQcQKG.js","_app/immutable/chunks/s08KvTlA.js","_app/immutable/chunks/qrLeVCHm.js","_app/immutable/chunks/DhiSqEWR.js","_app/immutable/chunks/CPR5Rwgw.js","_app/immutable/chunks/CV71p-Yc.js"];
export const stylesheets = ["_app/immutable/assets/5.TG1l-nGk.css"];
export const fonts = [];
