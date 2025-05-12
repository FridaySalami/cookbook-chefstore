import { I as sanitize_props, J as spread_props } from "./index3.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Salted Caramel Chocolate Tart",
  "slug": "salted-caramel-chocolate-tart",
  "description": "A decadent tart with a buttery base, luscious Callebaut caramel filling, and rich dark chocolate topping—finished with a sprinkle of sea salt.",
  "date": "2025-04-24T00:00:00.000Z",
  "featured": true,
  "image": "/images/recipes/category-name/recipe-name/salted-caramel-chocolate-tart.webp",
  "prepTime": 20,
  "cookTime": 10,
  "totalTime": 30,
  "servings": 8,
  "categories": ["dessert"],
  "tags": [
    "indulgent",
    "crowd-pleaser",
    "difficulty-medium"
  ],
  "relatedProducts": [
    {
      "handle": "callebaut-caramel-filling-5kg",
      "featured": true
    },
    { "handle": "callebaut-extra-bitter-callets-5kg" }
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
function Salted_caramel_chocolate_tart_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>Imagine sinking your fork into a crisp, buttery base…<br> Then hitting that <em>golden river</em> of caramel…<br> And finally breaking through the dark, glossy chocolate top, with just a whisper of sea salt to keep it honest.</p> <p>Yeah.<br> This tart isn’t just dessert—it’s a <strong>moment.</strong></p> <h2>Ingredients</h2> <ul><li>200g digestive biscuits, crushed</li> <li>100g unsalted butter, melted</li> <li>300g <a href="https://www.thechefstoreuk.com/products/callebaut-caramel-filling-5kg" rel="nofollow">Callebaut Caramel Filling</a></li> <li>150g dark chocolate (70% cocoa), chopped</li> <li>100ml double cream</li> <li>Flaky sea salt, for sprinkling</li></ul> <h2>Instructions</h2> <ol><li>Mix crushed biscuits with melted butter and press into the base of a 9-inch tart tin. Chill for 10 minutes.</li> <li>Warm the Callebaut caramel gently in a saucepan or microwave until just pourable.</li> <li>Pour caramel over the biscuit base. Chill for 20 minutes until slightly set.</li> <li>Heat the double cream until just simmering. Remove from heat and stir in the chopped chocolate until smooth.</li> <li>Pour the chocolate ganache over the caramel layer and smooth the top.</li> <li>Chill the tart for at least 2 hours, or until fully set.</li> <li>Sprinkle with flaky sea salt before serving.</li></ol> <h2>Tips</h2> <ul><li>No tart tin? Use a springform cake tin and just slice carefully.</li> <li>Add a pinch of sea salt straight into the caramel if you love that sweet-salty punch.</li> <li>Want it boozy? Stir a splash of whiskey into the chocolate ganache.</li></ul> <h2>Goes Great With</h2> <ul><li>Strong coffee or espresso</li> <li>A dollop of whipped cream</li> <li>Quiet late nights when you need a little extra sweetness</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Salted_caramel_chocolate_tart_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_11 as _,
  metadata as m
};
