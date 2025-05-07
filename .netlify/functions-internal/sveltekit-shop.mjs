import { init } from '../serverless.js';

export const handler = init((() => {
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
		client: {start:"_app/immutable/entry/start.DxkU7ka2.js",app:"_app/immutable/entry/app.CzMe9ewz.js",imports:["_app/immutable/entry/start.DxkU7ka2.js","_app/immutable/chunks/DzKemrxB.js","_app/immutable/chunks/Dh5oHfRH.js","_app/immutable/chunks/e5L6D3mJ.js","_app/immutable/chunks/BT3t4PSN.js","_app/immutable/entry/app.CzMe9ewz.js","_app/immutable/chunks/B0QAeMhy.js","_app/immutable/chunks/Dh5oHfRH.js","_app/immutable/chunks/vW00Cco6.js","_app/immutable/chunks/DNTpGgBc.js","_app/immutable/chunks/BUKNPLMJ.js","_app/immutable/chunks/BbsuJMov.js","_app/immutable/chunks/e5L6D3mJ.js","_app/immutable/chunks/BT3t4PSN.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/5.js'))
		],
		routes: [
			{
				id: "/shop",
				pattern: /^\/shop\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/","/recipes/coconut-milk-rice-pudding","/recipes/coconut-milk-rice-pudding/__data.json","/recipes/crispy-panko-chicken-bites","/recipes/crispy-panko-chicken-bites/__data.json","/recipes/fluffy-buttermilk-pancakes","/recipes/fluffy-buttermilk-pancakes/__data.json","/recipes/miso-glazed-roasted-vegetables","/recipes/miso-glazed-roasted-vegetables/__data.json","/recipes/poppadom-snack-platter","/recipes/poppadom-snack-platter/__data.json","/recipes/salted-caramel-chocolate-tart","/recipes/salted-caramel-chocolate-tart/__data.json","/recipes/silky-milk-chocolate-mousse","/recipes/silky-milk-chocolate-mousse/__data.json","/recipes/thai-green-curry","/recipes/thai-green-curry/__data.json"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
