import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Crispy Halloumi Wraps with Lemon Yogurt & Pickled Onion",
  "slug": "crispy-halloumi-wraps-lemon-yogurt",
  "description": "Golden slices of halloumi layered into warm flatbreads with lemony yogurt, quick pickled onions, and fresh herbs. A simple, satisfying wrap that hits every note — crisp, creamy, sharp, and soft.",
  "date": "2025-05-22T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/crispy-halloumi-wraps-lemon-yogurt.webp",
  "prepTime": 15,
  "cookTime": 10,
  "totalTime": 25,
  "servings": 4,
  "categories": ["lunch", "dinner", "vegetarian"],
  "tags": ["quick", "difficulty-easy"],
  "relatedProducts": [
    {
      "handle": "colavita-100-spanish-extra-virgin-olive-oil-750ml",
      "featured": true
    },
    {
      "handle": "saxa-table-salt-750g",
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
function Crispy_halloumi_wraps_lemon_yogurt_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This is the kind of meal that makes you feel like you’re somewhere sunnier. Halloumi, golden and crisp from the pan, wrapped in soft, warm flatbread. A spoon of lemony yogurt cools it all down. Pickled onions add a sharp bite that cuts through the richness just when you need it.</p> <p>Every bite is layered — creamy, squeaky, tangy, fresh. It’s fast and forgiving. You can change the herbs. Add chilli if you like heat. Make a table of toppings and let everyone build their own.</p> <p>It’s the kind of food that feels generous without being heavy. That fills you up, but never slows you down. And it always disappears faster than you expect.</p> <h2>Ingredients</h2> <ul><li>250g Halloumi</li> <li>1 Tablespoon Olive oil</li> <li>4 Flatbreads or wraps</li> <li>½ Red onion</li> <li>2 Tablespoons White wine vinegar</li> <li>1 Teaspoon Sugar</li> <li>½ Teaspoon Bonferme Fine Sea Salt</li> <li>150g Greek yogurt</li> <li>Zest and juice of ½ Lemon</li> <li>Black pepper</li> <li>Fresh herbs (Parsley, Mint, or Coriander)</li> <li>Cucumber or Shredded lettuce (optional)</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Pickle the onion.</strong><br> Thinly slice the red onion and place it in a small bowl. Add the vinegar, sugar, and sea salt. Stir and leave to sit for at least 10 minutes. The onion will soften and turn bright pink.</p></li> <li><p><strong>Make the lemon yogurt.</strong><br> In a separate bowl, combine the Greek yogurt with lemon zest and juice. Season with salt and black pepper. Stir until smooth and creamy. Set aside.</p></li> <li><p><strong>Cook the halloumi.</strong><br> Slice the halloumi into 1cm thick pieces. Pat dry with kitchen paper to prevent splattering. Heat olive oil in a non-stick pan over medium heat. Fry the halloumi for 2 to 3 minutes per side until golden and crisp.</p></li> <li><p><strong>Warm the flatbreads.</strong><br> Heat the flatbreads in a dry frying pan or low oven until warm and flexible.</p></li> <li><p><strong>Assemble the wraps.</strong><br> Spread each flatbread with a generous spoon of the lemon yogurt. Add a few slices of crispy halloumi. Top with pickled onions, fresh herbs, and cucumber or lettuce if using. Add another little dollop of yogurt or an extra squeeze of lemon if you like things sharp.</p></li> <li><p><strong>Serve immediately.</strong><br> Fold and eat while warm. Serve extra yogurt and pickles on the side so everyone can build it just how they like.</p></li></ol> <h2>Tips</h2> <ul><li>Add a swipe of chilli jam or harissa for a spiced-up version</li> <li>Swap lemon for lime if that’s what you have</li> <li>Leftover halloumi can be crisped again in a pan the next day</li></ul> <h2>Goes Great With</h2> <ul><li>Tomato and herb salad</li> <li>Sweet potato wedges or crispy oven chips</li> <li>Sparkling lemonade or mint iced tea</li></ul> <hr> <blockquote><p>Crisp, creamy, sharp, soft. A wrap that gives you everything, all held in your hands.</p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Crispy_halloumi_wraps_lemon_yogurt_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_19 as _,
  metadata as m
};
