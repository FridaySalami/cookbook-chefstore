import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Lemon & Herb Chicken Traybake with Potatoes and Green Beans",
  "slug": "lemon-herb-chicken-traybake",
  "description": "A one-tray dinner of golden chicken, crispy potatoes, and tender green beans roasted with lemon, garlic, and herbs. Bright, balanced, and deeply satisfying.",
  "date": "2025-05-20T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/lemon-herb-chicken-traybake.webp",
  "prepTime": 10,
  "cookTime": 40,
  "totalTime": 50,
  "servings": 4,
  "categories": ["dinner", "traybake", "one-pan"],
  "tags": [
    "chicken",
    "difficulty-easy",
    "family-friendly"
  ],
  "relatedProducts": [
    {
      "handle": "colavita-100-spanish-extra-virgin-olive-oil-750ml",
      "featured": true
    },
    {
      "handle": "retail-maille-dijon-mustard-210gm",
      "featured": true
    },
    { "handle": "maldon-sea-salt", "featured": true }
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
function Lemon_herb_chicken_traybake_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This traybake is proof that sometimes the simplest dinners are the ones that linger longest in memory. Crispy-edged potatoes that catch the oven’s warmth just right. Chicken that roasts until the skin turns golden and the juices run clear. Green beans tucked in toward the end, still vibrant, still with bite.</p> <p>The whole tray sings with lemon and garlic. It’s zesty but grounded, familiar but never dull. Everything roasts together in one place, picking up each other’s flavours, making you wonder why you ever cooked them separately.</p> <p>It’s bright enough for spring, hearty enough for autumn, and kind enough to your washing up pile. The kind of dinner you come back to when life is full and you need dinner to be simple, generous, and good.</p> <h2>Ingredients</h2> <ul><li>6 Bone-in, Skin-on Chicken Thighs</li> <li>500g Baby Potatoes</li> <li>200g Green Beans</li> <li>2 Tablespoons Olive Oil</li> <li>Zest and Juice of 1 Lemon</li> <li>1 Tablespoon Dijon Mustard</li> <li>3 Garlic Cloves</li> <li>1 Teaspoon Bonferme Fine Sea Salt</li> <li>Black Pepper</li> <li>1 Teaspoon Dried Oregano or Thyme</li> <li>Chopped Parsley (optional)</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Preheat the oven.</strong><br> Heat your oven to 200°C (fan 180°C). Line a large roasting tray with foil or parchment for easier cleanup.</p></li> <li><p><strong>Mix the marinade.</strong><br> In a bowl, stir together the olive oil, lemon zest and juice, Dijon mustard, minced garlic, dried herbs, salt, and a few grinds of black pepper.</p></li> <li><p><strong>Start the potatoes.</strong><br> Halve the baby potatoes and scatter them on the tray. Drizzle over a little of the marinade and toss to coat. Roast for 10 minutes while you prepare the rest.</p></li> <li><p><strong>Add the chicken.</strong><br> Pat the chicken thighs dry with kitchen paper. Nestle them in among the potatoes, skin-side up. Spoon some of the marinade over the top of each thigh. Roast for 25 minutes.</p></li> <li><p><strong>Add the beans.</strong><br> Add the green beans to the tray. Drizzle with the last of the marinade and toss them lightly with the potatoes. Return to the oven for 10 to 15 minutes until the beans are tender and the chicken is crisp and golden.</p></li> <li><p><strong>Rest and finish.</strong><br> Let the tray sit for 5 minutes before serving. Scatter over chopped parsley if using and serve everything straight from the tray.</p></li></ol> <h2>Tips</h2> <ul><li>Swap the green beans for asparagus or tenderstem broccoli if that’s what you have</li> <li>Add lemon slices to the tray for extra brightness and visual lift</li> <li>If using boneless chicken thighs, reduce total roasting time by about 10 minutes</li></ul> <h2>Goes Great With</h2> <ul><li>A bowl of garlic yogurt or herby crème fraîche</li> <li>Crusty bread to mop up the tray juices</li> <li>A sharp salad with mustard vinaigrette</li></ul> <hr> <blockquote><p>It starts as a tray of raw ingredients. It ends as something warm, golden, and ready to bring everyone to the table.</p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_39 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Lemon_herb_chicken_traybake_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_39 as _,
  metadata as m
};
