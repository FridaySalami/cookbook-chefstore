import { I as sanitize_props, J as spread_props } from "./index3.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Tagliatelle Bolognese (Traditional)",
  "slug": "tagliatelle-bolognese-traditional",
  "description": "A rich, slow-cooked Bolognese made with veal and pork, pancetta, and a delicate sofrito—served with tagliatelle and finished with Parmesan.",
  "date": "2025-05-13T00:00:00.000Z",
  "featured": true,
  "image": "/images/recipes/category-name/recipe-name/tagliatelle-bolognese-traditional.webp",
  "prepTime": 20,
  "cookTime": 60,
  "totalTime": 80,
  "servings": 4,
  "categories": ["dinner", "pasta"],
  "tags": [
    "italian",
    "slow-cooked",
    "comfort-food",
    "difficulty-medium"
  ],
  "relatedProducts": [
    {
      "handle": "oscar-all-natural-chicken-stock-1ltr",
      "featured": true
    },
    { "handle": "ballerina-tomato-paste-800g-tin" },
    {
      "handle": "rummo-premium-italian-no-107-tagliatelle-12-500gm"
    }
  ]
};
const {
  title,
  slug,
  description,
  date,
  featured,
  image,
  prepTime,
  cookTime,
  totalTime,
  servings,
  categories,
  tags,
  relatedProducts
} = metadata;
function Tagliatelle_bolognese_traditional_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This ain’t spaghetti with meat sauce—it’s the real deal.<br> Two types of mince, a slow sofrito, and a low simmer with stock and wine. This one’s all about <strong>patience and depth</strong>. Eat it slow, just like it cooks.</p> <h2>Ingredients</h2> <ul><li>2 tbsp olive oil</li> <li>1 small onion, finely chopped</li> <li>1 carrot, finely chopped</li> <li>1 celery stick, finely chopped</li> <li>75g pancetta, finely diced</li> <li>250g veal mince</li> <li>250g pork mince</li> <li>100ml red wine</li> <li>2 tbsp tomato paste</li> <li>300ml chicken or vegetable stock</li> <li>Salt &amp; pepper to taste</li> <li>300g tagliatelle</li> <li>Grated Parmesan, to serve</li></ul> <h2>Instructions</h2> <ol><li>Heat olive oil in a heavy-bottomed pan. Add onion, carrot, celery, and pancetta. Sauté gently until soft and fragrant.</li> <li>Add veal and pork mince. Break the meat apart and cook until sealed and the moisture has evaporated.</li> <li>Pour in the red wine and cook for a minute or two until it mostly evaporates.</li> <li>Stir in tomato paste and mix with 200–300ml stock to create a loose sauce consistency.</li> <li>Cover the pan with a lid, reduce heat, and simmer gently for 1 hour, stirring occasionally.</li> <li>In the last 10 minutes, cook the tagliatelle in salted water until al dente. Reserve a splash of pasta water.</li> <li>Add cooked pasta to the Bolognese with a little pasta water. Stir well to coat.</li> <li>Serve hot, topped with freshly grated Parmesan.</li></ol> <h2>Tips</h2> <ul><li>Want deeper flavor? Use beef stock and cook the sauce for 2 hours.</li> <li>No veal? Substitute with beef mince.</li> <li>The sauce gets better the next day—leftovers = bonus.</li></ul> <h2>Goes Great With</h2> <ul><li>Garlic &amp; Herb Tear-and-Share Bread</li> <li>A glass of red (or whatever’s open)</li> <li>A slow night and a second helping</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tagliatelle_bolognese_traditional_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_22 as _,
  metadata as m
};
