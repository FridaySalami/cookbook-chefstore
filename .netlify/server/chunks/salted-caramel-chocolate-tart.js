import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Salted Caramel Chocolate Tart",
  "slug": "salted-caramel-chocolate-tart",
  "description": "A decadent tart with a buttery base, luscious Callebaut caramel filling, and rich dark chocolate topping—finished with a sprinkle of sea salt.",
  "date": "2025-04-24T00:00:00.000Z",
  "featured": false,
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
    { "handle": "callebaut-extra-bitter-callets-5kg" },
    {
      "handle": "schar-free-from-digestive-biscuits-150gm"
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
function Salted_caramel_chocolate_tart_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This tart is a quiet showstopper.<br> It starts with a base that crumbles just so when your fork presses down, buttery and grounding. Then comes the soft amber caramel smooth, deep, and just sweet enough. On top, a dark chocolate ganache that breaks with a gentle snap before melting on your tongue.</p> <p>It’s sweet but not childish. Elegant but easy.<br> The sea salt whispers through it all, making sure each bite is rich without being heavy.</p> <p>This isn’t just dessert. It’s a pause in the evening. A reason to sit down. A reward, perhaps, for finishing a long week or simply for remembering to keep good chocolate in the cupboard.</p> <h2>Ingredients</h2> <ul><li>200g Digestive Biscuits</li> <li>100g Unsalted Butter</li> <li>300g Caramel Filling</li> <li>150g Dark Chocolate (70 Percent Cocoa)</li> <li>100ml Double Cream</li> <li>Flaky Sea Salt</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Make the base</strong><br> Crush the biscuits to a fine crumb. Mix with the melted butter until evenly coated. Press into the base of a 9-inch tart tin, smoothing the surface with the back of a spoon. Chill in the fridge for 10 minutes to firm up.</p></li> <li><p><strong>Prepare the caramel layer</strong><br> Gently warm the caramel in a saucepan or microwave until it becomes pourable. Pour over the chilled biscuit base and spread evenly. Return to the fridge and chill for 20 minutes, or until slightly set.</p></li> <li><p><strong>Make the ganache</strong><br> Heat the double cream in a small pan until it just begins to simmer. Remove from the heat and add the chopped chocolate. Let it sit for 1 minute, then stir slowly until smooth and glossy.</p></li> <li><p><strong>Assemble the tart</strong><br> Pour the ganache over the caramel layer. Tilt the tin gently to spread it into an even layer. Chill the tart in the fridge for at least 2 hours, or until fully set.</p></li> <li><p><strong>Finish and serve</strong><br> Just before serving, sprinkle the top with flaky sea salt. Slice with a warm knife for clean edges.</p></li></ol> <h2>Tips</h2> <ul><li>Press the biscuit base up the sides of the tin for a crisper crust-to-filling ratio.</li> <li>Stir a pinch of salt directly into the caramel if you like it more savoury.</li> <li>Add a splash of whisky or rum to the ganache for a grown up twist.</li></ul> <h2>Goes Great With</h2> <ul><li>A shot of espresso or strong brewed coffee</li> <li>A dollop of unsweetened whipped cream</li> <li>The kind of night that calls for something a little extra</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_35 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Salted_caramel_chocolate_tart_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_35 as _,
  metadata as m
};
