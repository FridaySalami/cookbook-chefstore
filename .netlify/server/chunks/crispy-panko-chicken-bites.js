import { D as sanitize_props, E as spread_props } from "./index2.js";
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
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>You ever bite into something and just stop for a second?<br> That perfect <em>crunch</em> gives way to juicy chicken, light and golden on the outside, tender and seasoned within.<br> These bites are made for dipping, stacking, or straight-up stealing off the tray before anyone notices.<br> Simple, crispy, and addictive in the best way.</p> <h2>Ingredients</h2> <ul><li>2 Chicken Breasts, Cut Into Bite-Sized Pieces</li> <li>1 Cup Panko Breadcrumbs</li> <li>½ Cup Plain Flour</li> <li>2 Large Eggs</li> <li>1 Teaspoon Garlic Powder</li> <li>½ Teaspoon Paprika</li> <li>Salt</li> <li>Black Pepper</li> <li>Vegetable Oil, For Frying</li></ul> <h3>Optional Dips</h3> <ul><li>Sweet Chili Sauce</li> <li>Honey Mustard</li> <li>Barbecue Sauce</li> <li>Garlic Mayonnaise</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Set up your coating station</strong><br> Place the flour in one shallow bowl. Beat the eggs in a second bowl. In a third, combine the panko breadcrumbs with garlic powder, paprika, a pinch of salt, and black pepper.</p></li> <li><p><strong>Coat the chicken</strong><br> Dip each piece of chicken into the flour, then the egg, then the seasoned panko. Press gently to help the coating stick.</p></li> <li><p><strong>Heat the oil</strong><br> Pour vegetable oil into a deep pan to a depth of about 2 inches. Heat to 180°C or 350°F. The oil should sizzle gently when a breadcrumb is dropped in.</p></li> <li><p><strong>Fry the chicken</strong><br> Fry the chicken pieces in batches for 2 to 3 minutes per side until golden brown and cooked through. Avoid overcrowding the pan.</p></li> <li><p><strong>Rest and drain</strong><br> Transfer cooked chicken to a plate lined with kitchen paper. Let rest a few minutes while you prep your dips.</p></li> <li><p><strong>Serve and enjoy</strong><br> Pile onto a platter and serve hot with your choice of dipping sauces.</p></li></ol> <h2>Tips</h2> <ul><li>For even more crunch, double dip: egg, panko, egg again, and another layer of panko</li> <li>Want to bake instead of fry? Lightly oil the breaded bites and bake at 200°C for 20 minutes, flipping halfway</li> <li>You can freeze them after breading for a quick fry-up anytime</li></ul> <h2>Goes Great With</h2> <ul><li>Crispy fries or oven-roasted wedges</li> <li>Tucked into wraps with shredded lettuce and garlic sauce</li> <li>Game nights, lunchboxes, or impromptu kitchen picnics</li></ul> <hr> <blockquote><p><strong>Simple to make, hard to stop eating. These bites don’t just crunch, they sing.</strong></p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Crispy_panko_chicken_bites_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_22 as _,
  metadata as m
};
