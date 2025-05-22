import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Roasted Veg & Couscous Bake with Feta Crumble",
  "slug": "roasted-veg-couscous-bake-feta",
  "description": "A colourful tray of roasted vegetables folded through couscous, finished with crumbled feta and baked until golden. Easy, wholesome, and good hot or cold.",
  "date": "2025-05-20T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/roasted-veg-couscous-bake-feta.webp",
  "prepTime": 20,
  "cookTime": 30,
  "totalTime": 50,
  "servings": 4,
  "categories": ["dinner", "vegetarian", "bake"],
  "tags": [
    "family-friendly",
    "vegetarian",
    "difficulty-easy"
  ],
  "relatedProducts": [
    {
      "handle": "osprio-giant-cous-cous-1kg",
      "featured": true
    },
    {
      "handle": "manfredi-barbera-unfiltered-italian-extra-virgin-oil",
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
function Roasted_veg_couscous_bake_feta_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This dish feels like something that looks after you. It starts with a tray of vegetables — the sort that soften and sweeten in the oven without needing much attention. While they roast, couscous quietly steams on the side, taking on the flavour of stock and a little lemon zest.</p> <p>It all comes together in one baking dish, tucked under a crumble of feta and a drizzle of oil. The top crisps slightly. The middle stays soft and fragrant. It’s warm and satisfying, but still light enough to leave you feeling good after.</p> <p>You can make it ahead. You can eat it cold. It uses what you have and doesn’t mind substitutions. And it’s the kind of thing that invites you back for seconds without needing an excuse.</p> <h2>Ingredients</h2> <ul><li>1 Red pepper</li> <li>1 Courgette</li> <li>1 Red onion</li> <li>1 Carrot</li> <li>3 Tablespoons Olive oil</li> <li>1 Teaspoon Herbes de Provence</li> <li>1 Teaspoon Maldon Sea Salt</li> <li>Black pepper</li> <li>200g Couscous</li> <li>300ml Vegetable stock</li> <li>Zest of 1 Lemon</li> <li>150g Feta cheese</li> <li>1 Tablespoon Olive oil (for topping)</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Heat the oven to 200°C (fan 180°C).</strong><br> Line a baking tray with parchment and set aside a medium baking dish for later.</p></li> <li><p><strong>Prepare and roast the vegetables.</strong><br> Chop the pepper, courgette, onion, and carrot into bite-sized chunks. Toss them in a bowl with olive oil, herbes de Provence, salt, and a few grinds of black pepper. Spread them evenly on the tray and roast for 25 minutes until softened and golden at the edges.</p></li> <li><p><strong>Steam the couscous.</strong><br> While the vegetables roast, pour the couscous into a heatproof bowl. Bring the vegetable stock to a boil and pour it over the couscous. Stir once, cover with a plate or clean tea towel, and leave for 5 to 10 minutes until absorbed. Fluff with a fork and stir in the lemon zest.</p></li> <li><p><strong>Combine the bake.</strong><br> Tip the roasted vegetables into the couscous and stir gently to mix. Taste and adjust with salt, pepper, or a little more lemon if needed. Spoon the mixture into the prepared baking dish.</p></li> <li><p><strong>Add feta and finish in the oven.</strong><br> Crumble the feta evenly over the top and drizzle with a tablespoon of olive oil. Return to the oven and bake for 10 to 15 minutes until the top is lightly golden and the edges are crisp.</p></li> <li><p><strong>Rest and serve.</strong><br> Let the dish sit for 5 minutes before serving. This helps the flavours settle and the bake hold its shape.</p></li></ol> <h2>Tips</h2> <ul><li>Swap in aubergine, mushrooms, or sweet potato if you have them</li> <li>Stir in a handful of chickpeas or lentils for extra protein</li> <li>Add a pinch of chilli flakes or smoked paprika for a bit more depth</li></ul> <h2>Goes Great With</h2> <ul><li>A cucumber and yoghurt salad with lemon</li> <li>Warm flatbreads or garlic toast</li> <li>A spoonful of red pepper chutney or chilli jam</li></ul> <hr> <blockquote><p>A tray of roasted colour, a soft bed of couscous, and just enough cheese to make it feel like comfort.</p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_36 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Roasted_veg_couscous_bake_feta_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_36 as _,
  metadata as m
};
