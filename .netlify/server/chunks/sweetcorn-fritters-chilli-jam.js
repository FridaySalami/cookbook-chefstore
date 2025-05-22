import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Crispy Sweetcorn Fritters with Chilli Jam",
  "slug": "sweetcorn-fritters-chilli-jam",
  "description": "Light, crispy sweetcorn fritters pan-fried to golden perfection and served with a dollop of Bay Tree Sweet Chilli Jam for dipping.",
  "date": "2025-05-13T00:00:00.000Z",
  "featured": false,
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
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>These fritters are the kind of snack that feel like a little celebration no cutlery, no ceremony, just golden, crispy edges and warm, tender centres that burst with sweetcorn. They’re fast, versatile, and deeply satisfying in that way only pan fried things can be. Serve them stacked high with a generous spoon of sweet chilli jam and a squeeze of lime and you’ve got the kind of snack that turns into a meal, or the kind of meal that disappears before it hits the table.</p> <p>They’re crisp on the outside, pillowy in the middle, and bright with spring onion and herbs. A total fridge raider’s dream.</p> <h2>Ingredients</h2> <ul><li>300g Ballerina Tinned Sweetcorn</li> <li>2 Spring Onions</li> <li>1 Egg</li> <li>75g Plain Flour</li> <li>1⁄4 Teaspoon Baking Powder</li> <li>Salt and Pepper</li> <li>A Handful of Fresh Coriander or Parsley (optional)</li> <li>Oil for Frying</li> <li>Bay Tree Sweet Chilli Jam, to Serve</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Make the batter.</strong><br> Tip the drained sweetcorn into a large mixing bowl. Add the sliced spring onions, egg, flour, baking powder, herbs if you’re using them, and a good pinch of salt and pepper. Stir everything together with a spoon or your hands—whatever gets you there. You’re looking for a thick, sticky batter that holds its shape on a spoon.</p></li> <li><p><strong>Heat the oil.</strong><br> Drizzle a thin layer of oil into a wide frying pan and set it over medium heat. Give it a moment to warm up you’re not deep-frying, just crisping the edges. The surface should shimmer slightly when it’s ready.</p></li> <li><p><strong>Form the fritters.</strong><br> Scoop heaped tablespoons of the batter and gently drop them into the pan. Flatten each one a little with the back of the spoon so they don’t end up too doughy in the centre. They should sizzle softly like a summer rain on a hot pavement.</p></li> <li><p><strong>Fry until golden.</strong><br> Let the fritters cook undisturbed for 2 to 3 minutes on one side. When they’re golden underneath and hold together when nudged, flip them gently with a spatula. Cook the other side until just as crisp. Cook in batches if needed don’t crowd the pan.</p></li> <li><p><strong>Drain and admire.</strong><br> Transfer the fritters to a plate lined with kitchen paper. They’ll stay crisp while you finish the rest. Keep them warm in a low oven if you’re feeding a crowd or just delaying the joy.</p></li> <li><p><strong>Serve with flair.</strong><br> Pile the fritters onto a platter or plate. Serve them hot, with Bay Tree Sweet Chilli Jam for dipping or dolloping. Maybe a squeeze of lime. Maybe nothing at all. They speak for themselves.</p></li></ol> <h2>Tips</h2> <ul><li>Add crumbled feta or grated cheddar into the batter for a heartier snack.</li> <li>For a spicy version, stir in a little chopped fresh chilli or a pinch of smoked paprika.</li> <li>Cooked fritters freeze well. Reheat in the oven at 180°C for 10 to 15 minutes until crisp again.</li></ul> <h2>Goes Great With</h2> <ul><li>A Crisp Herb Salad or Light Slaw</li> <li>Topped with Poached Eggs and a Spoonful of Yoghurt</li> <li>A Quiet Evening, a Good Film, and No Forks Required</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_57 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sweetcorn_fritters_chilli_jam_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_57 as _,
  metadata as m
};
