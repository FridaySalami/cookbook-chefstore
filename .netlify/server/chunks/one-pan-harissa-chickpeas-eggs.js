import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "One-Pan Harissa Chickpeas with Eggs",
  "slug": "one-pan-harissa-chickpeas-eggs",
  "description": "A rich, spiced tomato and harissa chickpea stew finished with soft eggs and fresh herbs. Perfect for brunch, lunch, or mopping up with warm bread.",
  "date": "2025-05-12T00:00:00.000Z",
  "featured": false,
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
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This is a meal that doesn’t ask for much, but gives you everything.<br> It starts with a simple sizzle onions softening in oil, cumin warming the air, garlic turning sweet on the heat.<br> Then comes the rose harissa. It hits the pan and blooms into something deep and floral and just the right kind of spicy.</p> <p>The chickpeas soak up that sauce like they were made for it. The tomatoes simmer into something thick and soulful.<br> And the eggs? They sit like quiet passengers until the heat sets their whites and leaves their yolks soft and golden, ready to run through the dish.</p> <p>It’s comfort without heaviness. Spice without drama.<br> One pan, no stress, just a spoon, some bread, and the kind of food that feels like home even if you’ve never had it before.</p> <h2>Ingredients</h2> <ul><li>1 Tablespoon Olive Oil</li> <li>1 Small Onion</li> <li>2 Garlic Cloves</li> <li>1 Teaspoon Ground Cumin</li> <li>2 Tablespoons Rose Harissa</li> <li>400g Chopped Tomatoes or Passata</li> <li>400 to 500g Tinned Chickpeas</li> <li>Salt</li> <li>Black Pepper</li> <li>3 to 4 Eggs</li> <li>Fresh Parsley or Coriander</li> <li>Bread for Serving</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Begin the base</strong><br> Heat the olive oil in a large skillet over medium heat. Add the onion and cook for 5 to 6 minutes until it’s soft, golden at the edges, and smelling sweet.</p></li> <li><p><strong>Add aromatics</strong><br> Stir in the garlic and cumin. Cook for 1 minute, just enough to take the raw edge off the garlic and wake up the spice.</p></li> <li><p><strong>Build the flavour</strong><br> Add the rose harissa and cook for another minute, stirring gently. It should darken slightly and smell full and fragrant.</p></li> <li><p><strong>Simmer the stew</strong><br> Pour in the tomatoes and chickpeas. If the sauce feels thick, add a small splash of water. Season with salt and pepper. Let everything simmer gently for 10 minutes, stirring every so often, until the sauce thickens and tastes rich.</p></li> <li><p><strong>Add the eggs</strong><br> Make little dips in the sauce and crack in the eggs. Cover the pan with a lid or foil and let it cook for 5 to 7 minutes, or until the whites are set but the yolks are still soft. Check gently by touching the whites near the yolk with a spoon.</p></li> <li><p><strong>Finish and serve</strong><br> Sprinkle over chopped parsley or coriander. Serve straight from the pan with warm bread for scooping.</p></li></ol> <h2>Tips</h2> <ul><li>Add a handful of spinach or kale before the eggs go in for extra greens.</li> <li>For a creamy finish, swirl in a spoonful of yoghurt right at the end.</li> <li>Make it vegan by skipping the eggs and topping with avocado slices or pan-fried tofu.</li></ul> <h2>Goes Great With</h2> <ul><li>Toasted sourdough, garlic flatbread, or naan</li> <li>A spoon of labneh or plain yoghurt on the side</li> <li>A slow morning or a quick dinner that needs soul</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: One_pan_harissa_chickpeas_eggs_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_25 as _,
  metadata as m
};
