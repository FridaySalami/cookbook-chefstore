import { I as sanitize_props, J as spread_props } from "./index2.js";
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
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>Soft inside. Crisp edges. A golden crust slicked with garlic butter that hits you right before your teeth do.<br> Each piece pulls away with a little steam and a lot of aroma. Whether you’re mopping curry, dunking in soup, or just going in bare-handed, this bread makes every bite better.<br> No knife needed. Just a warm table and good company.</p> <h2>Ingredients</h2> <h3>For the Dough</h3> <ul><li>500g Strong White Bread Flour</li> <li>7g Dried Fermipan Yeast</li> <li>1 Teaspoon Salt</li> <li>1 Teaspoon Sugar</li> <li>300ml Warm Water</li> <li>2 Tablespoons Olive Oil</li></ul> <h3>For the Garlic Herb Butter</h3> <ul><li>60g Butter, Melted</li> <li>1 Teaspoon Chef William Garlic Powder</li> <li>1 Teaspoon Chef William Dried Sage</li> <li>1 Teaspoon Old India Dried Coriander Leaves</li> <li>Pinch of Salt</li> <li>Optional: Grated Cheese or Sesame Seeds for Topping</li></ul> <h2>Instructions</h2> <h3>1. Make the Dough</h3> <ol><li>In a large bowl, combine flour, sugar, and yeast. Add the salt to one side of the bowl and yeast to the other.</li> <li>Pour in the warm water and olive oil. Stir until it forms a soft, shaggy dough.</li> <li>Knead on a floured surface for 8 to 10 minutes until smooth and elastic.</li> <li>Return to the bowl, cover, and leave to prove in a warm place until doubled in size, about 1 hour.</li></ol> <h3>2. Shape and Second Rise</h3> <ol><li>Punch down the dough gently and divide into 16 to 20 equal pieces.</li> <li>Roll each into a smooth ball. Arrange in a greased baking tin or skillet, spaced just slightly apart so they’ll rise together.</li> <li>Cover loosely and leave for another 30 minutes until puffed and touching.</li></ol> <h3>3. Bake and Finish</h3> <ol><li>Preheat oven to 200°C fan.</li> <li>Mix the melted butter with garlic powder, sage, coriander, and a pinch of salt.</li> <li>Brush half of the butter mixture over the dough balls.</li> <li>Bake for 20 to 25 minutes until golden brown on top and sounding hollow when tapped.</li> <li>While still warm, brush with the remaining garlic butter.</li></ol> <h2>Tips</h2> <ul><li>For even more indulgence, sprinkle grated parmesan or cheddar before baking</li> <li>You can prep and freeze the baked rolls, then reheat in the oven before serving</li> <li>This dough also works great for garlic knots or herbed rolls in a muffin tin</li></ul> <h2>Goes Great With</h2> <ul><li>A Creamy Curry Like Korma or Tikka Masala</li> <li>Roasted Tomato or Lentil Soup</li> <li>Anything Saucy That Deserves a Mop</li></ul> <hr> <blockquote><p><strong>This isn’t just bread. It’s an invitation. Tear, dip, share. Repeat.</strong></p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Garlic_herb_tear_and_share_bread_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_18 as _,
  metadata as m
};
