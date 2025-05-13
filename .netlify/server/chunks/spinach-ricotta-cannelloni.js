import { I as sanitize_props, J as spread_props } from "./index3.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Baked Spinach & Ricotta Cannelloni",
  "slug": "spinach-ricotta-cannelloni",
  "description": "Tender cannelloni tubes filled with creamy spinach and ricotta, smothered in rich tomato sauce, and baked until bubbling and golden.",
  "date": "2025-05-13T00:00:00.000Z",
  "featured": true,
  "image": "/images/recipes/category-name/recipe-name/spinach-ricotta-cannelloni.webp",
  "prepTime": 25,
  "cookTime": 35,
  "totalTime": 60,
  "servings": 4,
  "categories": ["dinner", "vegetarian"],
  "tags": [
    "comfort-food",
    "italian",
    "freezer-friendly",
    "crowd-pleaser",
    "family-friendly",
    "difficulty-medium"
  ],
  "relatedProducts": [
    {
      "handle": "pasta-reggia-cannelloni-1x250g",
      "featured": true
    },
    {
      "handle": "riverdene-chopped-tomatoes-800g",
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
function Spinach_ricotta_cannelloni_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This is the kind of meal that warms a room.<br> Pasta shells filled with herby spinach and ricotta, layered in a bright tomato sauce and finished with a bubbling cheese crust. Make it once—crave it often.</p> <h2>Ingredients</h2> <h3>For the Filling</h3> <ul><li>250g ricotta cheese</li> <li>200g frozen spinach, defrosted and squeezed dry</li> <li>1 garlic clove, grated</li> <li>½ tsp nutmeg</li> <li>Salt &amp; pepper to taste</li> <li>12 Pasta Reggia Cannelloni tubes</li></ul> <h3>For the Sauce</h3> <ul><li>1 tbsp olive oil</li> <li>1 onion, finely chopped</li> <li>2 garlic cloves, minced</li> <li>800g Riverdene Chopped Tomatoes</li> <li>1 tsp dried oregano or Italian herbs</li> <li>Salt &amp; pepper</li> <li>Pinch of sugar (optional)</li></ul> <h3>For the Topping</h3> <ul><li>50g grated mozzarella or cheddar</li> <li>30g grated Parmesan</li></ul> <h2>Instructions</h2> <h3>1. Make the Sauce</h3> <ol><li>Heat oil in a pan and cook onion until soft.</li> <li>Add garlic and cook for 1 minute, then add chopped tomatoes, herbs, salt, pepper, and sugar.</li> <li>Simmer for 15 minutes until thickened.</li></ol> <h3>2. Make the Filling</h3> <ol><li>In a bowl, mix ricotta, spinach, garlic, nutmeg, salt, and pepper until well combined.</li></ol> <h3>3. Assemble</h3> <ol><li>Preheat oven to 180°C (fan).</li> <li>Spread a little sauce on the bottom of a baking dish.</li> <li>Fill cannelloni tubes with the ricotta mixture (use a piping bag or spoon carefully).</li> <li>Lay filled tubes in the dish, cover with remaining sauce.</li> <li>Sprinkle with grated cheeses.</li></ol> <h3>4. Bake</h3> <ol><li>Cover with foil and bake for 25 minutes.</li> <li>Uncover and bake for another 10 minutes until golden and bubbling.</li></ol> <h2>Tips</h2> <ul><li>Can be assembled ahead and baked later.</li> <li>Add a béchamel layer on top for extra creaminess.</li> <li>Leftovers freeze and reheat beautifully.</li></ul> <h2>Goes Great With</h2> <ul><li>Garlic bread or focaccia</li> <li>Rocket salad with balsamic</li> <li>A slow evening and a warm kitchen</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Spinach_ricotta_cannelloni_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_23 as _,
  metadata as m
};
