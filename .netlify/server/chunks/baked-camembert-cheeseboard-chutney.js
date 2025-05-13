import { I as sanitize_props, J as spread_props } from "./index3.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Baked Camembert with Bay Tree Cheeseboard Chutney",
  "slug": "baked-camembert-cheeseboard-chutney",
  "description": "Soft, gooey Camembert baked until molten and spoonable—topped with Bay Tree Cheeseboard Chutney and served with crusty bread for sharing.",
  "date": "2025-05-12T00:00:00.000Z",
  "featured": true,
  "image": "/images/recipes/category-name/recipe-name/baked-camembert-cheeseboard-chutney.webp",
  "prepTime": 5,
  "cookTime": 15,
  "totalTime": 20,
  "servings": 4,
  "categories": ["starter", "snack", "sharing"],
  "tags": [
    "bake",
    "british-twist",
    "comfort-food",
    "crowd-pleaser",
    "difficulty-easy",
    "vegetarian-option"
  ],
  "relatedProducts": [
    { "handle": "bay-tree-cheeseboard-chutney-1-2kg" }
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
function Baked_camembert_cheeseboard_chutney_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>It’s gooey. It’s creamy. It’s got sweet tang from the chutney and crunch from the crust.<br> This is the kind of thing that makes people gather round with a slice of bread and not want to leave.</p> <h2>Ingredients</h2> <ul><li>1 whole Camembert (in a wooden box if possible)</li> <li>2–3 tbsp Bay Tree Cheeseboard Chutney</li> <li>A few sprigs fresh thyme (optional)</li> <li>Crusty bread, crackers, or toasted baguette, to serve</li></ul> <h2>Instructions</h2> <ol><li>Preheat oven to 180°C (fan).</li> <li>If using a wooden box, remove any plastic and place Camembert back in the box base. Score the top in a criss-cross pattern.</li> <li>Place on a baking tray and bake for 15–20 minutes until soft in the centre.</li> <li>Remove from oven and top with Bay Tree Cheeseboard Chutney.</li> <li>Scatter with thyme if using. Serve immediately with bread for dipping.</li></ol> <h2>Tips</h2> <ul><li>Want to get fancy? Stud with garlic slivers or drizzle with honey before baking.</li> <li>Try it with Bay Tree Spicy Onion Marmalade for a bolder bite.</li> <li>No Camembert box? Wrap in baking paper and foil to contain the melt.</li></ul> <h2>Goes Great With</h2> <ul><li>A crisp glass of white wine or dry cider</li> <li>Pickles, charcuterie, or roasted grapes</li> <li>Fireside snacks or Sunday starter spreads</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Baked_camembert_cheeseboard_chutney_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_0 as _,
  metadata as m
};
