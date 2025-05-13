import { I as sanitize_props, J as spread_props } from "./index3.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Coconut Milk Rice Pudding",
  "slug": "coconut-milk-rice-pudding",
  "description": "A silky, tropical twist on comforting rice pudding—made with rich coconut milk and infused with warming cardamom and vanilla.",
  "date": "2025-04-22T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/coconut-milk-rice-pudding.webp",
  "prepTime": 5,
  "cookTime": 30,
  "totalTime": 35,
  "servings": 4,
  "categories": ["dessert"],
  "tags": [
    "comfort-food",
    "vegetarian",
    "difficulty-easy"
  ],
  "relatedProducts": [
    {
      "handle": "ospiro-pudding-rice-3kg",
      "featured": true
    },
    {
      "handle": "nielsen-massey-vanilla-extract-60ml"
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
function Coconut_milk_rice_pudding_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>You ever want somethin’ sweet that don’t leave you feelin’ heavy?<br> This pudding’s <strong>light</strong>, <strong>creamy</strong>, and <strong>naturally luscious</strong> from coconut milk—no dairy needed.<br> It’s the kind of cozy dish you make once, and end up thinkin’ about all week.</p> <p>Perfect warm on a rainy evening or chilled straight from the fridge on a hot day.</p> <h2>Ingredients</h2> <ul><li>150g Ospiro Pudding Rice</li> <li>400ml coconut milk (full-fat for extra creaminess)</li> <li>200ml water</li> <li>3 tablespoons sugar (adjust to taste)</li> <li>1 teaspoon vanilla extract</li> <li>Pinch of salt</li> <li>Fresh mango, berries, or toasted coconut flakes, for serving (optional)</li></ul> <h2>Instructions</h2> <ol><li>In a medium saucepan, combine pudding rice, coconut milk, water, sugar, and salt.</li> <li>Bring to a gentle simmer over low-medium heat, stirring often.</li> <li>Cook uncovered for about 25–30 minutes, stirring occasionally to prevent sticking, until the rice is tender and the mixture has thickened.</li> <li>Stir in the vanilla extract.</li> <li>Serve warm, or chill and top with fresh fruit or coconut flakes before serving.</li></ol> <h2>Tips</h2> <ul><li>Want it extra rich? Swap the 200ml water for more coconut milk.</li> <li>Prefer it sweeter? Add an extra spoonful of sugar or a drizzle of maple syrup after cooking.</li> <li>Flavor twist: Stir in a pinch of ground cardamom or cinnamon while it cooks.</li></ul> <h2>Goes Great With</h2> <ul><li>Fresh mango slices or passionfruit</li> <li>A sprinkle of toasted almonds or pistachios</li> <li>Curled up under a blanket on a slow Sunday</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Coconut_milk_rice_pudding_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_3 as _,
  metadata as m
};
