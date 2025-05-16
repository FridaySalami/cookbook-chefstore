import { I as sanitize_props, J as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Silky Milk Chocolate Mousse",
  "slug": "silky-milk-chocolate-mousse",
  "description": "Light, airy mousse made with premium Callebaut milk chocolate callets—perfect for an effortless yet luxurious dessert.",
  "date": "2025-04-24T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/silky-milk-chocolate-mousse.webp",
  "prepTime": 15,
  "cookTime": 0,
  "totalTime": "2 hours (chilling)",
  "servings": 4,
  "categories": ["dessert"],
  "tags": ["indulgent", "chocolate", "difficulty-easy"],
  "relatedProducts": [
    {
      "handle": "callebaut-milk-dark-white-chocolate-callets-4-x-400g-bundle",
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
function Silky_milk_chocolate_mousse_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This mousse doesn’t shout.<br> It floats in quietly, all softness and smooth charm, then melts into something more, something that stays with you.</p> <p>It’s rich without being heavy.<br> Sweet but not cloying.<br> Each spoonful is like a whisper of cocoa wrapped in silk. And the best part? It comes together with barely a fuss.</p> <p>No baking. No stress. Just melt, mix, and chill.<br> Whether it’s a Tuesday treat or the closing note to a dinner with friends, this mousse holds its own, light as air and deeply satisfying.</p> <h2>Ingredients</h2> <ul><li>200g Milk Chocolate Callets</li> <li>300ml Double Cream</li> <li>2 Large Eggs</li> <li>2 Tablespoons Sugar</li> <li>A Pinch of Salt</li></ul> <h3>Optional Garnishes</h3> <ul><li>Shaved Chocolate</li> <li>Fresh Raspberries</li> <li>Crushed Biscuits</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Melt the chocolate</strong><br> Place the chocolate callets in a heatproof bowl set over barely simmering water. Stir gently until melted and smooth. Remove from heat and let cool for a few minutes.</p></li> <li><p><strong>Add the egg yolks</strong><br> Once the chocolate has cooled slightly, stir in the egg yolks one at a time until fully incorporated. The mixture should look glossy and thick.</p></li> <li><p><strong>Whip the cream</strong><br> In a separate bowl, whip the double cream to soft peaks. It should hold shape but still feel billowy.</p></li> <li><p><strong>Beat the egg whites</strong><br> In a third bowl, whisk the egg whites with the sugar and a pinch of salt until stiff peaks form. The mixture should stand tall on the whisk.</p></li> <li><p><strong>Fold in the cream</strong><br> Gently fold the whipped cream into the chocolate mixture using a spatula. Take your time, small circles, soft hands.</p></li> <li><p><strong>Fold in the egg whites</strong><br> Add the beaten egg whites in two batches, folding carefully to keep the mixture light and airy.</p></li> <li><p><strong>Chill the mousse</strong><br> Spoon into small ramekins or glasses and place in the fridge to chill for at least 2 hours, or until set.</p></li> <li><p><strong>Serve and garnish</strong><br> Just before serving, top with cream, shaved chocolate, berries, or a crumble of biscuits—whatever brings you joy.</p></li></ol> <h2>Tips</h2> <ul><li>Let the chocolate cool slightly before adding the yolks to avoid scrambling them.</li> <li>Don’t rush the folding this is what keeps the mousse light.</li> <li>Add a splash of espresso or a teaspoon of liqueur to the melted chocolate for a deeper finish.</li></ul> <h2>Goes Great With</h2> <ul><li>After a roast or slow cooked stew</li> <li>A flute of sparkling wine or glass of dessert sherry</li> <li>Candlelight and quiet conversation, or a late-night kitchen raid</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_33 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Silky_milk_chocolate_mousse_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_33 as _,
  metadata as m
};
