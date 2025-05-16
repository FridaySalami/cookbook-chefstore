import { I as sanitize_props, J as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Pan-Fried Sea Bass with Lemon Caper Butter",
  "slug": "sea-bass-lemon-caper-butter",
  "description": "Crispy-skinned sea bass fillets served with a quick lemon caper butter sauce—bright, buttery, and full of bold flavour.",
  "date": "2025-05-13T00:00:00.000Z",
  "featured": false,
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
function Sea_bass_lemon_caper_butter_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This is one of those rare recipes that makes you feel like you’ve just walked into a bistro, but really, you barely left the stove.<br> Crisp sea bass, golden on the skin side and tender underneath. A lemon caper butter sauce that sizzles in the pan and wakes up every bite with sharpness, salt, and warmth.</p> <p>It’s fast, yet full of depth.<br> Simple, but nothing about it feels ordinary.<br> Whether it’s Tuesday night or dinner for someone special, this dish shows up with confidence and a bit of flair. It doesn’t need much—just good ingredients, a hot pan, and a little attention.</p> <h2>Ingredients</h2> <ul><li>2 Sea Bass Fillets (Skin On)</li> <li>Salt</li> <li>Black Pepper</li> <li>1 Tablespoon Olive Oil</li> <li>1 Tablespoon Butter</li></ul> <h3>For the Lemon Caper Butter</h3> <ul><li>30g Butter</li> <li>Juice of Half a Lemon</li> <li>Zest of 1 Lemon</li> <li>1 Tablespoon Capers</li> <li>1 Garlic Clove</li> <li>1 Tablespoon Chopped Fresh Parsley</li></ul> <h2>Instructions</h2> <h3>Cook the Sea Bass</h3> <ol><li>Pat the fillets dry with kitchen paper and season the skin side generously with salt and pepper.</li> <li>Heat the olive oil and 1 tablespoon butter in a non-stick pan over medium-high heat.</li> <li>Place the fillets skin side down into the hot pan. Cook for 3 to 4 minutes without moving them. The skin should crisp up and pull slightly away from the pan when ready.</li> <li>Carefully flip the fillets and cook for 1 to 2 minutes more until just cooked through.</li> <li>Transfer the fillets to a plate, skin side up, and let them rest while you make the sauce.</li></ol> <h3>Make the Sauce</h3> <ol start="6"><li>Lower the heat. In the same pan, add the lemon juice, zest, capers, and garlic. Let it bubble for 30 seconds to release their aromas.</li> <li>Add the butter and stir continuously as it melts and blends into the sauce.</li> <li>Stir in the parsley and taste for seasoning. Spoon the sauce over the fish just before serving.</li></ol> <h2>Tips</h2> <ul><li>Serve with crushed new potatoes, buttered greens, or a crisp salad to balance the richness.</li> <li>If you don’t have capers, try chopped olives or a dash of anchovy paste for a similar savoury kick.</li> <li>For a dairy-free version, use all olive oil and add a little white wine to loosen the sauce.</li></ul> <h2>Goes Great With</h2> <ul><li>Roasted Tenderstem Broccoli or Steamed Asparagus</li> <li>A Glass of Chilled Sauvignon Blanc or Pinot Grigio</li> <li>A night that deserves something easy and elegant on the table</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_32 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sea_bass_lemon_caper_butter_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_32 as _,
  metadata as m
};
