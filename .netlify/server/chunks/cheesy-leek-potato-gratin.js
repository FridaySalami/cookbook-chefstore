import { I as sanitize_props, J as spread_props } from "./index3.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Cheesy Leek & Potato Gratin",
  "slug": "cheesy-leek-potato-gratin",
  "description": "A creamy baked gratin of soft potatoes and sweet leeks, finished with golden panko breadcrumbs and bubbling cheese—perfect as a side or a vegetarian main.",
  "date": "2025-05-12T00:00:00.000Z",
  "featured": true,
  "image": "/images/recipes/category-name/recipe-name/cheesy-leek-potato-gratin.webp",
  "prepTime": 20,
  "cookTime": 45,
  "totalTime": 65,
  "servings": "4–6",
  "categories": ["sides", "vegetarian"],
  "tags": [
    "comfort-food",
    "vegetarian",
    "difficulty-easy"
  ],
  "relatedProducts": [
    {
      "handle": "kerrymaid-uht-double-blue-cream-1ltr",
      "featured": true
    },
    {
      "handle": "centaur-panko-breadcrumbs-1kg",
      "featured": true
    },
    { "handle": "chef-william-dried-sage-140g" },
    { "handle": "essentail-cuisine-vegetable-stock" }
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
function Cheesy_leek_potato_gratin_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>Soft, buttery leeks. Tender, thin-sliced potatoes.<br> And that moment when the cream bubbles up, the cheese melts down, and the top goes golden and crisp?<br> Yeah. This one’s a keeper.</p> <h2>Ingredients</h2> <ul><li>500g potatoes (waxy or all-purpose), peeled and thinly sliced</li> <li>2 leeks, trimmed and finely sliced</li> <li>1 tbsp olive oil or butter</li> <li>100ml Essential Cuisine Vegetable Stock</li> <li>200ml Kerrymaid UHT Double Cream</li> <li>100g grated mature cheddar (or any good melting cheese)</li> <li>2 tbsp Centaur Panko Breadcrumbs</li> <li>½ tsp Chef William Dried Sage</li> <li>Salt &amp; black pepper to taste</li></ul> <h2>Instructions</h2> <ol><li>Preheat oven to 180°C (fan).</li> <li>Heat oil or butter in a pan. Add sliced leeks and cook gently for 6–8 minutes until soft.</li> <li>In a jug, mix cream, stock, sage, salt, and pepper.</li> <li>Layer half the sliced potatoes in a greased baking dish. Top with half the leeks and a handful of cheese.</li> <li>Repeat with remaining potatoes, leeks, and cheese. Pour over the cream mixture.</li> <li>Sprinkle breadcrumbs over the top and an extra dusting of cheese if you like.</li> <li>Cover with foil and bake for 30 minutes. Remove foil and bake uncovered for 15 minutes until golden and bubbling.</li> <li>Let rest 5 minutes before serving.</li></ol> <h2>Tips</h2> <ul><li>Add cooked bacon or ham between layers for a meaty twist.</li> <li>Swap cream for plant-based if needed (Flora or Macphie both work).</li> <li>Add a spoonful of mustard to the cream for extra depth.</li></ul> <h2>Goes Great With</h2> <ul><li>Roast chicken or sausages</li> <li>A big green salad</li> <li>Rainy evenings and a second scoop</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cheesy_leek_potato_gratin_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_2 as _,
  metadata as m
};
