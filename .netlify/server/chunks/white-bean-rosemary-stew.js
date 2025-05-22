import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "White Bean & Rosemary Stew",
  "slug": "white-bean-rosemary-stew",
  "description": "A simple, hearty stew of white beans simmered with fresh rosemary, garlic, and olive oil—perfect with crusty bread or spooned over grilled polenta.",
  "date": "2025-05-14T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/white-bean-rosemary-stew.webp",
  "prepTime": 10,
  "cookTime": 30,
  "totalTime": 40,
  "servings": 4,
  "categories": ["main", "vegetarian", "stew", "one-pot"],
  "tags": ["comfort-food", "difficulty-easy"],
  "relatedProducts": [
    {
      "handle": "centaur-walnut-oil-500ml-bottle",
      "featured": true
    },
    {
      "handle": "manfredi-barbera-unfiltered-italian-extra-virgin-oil",
      "featured": true
    },
    {
      "handle": "parkers-whole-blanched-almonds-1kg",
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
function White_bean_rosemary_stew_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This stew is quiet food. No big tricks or loud spices, just a slow hum of garlic and rosemary drifting through the house like a memory you almost forgot you had. The beans soften into something almost like velvet. The broth thickens with time and a little patience. And the lemon zest at the end? It lifts the whole thing like sunlight on stone.</p> <p>It’s the kind of thing you make when you need a bit of holding. When the day’s been too loud or too long and all you want is a bowl, a spoon, and something to mop up the rest. It’s good the first night and even better the next.</p> <p>No show. All soul.</p> <h2>Ingredients</h2> <ul><li>2 Tablespoons Extra Virgin Olive Oil</li> <li>1 Small Onion</li> <li>3 Garlic Cloves</li> <li>2 Teaspoons Fresh Rosemary or 1 Teaspoon Dried Rosemary</li> <li>2 Cans White Beans or 400 Grams Cooked Beans</li> <li>500 Millilitres Vegetable Stock</li> <li>1 Bay Leaf</li> <li>Salt and Pepper, to taste</li> <li>Zest of 1 Lemon</li> <li>Crusty Bread or Grilled Polenta, to serve</li> <li>Optional: A Swirl of Walnut Oil for Serving</li></ul> <h2>Instructions</h2> <p><strong>Sauté the aromatics.</strong><br> Warm the olive oil in a heavy bottomed pot over medium heat. Dice the onion and add it in. Cook gently for about 5 minutes until the onion softens and turns translucent. It shouldn’t colour, just melt.</p> <p><strong>Add the garlic and rosemary.</strong><br> Thinly slice the garlic and stir it into the pot along with the rosemary. Let everything bloom together for 2 to 3 minutes. The scent will shift deeper, more resinous. That’s your cue to move on.</p> <p><strong>Stir in the beans and broth.</strong><br> Tip in the beans, pour over the stock, and drop in the bay leaf. Stir gently, then bring it all to a low simmer. You want it to just bubble around the edges.</p> <p><strong>Let it stew.</strong><br> Cover the pot loosely and let the stew simmer for 20 to 25 minutes. The beans should start to break down, and the broth should thicken slightly. If it feels too thin, take the lid off for the last 10 minutes.</p> <p><strong>Finish with zest and seasoning.</strong><br> Remove the bay leaf. Grate in the lemon zest and season well with salt and plenty of black pepper. Stir slowly. If you like, mash a few beans against the side of the pot to thicken the texture. Add a drizzle of walnut oil before serving if you’re in the mood for something nutty and rich.</p> <h2>Tips</h2> <ul><li>This stew only gets better the next day. Make extra if you can.</li> <li>For a silkier broth, mash a few beans near the end of cooking.</li> <li>Stir in chopped kale or spinach during the last 5 minutes for a green lift.</li></ul> <h2>Goes Great With</h2> <ul><li>Rustic sourdough or grilled flatbread</li> <li>A soft-poached egg nestled on top</li> <li>A spoonful of chili crisp or smoked paprika oil for heat and drama</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_56 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: White_bean_rosemary_stew_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_56 as _,
  metadata as m
};
