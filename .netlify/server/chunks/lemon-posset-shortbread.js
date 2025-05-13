import { I as sanitize_props, J as spread_props } from "./index3.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Lemon Posset with Shortbread Crumble",
  "slug": "lemon-posset-shortbread",
  "description": "A simple, elegant lemon cream dessert that sets with just cream, sugar, and citrus—topped with a buttery shortbread crumble for crunch.",
  "date": "2025-05-13T00:00:00.000Z",
  "featured": true,
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
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>It’s lemony, silky, and sets like magic—no eggs, no gelatin, just citrus sorcery.<br> Topped with a buttery crumble, it walks the line between elegant dinner party and “I had lemons to use up.”</p> <h2>Ingredients</h2> <h3>For the Posset</h3> <ul><li>600ml Kerrymaid UHT Double Cream</li> <li>150g Tate &amp; Lyle Caster Sugar</li> <li>Zest of 1 lemon</li> <li>Juice of 2 lemons</li></ul> <h3>For the Shortbread Crumble (optional)</h3> <ul><li>50g plain flour</li> <li>30g cold butter</li> <li>20g Tate &amp; Lyle Caster Sugar</li> <li>Pinch of salt</li></ul> <h2>Instructions</h2> <h3>1. Make the Posset</h3> <ol><li>In a saucepan, gently heat the cream and sugar until just simmering. Stir to dissolve.</li> <li>Once sugar is fully dissolved and the mix just starts to bubble, remove from heat.</li> <li>Stir in lemon zest and juice. The acid will thicken the cream.</li> <li>Pour into ramekins or glasses and chill for at least 4 hours, or overnight.</li></ol> <h3>2. Make the Crumble</h3> <ol><li>Rub butter into flour with fingertips until it resembles breadcrumbs.</li> <li>Stir in sugar and a pinch of salt.</li> <li>Bake at 180°C (fan) on a lined tray for 10–12 minutes or until golden. Cool, then crumble.</li></ol> <h3>3. Serve</h3> <p>Top each posset with a spoonful of crumble just before serving for a contrast of textures.</p> <h2>Tips</h2> <ul><li>Add crushed berries or a raspberry coulis for colour and tartness.</li> <li>Swap lemon for lime or blood orange if you’re feelin’ fancy.</li> <li>Store possets covered in the fridge for up to 3 days.</li></ul> <h2>Goes Great With</h2> <ul><li>A crisp white wine</li> <li>Summer evenings or Sunday roast dessert rounds</li> <li>A quiet moment to yourself</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Lemon_posset_shortbread_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_11 as _,
  metadata as m
};
