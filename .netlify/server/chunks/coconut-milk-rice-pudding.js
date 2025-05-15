import { I as sanitize_props, J as spread_props } from "./index2.js";
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
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>Soft, slow, and just sweet enough—this is rice pudding with sunshine in its bones.<br> Coconut milk wraps the grains in silk. A whisper of vanilla carries through every spoonful.<br> Whether you eat it warm with rain on the window or cold from the fridge in bare feet—this is the kind of pudding that knows how to comfort.</p> <h2>Ingredients</h2> <ul><li>150g Ospiro Pudding Rice</li> <li>400ml Coconut Milk (Full-Fat)</li> <li>200ml Water</li> <li>3 Tablespoons Sugar</li> <li>1 Teaspoon Vanilla Extract</li> <li>Pinch of Salt</li> <li>Mango, Berries, or Toasted Coconut Flakes, For Serving (Optional)</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Combine and warm.</strong><br> In a medium saucepan, add the pudding rice, coconut milk, water, sugar, and a pinch of salt.<br> Stir gently and set over low-medium heat.</p></li> <li><p><strong>Simmer gently.</strong><br> Bring it to a soft simmer. Let it bubble slowly—no rush—stirring often so the rice doesn’t catch at the bottom.</p></li> <li><p><strong>Cook until creamy.</strong><br> After 25–30 minutes, the rice should be tender and the pudding thick enough to coat a spoon. If it looks too thick too soon, stir in a splash more water or coconut milk.</p></li> <li><p><strong>Finish with vanilla.</strong><br> Turn off the heat and stir in the vanilla extract. Let it rest for 5 minutes it’ll thicken just a little more while it settles.</p></li> <li><p><strong>Serve warm or chilled.</strong><br> Enjoy it warm right away, or cool and refrigerate for a cooler, creamier version. Add fruit or toasted coconut just before serving, if you like.</p></li></ol> <h2>Tips</h2> <ul><li>Swap the water for more coconut milk if you want it extra luxurious.</li> <li>For more depth, stir in a pinch of ground cardamom or cinnamon while it simmers.</li> <li>Leftovers keep well in the fridge add a splash of milk before reheating to loosen</li></ul> <h2>Goes Great With</h2> <ul><li>Slices of ripe mango or passionfruit</li> <li>A sprinkle of pistachios or toasted almonds</li> <li>A slow Sunday and a second helping</li></ul> <hr> <blockquote><p><strong>Comfort doesn’t have to be heavy. Sometimes it’s soft, sweet, and coconut-scented.</strong></p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Coconut_milk_rice_pudding_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_7 as _,
  metadata as m
};
