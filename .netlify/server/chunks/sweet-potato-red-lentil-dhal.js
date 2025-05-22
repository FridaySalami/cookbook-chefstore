import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Sweet Potato & Red Lentil Dhal",
  "slug": "sweet-potato-red-lentil-dhal",
  "description": "A gently spiced dhal of red lentils and sweet potato, simmered until soft and creamy. Warm, comforting, and perfect with yoghurt and flatbread.",
  "date": "2025-05-20T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/sweet-potato-red-lentil-dhal.webp",
  "prepTime": 10,
  "cookTime": 35,
  "totalTime": 45,
  "servings": 4,
  "categories": ["dinner", "vegetarian", "one-pot"],
  "tags": [
    "family-friendly",
    "vegan-option",
    "comfort-food",
    "difficulty-easy"
  ],
  "relatedProducts": [
    {
      "handle": "manfredi-barbera-unfiltered-italian-extra-virgin-oil",
      "featured": true
    },
    {
      "handle": "triple-lion-red-split-lentils-3kg",
      "featured": true
    },
    {
      "handle": "triple-lion-ground-turmeric-550g",
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
function Sweet_potato_red_lentil_dhal_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This is the kind of meal that doesn’t shout — it whispers. A soft, slow-cooked dhal that wraps around you gently, like a favourite jumper pulled from the radiator. The red lentils break down into something creamy and comforting. The sweet potato holds its shape just enough to remind you it’s there. The spices are warm and grounding, never overwhelming.</p> <p>It simmers with ease, needing only a stir now and then. And when it’s ready, it feeds you in the kindest way. It’s nourishing without being loud about it. Satisfying without being heavy. And it tastes even better when eaten slowly, with a spoon in one hand and no plans for later.</p> <p>It’s a bowl of something that feels like care — for yourself, for your family, for the rhythm of quiet days.</p> <h2>Ingredients</h2> <ul><li>1 Tablespoon Olive oil</li> <li>1 Onion</li> <li>2 Garlic cloves</li> <li>1 Thumb-sized piece of Ginger</li> <li>1 Teaspoon Ground cumin</li> <li>1 Teaspoon Ground turmeric</li> <li>½ Teaspoon Ground cinnamon</li> <li>½ Teaspoon Bonferme Fine Sea Salt</li> <li>Black pepper</li> <li>150g Red lentils</li> <li>1 Medium Sweet potato</li> <li>400ml Water</li> <li>400ml Coconut milk</li> <li>Juice of half a Lemon</li> <li>Yoghurt or Coconut cream (to serve)</li> <li>Fresh coriander (optional)</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Build the base.</strong><br> Heat the olive oil in a large pot over medium heat. Add the finely chopped onion and cook for 5 to 7 minutes until soft and lightly golden. Stir in the minced garlic and grated ginger. Cook for 1 minute until the fragrance starts to lift.</p></li> <li><p><strong>Toast the spices.</strong><br> Add the cumin, turmeric, cinnamon, salt, and a few twists of black pepper. Let them toast in the oil for 30 seconds. This helps release their full warmth into the dish.</p></li> <li><p><strong>Add lentils and liquid.</strong><br> Rinse the red lentils and tip them into the pot along with the peeled and cubed sweet potato. Stir everything once. Pour in the water and coconut milk and bring to a gentle simmer.</p></li> <li><p><strong>Simmer gently.</strong><br> Let it cook uncovered for 25 to 30 minutes. Stir now and then to make sure it doesn’t catch on the bottom. The lentils will break down and thicken the dhal while the sweet potato softens into tender cubes.</p></li> <li><p><strong>Finish and balance.</strong><br> Squeeze in the lemon juice and stir through. Taste and adjust with more salt, pepper, or lemon if it needs a lift.</p></li> <li><p><strong>Serve.</strong><br> Ladle into bowls and swirl in a spoonful of yoghurt or coconut cream. Scatter with chopped coriander if you like a bit of green to finish it off.</p></li></ol> <h2>Tips</h2> <ul><li>Swap sweet potato for squash or carrots, depending on what’s in the drawer</li> <li>Add a handful of spinach in the last few minutes for colour and extra green</li> <li>Leftovers keep beautifully and will thicken further as they sit — just add a splash of water when reheating</li></ul> <h2>Goes Great With</h2> <ul><li>Warm naan or flatbread for scooping</li> <li>Steamed basmati rice with a squeeze of lime</li> <li>A spoonful of mango chutney or pickled onions on the side</li></ul> <hr> <blockquote><p>A pot of comfort that simmers gently while the day finds its way back to calm.</p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_62 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sweet_potato_red_lentil_dhal_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_62 as _,
  metadata as m
};
