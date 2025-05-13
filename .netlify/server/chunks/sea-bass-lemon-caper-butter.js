import { I as sanitize_props, J as spread_props } from "./index3.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Pan-Fried Sea Bass with Lemon Caper Butter",
  "slug": "sea-bass-lemon-caper-butter",
  "description": "Crispy-skinned sea bass fillets served with a quick lemon caper butter sauce—bright, buttery, and full of bold flavour.",
  "date": "2025-05-13T00:00:00.000Z",
  "image": "/images/recipes/category-name/recipe-name/sea-bass-lemon-caper-butter.webp",
  "prepTime": 10,
  "cookTime": 10,
  "totalTime": 20,
  "servings": 2,
  "categories": ["dinner", "seafood"],
  "tags": [
    "comfort-food",
    "difficulty-easy",
    "crowd-pleaser"
  ],
  "relatedProducts": [
    {
      "handle": "lefktro-capote-capers-9-1",
      "featured": true
    },
    { "handle": "lazy-lemon-juice-1ltr" }
  ]
};
const {
  title,
  slug,
  description,
  date,
  image,
  prepTime,
  cookTime,
  totalTime,
  servings,
  categories,
  tags,
  relatedProducts
} = metadata;
function Sea_bass_lemon_caper_butter_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>It’s the kind of dish that feels fancy but cooks in one pan in under 15.<br> Crispy fish, buttery sauce, a lemony caper pop on every bite—bright enough for summer, rich enough for any night.</p> <h2>Ingredients</h2> <ul><li>2 sea bass fillets, skin on</li> <li>Salt &amp; pepper</li> <li>1 tbsp olive oil</li> <li>1 tbsp butter</li></ul> <h3>For the Lemon Caper Butter</h3> <ul><li>30g butter</li> <li>Juice of ½ lemon</li> <li>Zest of 1 lemon</li> <li>1 tbsp Lefktro Capote Capers, rinsed and chopped</li> <li>1 small garlic clove, finely grated</li> <li>1 tbsp fresh parsley, chopped</li></ul> <h2>Instructions</h2> <h3>1. Cook the Sea Bass</h3> <ol><li>Pat fillets dry and season the skin side with salt and pepper.</li> <li>Heat olive oil and 1 tbsp butter in a non-stick pan over medium-high heat.</li> <li>Place fish skin-side down and cook 3–4 minutes without moving.</li> <li>Flip and cook another 1–2 minutes until just cooked through.</li> <li>Remove and rest, skin-side up.</li></ol> <h3>2. Make the Sauce</h3> <ol><li>In the same pan, reduce heat to low.</li> <li>Add lemon juice, zest, garlic, and capers. Let it bubble gently.</li> <li>Whisk in butter until melted and emulsified.</li> <li>Stir in parsley and spoon over the fish to serve.</li></ol> <h2>Tips</h2> <ul><li>Goes great with crushed potatoes, wilted spinach, or seasonal greens.</li> <li>Make it dairy-free by using olive oil only—still sings.</li> <li>Capers too bold? Cut with a little white wine in the sauce.</li></ul> <h2>Goes Great With</h2> <ul><li>Roasted tenderstem or grilled courgettes</li> <li>A glass of cold white wine</li> <li>A night in that tastes like going out</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sea_bass_lemon_caper_butter_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_19 as _,
  metadata as m
};
