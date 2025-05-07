import { I as sanitize_props, J as spread_props } from "./index3.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Poppadom Snack Platter",
  "slug": "poppadom-snack-platter",
  "description": "Turn humble uncooked popadoms into a crowd-pleasing snack board with dips, toppings, and spice. Fast, crispy, and endlessly customizable.",
  "date": "2025-04-24T00:00:00.000Z",
  "featured": true,
  "image": "/images/recipes/category-name/recipe-name/poppadom-snack-platter.png",
  "prepTime": 5,
  "cookTime": 5,
  "totalTime": 10,
  "servings": 4,
  "categories": ["snack", "starter"],
  "tags": [
    "quick",
    "crowd-pleaser",
    "budget-friendly",
    "difficulty-easy"
  ],
  "relatedProducts": [
    {
      "handle": "triple-lion-plain-uncooked-poppadoms1kg",
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
function Poppadom_snack_platter_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>You ever fry a poppadom and watch it puff up like a golden balloon? It’s magic—kitchen alchemy with a crunch. This platter takes those poppadoms and loads ‘em up with colour, flavour, and personality. Serve it as a starter, a snack, or just somethin’ to nibble while the curry simmers.</p> <h2>Ingredients</h2> <ul><li>6–8 uncooked <a href="https://www.thechefstoreuk.com/products/triple-lion-plain-uncooked-poppadoms1kg?_pos=1&amp;_sid=4a1d4b8a3&amp;_ss=r" rel="nofollow">Chefstore poppadoms</a></li> <li>Vegetable oil, for frying</li> <li>1 small red onion, finely chopped</li> <li>1 tomato, deseeded and diced</li> <li>Fresh coriander, chopped</li> <li>Lime wedges, to serve</li></ul> <p><strong>Optional Toppings:</strong></p> <ul><li>Mango chutney</li> <li>Mint raita</li> <li>Tamarind sauce</li> <li>Crumbled paneer or feta</li> <li>Chopped green chilies</li></ul> <h2>Instructions</h2> <ol><li>Heat 2–3 inches of oil in a deep pan until a tiny piece of poppadom bubbles instantly (about 180°C / 350°F).</li> <li>One at a time, slide a poppadom into the oil. Fry for 5–10 seconds—it should puff up and turn crisp almost immediately.</li> <li>Remove with tongs and drain on kitchen paper. Repeat with the rest.</li> <li>Arrange your poppadoms on a large platter.</li> <li>Sprinkle with onion, tomato, fresh coriander, and anything else that takes your fancy.</li> <li>Serve with lime wedges and small bowls of chutney, mint sauce, or whatever you’ve got handy.</li></ol> <h2>Tips</h2> <ul><li>Use tongs and keep your face back—these babies puff fast.</li> <li>Want to skip frying? Pop ‘em in the microwave one at a time for 40–60 seconds on a plate. Still crispy, no oil.</li> <li>Add a little chat masala or cumin powder for a street food twist.</li></ul> <h2>Goes Great With</h2> <ul><li>Cold beer or sparkling lemonade</li> <li>Movie night or game day</li> <li>Leftover curry, just sayin’…</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Poppadom_snack_platter_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_4 as _,
  metadata as m
};
