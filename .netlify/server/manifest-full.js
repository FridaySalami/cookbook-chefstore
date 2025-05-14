export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["default-og-image.png","favicon.png","images/recipes/category-name/recipe-name/baked-camembert-cheeseboard-chutney.webp","images/recipes/category-name/recipe-name/buttermilk-chicken-tenders.webp","images/recipes/category-name/recipe-name/cheesy-leek-potato-gratin.webp","images/recipes/category-name/recipe-name/classic-tiramisu-no-eggs.webp","images/recipes/category-name/recipe-name/coconut-milk-rice-pudding.webp","images/recipes/category-name/recipe-name/creamy-chicken-korma.webp","images/recipes/category-name/recipe-name/crispy-chicken-katsu-curry.webp","images/recipes/category-name/recipe-name/crispy-panko-chicken-bites.webp","images/recipes/category-name/recipe-name/crunchy-asian-slaw.webp","images/recipes/category-name/recipe-name/default-og-image.png","images/recipes/category-name/recipe-name/fluffy-buttermilk-pancakes.webp","images/recipes/category-name/recipe-name/fruity-flapjacks-cherries-sultanas.webp","images/recipes/category-name/recipe-name/garlic-herb-tear-and-share-bread.webp","images/recipes/category-name/recipe-name/goats-cheese-onion-vol-au-vents.webp","images/recipes/category-name/recipe-name/kimchi-fried-rice.webp","images/recipes/category-name/recipe-name/lemon-posset-shortbread.webp","images/recipes/category-name/recipe-name/miso-glazed-roasted-vegetables.webp","images/recipes/category-name/recipe-name/one-pan-harissa-chickpeas-eggs.webp","images/recipes/category-name/recipe-name/placeholder.webp","images/recipes/category-name/recipe-name/poppadom-snack-platter.webp","images/recipes/category-name/recipe-name/resized/baked-camembert-cheeseboard-chutney-1200w.webp","images/recipes/category-name/recipe-name/resized/baked-camembert-cheeseboard-chutney-400w.webp","images/recipes/category-name/recipe-name/resized/baked-camembert-cheeseboard-chutney-800w.webp","images/recipes/category-name/recipe-name/resized/buttermilk-chicken-tenders-1200w.webp","images/recipes/category-name/recipe-name/resized/buttermilk-chicken-tenders-400w.webp","images/recipes/category-name/recipe-name/resized/buttermilk-chicken-tenders-800w.webp","images/recipes/category-name/recipe-name/resized/cheesy-leek-potato-gratin-1200w.webp","images/recipes/category-name/recipe-name/resized/cheesy-leek-potato-gratin-400w.webp","images/recipes/category-name/recipe-name/resized/cheesy-leek-potato-gratin-800w.webp","images/recipes/category-name/recipe-name/resized/classic-tiramisu-no-eggs-1200w.webp","images/recipes/category-name/recipe-name/resized/classic-tiramisu-no-eggs-400w.webp","images/recipes/category-name/recipe-name/resized/classic-tiramisu-no-eggs-800w.webp","images/recipes/category-name/recipe-name/resized/coconut-milk-rice-pudding-1200w.webp","images/recipes/category-name/recipe-name/resized/coconut-milk-rice-pudding-400w.webp","images/recipes/category-name/recipe-name/resized/coconut-milk-rice-pudding-800w.webp","images/recipes/category-name/recipe-name/resized/creamy-chicken-korma-1200w.webp","images/recipes/category-name/recipe-name/resized/creamy-chicken-korma-400w.webp","images/recipes/category-name/recipe-name/resized/creamy-chicken-korma-800w.webp","images/recipes/category-name/recipe-name/resized/crispy-chicken-katsu-curry-1200w.webp","images/recipes/category-name/recipe-name/resized/crispy-chicken-katsu-curry-400w.webp","images/recipes/category-name/recipe-name/resized/crispy-chicken-katsu-curry-800w.webp","images/recipes/category-name/recipe-name/resized/crispy-panko-chicken-bites-1200w.webp","images/recipes/category-name/recipe-name/resized/crispy-panko-chicken-bites-400w.webp","images/recipes/category-name/recipe-name/resized/crispy-panko-chicken-bites-800w.webp","images/recipes/category-name/recipe-name/resized/crunchy-asian-slaw-1200w.webp","images/recipes/category-name/recipe-name/resized/crunchy-asian-slaw-400w.webp","images/recipes/category-name/recipe-name/resized/crunchy-asian-slaw-800w.webp","images/recipes/category-name/recipe-name/resized/default-og-image-1200w.webp","images/recipes/category-name/recipe-name/resized/default-og-image-400w.webp","images/recipes/category-name/recipe-name/resized/default-og-image-800w.webp","images/recipes/category-name/recipe-name/resized/fluffy-buttermilk-pancakes-1200w.webp","images/recipes/category-name/recipe-name/resized/fluffy-buttermilk-pancakes-400w.webp","images/recipes/category-name/recipe-name/resized/fluffy-buttermilk-pancakes-800w.webp","images/recipes/category-name/recipe-name/resized/fruity-flapjacks-cherries-sultanas-1200w.webp","images/recipes/category-name/recipe-name/resized/fruity-flapjacks-cherries-sultanas-400w.webp","images/recipes/category-name/recipe-name/resized/fruity-flapjacks-cherries-sultanas-800w.webp","images/recipes/category-name/recipe-name/resized/garlic-herb-tear-and-share-bread-1200w.webp","images/recipes/category-name/recipe-name/resized/garlic-herb-tear-and-share-bread-400w.webp","images/recipes/category-name/recipe-name/resized/garlic-herb-tear-and-share-bread-800w.webp","images/recipes/category-name/recipe-name/resized/goats-cheese-onion-vol-au-vents-1200w.webp","images/recipes/category-name/recipe-name/resized/goats-cheese-onion-vol-au-vents-400w.webp","images/recipes/category-name/recipe-name/resized/goats-cheese-onion-vol-au-vents-800w.webp","images/recipes/category-name/recipe-name/resized/kimchi-fried-rice-1200w.webp","images/recipes/category-name/recipe-name/resized/kimchi-fried-rice-400w.webp","images/recipes/category-name/recipe-name/resized/kimchi-fried-rice-800w.webp","images/recipes/category-name/recipe-name/resized/lemon-posset-shortbread-1200w.webp","images/recipes/category-name/recipe-name/resized/lemon-posset-shortbread-400w.webp","images/recipes/category-name/recipe-name/resized/lemon-posset-shortbread-800w.webp","images/recipes/category-name/recipe-name/resized/miso-glazed-roasted-vegetables-1200w.webp","images/recipes/category-name/recipe-name/resized/miso-glazed-roasted-vegetables-400w.webp","images/recipes/category-name/recipe-name/resized/miso-glazed-roasted-vegetables-800w.webp","images/recipes/category-name/recipe-name/resized/one-pan-harissa-chickpeas-eggs-1200w.webp","images/recipes/category-name/recipe-name/resized/one-pan-harissa-chickpeas-eggs-400w.webp","images/recipes/category-name/recipe-name/resized/one-pan-harissa-chickpeas-eggs-800w.webp","images/recipes/category-name/recipe-name/resized/placeholder-1200w.webp","images/recipes/category-name/recipe-name/resized/placeholder-400w.webp","images/recipes/category-name/recipe-name/resized/placeholder-800w.webp","images/recipes/category-name/recipe-name/resized/poppadom-snack-platter-1200w.webp","images/recipes/category-name/recipe-name/resized/poppadom-snack-platter-400w.webp","images/recipes/category-name/recipe-name/resized/poppadom-snack-platter-800w.webp","images/recipes/category-name/recipe-name/resized/salted-caramel-chocolate-tart-1200w.webp","images/recipes/category-name/recipe-name/resized/salted-caramel-chocolate-tart-400w.webp","images/recipes/category-name/recipe-name/resized/salted-caramel-chocolate-tart-800w.webp","images/recipes/category-name/recipe-name/resized/sea-bass-lemon-caper-butter-1200w.webp","images/recipes/category-name/recipe-name/resized/sea-bass-lemon-caper-butter-400w.webp","images/recipes/category-name/recipe-name/resized/sea-bass-lemon-caper-butter-800w.webp","images/recipes/category-name/recipe-name/resized/silky-milk-chocolate-mousse-1200w.webp","images/recipes/category-name/recipe-name/resized/silky-milk-chocolate-mousse-400w.webp","images/recipes/category-name/recipe-name/resized/silky-milk-chocolate-mousse-800w.webp","images/recipes/category-name/recipe-name/resized/spiced-lamb-mint-sausage-rolls-1200w.webp","images/recipes/category-name/recipe-name/resized/spiced-lamb-mint-sausage-rolls-400w.webp","images/recipes/category-name/recipe-name/resized/spiced-lamb-mint-sausage-rolls-800w.webp","images/recipes/category-name/recipe-name/resized/spicy-chickpea-spinach-stew-1200w.webp","images/recipes/category-name/recipe-name/resized/spicy-chickpea-spinach-stew-400w.webp","images/recipes/category-name/recipe-name/resized/spicy-chickpea-spinach-stew-800w.webp","images/recipes/category-name/recipe-name/resized/spinach-ricotta-cannelloni-1200w.webp","images/recipes/category-name/recipe-name/resized/spinach-ricotta-cannelloni-400w.webp","images/recipes/category-name/recipe-name/resized/spinach-ricotta-cannelloni-800w.webp","images/recipes/category-name/recipe-name/resized/sticky-banana-bread-chocolate-walnuts-1200w.webp","images/recipes/category-name/recipe-name/resized/sticky-banana-bread-chocolate-walnuts-400w.webp","images/recipes/category-name/recipe-name/resized/sticky-banana-bread-chocolate-walnuts-800w.webp","images/recipes/category-name/recipe-name/resized/sticky-soy-braised-pork-ribs-1200w.webp","images/recipes/category-name/recipe-name/resized/sticky-soy-braised-pork-ribs-400w.webp","images/recipes/category-name/recipe-name/resized/sticky-soy-braised-pork-ribs-800w.webp","images/recipes/category-name/recipe-name/resized/sticky-soy-garlic-noodles-1200w.webp","images/recipes/category-name/recipe-name/resized/sticky-soy-garlic-noodles-400w.webp","images/recipes/category-name/recipe-name/resized/sticky-soy-garlic-noodles-800w.webp","images/recipes/category-name/recipe-name/resized/sweetcorn-fritters-chilli-jam-1200w.webp","images/recipes/category-name/recipe-name/resized/sweetcorn-fritters-chilli-jam-400w.webp","images/recipes/category-name/recipe-name/resized/sweetcorn-fritters-chilli-jam-800w.webp","images/recipes/category-name/recipe-name/resized/tagliatelle-bolognese-traditional-1200w.webp","images/recipes/category-name/recipe-name/resized/tagliatelle-bolognese-traditional-400w.webp","images/recipes/category-name/recipe-name/resized/tagliatelle-bolognese-traditional-800w.webp","images/recipes/category-name/recipe-name/resized/thai-green-curry-1200w.webp","images/recipes/category-name/recipe-name/resized/thai-green-curry-400w.webp","images/recipes/category-name/recipe-name/resized/thai-green-curry-800w.webp","images/recipes/category-name/recipe-name/salted-caramel-chocolate-tart.webp","images/recipes/category-name/recipe-name/sea-bass-lemon-caper-butter.webp","images/recipes/category-name/recipe-name/silky-milk-chocolate-mousse.webp","images/recipes/category-name/recipe-name/spiced-lamb-mint-sausage-rolls.webp","images/recipes/category-name/recipe-name/spicy-chickpea-spinach-stew.webp","images/recipes/category-name/recipe-name/spinach-ricotta-cannelloni.webp","images/recipes/category-name/recipe-name/sticky-banana-bread-chocolate-walnuts.webp","images/recipes/category-name/recipe-name/sticky-soy-braised-pork-ribs.webp","images/recipes/category-name/recipe-name/sticky-soy-garlic-noodles.webp","images/recipes/category-name/recipe-name/sweetcorn-fritters-chilli-jam.webp","images/recipes/category-name/recipe-name/tagliatelle-bolognese-traditional.webp","placeholder.png","placeholder.webp","robots.txt"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.DSyGRQbu.js",app:"_app/immutable/entry/app.BryM8tJU.js",imports:["_app/immutable/entry/start.DSyGRQbu.js","_app/immutable/chunks/BKhyKVSO.js","_app/immutable/chunks/CeGAe43q.js","_app/immutable/chunks/B1N_D3ZJ.js","_app/immutable/chunks/nJNMrujL.js","_app/immutable/entry/app.BryM8tJU.js","_app/immutable/chunks/DodxzdDd.js","_app/immutable/chunks/CeGAe43q.js","_app/immutable/chunks/mW9Xvd0U.js","_app/immutable/chunks/Cxz2lbe-.js","_app/immutable/chunks/CeNLNt7x.js","_app/immutable/chunks/BSpdhOx-.js","_app/immutable/chunks/B1N_D3ZJ.js","_app/immutable/chunks/nJNMrujL.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
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
				id: "/recipes/[slug]",
				pattern: /^\/recipes\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/shop",
				pattern: /^\/shop\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
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
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
