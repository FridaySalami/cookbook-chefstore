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
		client: {start:"_app/immutable/entry/start.BkZXpqf_.js",app:"_app/immutable/entry/app.B1gp-M04.js",imports:["_app/immutable/entry/start.BkZXpqf_.js","_app/immutable/chunks/COUSMz05.js","_app/immutable/chunks/D8VMeV2H.js","_app/immutable/chunks/CcLb7TRd.js","_app/immutable/entry/app.B1gp-M04.js","_app/immutable/chunks/uRAaiTHg.js","_app/immutable/chunks/D8VMeV2H.js","_app/immutable/chunks/BscduWRZ.js","_app/immutable/chunks/caGatdLF.js","_app/immutable/chunks/yB3EITM6.js","_app/immutable/chunks/Cxw7w9jF.js","_app/immutable/chunks/CcLb7TRd.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
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
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/shop",
				pattern: /^\/shop\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
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
		prerendered_routes: new Set(["/recipes/coconut-milk-rice-pudding","/recipes/coconut-milk-rice-pudding/__data.json","/recipes/crispy-panko-chicken-bites","/recipes/crispy-panko-chicken-bites/__data.json","/recipes/fluffy-buttermilk-pancakes","/recipes/fluffy-buttermilk-pancakes/__data.json","/recipes/miso-glazed-roasted-vegetables","/recipes/miso-glazed-roasted-vegetables/__data.json","/recipes/poppadom-snack-platter","/recipes/poppadom-snack-platter/__data.json","/recipes/salted-caramel-chocolate-tart","/recipes/salted-caramel-chocolate-tart/__data.json","/recipes/silky-milk-chocolate-mousse","/recipes/silky-milk-chocolate-mousse/__data.json","/recipes/thai-green-curry","/recipes/thai-green-curry/__data.json"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
