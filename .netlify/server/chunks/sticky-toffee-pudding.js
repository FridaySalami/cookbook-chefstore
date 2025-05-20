import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Sticky Toffee Pudding",
  "slug": "sticky-toffee-pudding",
  "description": "A warm, rich, and utterly comforting British classic—made with plump pitted dates and smothered in a buttery toffee sauce. Best served steaming with cream.",
  "date": "2025-05-14T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/sticky-toffee-pudding.webp",
  "prepTime": 20,
  "cookTime": 40,
  "totalTime": 60,
  "servings": 6,
  "categories": ["dessert", "british", "comfort"],
  "tags": ["crowd-pleaser", "difficulty-medium"],
  "relatedProducts": [
    {
      "handle": "buchanan-pitted-dates-3kg",
      "featured": true
    },
    {
      "handle": "tate-lyle-soft-dark-brown-sugar-3kg",
      "featured": true
    },
    {
      "handle": "kerrymaid-uht-double-blue-cream-1ltr",
      "featured": true
    },
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
function Sticky_toffee_pudding_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This is comfort at its most golden.<br> Sticky toffee pudding is more than a dessert, it’s a warm hug in a bowl, a soft whisper on a winter’s night. The dates melt into the sponge, lending their richness without screaming for attention. The sponge is tender and deep flavoured, and the toffee sauce? Well, it’s the kind you want to pour over everything.</p> <p>Whether served at the end of a Sunday roast or just because the rain won’t let up, this one brings the quiet joy of something homemade and truly indulgent.</p> <h2>Ingredients</h2> <h3>For the Pudding</h3> <ul><li>200g Buchanan Pitted Dates</li> <li>200ml Boiling Water</li> <li>1 Teaspoon Bicarbonate of Soda</li> <li>50g Unsalted Butter</li> <li>75g Tate &amp; Lyle Soft Dark Brown Sugar</li> <li>2 Eggs</li> <li>175g Self-Raising Flour</li> <li>1 Teaspoon Nielsen-Massey Vanilla Extract</li></ul> <h3>For the Toffee Sauce</h3> <ul><li>100g Unsalted Butter</li> <li>150g Tate &amp; Lyle Soft Dark Brown Sugar</li> <li>200ml Kerrymaid UHT Double Cream</li> <li>1 Teaspoon Vanilla Extract</li></ul> <h2>Instructions</h2> <h3>Make the Pudding</h3> <ol><li>Preheat the oven to 180°C (fan) and lightly grease a deep baking dish or individual ramekins.</li> <li>Place the chopped dates in a bowl. Pour over the boiling water and stir in the bicarbonate of soda. Let it sit and soften for 10 minutes.</li> <li>In a separate bowl, cream the butter and brown sugar until light and fluffy.</li> <li>Beat in the eggs one at a time, then add the vanilla extract.</li> <li>Fold in the flour gently, then stir through the softened date mixture. The batter will be loose and lumpy—that’s right where you want it.</li> <li>Pour into the prepared dish and bake for 35 to 40 minutes, or until the sponge is risen and springs back when touched.</li></ol> <h3>Make the Toffee Sauce</h3> <ol start="7"><li>While the pudding bakes, melt the butter in a saucepan over low heat.</li> <li>Add the brown sugar and cream. Stir gently until smooth and bring to a low simmer.</li> <li>Let it bubble for 5 to 6 minutes until slightly thickened. Stir in the vanilla and remove from heat.</li></ol> <h3>Serve</h3> <ol start="10"><li>Serve the sponge warm, either turned out onto plates or scooped directly from the dish.</li> <li>Pour over generous amounts of toffee sauce and add cream or a scoop of vanilla ice cream if you like to walk the edge.</li></ol> <h2>Tips</h2> <ul><li>You can make the sponge ahead of time. Just reheat gently and add fresh sauce before serving.</li> <li>For individual portions, bake in muffin tins or ramekins.</li> <li>Add a pinch of sea salt to the sauce to balance sweetness and enhance richness.</li></ul> <h2>Goes Great With</h2> <ul><li>Pouring Cream, Clotted Cream, or Vanilla Ice Cream</li> <li>A Strong Coffee or Glass of Port</li> <li>Candlelight and Second Helpings</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_45 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sticky_toffee_pudding_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_45 as _,
  metadata as m
};
