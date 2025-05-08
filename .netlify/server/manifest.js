export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["default-og-image.png","favicon.png","images/recipes/category-name/recipe-name/coconut-milk-rice-pudding.png","images/recipes/category-name/recipe-name/crispy-panko-chicken-bites.png","images/recipes/category-name/recipe-name/fluffy-buttermilk-pancakes.png","images/recipes/category-name/recipe-name/miso-glazed-roasted-vegetables.png","images/recipes/category-name/recipe-name/poppadom-snack-platter.png","images/recipes/category-name/recipe-name/salted-caramel-chocolate-tart.png","images/recipes/category-name/recipe-name/silky-milk-chocolate-mousse.png","placeholder.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.M6aEvYYB.js",app:"_app/immutable/entry/app.DsWmIukw.js",imports:["_app/immutable/entry/start.M6aEvYYB.js","_app/immutable/chunks/nPfsm73l.js","_app/immutable/chunks/C7fTvnaU.js","_app/immutable/chunks/CdEb6xGa.js","_app/immutable/chunks/DOQSkmOj.js","_app/immutable/entry/app.DsWmIukw.js","_app/immutable/chunks/RisGGN0a.js","_app/immutable/chunks/C7fTvnaU.js","_app/immutable/chunks/Bzpmke3e.js","_app/immutable/chunks/CFWmFXoL.js","_app/immutable/chunks/BgzfGfvw.js","_app/immutable/chunks/BKEgg3QS.js","_app/immutable/chunks/CdEb6xGa.js","_app/immutable/chunks/DOQSkmOj.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/api/products",
				pattern: /^\/api\/products\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/products/_server.ts.js'))
			},
			{
				id: "/recipes",
				pattern: /^\/recipes\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/shop",
				pattern: /^\/shop\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/sitemap.xml/_server.ts.js'))
			}
		],
		prerendered_routes: new Set(["/","/recipes/coconut-milk-rice-pudding","/recipes/coconut-milk-rice-pudding/__data.json","/recipes/crispy-panko-chicken-bites","/recipes/crispy-panko-chicken-bites/__data.json","/recipes/fluffy-buttermilk-pancakes","/recipes/fluffy-buttermilk-pancakes/__data.json","/recipes/miso-glazed-roasted-vegetables","/recipes/miso-glazed-roasted-vegetables/__data.json","/recipes/poppadom-snack-platter","/recipes/poppadom-snack-platter/__data.json","/recipes/salted-caramel-chocolate-tart","/recipes/salted-caramel-chocolate-tart/__data.json","/recipes/silky-milk-chocolate-mousse","/recipes/silky-milk-chocolate-mousse/__data.json","/recipes/thai-green-curry","/recipes/thai-green-curry/__data.json"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
