import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Lemon Posset with Shortbread Crumble",
  "slug": "lemon-posset-shortbread",
  "description": "A simple, elegant lemon cream dessert that sets with just cream, sugar, and citrus—topped with a buttery shortbread crumble for crunch.",
  "date": "2025-05-13T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/lemon-posset-shortbread.webp",
  "prepTime": 10,
  "cookTime": 5,
  "totalTime": "15 (plus chilling)",
  "servings": 4,
  "categories": ["dessert"],
  "tags": [
    "difficulty-easy",
    "indulgent",
    "bake",
    "vegetarian-option"
  ],
  "relatedProducts": [
    {
      "handle": "tate-lyle-caster-sugar-2kg",
      "featured": true
    },
    {
      "handle": "kerrymaid-uht-double-blue-cream-1ltr",
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
function Lemon_posset_shortbread_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>Lemon posset is magic in a teacup.<br> No eggs. No gelatine. Just cream, sugar, and lemon turning into something spoonable and silken like they were always meant to be together.</p> <p>There’s something old-fashioned and elegant about it, like a handwritten letter or a linen napkin.<br> But it’s also humble. It doesn’t shout. It whispers luxury from the fridge shelf, quietly ready for when you want to impress someone—or just treat yourself for surviving the week.</p> <p>And the shortbread crumble?<br> That’s where things get playful. It’s buttery and golden and shatters just enough to make each bite interesting.<br> Creamy meets crunchy. Tart meets sweet.<br> All in a dessert you can make with your eyes half-closed and a kettle boiling in the background.</p> <h2>Ingredients</h2> <h3>Make the Posset</h3> <ol><li><p>Pour the cream into a saucepan and add the sugar. Gently warm over medium heat until it begins to simmer. Stir often to help the sugar melt evenly.</p></li> <li><p>As soon as you see bubbles forming at the edges, take it off the heat. Stir in the lemon zest and juice. The acidity will react with the cream, thickening it almost instantly.</p></li> <li><p>Pour the mixture into glasses or ramekins. Let them cool slightly at room temperature, then cover and chill for at least 4 hours. Overnight is even better for that perfect, delicate set.</p></li></ol> <h3>Make the Crumble</h3> <ol><li><p>Rub the butter into the flour with your fingertips until it forms coarse crumbs. It should feel like damp sand between your fingers.</p></li> <li><p>Mix in the sugar and salt. Spread the mixture onto a lined baking tray and bake at 180°C (fan) for 10 to 12 minutes, or until lightly golden.</p></li> <li><p>Let it cool completely. It will crisp up as it cools. Crumble gently with your fingers before serving.</p></li></ol> <h3>Serve</h3> <p>Spoon a generous layer of shortbread crumble over each chilled posset just before serving.<br> It should crunch lightly under your spoon and give way to cool, citrus cream underneath.</p> <h2>Tips</h2> <ul><li>Let your possets chill fully to ensure the perfect set. Rushing the chill means a runnier texture.</li> <li>Add a few crushed berries or a spoon of raspberry coulis for colour and contrast.</li> <li>Lime, blood orange, or pink grapefruit can be swapped in for the lemon to change the mood without changing the method.</li> <li>Leftover crumble keeps well in an airtight jar—try it sprinkled on yoghurt, ice cream, or straight from the jar when no one’s looking.</li></ul> <h2>Goes Great With</h2> <ul><li>A glass of crisp white wine or chilled limoncello</li> <li>The end of a summer meal or Sunday roast</li> <li>A moment on the back step at golden hour, spoon in hand, no one asking questions</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_32 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Lemon_posset_shortbread_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_32 as _,
  metadata as m
};
