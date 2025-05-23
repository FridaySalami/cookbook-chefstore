

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.QJggMJmd.js","_app/immutable/chunks/9aaorIqW.js","_app/immutable/chunks/4vaMFqZK.js","_app/immutable/chunks/DiI1qRr-.js"];
export const stylesheets = [];
export const fonts = [];
