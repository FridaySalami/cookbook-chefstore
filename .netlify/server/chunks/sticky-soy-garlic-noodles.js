import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Sticky Soy Garlic Noodles",
  "slug": "sticky-soy-garlic-noodles",
  "description": "Quick, glossy noodles coated in a sticky soy-garlic sauce—ready in minutes and dangerously slurpable.",
  "date": "2025-05-12T00:00:00.000Z",
  "featured": true,
  "image": "/images/recipes/category-name/recipe-name/sticky-soy-garlic-noodles.webp",
  "prepTime": 10,
  "cookTime": 10,
  "totalTime": 20,
  "servings": 2,
  "categories": ["dinner", "quick"],
  "tags": ["vegetarian", "noodles", "difficulty-easy"],
  "relatedProducts": [
    {
      "handle": "blue-dragon-medium-egg-noodles-300gm",
      "featured": true
    },
    {
      "handle": "lee-kum-kee-premium-light-soy-sauce-500ml"
    },
    {
      "handle": "lee-kum-kee-premium-dark-soy-sauce-500ml"
    },
    {
      "handle": "lee-kum-kee-rice-wine-vinegar-500ml"
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
function Sticky_soy_garlic_noodles_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>These noodles hit like a midnight craving and a Friday night reward all at once.<br> They’re slick with soy and sweet with just enough stick to hug every twist and tangle. Garlic whispers its way through each bite. Ginger hums quietly beneath. You can have them done in twenty and eaten in five.</p> <p>And the beauty? They play well with others. Got leftover roast veg? Toss it in. Fried egg? Perch it on top. Cold beer? Don’t forget it.<br> Simple, satisfying, and endlessly yours.</p> <h2>Ingredients</h2> <ul><li>200g Wheat Noodles or Spaghetti</li> <li>2 Tablespoons Dark Soy Sauce</li> <li>1 Tablespoon Light Soy Sauce</li> <li>1 Tablespoon Honey or Brown Sugar</li> <li>1 Tablespoon Rice Vinegar or Lime Juice</li> <li>1 Teaspoon Sesame Oil</li> <li>2 Garlic Cloves</li> <li>1 Teaspoon Ginger</li> <li>1 Tablespoon Neutral Oil</li></ul> <h3>Optional Toppings</h3> <ul><li>Spring Onions</li> <li>Sesame Seeds</li> <li>Chilli Flakes</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Boil the noodles</strong><br> Bring a large pot of water to the boil. Cook your noodles until just tender, then drain and set aside.</p></li> <li><p><strong>Mix your sauce</strong><br> In a bowl, stir together the dark soy sauce, light soy sauce, honey or sugar, vinegar, and sesame oil. Set aside.</p></li> <li><p><strong>Cook the aromatics</strong><br> Heat the neutral oil in a wok or large frying pan over medium heat. Add the garlic and ginger and cook for 30 seconds until fragrant but not browned.</p></li> <li><p><strong>Build the glaze</strong><br> Pour in the sauce mixture. Let it bubble and thicken for a minute until glossy and slightly reduced.</p></li> <li><p><strong>Add the noodles</strong><br> Toss in the cooked noodles. Stir well, coating every strand in that sticky sauce. Keep tossing for another minute or so until everything’s shiny and hot.</p></li> <li><p><strong>Finish and serve</strong><br> Serve right away. Scatter over spring onions, sesame seeds, and chilli flakes if you like things fiery.</p></li></ol> <h2>Tips</h2> <ul><li>Add chilli crisp or a drizzle of sriracha for heat that lingers in the best way.</li> <li>Leftover chicken, mushrooms, or greens can make this heartier without much effort.</li> <li>For a gluten-free option, swap soy sauce for tamari and use rice noodles instead.</li></ul> <h2>Goes Great With</h2> <ul><li>Pak Choi or Tenderstem Broccoli Stir-Fried in Garlic</li> <li>A Fried Egg with a Runny Centre</li> <li>Sweet Iced Tea, Cold Beer, or Sparkling Water with Lime</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_49 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sticky_soy_garlic_noodles_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_49 as _,
  metadata as m
};
