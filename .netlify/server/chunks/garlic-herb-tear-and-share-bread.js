import { I as sanitize_props, J as spread_props } from "./index3.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Garlic & Herb Tear-and-Share Bread",
  "slug": "garlic-herb-tear-and-share-bread",
  "description": "Soft, golden balls of freshly baked dough slathered in garlic-herb butter—made for sharing, pulling apart, and mopping up everything on the table.",
  "date": "2025-05-12T00:00:00.000Z",
  "featured": true,
  "image": "/images/recipes/category-name/recipe-name/garlic-herb-tear-and-share-bread.webp",
  "prepTime": 20,
  "cookTime": 25,
  "totalTime": "45 (plus proving)",
  "servings": 6,
  "categories": ["sides", "bread", "party"],
  "tags": [
    "comfort-food",
    "vegetarian",
    "difficulty-medium"
  ],
  "relatedProducts": [
    {
      "handle": "fresh-fast-active-yeast-1kg",
      "featured": true
    },
    { "handle": "chef-william-garlic-powder-500gm" },
    { "handle": "chef-william-dried-sage-140g" },
    { "handle": "old-india-coriander-leaves-500g" }
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
function Garlic_herb_tear_and_share_bread_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>Golden, buttery, soft in the middle and crispy on the edge.<br> Each bite is soaked in garlic and herbs, ready to be pulled, dipped, and devoured.<br> Serve it warm and watch the hands fly.</p> <h2>Ingredients</h2> <h3>For the Dough</h3> <ul><li>500g strong white bread flour</li> <li>1 sachet (7g) Dried Fermipan Yeast</li> <li>1 tsp salt</li> <li>1 tsp sugar</li> <li>300ml warm water</li> <li>2 tbsp olive oil</li></ul> <h3>For the Garlic Herb Butter</h3> <ul><li>60g butter, melted</li> <li>1 tsp Chef William Garlic Powder</li> <li>1 tsp Chef William Dried Sage</li> <li>1 tsp Old India Dried Coriander Leaves</li> <li>Pinch of salt</li> <li>Optional: sprinkle of grated cheese or sesame seeds</li></ul> <h2>Instructions</h2> <h3>1. Make the Dough</h3> <ol><li>In a large bowl, mix flour, salt, sugar, and yeast (keep yeast and salt separate at first).</li> <li>Add warm water and olive oil. Mix to form a soft dough.</li> <li>Knead for 10 minutes until smooth and elastic. Cover and leave to prove in a warm place for 1 hour or until doubled in size.</li></ol> <h3>2. Shape the Rolls</h3> <ol><li>Knock back the dough and divide into small balls (about golf ball size).</li> <li>Roll gently and arrange in a greased baking tin or skillet, spaced slightly apart.</li> <li>Cover loosely and let rise again for 30 minutes while the oven preheats.</li></ol> <h3>3. Bake and Butter</h3> <ol><li>Preheat oven to 200°C (fan).</li> <li>Mix melted butter with garlic powder, dried sage, coriander, and salt.</li> <li>Brush the dough balls generously with half the butter mix.</li> <li>Bake for 20–25 minutes until golden and puffed.</li> <li>Brush with remaining butter while still warm.</li></ol> <h2>Tips</h2> <ul><li>Serve warm with dips, soups, or to mop up sauces.</li> <li>Want it cheesy? Sprinkle parmesan or cheddar over the top before baking.</li> <li>Freeze after baking, then warm through before serving for make-ahead magic.</li></ul> <h2>Goes Great With</h2> <ul><li>Korma or curry for mopping</li> <li>A big pot of soup</li> <li>Midweek dinner that needs a hero on the side</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Garlic_herb_tear_and_share_bread_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_11 as _,
  metadata as m
};
