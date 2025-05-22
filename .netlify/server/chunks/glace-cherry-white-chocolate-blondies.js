import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Glace Cherry & White Chocolate Blondies",
  "slug": "glace-cherry-white-chocolate-blondies",
  "description": "Fudgy, golden blondies studded with sweet glacé cherries and creamy white chocolate. A nostalgic bake with a modern twist.",
  "date": "2025-05-14T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/glace-cherry-white-chocolate-blondies.webp",
  "prepTime": 10,
  "cookTime": 25,
  "totalTime": 35,
  "servings": 12,
  "categories": ["dessert", "traybake", "tea-time"],
  "tags": [
    "bake",
    "crowd-pleaser",
    "difficulty-easy",
    "vegetarian"
  ],
  "relatedProducts": [
    {
      "handle": "glace-cherries-1kg",
      "featured": true
    },
    {
      "handle": "callebaut-white-chocolate-callets-5kg"
    },
    {
      "handle": "neilson-massey-pure-almond-extract-60ml"
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
function Glace_cherry_white_chocolate_blondies_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>Sweet glacé cherries. Creamy white chocolate. A fudgy, golden blondie base that walks the line between soft and chewy.<br> These feel like something from a childhood bake sale but with just enough grown-up flourish to bring them proudly to a dinner party.<br> They’re simple, nostalgic, and exactly the kind of thing that disappears before the kettle’s even boiled.</p> <h2>Ingredients</h2> <ul><li>170g Unsalted Butter, Melted</li> <li>220g Light Brown Sugar</li> <li>2 Large Eggs</li> <li>1 Teaspoon Vanilla Extract</li> <li>½ Teaspoon Nielsen-Massey Pure Almond Extract</li> <li>200g Plain Flour</li> <li>1 Teaspoon Baking Powder</li> <li>Pinch of Salt</li> <li>100g Glace Cherries, Halved</li> <li>150g Callebaut White Chocolate Callets</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Prepare your tin</strong><br> Preheat the oven to 180°C or 160°C fan. Line a 20cm square tin with parchment, leaving some overhang for easy lifting later.</p></li> <li><p><strong>Blend the butter and sugar</strong><br> In a mixing bowl, stir together the melted butter and brown sugar until it looks glossy and rich like warm caramel.</p></li> <li><p><strong>Add the eggs and extracts</strong><br> Whisk in the eggs one at a time. Then stir through the vanilla and almond extract until smooth and thick.</p></li> <li><p><strong>Mix the dry ingredients</strong><br> In another bowl, combine the flour, baking powder, and salt. Add this to the wet mixture and fold gently until just combined. Don’t overmix or you’ll lose the fudgy texture.</p></li> <li><p><strong>Add the fun stuff</strong><br> Toss the halved cherries in a little flour (this stops them sinking). Fold them into the batter with the white chocolate callets.</p></li> <li><p><strong>Spread and smooth</strong><br> Spoon the mixture into the lined tin and level the top. It doesn’t have to look perfect—it’ll settle as it bakes.</p></li> <li><p><strong>Bake to perfection</strong><br> Bake for 22 to 25 minutes. You’re looking for golden edges and a centre that’s just set. A skewer should come out with moist crumbs, not raw batter.</p></li> <li><p><strong>Cool and slice</strong><br> Let cool completely in the tin. Lift out using the parchment and slice into squares.</p></li></ol> <h2>Tips</h2> <ul><li>Scatter flaked almonds on top before baking for extra crunch and almond depth</li> <li>Swap cherries for dried cranberries or chopped apricots if you fancy a twist</li> <li>These freeze well wrap individually and freeze for up to 2 months</li></ul> <h2>Goes Great With</h2> <ul><li>A Strong Builder’s Tea or Vanilla Latte</li> <li>An Afternoon Bake Sale or Sweet Little Picnic</li> <li>Warm Custard When You’re Feeling Naughty</li></ul> <hr> <blockquote><p><strong>Soft, sweet, a little sticky at the edges these blondies are a love letter to the bottom of the biscuit tin.</strong></p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_35 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Glace_cherry_white_chocolate_blondies_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_35 as _,
  metadata as m
};
