import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Everyday Pesto Spaghetti with Toasted Almonds & Lemon",
  "slug": "everyday-pesto-spaghetti",
  "description": "A simple, feel-good bowl of spaghetti tossed with green pesto, lemon zest, and toasted almonds for crunch. Easy enough for a Tuesday, comforting enough for any day, and made to linger over without rushing.",
  "date": "2025-05-20T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/everyday-pesto-spaghetti.webp",
  "prepTime": 5,
  "cookTime": 15,
  "totalTime": 20,
  "servings": 4,
  "categories": ["dinner", "pasta", "quick"],
  "tags": [
    "vegetarian-option",
    "quick",
    "pasta",
    "difficulty-easy"
  ],
  "relatedProducts": [
    {
      "handle": "belazu-retail-traditional-pesto-genovese-165gm",
      "featured": true
    },
    {
      "handle": "parkers-whole-blanched-almonds-1kg",
      "featured": true
    },
    { "handle": "maldon-sea-salt", "featured": true }
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
function Everyday_pesto_spaghetti_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>Pesto spaghetti is one of those dishes that makes peace with the day. It’s not showy or clever, and that’s exactly why it works. It gets you from hungry to happy in about fifteen minutes, and it does it with warmth, not fuss.</p> <p>There’s richness from the pesto, brightness from lemon, and a gentle crunch from toasted almonds that catches you by surprise in the best way. The pasta is wrapped in a glossy green coat, thanks to a bit of pasta water and olive oil that turn the sauce into something soft and silky.</p> <p>You can stop right there, or you can fold in a handful of peas or rocket. Grate in a little garlic, if you need the lift. Shake over a few chilli flakes if the day’s been long. This dish doesn’t mind. It lets you lead.</p> <p>It’s comfort by the forkful. And it’s ready before the table’s even set.</p> <h2>Ingredients</h2> <ul><li>350g Spaghetti</li> <li>120g Pesto</li> <li>30g Whole almonds</li> <li>1 Lemon</li> <li>1 Teaspoon Maldon Sea Salt</li> <li>Black pepper</li> <li>1 Tablespoon Olive oil</li> <li>¼ Garlic clove (optional)</li> <li>100g Frozen peas or a handful of rocket (optional)</li> <li>Chilli flakes or pink peppercorns (optional)</li> <li>Parmesan cheese</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Bring a large pot of salted water to the boil.</strong><br> Cook the spaghetti according to the packet instructions until just tender. In the final 2 minutes of cooking, stir in the frozen peas if using. Reserve a cup of pasta water, then drain.</p></li> <li><p><strong>Toast the almonds.</strong><br> Place the almonds in a dry frying pan over medium heat. Toast them for 3 to 4 minutes, shaking occasionally, until golden and fragrant. Set aside to cool, then roughly chop.</p></li> <li><p><strong>Warm the pesto into a sauce.</strong><br> In a large pan, add the pesto, olive oil, and a few tablespoons of the reserved pasta water. Warm gently over low heat. If using, grate in the garlic now. Stir until the sauce loosens and begins to shine.</p></li> <li><p><strong>Add lemon for brightness.</strong><br> Zest the lemon into the sauce, then squeeze in half the juice. This will lift the pesto and balance its richness.</p></li> <li><p><strong>Toss the pasta through the sauce.</strong><br> Add the drained spaghetti to the pesto and toss until coated. Add more pasta water as needed to help the sauce cling. If using rocket, fold it in now so it just begins to wilt.</p></li> <li><p><strong>Season and finish.</strong><br> Taste and adjust with salt, pepper, or more lemon. Sprinkle over the chopped almonds, a pinch of chilli flakes or pink pepper, and finish with shaved Parmesan.</p></li></ol> <h2>Tips</h2> <ul><li>If your pesto is thick, loosen it before adding the pasta to avoid clumps</li> <li>Use any pasta shape you like, just keep the water-sauce-pasta ratio in mind</li> <li>Make it creamy with a spoonful of mascarpone or crème fraîche stirred in at the end</li></ul> <h2>Goes Great With</h2> <ul><li>Tomato and basil salad</li> <li>Warm garlic bread or focaccia</li> <li>A cold glass of white wine or elderflower soda</li></ul> <hr> <blockquote><p>It’s quick, it’s green, it’s gentle. A bowl that asks very little but gives you something good in return.</p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Everyday_pesto_spaghetti_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_20 as _,
  metadata as m
};
