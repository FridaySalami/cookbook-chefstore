import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Roasted Beetroot, Orange & Walnut Salad with Truffle Oil",
  "slug": "roasted-beetroot-orange-walnut-salad",
  "description": "Sweet roasted beetroot, juicy orange segments, crunchy walnuts and peppery rocket—brought together with a drizzle of truffle oil for a salad that sings with texture and elegance.",
  "date": "2025-05-14T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/roasted-beetroot-orange-walnut-salad.webp",
  "prepTime": 20,
  "cookTime": 45,
  "totalTime": 65,
  "servings": 4,
  "categories": ["salad", "starter", "vegetarian"],
  "tags": [
    "vegetarian",
    "crowd-pleaser",
    "difficulty-easy"
  ],
  "relatedProducts": [
    {
      "handle": "belazu-black-truffle-extra-virgin-olive-oil-250ml",
      "featured": true
    },
    { "handle": "buchanan-walnut-pieces-1kg" }
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
function Roasted_beetroot_orange_walnut_salad_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This is a salad that knows how to dress up.<br> It brings roasted beetroot—deep, sweet, and jewel-toned—into the same space as citrus-bright orange and buttery walnuts. Each bite is a little contrast. A little harmony.</p> <p>The rocket gives it that peppery lift, like it’s reminding you this is still a salad.<br> But then comes the truffle oil, and suddenly everything softens. The dish leans into elegance. Into something you’d serve with linen napkins and a second glass of wine.</p> <p>It’s earthy and vibrant. Classic but not boring.<br> Whether you serve it warm or chilled, on a weekday or a long-table Sunday lunch, it shows up with confidence.</p> <h2>Ingredients</h2> <ul><li>3 Medium Beetroots</li> <li>2 Oranges</li> <li>75g Walnut Pieces</li> <li>2 Handfuls Rocket or Baby Spinach</li> <li>1 Tablespoon Truffle Oil</li> <li>1 Tablespoon Olive Oil</li> <li>1 Teaspoon Honey</li> <li>Sea Salt</li> <li>Black Pepper</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Roast the beetroot</strong><br> Preheat your oven to 200°C. Peel the beetroot and cut into wedges. Toss with olive oil, a pinch of salt, and pepper. Spread out on a baking tray and roast for 40 to 45 minutes, flipping once, until tender and caramelised at the edges.</p></li> <li><p><strong>Toast the walnuts</strong><br> While the beetroot roasts, add the walnut pieces to a dry frying pan over medium heat. Toast for 2 to 3 minutes until fragrant and lightly golden. Set aside to cool.</p></li> <li><p><strong>Segment and juice the oranges</strong><br> Cut the peel and white pith off one orange, then segment by slicing between the membranes. Juice the second orange into a small bowl.</p></li> <li><p><strong>Make the dressing</strong><br> Add honey, a pinch of salt, and the truffle oil to the orange juice. Whisk gently until it comes together into a glossy dressing.</p></li> <li><p><strong>Assemble the salad</strong><br> Lay the rocket or spinach on a large serving platter. Scatter over the roasted beetroot, orange segments, and toasted walnuts.</p></li> <li><p><strong>Dress and finish</strong><br> Drizzle with the citrus-truffle dressing. Add a final flick of truffle oil over the top if you want more depth. Serve immediately.</p></li></ol> <h2>Tips</h2> <ul><li>Add thinly sliced red onion for sharpness or crumbled goat cheese for creaminess.</li> <li>No truffle oil? Use a fruity olive oil and top with shaved Parmesan.</li> <li>The beetroot can be roasted in advance and served cold the next day for an easy make-ahead option.</li></ul> <h2>Goes Great With</h2> <ul><li>Warm crusty baguette or seeded rye</li> <li>Grilled halloumi or roast chicken</li> <li>A chilled glass of Riesling or Pinot Gris</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_35 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Roasted_beetroot_orange_walnut_salad_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_35 as _,
  metadata as m
};
