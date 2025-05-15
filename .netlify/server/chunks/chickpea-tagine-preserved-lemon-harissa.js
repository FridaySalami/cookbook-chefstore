import { I as sanitize_props, J as spread_props } from "./index3.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Preserved Lemon & Rose Harissa Chickpea Tagine",
  "slug": "chickpea-tagine-preserved-lemon-harissa",
  "description": "Fragrant with preserved lemon, fiery with harissa, and slow-cooked till rich and comforting—this chickpea tagine is a soulful stew that tastes like it’s been passed down.",
  "date": "2025-05-14T00:00:00.000Z",
  "featured": true,
  "image": "/images/recipes/category-name/recipe-name/chickpea-tagine-preserved-lemon-harissa.webp",
  "prepTime": 10,
  "cookTime": 40,
  "totalTime": 50,
  "servings": 4,
  "categories": ["main", "vegan", "stew"],
  "tags": [
    "comfort-food",
    "difficulty-easy",
    "vegan",
    "gluten-free"
  ],
  "relatedProducts": [
    {
      "handle": "belazu-preserved-lemons-220gm",
      "featured": true
    },
    {
      "handle": "belazu-retail-rose-harissa-170gm",
      "featured": true
    },
    {
      "handle": "riverdene-tinned-chick-peas-800g",
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
function Chickpea_tagine_preserved_lemon_harissa_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This isn’t a “what’s in the cupboard” kind of meal. This is slow brewed comfort wrapped in spice and story.<br> The preserved lemon gives it edge, the harissa brings the fire, and the chickpeas hold it all steady like old friends.<br> It’s deep and rich, but easy enough for a weekday. And when it hits the table? Everything just softens.</p> <h2>Ingredients</h2> <ul><li>2 Tbsp Olive Oil</li> <li>1 Onion</li> <li>3 Garlic Cloves</li> <li>1 Tbsp Belazu Rose Harissa</li> <li>1 Tsp Ground Cumin</li> <li>1 Tsp Smoked Paprika</li> <li>1 Cinnamon Stick (or ½ Tsp Ground Cinnamon)</li> <li>400g Canned Chopped Tomatoes</li> <li>2 × 400g Cans Chickpeas (Riverdene), Drained</li> <li>400ml Vegetable Stock (Made with Knorr Vegetable Bouillon)</li> <li>½ Preserved Lemon (Belazu), Finely Chopped</li> <li>Salt</li> <li>Black Pepper</li> <li>Fresh Coriander or Parsley, To Serve</li> <li>Cooked Couscous or Flatbreads, To Serve</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Soften the base.</strong><br> Heat the olive oil in a wide pan or tagine over medium heat. Add the onion with a pinch of salt and cook gently for 10 minutes, until softened and golden at the edges. Stir in the garlic and let it bloom for a minute.</p></li> <li><p><strong>Add the spice.</strong><br> Stir in the rose harissa, cumin, paprika, and cinnamon. Cook for a few minutes until it all smells warm and vivid like something halfway between comfort and celebration.</p></li> <li><p><strong>Bring in the tomatoes.</strong><br> Pour in the chopped tomatoes and let them cook down for 5–7 minutes, reducing and darkening until thick and jammy at the bottom of the pot.</p></li> <li><p><strong>Chickpeas, stock, and lemon.</strong><br> Tip in the drained chickpeas, pour over the vegetable stock, and stir in the finely chopped preserved lemon. Bring to a gentle boil, then lower the heat and simmer uncovered for 25–30 minutes, stirring occasionally. You’re looking for a stew like texture saucy, thick, but loose enough to spoon.</p></li> <li><p><strong>Taste and finish.</strong><br> Check for seasoning add salt and a crack of black pepper to taste. Just before serving, scatter with chopped fresh herbs. Serve hot over couscous or with warm flatbreads for scooping.</p></li></ol> <h2>Tips</h2> <ul><li>Want it richer? Swirl in a spoonful of tahini at the end, or a dollop of yoghurt if not keeping it vegan.</li> <li>Add chopped green olives or dried apricots in the final 10 minutes for extra tang or sweetness.</li> <li>Leftovers deepen overnight this one’s even better the next day with a reheated swirl of lemony olive oil.</li></ul> <h2>Goes Great With</h2> <ul><li>Fluffy couscous or warm flatbreads</li> <li>Roasted aubergine or charred courgettes on the side</li> <li>A slow playlist, a lit candle, and someone who’ll ask for seconds</li></ul> <hr> <blockquote><p><strong>Some recipes feed your body. This one lingers a little longer.</strong></p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Chickpea_tagine_preserved_lemon_harissa_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_5 as _,
  metadata as m
};
