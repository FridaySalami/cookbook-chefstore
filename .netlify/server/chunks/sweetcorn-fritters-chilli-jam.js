import { I as sanitize_props, J as spread_props } from "./index3.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Crispy Sweetcorn Fritters with Chilli Jam",
  "slug": "sweetcorn-fritters-chilli-jam",
  "description": "Light, crispy sweetcorn fritters pan-fried to golden perfection and served with a dollop of Bay Tree Sweet Chilli Jam for dipping.",
  "date": "2025-05-13T00:00:00.000Z",
  "featured": true,
  "image": "/images/recipes/category-name/recipe-name/sweetcorn-fritters-chilli-jam.webp",
  "prepTime": 10,
  "cookTime": 15,
  "totalTime": 25,
  "servings": 4,
  "categories": ["snack", "vegetarian"],
  "tags": [
    "difficulty-easy",
    "freezer-friendly",
    "vegetarian-option",
    "crowd-pleaser"
  ],
  "relatedProducts": [
    {
      "handle": "ballerina-sweetcorn-340g-tin",
      "featured": true
    },
    {
      "handle": "bay-tree-sweet-chilli-jam-1-3kg",
      "featured": true
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
function Sweetcorn_fritters_chilli_jam_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>These fritters hit the sweet spot between light and indulgent.<br> Crispy outside, soft inside, and packed with corn that pops as you bite in—served with a slick of sweet chilli jam for balance.</p> <h2>Ingredients</h2> <ul><li>300g Ballerina Tinned Sweetcorn (drained)</li> <li>2 spring onions, finely sliced</li> <li>1 egg</li> <li>75g plain flour</li> <li>¼ tsp baking powder</li> <li>Salt &amp; pepper to taste</li> <li>Handful of fresh coriander or parsley (optional)</li> <li>Oil for frying</li> <li>Bay Tree Sweet Chilli Jam, to serve</li></ul> <h2>Instructions</h2> <ol><li>In a large bowl, mix sweetcorn, spring onions, egg, flour, baking powder, herbs (if using), salt, and pepper into a thick batter.</li> <li>Heat a little oil in a frying pan over medium heat.</li> <li>Drop spoonfuls of batter into the pan and flatten slightly.</li> <li>Fry for 2–3 minutes each side until golden and crisp.</li> <li>Drain on kitchen paper and serve warm with Bay Tree Sweet Chilli Jam on the side.</li></ol> <h2>Tips</h2> <ul><li>Add crumbled feta or cheddar for extra richness.</li> <li>Want spice? Stir a little chilli or smoked paprika into the batter.</li> <li>Freeze cooked fritters and reheat in the oven for a fast snack.</li></ul> <h2>Goes Great With</h2> <ul><li>A fresh herb salad or slaw</li> <li>Poached eggs or avocado on top</li> <li>Lazy lunches and late-night fridge raids</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sweetcorn_fritters_chilli_jam_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_27 as _,
  metadata as m
};
