import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Cheesy Broccoli & Potato Frittata Bake",
  "slug": "cheesy-broccoli-potato-frittata-bake",
  "description": "A simple oven-baked frittata packed with tender broccoli, soft potato, and golden melted cheese. Easy to prep, good hot or cold, and perfect for dinner or the lunchbox.",
  "date": "2025-05-20T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/cheesy-broccoli-potato-frittata-bake.webp",
  "prepTime": 15,
  "cookTime": 30,
  "totalTime": 45,
  "servings": 4,
  "categories": ["dinner", "lunch", "vegetarian"],
  "tags": [
    "family-friendly",
    "vegetarian",
    "difficulty-easy"
  ],
  "relatedProducts": [
    { "handle": "maldon-sea-salt", "featured": true },
    {
      "handle": "retail-maille-dijon-mustard-210gm",
      "featured": false
    },
    {
      "handle": "manfredi-barbera-unfiltered-italian-extra-virgin-oil",
      "featured": false
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
function Cheesy_broccoli_potato_frittata_bake_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This is the kind of bake you make when you need something easy but nourishing. It’s soft inside with just enough crisp at the edges. The potatoes bring comfort. The broccoli adds brightness. The cheese does what cheese always does — holds it all together in a way that feels right.</p> <p>There’s no pastry to fuss with, no flour to weigh out. Just eggs, cooked vegetables, and a bit of seasoning. It bakes quietly while you get on with everything else.</p> <p>It’s a dinner that slides easily into lunchboxes. It feeds kids and grown-ups the same. And it tastes just as good cold from the fridge the next day with a bit of mustard or ketchup on the side.</p> <h2>Ingredients</h2> <ul><li>6 Eggs</li> <li>2 Medium potatoes</li> <li>1 Small head of broccoli</li> <li>100g Cheddar cheese</li> <li>1 Onion</li> <li>1 Tablespoon Olive oil</li> <li>1 Teaspoon Maldon Sea Salt</li> <li>Black pepper</li> <li>1 Teaspoon Dijon mustard (optional)</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Preheat the oven to 200°C (fan 180°C).</strong><br> Lightly grease a medium baking dish or line it with parchment.</p></li> <li><p><strong>Cook the potatoes and broccoli.</strong><br> Peel the potatoes and cut into small cubes. Boil in salted water for 8 to 10 minutes until just tender. In the last 3 minutes, add the broccoli florets to the pot. Drain and set aside to cool slightly.</p></li> <li><p><strong>Soften the onion.</strong><br> In a frying pan, warm the olive oil and gently cook the onion until soft and translucent, about 5 minutes. Let it cool for a minute before mixing in.</p></li> <li><p><strong>Whisk the eggs.</strong><br> Crack the eggs into a bowl. Add salt, pepper, and mustard if using. Beat until smooth. Stir in the grated cheddar, then gently fold in the cooked vegetables and onion.</p></li> <li><p><strong>Pour into the baking dish.</strong><br> Spread the mixture evenly in the dish. Give it a gentle shake to settle the top.</p></li> <li><p><strong>Bake until set and golden.</strong><br> Bake for 25 to 30 minutes until the centre is firm and the top is lightly browned. A knife inserted in the middle should come out clean.</p></li> <li><p><strong>Rest before serving.</strong><br> Let it sit for 5 minutes so the structure holds. Slice into squares or wedges.</p></li></ol> <h2>Tips</h2> <ul><li>Swap broccoli for spinach, peas, or any greens you have on hand</li> <li>Add crumbled feta or diced ham if you want to bulk it out</li> <li>Leftovers can be chilled and eaten cold or gently reheated in a pan</li></ul> <h2>Goes Great With</h2> <ul><li>A crisp green salad or tomato slices</li> <li>Garlic bread or buttered toast</li> <li>A spoonful of ketchup, chutney, or mustard on the side</li></ul> <hr> <blockquote><p>Soft in the middle, golden on top. A dish that makes sense at any time of day.</p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cheesy_broccoli_potato_frittata_bake_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_4 as _,
  metadata as m
};
