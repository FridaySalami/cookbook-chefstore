import { I as sanitize_props, J as spread_props } from "./index3.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Crispy Panko Chicken Bites",
  "slug": "crispy-panko-chicken-bites",
  "description": "Golden, crunchy chicken bites coated in light panko breadcrumbs—perfect for dipping, snacking, or tossing into wraps and salads.",
  "date": "2025-04-24T00:00:00.000Z",
  "featured": true,
  "image": "/images/recipes/category-name/recipe-name/crispy-panko-chicken-bites.webp",
  "prepTime": 15,
  "cookTime": 10,
  "totalTime": 25,
  "servings": 4,
  "categories": ["snack", "main course"],
  "tags": [
    "quick",
    "family-friendly",
    "difficulty-easy",
    "chicken"
  ],
  "recipeCuisine": ["Japanese", "American"],
  "relatedProducts": [
    {
      "handle": "gluten-free-panko-style-crumbs",
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
  recipeCuisine,
  relatedProducts
} = metadata;
function Crispy_panko_chicken_bites_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>You ever bite into somethin’ and hear that <em>crackle</em>? That “oh dang” sound?<br> That’s panko magic.<br> These chicken bites are light, crispy, and way better than anything in the freezer aisle.<br> Perfect for parties, kids’ dinners, or sneakin’ a few straight from the tray before anyone notices.</p> <h2>Ingredients</h2> <ul><li>2 chicken breasts, cut into bite-sized chunks</li> <li>1 cup Panko Breadcrumbs</li> <li>1/2 cup plain flour</li> <li>2 large eggs, beaten</li> <li>1 tsp garlic powder</li> <li>1/2 tsp paprika</li> <li>Salt and pepper, to taste</li> <li>Vegetable oil, for frying</li></ul> <p><strong>Optional Dips:</strong></p> <ul><li>Sweet chili sauce</li> <li>Honey mustard</li> <li>BBQ sauce</li> <li>Garlic mayo</li></ul> <h2>Instructions</h2> <ol><li>Set up three bowls: one with flour, one with beaten eggs, one with panko breadcrumbs mixed with garlic powder, paprika, salt, and pepper.</li> <li>Dip each chicken piece first into flour, then egg, then panko, pressing lightly to coat.</li> <li>Heat about 2 inches of oil in a deep pan to 180°C / 350°F.</li> <li>Fry chicken bites in batches for 2–3 minutes per side, until golden brown and cooked through.</li> <li>Drain on kitchen paper.</li> <li>Serve hot with your favourite dipping sauces.</li></ol> <h2>Tips</h2> <ul><li>Want extra crunch? Double-dip: egg, panko, egg again, panko again.</li> <li>Bake instead of frying? Spray with oil and bake at 200°C for about 20 minutes, flipping halfway.</li> <li>Great for meal prep—freeze after breadcrumbing for quick fry-ups later.</li></ul> <h2>Goes Great With</h2> <ul><li>Crispy fries or a side salad</li> <li>Stuffed into wraps with slaw</li> <li>Piled high for game night feasting</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Crispy_panko_chicken_bites_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_3 as _,
  metadata as m
};
