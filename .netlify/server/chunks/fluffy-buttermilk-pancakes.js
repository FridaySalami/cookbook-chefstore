import { I as sanitize_props, J as spread_props } from "./index3.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Fluffy Buttermilk Pancakes",
  "slug": "fluffy-buttermilk-pancakes",
  "description": "Light, golden pancakes with a tender crumb and just enough fluff to soak up all that syrupy joy.",
  "date": "2025-04-24T00:00:00.000Z",
  "featured": true,
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
        $$payload2.out += `<h2>Why You’ll Love These</h2> <p>These pancakes don’t just <em>fill a plate</em>, they fill a room—with the smell of browned butter, warm vanilla, and the soft sizzle of batter hittin’ cast iron. They’re light but hearty, simple but somehow sacred—like that first cup of coffee on a quiet morning. Best part? They come together in one bowl, and disappear even quicker off the plate.</p> <h2>Ingredients</h2> <ul><li>2 cups all-purpose flour</li> <li>2 tablespoons sugar</li> <li>1 teaspoon baking powder</li> <li>1/2 teaspoon baking soda</li> <li>1/2 teaspoon salt</li> <li>2 cups buttermilk (or milk + 1 tbsp vinegar if you’re out)</li> <li>2 large eggs</li> <li>1/4 cup unsalted butter, melted</li> <li>1 teaspoon vanilla extract</li></ul> <h2>Instructions</h2> <ol><li>In a large bowl, whisk together the flour, sugar, baking powder, baking soda, and salt. Smells like Sunday already.</li> <li>In another bowl (or a big jug if you’re feelin’ rustic), mix the buttermilk, eggs, melted butter, and vanilla.</li> <li>Gently fold wet into dry. Don’t overwork it—just until it’s shaggy and mixed. Lumps are fine. Like life.</li> <li>Heat a griddle or non-stick pan over medium heat. Add a touch of butter and let it whisper.</li> <li>Pour about 1/4 cup of batter per pancake. Let ‘em cook until bubbles form on the top—2 to 3 minutes.</li> <li>Flip with confidence. Cook the other side till golden and proud, about 1–2 more minutes.</li> <li>Stack ‘em high, drizzle with maple syrup, and throw a few berries on there if you’re feelin’ poetic.</li></ol> <h2>Tips</h2> <ul><li>Use real buttermilk if you’ve got it—it makes all the difference.</li> <li>A little cinnamon or lemon zest in the batter? Chef’s kiss.</li> <li>Leftovers (if you ever have ‘em) freeze like a dream. Reheat in the toaster, like a secret gift to your future self.</li></ul> <h2>Goes Great With</h2> <ul><li>Crispy bacon or veggie sausages</li> <li>A hot mug of coffee</li> <li>That feeling when no one’s rushin’ ya</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fluffy_buttermilk_pancakes_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_2 as _,
  metadata as m
};
