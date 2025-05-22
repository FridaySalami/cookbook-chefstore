import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Fluffy Buttermilk Pancakes",
  "slug": "fluffy-buttermilk-pancakes",
  "description": "Light, golden pancakes with a tender crumb and just enough fluff to soak up all that syrupy joy.",
  "date": "2025-04-24T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/fluffy-buttermilk-pancakes.webp",
  "prepTime": 10,
  "cookTime": 15,
  "totalTime": 25,
  "servings": 4,
  "categories": ["breakfast"],
  "tags": [
    "quick",
    "family-friendly",
    "difficulty-easy"
  ],
  "relatedProducts": [
    {
      "handle": "nielsen-massey-vanilla-extract-60ml",
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
function Fluffy_buttermilk_pancakes_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love These</h2> <p>These pancakes rise like the morning sun.<br> They’re soft inside, golden outside, and carry just enough tang from the buttermilk to keep you coming back.<br> You make them in one bowl. You flip them with confidence. And when the maple syrup hits the top of that warm stack, you know it was worth getting out of bed.</p> <h2>Ingredients</h2> <ul><li>2 Cups All-Purpose Flour</li> <li>2 Tablespoons Sugar</li> <li>1 Teaspoon Baking Powder</li> <li>½ Teaspoon Baking Soda</li> <li>½ Teaspoon Salt</li> <li>2 Cups Buttermilk (Or Milk Plus 1 Tablespoon Vinegar)</li> <li>2 Large Eggs</li> <li>¼ Cup Unsalted Butter, Melted</li> <li>1 Teaspoon Vanilla Extract</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Combine the dry ingredients</strong><br> In a large bowl, whisk together the flour, sugar, baking powder, baking soda, and salt.</p></li> <li><p><strong>Mix the wet ingredients</strong><br> In a separate bowl or jug, whisk the buttermilk, eggs, melted butter, and vanilla extract until well blended.</p></li> <li><p><strong>Bring it together</strong><br> Pour the wet mixture into the dry ingredients. Stir gently with a spatula or spoon until just combined. The batter should be thick and lumpy. Do not overmix.</p></li> <li><p><strong>Heat the pan</strong><br> Place a non-stick skillet or griddle over medium heat. Add a little butter or oil. Let it melt and begin to sizzle softly.</p></li> <li><p><strong>Cook the pancakes</strong><br> Pour about ¼ cup of batter per pancake onto the hot surface. Cook for 2 to 3 minutes, until bubbles form on top and the edges begin to look set. Flip and cook for another 1 to 2 minutes until golden brown and cooked through.</p></li> <li><p><strong>Serve hot</strong><br> Stack onto warm plates. Serve immediately with your favorite toppings.</p></li></ol> <h2>Tips</h2> <ul><li>Real buttermilk brings the best tang and texture</li> <li>Add a pinch of cinnamon or lemon zest for extra brightness</li> <li>Leftovers freeze well. Reheat in the toaster for quick, cozy mornings</li></ul> <h2>Goes Great With</h2> <ul><li>Crispy Bacon or Veggie Sausages</li> <li>Berries and a Dollop of Yoghurt</li> <li>A Cup of Strong Coffee and Nowhere to Be</li></ul> <hr> <blockquote><p><strong>Pancakes like these don’t need occasion. They make the occasion.</strong></p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_28 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fluffy_buttermilk_pancakes_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_28 as _,
  metadata as m
};
