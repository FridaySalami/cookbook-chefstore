import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Creamy Chicken & Leek Pie",
  "slug": "creamy-chicken-leek-pie",
  "description": "Tender chicken and soft leeks in a white wine cream sauce, tucked under golden puff pastry. This pie brings warmth, comfort, and plenty of second helpings.",
  "date": "2025-05-22T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/creamy-chicken-leek-pie.webp",
  "prepTime": 20,
  "cookTime": 35,
  "totalTime": 55,
  "servings": 4,
  "categories": ["dinner", "pie", "comfort-food"],
  "tags": [
    "chicken",
    "comfort-food",
    "difficulty-medium"
  ],
  "relatedProducts": [
    {
      "handle": "heygates-fine-lady-plain-flour-1-5kg",
      "featured": true
    },
    {
      "handle": "kerrymaid-uht-double-blue-cream-1ltr",
      "featured": true
    },
    { "handle": "maldon-sea-salt", "featured": true },
    {
      "handle": "centaur-dijon-mustard-1kg",
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
function Creamy_chicken_leek_pie_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>There’s something deeply comforting about a pie like this. A golden, puffed-up lid hiding a soft and savoury filling beneath. It’s warm and familiar, but still feels like something special.</p> <p>The chicken is tender. The leeks melt into the sauce. The cream and mustard pull it all together in a way that’s rich but never heavy. The wine brings a quiet brightness, and the pastry? It’s the kind of flake that makes you close your eyes for a second.</p> <p>This pie doesn’t ask for a celebration — it becomes one. The kind of dinner that slows the room down a little, makes people linger just a few bites longer, and fills more than just the plate.</p> <h2>Ingredients</h2> <ul><li>500g Diced Chicken Thigh or Breast</li> <li>2 Leeks</li> <li>2 Garlic Cloves</li> <li>1 Tablespoon Olive Oil</li> <li>25g Butter</li> <li>1 Tablespoon Heygates Plain Flour</li> <li>150ml White Wine</li> <li>200ml Kerrymaid Double Cream</li> <li>1 Teaspoon Maldon Sea Salt</li> <li>Black Pepper</li> <li>1 Teaspoon Centaur Dijon Mustard</li> <li>320g Puff Pastry Sheet</li> <li>1 Egg (for brushing)</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Start the base.</strong><br> Heat olive oil and butter in a large pan over medium heat. Add the sliced leeks and cook for about 6 to 8 minutes until soft. Stir in the garlic and cook for 1 minute more.</p></li> <li><p><strong>Brown the chicken.</strong><br> Add the diced chicken to the pan. Stir regularly and cook for 5 to 7 minutes until just coloured. It does not need to be fully cooked at this stage.</p></li> <li><p><strong>Build the sauce.</strong><br> Stir in the flour and let it cook for 1 minute, coating the chicken and leeks. Pour in the white wine and let it bubble for 2 minutes to reduce slightly.</p></li> <li><p><strong>Add cream and mustard.</strong><br> Stir in the cream and Dijon mustard. Season with Maldon sea salt and plenty of black pepper. Let the mixture simmer for 4 to 5 minutes until slightly thickened. Remove from heat and allow to cool slightly before assembling.</p></li> <li><p><strong>Assemble the pie.</strong><br> Spoon the filling into a pie dish. Roll out the puff pastry and lay it over the top. Trim any overhang, press the edges to seal, and cut a small steam hole in the centre.</p></li> <li><p><strong>Bake until golden.</strong><br> Brush the top with beaten egg. Bake in a 200°C (fan 180°C) oven for 25 to 30 minutes or until the pastry is deep golden and puffed.</p></li> <li><p><strong>Let it rest.</strong><br> Allow the pie to sit for 5 minutes before serving. The filling will settle and become easier to portion.</p></li></ol> <h2>Tips</h2> <ul><li>Use cooked leftover chicken and skip the browning step to save time</li> <li>Stir in a handful of peas or chopped spinach before baking for a touch of green</li> <li>A teaspoon of tarragon or thyme adds lovely herbal depth</li></ul> <h2>Goes Great With</h2> <ul><li>Steamed broccoli or green beans</li> <li>Mashed potatoes or a light green salad</li> <li>A spoonful of apple chutney or sharp pickle on the side</li></ul> <hr> <blockquote><p>The pie you imagine when you need a little warmth. A flaky top, a creamy centre, and everything good tucked beneath the surface.</p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Creamy_chicken_leek_pie_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_15 as _,
  metadata as m
};
