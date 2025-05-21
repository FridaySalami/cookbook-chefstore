import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Creamy Chicken & Sweetcorn Pasta Bake",
  "slug": "creamy-chicken-sweetcorn-pasta-bake",
  "description": "A comforting pasta bake with tender chicken, sweetcorn, and a velvety cream sauce, all topped with golden bubbling cheese. Made to please little ones and grown-ups alike.",
  "date": "2025-05-20T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/creamy-chicken-sweetcorn-pasta-bake.webp",
  "prepTime": 15,
  "cookTime": 30,
  "totalTime": 45,
  "servings": 4,
  "categories": ["dinner", "pasta", "comfort-food"],
  "tags": [
    "family-friendly",
    "chicken",
    "difficulty-easy"
  ],
  "relatedProducts": [
    { "handle": "maldon-sea-salt", "featured": true },
    {
      "handle": "ballerina-sweetcorn-340g-tin",
      "featured": true
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
function Creamy_chicken_sweetcorn_pasta_bake_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This is the kind of dinner that brings the table together without a fight. A soft, bubbling bake that smells like comfort and ends with second helpings. It’s everything you hope for after a long day — warm, creamy, golden on top, and gentle enough for little mouths.</p> <p>The pasta catches just at the edges where the sauce clings. The chicken is tender, the sweetcorn pops, and there’s a mellow garlic hum in the background. A few minutes in the oven turns everything familiar into something you want to slow down for.</p> <p>It’s a use-what-you’ve-got kind of dish. Something to hold the household together on days when you need an easy win. And once it hits the table, it usually goes quiet except for the sound of forks scraping plates.</p> <h2>Ingredients</h2> <ul><li>300g Pasta</li> <li>300g Cooked chicken</li> <li>150g Sweetcorn</li> <li>2 Tablespoons Butter</li> <li>2 Tablespoons Plain flour</li> <li>500ml Milk</li> <li>1 Teaspoon Maldon Sea Salt</li> <li>Black pepper</li> <li>1 Garlic clove</li> <li>1 Teaspoon Dijon mustard (optional)</li> <li>100g Cheddar cheese</li> <li>30g Parmesan cheese</li> <li>1 Tablespoon Olive oil</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Heat the oven to 200°C (fan 180°C).</strong><br> Lightly oil a baking dish and set it aside for later.</p></li> <li><p><strong>Cook the pasta.</strong><br> Bring a large pot of salted water to the boil. Add the pasta and cook for 2 minutes less than the packet time. This helps it hold shape once baked. Drain and keep aside.</p></li> <li><p><strong>Start the white sauce.</strong><br> In a saucepan, melt the butter over medium heat. Stir in the flour and whisk for 1 to 2 minutes until it smells nutty and golden. Slowly add the milk in stages, whisking to keep it smooth. Let it simmer gently for a few minutes until thickened.</p></li> <li><p><strong>Build the flavour.</strong><br> Stir in the crushed garlic, salt, a few grinds of pepper, and the mustard if using. Add half the cheddar and all the Parmesan. Stir until melted and smooth.</p></li> <li><p><strong>Combine the filling.</strong><br> In a large bowl, mix the cooked pasta with the chicken and sweetcorn. Pour over the cheese sauce and fold gently until everything is well coated.</p></li> <li><p><strong>Assemble the bake.</strong><br> Spoon the mixture into the prepared baking dish. Sprinkle with the remaining cheddar.</p></li> <li><p><strong>Bake until golden and bubbling.</strong><br> Place in the oven and bake for 25 to 30 minutes. The cheese should be golden and the sauce gently bubbling at the edges.</p></li> <li><p><strong>Rest before serving.</strong><br> Let the bake sit for 5 minutes. This helps the sauce settle and makes serving easier.</p></li></ol> <h2>Tips</h2> <ul><li>Add frozen peas or chopped spinach to the filling for extra veg</li> <li>Stir in a spoonful of cream cheese for a richer, silkier sauce</li> <li>Use rotisserie chicken or leftovers to make prep quicker</li></ul> <h2>Goes Great With</h2> <ul><li>Buttered green beans or broccoli</li> <li>A crisp tomato and cucumber salad</li> <li>Garlic bread or soft white rolls</li></ul> <hr> <blockquote><p>A dish to lean on. Something warm, familiar, and just a little bit golden around the edges.</p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Creamy_chicken_sweetcorn_pasta_bake_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_9 as _,
  metadata as m
};
