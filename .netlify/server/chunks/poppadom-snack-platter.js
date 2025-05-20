import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Poppadom Snack Platter",
  "slug": "poppadom-snack-platter",
  "description": "Turn humble uncooked popadoms into a crowd-pleasing snack board with dips, toppings, and spice. Fast, crispy, and endlessly customizable.",
  "date": "2025-04-24T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/poppadom-snack-platter.webp",
  "prepTime": 5,
  "cookTime": 5,
  "totalTime": 10,
  "servings": 4,
  "categories": ["snack", "starter"],
  "tags": [
    "quick",
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
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>There’s something downright joyful about watching a poppadom puff up in hot oil.<br> One second it’s flat and humble, the next it’s crisp and golden, curling into shape like it’s waking up.</p> <p>This platter takes that magic and runs with it. It’s not just a side it’s a snack board, a starter, a conversation piece.<br> Crunchy bases topped with chopped bits and bold flavours.<br> A little sweet here, a little tang there. Cool yoghurt next to fiery chutney. It’s playful. It’s messy. It’s everything a good nibble should be.</p> <p>And the best part? You can build it with whatever’s in the fridge.<br> Leftovers become toppings. Sauces become dips.<br> It’s the kind of recipe that doesn’t just feed you—it gives you permission to improvise.</p> <h2>Ingredients</h2> <ul><li>6 to 8 Uncooked Poppadoms</li> <li>Vegetable Oil</li> <li>1 Red Onion</li> <li>1 Tomato</li> <li>Fresh Coriander</li> <li>Lime Wedges</li></ul> <h3>Optional Toppings</h3> <ul><li>Mango Chutney</li> <li>Mint Raita</li> <li>Tamarind Sauce</li> <li>Crumbled Paneer or Feta</li> <li>Green Chilies</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Heat the oil</strong><br> Pour 2 to 3 inches of vegetable oil into a deep pan. Heat to around 180°C. Test it by dropping in a tiny piece of poppadom it should puff instantly.</p></li> <li><p><strong>Fry the poppadoms</strong><br> One at a time, carefully slide a poppadom into the oil. It will curl and puff within seconds. Use tongs to turn it if needed, then lift it out and drain on kitchen paper. Repeat with the rest.</p></li> <li><p><strong>Chop and prep</strong><br> Finely chop the onion and tomato. Pick and roughly chop the coriander. Halve the limes.</p></li> <li><p><strong>Assemble the platter</strong><br> Arrange the crisp poppadoms on a large board or platter. Top with chopped onion, tomato, coriander, and any extras you like.</p></li> <li><p><strong>Serve with sides</strong><br> Add bowls of chutneys, yoghurt, or tamarind sauce for dipping. Serve lime wedges on the side for squeezing over.</p></li></ol> <h2>Tips</h2> <ul><li>Fry quickly and carefully poppadoms take just seconds. Keep your face back from the oil.</li> <li>For a lighter version, microwave the poppadoms one at a time on a plate for 40 to 60 seconds.</li> <li>Sprinkle a little chat masala or ground cumin over the top for extra street food flavour.</li></ul> <h2>Goes Great With</h2> <ul><li>Ice cold beer or a sharp lemonade</li> <li>Movie night, party tables, or unexpected guests</li> <li>A pot of curry waiting on the hob, just out of frame</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_31 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Poppadom_snack_platter_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_31 as _,
  metadata as m
};
