import { I as sanitize_props, J as spread_props } from "./index3.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "One-Pan Harissa Chickpeas with Eggs",
  "slug": "one-pan-harissa-chickpeas-eggs",
  "description": "A rich, spiced tomato and harissa chickpea stew finished with soft eggs and fresh herbs. Perfect for brunch, lunch, or mopping up with warm bread.",
  "date": "2025-05-12T00:00:00.000Z",
  "featured": true,
  "image": "/images/recipes/category-name/recipe-name/one-pan-harissa-chickpeas-eggs.webp",
  "prepTime": 10,
  "cookTime": 20,
  "totalTime": 30,
  "servings": 3,
  "categories": ["brunch", "dinner"],
  "tags": [
    "vegetarian",
    "spicy",
    "comfort-food",
    "difficulty-easy"
  ],
  "relatedProducts": [
    {
      "handle": "belazu-retail-rose-harissa-170gm",
      "featured": true
    },
    { "handle": "riverdene-tinned-chick-peas-800g" }
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
function One_pan_harissa_chickpeas_eggs_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This is the kinda dish that shows up with no fuss and still steals the show.<br> The sauce? Deep and smoky with that floral heat from the rose harissa.<br> The chickpeas? Creamy but bold.<br> And the eggs? Well, they just float in there like they belong—because they do.</p> <h2>Ingredients</h2> <ul><li>1 tbsp olive oil</li> <li>1 small onion, finely chopped</li> <li>2 garlic cloves, minced</li> <li>1 tsp ground cumin</li> <li>2 tbsp Belazu Rose Harissa</li> <li>400g tinned chopped tomatoes (or passata)</li> <li>400–500g Riverdene tinned chickpeas (drained)</li> <li>Salt &amp; pepper to taste</li> <li>3–4 eggs</li> <li>Fresh parsley or coriander, for garnish</li> <li>Crusty bread or flatbreads, to serve</li></ul> <h2>Instructions</h2> <ol><li>Heat olive oil in a large skillet or pan over medium heat.</li> <li>Add onion and cook for 5–6 minutes until soft and golden. Stir in garlic and cumin; cook 1 minute.</li> <li>Stir in the rose harissa and cook for another minute until fragrant.</li> <li>Pour in the chopped tomatoes, chickpeas, and a splash of water if needed. Season well with salt and pepper.</li> <li>Simmer for 10 minutes, stirring occasionally, until thickened.</li> <li>Make small wells in the sauce and crack in the eggs.</li> <li>Cover the pan with a lid or foil and cook for 5–7 minutes until the egg whites are set but yolks are still soft.</li> <li>Sprinkle with chopped herbs and serve hot with warm bread.</li></ol> <h2>Tips</h2> <ul><li>Add spinach or kale for a leafy boost.</li> <li>Want it creamier? Swirl in a spoon of Greek yoghurt before serving.</li> <li>Make it vegan by skipping the eggs and topping with crispy tofu or avocado.</li></ul> <h2>Goes Great With</h2> <ul><li>Toasted sourdough or garlic flatbreads</li> <li>A dollop of yoghurt or labneh</li> <li>Cold mornings, warm company</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: One_pan_harissa_chickpeas_eggs_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_10 as _,
  metadata as m
};
