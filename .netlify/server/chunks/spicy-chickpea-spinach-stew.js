import { I as sanitize_props, J as spread_props } from "./index3.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Spicy Chickpea & Spinach Stew",
  "slug": "spicy-chickpea-spinach-stew",
  "description": "A bold, warming stew packed with chickpeas, tomatoes, and spinach. Spiced with chilli and garlic, finished with herbs or a swirl of coconut cream.",
  "date": "2025-05-12T00:00:00.000Z",
  "featured": true,
  "image": "/images/recipes/category-name/recipe-name/spicy-chickpea-spinach-stew.webp",
  "prepTime": 10,
  "cookTime": 30,
  "totalTime": 40,
  "servings": 4,
  "categories": ["dinner", "vegetarian"],
  "tags": [
    "vegetarian-option",
    "spicy",
    "comfort-food",
    "freezer-friendly",
    "difficulty-easy"
  ],
  "relatedProducts": [
    {
      "handle": "riverdene-tinned-chick-peas-800g",
      "featured": true
    },
    {
      "handle": "essentail-cuisine-vegetable-stock",
      "featured": true
    },
    { "handle": "belazu-retail-rose-harissa-170gm" }
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
function Spicy_chickpea_spinach_stew_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>A no-fuss, all-flavour bowl of plant-based comfort.<br> Chickpeas bring the bulk, tomatoes the base, spinach the green, and chilli that steady heat you feel in your chest after the third bite.<br> It’s healthy-ish, hearty, and hums with spice.</p> <h2>Ingredients</h2> <ul><li>1 tbsp olive oil</li> <li>1 onion, finely chopped</li> <li>2 garlic cloves, minced</li> <li>1 tsp smoked paprika</li> <li>½–1 tsp chilli flakes (to taste)</li> <li>1 tbsp Belazu Rose Harissa (optional but recommended)</li> <li>400g chopped tomatoes (tinned)</li> <li>400–500g Riverdene Tinned Chickpeas, drained</li> <li>300ml Essential Cuisine Vegetable Stock</li> <li>100g spinach (fresh or frozen)</li> <li>Salt &amp; pepper to taste</li> <li>Optional: squeeze of lemon, swirl of coconut cream, or chopped parsley</li></ul> <h2>Instructions</h2> <ol><li>Heat olive oil in a large pan. Add onion and sauté until soft, about 5 minutes.</li> <li>Stir in garlic, paprika, chilli flakes, and harissa. Cook for 1 minute until fragrant.</li> <li>Add tinned tomatoes, chickpeas, and vegetable stock. Stir and bring to a simmer.</li> <li>Simmer gently for 20–25 minutes, stirring occasionally, until thickened.</li> <li>Stir in spinach and cook until wilted (or heated through, if using frozen).</li> <li>Season to taste. Finish with lemon, coconut cream, or herbs if using.</li></ol> <h2>Tips</h2> <ul><li>Add diced sweet potato or butternut squash for extra heartiness.</li> <li>Great over rice, with naan, or spooned into a baked potato.</li> <li>Freezes beautifully—make double, thank yourself later.</li></ul> <h2>Goes Great With</h2> <ul><li>Flatbread or garlic toast</li> <li>A drizzle of yoghurt or tahini</li> <li>Cold evenings and warm bowls</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Spicy_chickpea_spinach_stew_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_18 as _,
  metadata as m
};
