import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Creamy Garlic Mushroom Tagliatelle",
  "slug": "creamy-garlic-mushroom-tagliatelle",
  "description": "Silky tagliatelle coated in a rich garlic and mushroom cream sauce, finished with parmesan and cracked black pepper. A simple, comforting pasta with a touch of elegance.",
  "date": "2025-05-22T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/creamy-garlic-mushroom-tagliatelle.webp",
  "prepTime": 10,
  "cookTime": 15,
  "totalTime": 25,
  "servings": 4,
  "categories": ["dinner", "pasta", "comfort-food"],
  "tags": [
    "vegetarian-option",
    "comfort-food",
    "pasta",
    "quick",
    "difficulty-easy"
  ],
  "relatedProducts": [
    {
      "handle": "rummo-premium-italian-no-107-tagliatelle-12-500gm",
      "featured": true
    },
    {
      "handle": "colavita-100-italian-extra-virgin-olive-oil-750ml",
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
function Creamy_garlic_mushroom_tagliatelle_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This is one of those pastas that doesn’t need much — just a little heat, a splash of cream, and a quiet moment at the stove. The mushrooms bring depth and softness. The garlic builds warmth, not sharpness. And the tagliatelle catches every drop of sauce in its silky ribbons.</p> <p>It feels a little indulgent but never too much. A dinner that comes together in less than half an hour, yet still makes you slow down when you eat it.</p> <p>Whether it’s the end of a long day or a quiet moment for yourself, this one says “You’re home now.” And that’s reason enough.</p> <h2>Ingredients</h2> <ul><li>250g Tagliatelle</li> <li>1 Tablespoon Olive Oil</li> <li>300g Mushrooms</li> <li>3 Garlic Cloves</li> <li>150ml Double Cream</li> <li>50g Grated Cheese (Parmesan or Blend)</li> <li>1 Teaspoon Fine Sea Salt</li> <li>Black Pepper</li> <li>Fresh Parsley (optional)</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Cook the pasta.</strong><br> Bring a large pot of salted water to a boil. Add the tagliatelle and cook until just al dente, following the packet time. Reserve a cup of pasta water before draining.</p></li> <li><p><strong>Sauté the mushrooms.</strong><br> While the pasta cooks, heat the olive oil in a large frying pan over medium heat. Slice the mushrooms and add them to the pan. Cook for 5 to 7 minutes until golden and tender. Stir occasionally so they colour evenly without steaming.</p></li> <li><p><strong>Add garlic and cream.</strong><br> Turn the heat to low. Add the minced garlic and cook for about 1 minute, just until fragrant. Pour in the double cream and bring to a gentle simmer. Season with salt and pepper.</p></li> <li><p><strong>Combine with pasta.</strong><br> Add the drained tagliatelle to the sauce. Toss gently to coat. If it looks too thick, add a splash of reserved pasta water to loosen it to a silky consistency.</p></li> <li><p><strong>Stir in the cheese.</strong><br> Add the grated cheese and stir through until melted. Let it rest for a minute or two off the heat so the sauce clings properly to the pasta.</p></li> <li><p><strong>Serve.</strong><br> Divide between plates and scatter with chopped parsley if using. Add a final grind of black pepper on top.</p></li></ol> <h2>Tips</h2> <ul><li>Use a mix of mushrooms for more flavour and texture</li> <li>Add a splash of white wine before the cream for extra depth</li> <li>A pinch of nutmeg works well stirred into the cream</li></ul> <h2>Goes Great With</h2> <ul><li>Rocket and parmesan salad with lemon dressing</li> <li>Garlic bread or focaccia</li> <li>A chilled glass of white wine or sparkling elderflower</li></ul> <hr> <blockquote><p>Simple enough to make on a Monday, comforting enough to feel like Saturday. Every strand carries flavour, warmth, and a little quiet joy.</p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Creamy_garlic_mushroom_tagliatelle_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_15 as _,
  metadata as m
};
