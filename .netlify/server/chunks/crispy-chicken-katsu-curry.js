import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Crispy Chicken Katsu Curry",
  "slug": "crispy-chicken-katsu-curry",
  "description": "Breaded, golden chicken breast sliced over fluffy rice and smothered in rich, Japanese-style katsu curry made with Yutaka paste.",
  "date": "2025-05-13T00:00:00.000Z",
  "featured": true,
  "image": "/images/recipes/category-name/recipe-name/crispy-chicken-katsu-curry.webp",
  "prepTime": 15,
  "cookTime": 20,
  "totalTime": 35,
  "servings": 2,
  "categories": ["dinner", "asian"],
  "tags": [
    "comfort-food",
    "family-friendly",
    "crowd-pleaser",
    "difficulty-easy"
  ],
  "relatedProducts": [
    {
      "handle": "yutaka-japanese-style-katsu-curry-paste-1kg",
      "featured": true
    },
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
  relatedProducts
} = metadata;
function Crispy_chicken_katsu_curry_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>It’s crispy, saucy, and comforting in all the best ways.<br> The panko chicken brings the crunch, the curry sauce wraps it in warmth, and the rice holds it all steady underneath.<br> Tastes like a Friday night favorite but made with your own hands, right in your own kitchen.</p> <h2>Ingredients</h2> <h3>For the Chicken</h3> <ul><li>2 Chicken Breasts</li> <li>Salt</li> <li>Black Pepper</li> <li>2 Tablespoons Plain Flour</li> <li>1 Egg</li> <li>50g Centaur Panko Breadcrumbs</li> <li>Oil, For Shallow Frying</li></ul> <h3>For the Curry Sauce</h3> <ul><li>2 to 3 Tablespoons Yutaka Japanese Style Katsu Curry Paste</li> <li>250ml Water or Chicken Stock</li></ul> <h3>To Serve</h3> <ul><li>Steamed Rice</li> <li>Pickled Vegetables or Shredded Cabbage (Optional)</li> <li>Spring Onions or Sesame Seeds, To Garnish</li></ul> <h2>Instructions</h2> <h3>1. Prepare the chicken</h3> <p>Place the chicken breasts between sheets of cling film and gently flatten with a rolling pin. Season both sides with salt and black pepper.<br> Set up a breading station with three shallow bowls. Place the flour in one, the beaten egg in another, and the panko crumbs in the third.<br> Dredge each piece of chicken in flour, then dip in egg, then coat in panko until fully covered.</p> <h3>2. Fry the chicken</h3> <p>Heat 1 to 2 centimeters of oil in a wide frying pan over medium heat. When the oil is hot enough to sizzle a breadcrumb, add the chicken.<br> Cook for 3 to 4 minutes per side until golden brown and cooked through.<br> Transfer to kitchen paper to drain and rest before slicing.</p> <h3>3. Make the sauce</h3> <p>In a small saucepan, stir the curry paste into the water or stock.<br> Bring to a simmer and cook for a few minutes until the sauce thickens and becomes smooth. Stir occasionally to prevent sticking.</p> <h3>4. Assemble the dish</h3> <p>Slice the rested chicken into strips. Serve over steamed rice, then pour the warm curry sauce generously over the top.<br> Finish with spring onions, sesame seeds, or shredded cabbage for a fresh crunch.</p> <h2>Tips</h2> <ul><li>For a vegetarian version, swap the chicken for firm tofu or roasted sweet potato slices</li> <li>Add Japanese pickles or a simple slaw on the side to balance the richness</li> <li>Leftover curry sauce keeps well in the fridge or freezer for a speedy lunch</li></ul> <h2>Goes Great With</h2> <ul><li>Fluffy jasmine or sticky rice</li> <li>A cold beer or iced green tea</li> <li>Weeknights that need a bit of gold and crunch</li></ul> <hr> <blockquote><p><strong>It’s comfort food with a crisp edge. Simple, golden, and just the right amount of messy.</strong></p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Crispy_chicken_katsu_curry_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_22 as _,
  metadata as m
};
