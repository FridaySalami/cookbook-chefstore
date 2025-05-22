import { D as sanitize_props, E as spread_props } from "./index2.js";
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
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>It’s cosy. It’s creamy. It’s got layers of soft, savoury leeks tucked between thin potato slices.<br> The top turns golden with bubbling cheese and crunchy panko, and the sage brings just enough warmth to make you want seconds.<br> Serve it as a side or don’t. It holds its own as a main, just fine.</p> <h2>Ingredients</h2> <ul><li>500g Potatoes</li> <li>2 Leeks</li> <li>1 tbsp olive oil or butter</li> <li>100ml Essential Cuisine Vegetable Stock</li> <li>200ml Kerrymaid UHT Double Cream</li> <li>100g grated cheese</li> <li>2 tbsp Centaur Panko Breadcrumbs</li> <li>½ tsp Chef William Dried Sage</li> <li>Salt</li> <li>Black pepper</li> <li>1 garlic clove (optional)</li> <li>Pinch of nutmeg (optional)</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Preheat the oven to 180°C (fan).</strong><br> Grease a medium baking dish so nothing sticks when it bubbles up.</p></li> <li><p><strong>Cook the leeks.</strong><br> Heat the oil or butter in a pan over medium heat. Add the sliced leeks and cook gently for 6–8 minutes until soft. If using garlic, add it in the last minute for mellow flavour.</p></li> <li><p><strong>Mix the cream base.</strong><br> In a jug, combine the cream, vegetable stock, dried sage, salt, pepper, and a pinch of nutmeg. Stir until smooth.</p></li> <li><p><strong>Layer it up.</strong><br> Arrange half the sliced potatoes in the baking dish. Top with half the cooked leeks and a sprinkle of cheese. Repeat with remaining potatoes, leeks, and cheese.</p></li> <li><p><strong>Pour and top.</strong><br> Pour the cream mixture evenly over the layers. Scatter panko breadcrumbs over the top. Add a final dusting of cheese if you like a crustier finish.</p></li> <li><p><strong>Bake covered.</strong><br> Cover with foil and bake for 30 minutes. This steams the potatoes and infuses them with flavour.</p></li> <li><p><strong>Bake uncovered.</strong><br> Remove the foil and return to the oven for 15 minutes until the top is golden, crisp, and bubbling at the edges.</p></li> <li><p><strong>Rest before serving.</strong><br> Let the gratin sit for 5 minutes. This helps it set and makes it easier to serve clean portions.</p></li></ol> <h2>Tips</h2> <ul><li>Add chopped cooked bacon or torn ham between layers for a smoky twist.</li> <li>For a plant-based version, swap cream and cheese for dairy-free alternatives and use olive oil.</li> <li>Stir a teaspoon of mustard into the cream mixture for an extra depth of flavour.</li> <li>If slicing potatoes ahead, keep them in cold water to stop browning—just pat dry before layering.</li></ul> <h2>Goes Great With</h2> <ul><li>Roast chicken or sausages</li> <li>A bitter green salad with vinaigrette</li> <li>A second helping and your softest socks</li></ul> <hr> <blockquote><p><strong>Golden on top, soft in the middle—like all the best things in life.</strong></p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cheesy_leek_potato_gratin_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_5 as _,
  metadata as m
};
