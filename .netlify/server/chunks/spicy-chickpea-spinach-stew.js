import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Spicy Chickpea & Spinach Stew",
  "slug": "spicy-chickpea-spinach-stew",
  "description": "A bold, warming stew packed with chickpeas, tomatoes, and spinach. Spiced with chilli and garlic, finished with herbs or a swirl of coconut cream.",
  "date": "2025-05-12T00:00:00.000Z",
  "featured": false,
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
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>It’s the kind of stew that holds you steady.<br> A bowl full of warmth and colour, where chickpeas bring their quiet strength, tomatoes soften into tangy comfort, and spinach folds in like an afterthought that makes everything better.</p> <p>The heat is gentle but certain. The spices don’t shout—they hum.<br> Rose harissa adds a little mystery. Garlic does what garlic does. And every bite feels like something that’s doing more than just feeding you.</p> <p>It’s plant-based, pantry friendly, and forgiving enough to make your own.<br> Put the pot on, let it bubble, and trust the house will start to smell like dinner.</p> <h2>Ingredients</h2> <ul><li>1 Tablespoon Olive Oil</li> <li>1 Onion</li> <li>2 Garlic Cloves</li> <li>1 Teaspoon Smoked Paprika</li> <li>1/2 to 1 Teaspoon Chilli Flakes</li> <li>1 Tablespoon Rose Harissa (Optional)</li> <li>400g Tinned Chopped Tomatoes</li> <li>400 to 500g Tinned Chickpeas</li> <li>300ml Vegetable Stock</li> <li>100g Spinach (Fresh or Frozen)</li> <li>Salt</li> <li>Black Pepper</li></ul> <h3>Optional Finishes</h3> <ul><li>Lemon Juice</li> <li>Coconut Cream</li> <li>Chopped Parsley</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Sauté the base</strong><br> Heat olive oil in a large pan over medium heat. Add the chopped onion and cook for 5 minutes until soft and translucent.</p></li> <li><p><strong>Build the flavour</strong><br> Stir in minced garlic, paprika, chilli flakes, and rose harissa if using. Cook for 1 minute until the kitchen smells like something good is happening.</p></li> <li><p><strong>Add the bulk</strong><br> Pour in the chopped tomatoes, drained chickpeas, and vegetable stock. Stir well and bring to a simmer.</p></li> <li><p><strong>Simmer low and slow</strong><br> Let it bubble gently for 20 to 25 minutes, stirring occasionally. The sauce will thicken and the flavours will settle into each other.</p></li> <li><p><strong>Add the greens</strong><br> Stir in the spinach and cook for another 2 to 3 minutes until wilted or heated through, depending on whether it’s fresh or frozen.</p></li> <li><p><strong>Taste and finish</strong><br> Season to taste with salt and pepper. Add a squeeze of lemon juice, a swirl of coconut cream, or some chopped herbs if desired.</p></li></ol> <h2>Tips</h2> <ul><li>For extra richness, add a spoon of tahini just before serving.</li> <li>Want it chunkier? Stir in roasted squash or sweet potato cubes.</li> <li>Leftovers thicken overnight and are even better the next day. Just add a splash of water to loosen when reheating.</li></ul> <h2>Goes Great With</h2> <ul><li>Warm Flatbread or Garlic Toast</li> <li>Dollop of Yoghurt or Drizzle of Tahini</li> <li>A Big Blanket and a Slow Evening</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_40 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Spicy_chickpea_spinach_stew_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_40 as _,
  metadata as m
};
