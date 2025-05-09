import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["default-og-image.png","favicon.png","images/recipes/category-name/recipe-name/coconut-milk-rice-pudding.webp","images/recipes/category-name/recipe-name/crispy-panko-chicken-bites.webp","images/recipes/category-name/recipe-name/default-og-image.png","images/recipes/category-name/recipe-name/fluffy-buttermilk-pancakes.webp","images/recipes/category-name/recipe-name/miso-glazed-roasted-vegetables.webp","images/recipes/category-name/recipe-name/placeholder.webp","images/recipes/category-name/recipe-name/poppadom-snack-platter.webp","images/recipes/category-name/recipe-name/resized/coconut-milk-rice-pudding-1200w.webp","images/recipes/category-name/recipe-name/resized/coconut-milk-rice-pudding-400w.webp","images/recipes/category-name/recipe-name/resized/coconut-milk-rice-pudding-800w.webp","images/recipes/category-name/recipe-name/resized/crispy-panko-chicken-bites-1200w.webp","images/recipes/category-name/recipe-name/resized/crispy-panko-chicken-bites-400w.webp","images/recipes/category-name/recipe-name/resized/crispy-panko-chicken-bites-800w.webp","images/recipes/category-name/recipe-name/resized/default-og-image-1200w.webp","images/recipes/category-name/recipe-name/resized/default-og-image-400w.webp","images/recipes/category-name/recipe-name/resized/default-og-image-800w.webp","images/recipes/category-name/recipe-name/resized/fluffy-buttermilk-pancakes-1200w.webp","images/recipes/category-name/recipe-name/resized/fluffy-buttermilk-pancakes-400w.webp","images/recipes/category-name/recipe-name/resized/fluffy-buttermilk-pancakes-800w.webp","images/recipes/category-name/recipe-name/resized/miso-glazed-roasted-vegetables-1200w.webp","images/recipes/category-name/recipe-name/resized/miso-glazed-roasted-vegetables-400w.webp","images/recipes/category-name/recipe-name/resized/miso-glazed-roasted-vegetables-800w.webp","images/recipes/category-name/recipe-name/resized/poppadom-snack-platter-1200w.webp","images/recipes/category-name/recipe-name/resized/poppadom-snack-platter-400w.webp","images/recipes/category-name/recipe-name/resized/poppadom-snack-platter-800w.webp","images/recipes/category-name/recipe-name/resized/salted-caramel-chocolate-tart-1200w.webp","images/recipes/category-name/recipe-name/resized/salted-caramel-chocolate-tart-400w.webp","images/recipes/category-name/recipe-name/resized/salted-caramel-chocolate-tart-800w.webp","images/recipes/category-name/recipe-name/resized/silky-milk-chocolate-mousse-1200w.webp","images/recipes/category-name/recipe-name/resized/silky-milk-chocolate-mousse-400w.webp","images/recipes/category-name/recipe-name/resized/silky-milk-chocolate-mousse-800w.webp","images/recipes/category-name/recipe-name/resized/thai-green-curry-1200w.webp","images/recipes/category-name/recipe-name/resized/thai-green-curry-400w.webp","images/recipes/category-name/recipe-name/resized/thai-green-curry-800w.webp","images/recipes/category-name/recipe-name/salted-caramel-chocolate-tart.webp","images/recipes/category-name/recipe-name/silky-milk-chocolate-mousse.webp","placeholder.png","placeholder.webp","robots.txt"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.BV7i-IFC.js",app:"_app/immutable/entry/app.IxQOlWRU.js",imports:["_app/immutable/entry/start.BV7i-IFC.js","_app/immutable/chunks/DdhDTWhy.js","_app/immutable/chunks/C7fTvnaU.js","_app/immutable/chunks/CdEb6xGa.js","_app/immutable/chunks/DOQSkmOj.js","_app/immutable/entry/app.IxQOlWRU.js","_app/immutable/chunks/RisGGN0a.js","_app/immutable/chunks/C7fTvnaU.js","_app/immutable/chunks/Bzpmke3e.js","_app/immutable/chunks/CFWmFXoL.js","_app/immutable/chunks/BgzfGfvw.js","_app/immutable/chunks/BKEgg3QS.js","_app/immutable/chunks/CdEb6xGa.js","_app/immutable/chunks/DOQSkmOj.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js'))
		],
		routes: [
			{
				id: "/api/products",
				pattern: /^\/api\/products\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/api/products/_server.ts.js'))
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
