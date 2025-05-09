import { I as sanitize_props, J as spread_props } from "./index3.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Silky Milk Chocolate Mousse",
  "slug": "silky-milk-chocolate-mousse",
  "description": "Light, airy mousse made with premium Callebaut milk chocolate callets—perfect for an effortless yet luxurious dessert.",
  "date": "2025-04-24T00:00:00.000Z",
  "featured": true,
  "image": "/images/recipes/category-name/recipe-name/silky-milk-chocolate-mousse.webp",
  "prepTime": 15,
  "cookTime": 0,
  "totalTime": "2 hours (chilling)",
  "servings": 4,
  "categories": ["dessert"],
  "tags": [
    "quick",
    "indulgent",
    "chocolate",
    "difficulty-easy"
  ],
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
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>Some desserts shout.<br> This one <strong>whispers</strong>… and folks lean in closer.<br> This mousse is <em>light as a cloud</em>, <em>rich as a dream</em>, and comes together faster than you can set the table.<br> Made with real <strong>Callebaut milk chocolate</strong>, it’s got a deep cocoa flavor without being too heavy — just float-away good.</p> <h2>Ingredients</h2> <ul><li>200g Callebaut Milk Chocolate Calletes</li> <li>300ml double cream (plus extra for topping)</li> <li>2 large eggs, separated</li> <li>2 tablespoons sugar</li> <li>A pinch of salt</li></ul> <p><strong>Optional Garnishes:</strong></p> <ul><li>Shaved chocolate</li> <li>Fresh raspberries</li> <li>Crushed biscuits (like amaretti or digestive)</li></ul> <h2>Instructions</h2> <ol><li>Melt the Callebaut chocolate gently over a bain-marie (or in short microwave bursts), stirring until smooth. Let it cool slightly.</li> <li>Whisk the egg yolks into the cooled chocolate one at a time until glossy.</li> <li>In another bowl, whip the double cream until soft peaks form.</li> <li>In a third bowl, whisk egg whites with the sugar and pinch of salt until stiff peaks form.</li> <li>Gently fold the whipped cream into the chocolate mixture.</li> <li>Carefully fold in the egg whites, trying not to knock out too much air.</li> <li>Spoon into small glasses or ramekins.</li> <li>Chill for at least 2 hours before serving. Top with extra cream, chocolate shavings, or berries if you’re feeling fancy.</li></ol> <h2>Tips</h2> <ul><li>Don’t rush the folding—slow and gentle wins the race.</li> <li>Want a deeper flavor? Stir a splash of espresso or coffee liqueur into the melted chocolate.</li> <li>Make ahead: mousse keeps beautifully for 24–48 hours in the fridge.</li></ul> <h2>Goes Great With</h2> <ul><li>After a rich curry or roast dinner</li> <li>Paired with a crisp glass of sparkling wine</li> <li>Quiet evenings when the house finally goes still</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Silky_milk_chocolate_mousse_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_6 as _,
  metadata as m
};
