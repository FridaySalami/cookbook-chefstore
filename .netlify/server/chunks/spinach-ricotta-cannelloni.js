import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Baked Spinach & Ricotta Cannelloni",
  "slug": "spinach-ricotta-cannelloni",
  "description": "Tender cannelloni tubes filled with creamy spinach and ricotta, smothered in rich tomato sauce, and baked until bubbling and golden.",
  "date": "2025-05-13T00:00:00.000Z",
  "featured": false,
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
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This is the kind of meal that warms a room.<br> Pasta shells filled with herby spinach and ricotta, layered in a bright tomato sauce and finished with a bubbling cheese crust. Make it once—crave it often.</p> <h2>Ingredients</h2> <h3>Filling</h3> <ul><li>250g ricotta</li> <li>200g fresh spinach (or frozen, thawed and squeezed dry)</li> <li>1 garlic clove, grated</li> <li>Zest of 1 lemon</li> <li>1 egg yolk</li> <li>30g Parmesan or Pecorino, finely grated</li> <li>Grated nutmeg</li> <li>Salt &amp; pepper</li></ul> <h3>Tomato Sauce</h3> <ul><li>1 tbsp olive oil</li> <li>1 tbsp butter</li> <li>1 onion, finely chopped</li> <li>2 garlic cloves, minced</li> <li>800g chopped tomatoes</li> <li>Splash of white wine or balsamic vinegar</li> <li>1 tsp dried oregano or a sprig of thyme</li> <li>1 bay leaf</li> <li>Salt &amp; pepper</li> <li>Pinch of sugar (optional)</li> <li>1 tbsp butter (to finish)</li></ul> <h3>Assembly</h3> <ul><li>12 cannelloni tubes (or fresh pasta sheets)</li> <li>50g mozzarella or provolone</li> <li>30g Parmesan</li> <li>Optional: herby breadcrumbs (breadcrumbs, olive oil, herbs)</li></ul> <h2>Instructions</h2> <h3>1. Make the Sauce</h3> <ol><li>Heat olive oil and butter in a large saucepan over medium heat. The oil prevents the butter from burning, while the butter adds richness.</li> <li>Add the onion and cook gently for 8–10 minutes until soft and golden—this step builds natural sweetness and depth.</li> <li>Stir in the garlic and cook for 1 more minute, just until fragrant.</li> <li>Deglaze with a splash of wine or balsamic—this lifts caramelised bits and adds complexity.</li> <li>Add chopped tomatoes, herbs, bay leaf, salt, pepper, and a pinch of sugar if needed.</li> <li>Simmer uncovered for 30 minutes, stirring occasionally. This reduces the sauce and deepens the flavour.</li> <li>Finish with 1 tbsp butter to mellow the acidity and create a velvety texture.</li></ol> <h3>2. Prepare the Filling</h3> <ol><li>If using fresh spinach, wilt it in a dry pan and squeeze out the water, then chop finely.</li> <li>Mix all filling ingredients in a bowl. The lemon zest brightens, the yolk binds, and the cheese adds depth. Season to taste.</li></ol> <h3>3. Prep the Pasta</h3> <ol><li>If using dry cannelloni tubes, blanch in boiling water for 3–4 minutes—this softens them and ensures even baking.</li> <li>If using fresh pasta sheets, cut into rectangles and roll the filling inside.</li></ol> <h3>4. Assemble</h3> <ol><li>Preheat oven to 180°C (fan).</li> <li>Spread a layer of sauce on the base of a baking dish—this prevents sticking and adds moisture.</li> <li>Fill tubes with ricotta mix using a piping bag or spoon. Don’t overfill—leave room to expand.</li> <li>Arrange in the dish and cover with remaining sauce.</li> <li>Top with grated cheese and optional herby breadcrumbs for texture.</li></ol> <h3>5. Bake</h3> <ol><li>Cover with foil and bake for 30 minutes—this gently steams the pasta.</li> <li>Uncover and bake 10–15 minutes more until golden and bubbling.</li> <li>Let rest 10 minutes before serving. This helps everything settle and hold together on the plate.</li></ol> <h2>Tips</h2> <ul><li>Can be assembled ahead and baked later.</li> <li>Add a béchamel layer on top for extra creaminess.</li> <li>Leftovers freeze and reheat beautifully.</li></ul> <h2>Goes Great With</h2> <ul><li>Garlic bread or focaccia</li> <li>Rocket salad with balsamic</li> <li>A slow evening and a warm kitchen</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_62 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Spinach_ricotta_cannelloni_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_62 as _,
  metadata as m
};
