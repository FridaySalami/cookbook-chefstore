import { I as sanitize_props, J as spread_props } from "./index3.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Goat’s Cheese & Caramelised Onion Vol-au-Vents",
  "slug": "goats-cheese-onion-vol-au-vents",
  "description": "Buttery puff pastry cases filled with sweet caramelised onions, creamy goat’s cheese, and a sprinkle of thyme. A perfect starter or elegant party bite.",
  "date": "2025-05-12T00:00:00.000Z",
  "featured": true,
  "image": "/images/recipes/category-name/recipe-name/goats-cheese-onion-vol-au-vents.webp",
  "prepTime": 10,
  "cookTime": 15,
  "totalTime": 25,
  "servings": 6,
  "categories": ["starter", "snack", "party"],
  "tags": [
    "vegetarian-option",
    "difficulty-easy",
    "crowd-pleaser"
  ],
  "relatedProducts": [
    {
      "handle": "pidy-medium-vol-au-vents-72-x-7-8cm",
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
function Goats_cheese_onion_vol_au_vents_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>Ready in minutes but tastes like you spent hours.<br> The crisp pastry, sweet onions, creamy cheese, and hint of thyme? It’s like every pub starter you’ve loved—only quicker, neater, and easier to scale up.</p> <h2>Ingredients</h2> <ul><li>6 Pidy Medium Vol Au Vents</li> <li>1 medium red onion, finely sliced</li> <li>1 tbsp olive oil or butter</li> <li>1 tsp brown sugar</li> <li>1 tsp balsamic vinegar</li> <li>100g goat’s cheese</li> <li>Fresh thyme leaves or a pinch of dried thyme</li> <li>Salt &amp; pepper to taste</li></ul> <h2>Instructions</h2> <ol><li>Preheat oven to 180°C (fan).</li> <li>Heat oil in a small pan. Cook onion gently with a pinch of salt until soft (about 8–10 mins).</li> <li>Add sugar and balsamic vinegar. Stir and cook for 2–3 minutes until caramelised.</li> <li>Spoon a little onion mixture into each vol-au-vent case.</li> <li>Crumble goat’s cheese over the top and sprinkle with thyme.</li> <li>Place on a baking tray and warm in the oven for 8–10 minutes, or until cheese is soft and tops are golden.</li> <li>Serve warm or at room temperature.</li></ol> <h2>Tips</h2> <ul><li>Add a pinch of chilli flakes for a subtle kick.</li> <li>Swap goat’s cheese for brie or blue cheese if you’re feelin’ bold.</li> <li>Make ahead: prepare and store unbaked, then bake just before serving.</li></ul> <h2>Goes Great With</h2> <ul><li>A rocket salad and balsamic drizzle</li> <li>Sparkling wine or something dry and white</li> <li>Parties where people ask for the recipe</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Goats_cheese_onion_vol_au_vents_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_12 as _,
  metadata as m
};
