import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Lemon Chicken Orzo with Spinach & Garlic Butter",
  "slug": "lemon-chicken-orzo-spinach-garlic-butter",
  "description": "A bright and comforting one-pan dish of tender orzo simmered with garlic, lemon, spinach, and chicken stock. Finished with garlic butter and a little black pepper, it’s the kind of meal that feels both soothing and fresh.",
  "date": "2025-05-22T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/lemon-chicken-orzo-spinach-garlic-butter.webp",
  "prepTime": 10,
  "cookTime": 25,
  "totalTime": 35,
  "servings": 4,
  "categories": ["dinner", "one-pot", "comfort-food"],
  "tags": [
    "family-friendly",
    "chicken",
    "difficulty-easy"
  ],
  "relatedProducts": [
    {
      "handle": "pasta-reggia-riso-orzo-pasta-1x500g",
      "featured": true
    },
    { "handle": "maldon-sea-salt", "featured": true },
    {
      "handle": "manfredi-barbera-unfiltered-italian-extra-virgin-oil",
      "featured": true
    },
    {
      "handle": "oscar-all-natural-chicken-stock-1ltr",
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
function Lemon_chicken_orzo_spinach_garlic_butter_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This is one of those meals that quietly becomes a favourite. It’s made in one pan, but feels like something you gave time to. The orzo cooks straight into the stock, soaking up flavour as it softens. Garlic gives it warmth. Lemon keeps it bright. And just as everything starts to settle, in goes a spoonful of butter to round the whole thing off.</p> <p>The spinach melts in gently. The chicken, if you choose to add it, makes it hearty without making it heavy. And the whole thing finishes glossy, comforting, and just the right side of creamy.</p> <p>It’s the sort of dish that gives you a moment to pause — simple to make, kind to eat, and generous in the way only home-cooked food can be.</p> <h2>Ingredients</h2> <ul><li>1 Tablespoon Olive oil</li> <li>1 Onion</li> <li>2 Garlic cloves</li> <li>300g Orzo</li> <li>750ml Chicken stock</li> <li>1 Lemon</li> <li>100g Baby spinach</li> <li>1 Tablespoon Butter</li> <li>½ Teaspoon Maldon Sea Salt</li> <li>Black pepper</li> <li>200g Cooked chicken (optional)</li> <li>Grated Parmesan cheese (optional)</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Warm the base.</strong><br> Heat the olive oil in a large pan over medium heat. Add the finely diced onion and cook for 5 to 6 minutes until soft and translucent. Stir in the garlic and cook for 1 minute more, just until fragrant.</p></li> <li><p><strong>Toast the orzo.</strong><br> Add the orzo and stir it through the onion. Cook for 1 to 2 minutes until the grains are lightly golden. This gives a little depth to the final flavour.</p></li> <li><p><strong>Simmer gently.</strong><br> Pour in the chicken stock. Stir once and bring to a gentle simmer. Season with salt and a few grinds of black pepper. Lower the heat and simmer for 10 to 12 minutes, stirring every couple of minutes to prevent sticking. The orzo should be tender and most of the liquid absorbed.</p></li> <li><p><strong>Add the chicken and spinach.</strong><br> If using, add the cooked chicken and let it warm through. Stir in the spinach and let it wilt gently into the orzo.</p></li> <li><p><strong>Finish with lemon and butter.</strong><br> Squeeze in the juice of half a lemon and stir through the butter. Let everything melt together. Taste and adjust the seasoning with more salt, pepper, or lemon if needed.</p></li> <li><p><strong>Serve and garnish.</strong><br> Spoon into bowls. Top with Parmesan cheese and an extra crack of black pepper if you like.</p></li></ol> <h2>Tips</h2> <ul><li>Swap chicken stock for vegetable stock and skip the chicken for a vegetarian version</li> <li>Add peas or asparagus for more colour and bite</li> <li>A spoonful of crème fraîche or soft cheese stirred in at the end makes it richer</li></ul> <h2>Goes Great With</h2> <ul><li>A crisp cucumber and herb salad</li> <li>Warm crusty bread with olive oil</li> <li>A lemon spritz or cold glass of white wine</li></ul> <hr> <blockquote><p>It’s light. It’s creamy. It’s the kind of dinner that fills you up without slowing you down.</p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_37 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Lemon_chicken_orzo_spinach_garlic_butter_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_37 as _,
  metadata as m
};
