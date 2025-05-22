import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Goat’s Cheese & Caramelised Onion Vol-au-Vents",
  "slug": "goats-cheese-onion-vol-au-vents",
  "description": "Buttery puff pastry cases filled with sweet caramelised onions, creamy goat’s cheese, and a sprinkle of thyme. A perfect starter or elegant party bite.",
  "date": "2025-05-12T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/goats-cheese-onion-vol-au-vents.webp",
  "prepTime": 10,
  "cookTime": 15,
  "totalTime": 25,
  "servings": 6,
  "categories": ["starter", "snack", "party"],
  "tags": [
    "vegetarian-option",
    "difficulty-easy",
    "crowd-pleaser"
  ],
  "relatedProducts": [
    {
      "handle": "pidy-medium-vol-au-vents-72-x-7-8cm",
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
function Goats_cheese_onion_vol_au_vents_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>These little pastries are the kind of thing that make people lean in for the recipe before they’ve even finished chewing.<br> Golden puff pastry, sweet slow-cooked onion, creamy goat’s cheese, and a flicker of thyme on top.<br> They’re quick, elegant, and feel far more impressive than the effort suggests.</p> <h2>Ingredients</h2> <ul><li>6 Pidy Medium Vol-au-Vents</li> <li>1 Medium Red Onion, Finely Sliced</li> <li>1 Tablespoon Olive Oil or Butter</li> <li>1 Teaspoon Brown Sugar</li> <li>1 Teaspoon Balsamic Vinegar</li> <li>100g Goat’s Cheese</li> <li>Fresh Thyme Leaves or a Pinch of Dried Thyme</li> <li>Salt and Pepper, To Taste</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Set the stage</strong><br> Preheat your oven to 180°C fan. Line a tray with parchment or just give it a wipe of oil. Place the vol-au-vent cases on the tray, spaced and ready like little pastry boats waiting for cargo.</p></li> <li><p><strong>Slow the world down with onions</strong><br> In a small pan, warm the olive oil over low heat. Add the sliced red onion and a pinch of salt. Let it soften slowly, stirring now and then. This isn’t a rush job—give it 8 to 10 minutes to melt down into something sweet and gentle.</p></li> <li><p><strong>Turn them golden</strong><br> Stir in the brown sugar and balsamic. Let everything bubble and glaze for another few minutes. You’ll know it’s ready when it smells like something you’d wear as perfume if you could get away with it.</p></li> <li><p><strong>Build your bites</strong><br> Spoon a little of the warm onion mix into each vol-au-vent case. It doesn’t need to be precise—just enough to give each one a rich, jammy heart.</p></li> <li><p><strong>Top and scatter</strong><br> Crumble the goat’s cheese lovingly over the onions. Don’t worry about perfection—goat’s cheese likes to melt in interesting ways. Finish with a few thyme leaves or a pinch of dried thyme.</p></li> <li><p><strong>Bake until golden and irresistible</strong><br> Slide the tray into the oven and bake for 8 to 10 minutes. The pastry should puff, the cheese should soften, and the smell should make your kitchen feel like a tiny French café.</p></li> <li><p><strong>Serve with charm</strong><br> Let them cool for a minute or two before serving, just enough so no one burns their mouth. Then let the tearing and sharing begin.</p></li></ol> <h2>Tips</h2> <ul><li>Add a pinch of chilli flakes to the onion mix for gentle heat</li> <li>Swap goat’s cheese for blue cheese or creamy brie for a different depth</li> <li>Make them ahead and keep chilled. Bake just before serving so they’re crisp and irresistible</li></ul> <h2>Goes Great With</h2> <ul><li>A Rocket Salad Dressed with Lemon and Olive Oil</li> <li>A Glass of Prosecco, Dry White, or Sparkling Elderflower</li> <li>The First Hour of a Dinner Party, While People Mingle and Smile</li></ul> <hr> <blockquote><p><strong>They’re small, but they speak volumes. One bite and you’re halfway to hosting legend status.</strong></p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_29 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Goats_cheese_onion_vol_au_vents_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_29 as _,
  metadata as m
};
