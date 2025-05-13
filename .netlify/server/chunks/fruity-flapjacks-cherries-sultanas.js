import { I as sanitize_props, J as spread_props } from "./index3.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Fruity Flapjacks with Cherries & Sultanas",
  "slug": "fruity-flapjacks-cherries-sultanas",
  "description": "Chewy golden oat bars packed with glace cherries and sultanas. Sticky, sweet, and perfect with a cup of tea or packed in a lunchbox.",
  "date": "2025-05-13T00:00:00.000Z",
  "featured": true,
  "image": "/images/recipes/category-name/recipe-name/fruity-flapjacks-cherries-sultanas.webp",
  "prepTime": 10,
  "cookTime": 25,
  "totalTime": 35,
  "servings": 12,
  "categories": ["bake", "snack"],
  "tags": [
    "comfort-food",
    "british-twist",
    "family-friendly",
    "crowd-pleaser",
    "budget-friendly",
    "difficulty-easy"
  ],
  "relatedProducts": [
    {
      "handle": "tate-lyle-squeezy-golden-syrup-750gm",
      "featured": true
    },
    {
      "handle": "buchanan-sultana-3kg",
      "featured": true
    },
    {
      "handle": "glace-cherries-1kg",
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
function Fruity_flapjacks_cherries_sultanas_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>Sticky. Buttery. Fruity.<br> This is the kind of bake that sticks to your fingers and your memory. A proper teatime traybake with oats, sweet fruit, and a golden syrup glaze that caramelises just right.</p> <h2>Ingredients</h2> <ul><li>250g porridge oats</li> <li>125g unsalted butter</li> <li>125g Tate &amp; Lyle Squeezy Golden Syrup</li> <li>100g Buchanan Sultanas</li> <li>75g Glace Cherries, halved</li> <li>50g light brown sugar</li> <li>Pinch of salt</li></ul> <h2>Instructions</h2> <ol><li>Preheat oven to 160°C (fan). Line a 20cm square baking tin with parchment.</li> <li>In a saucepan over low heat, melt the butter, golden syrup, and sugar until smooth.</li> <li>Stir in the oats, salt, sultanas, and cherries until everything is coated.</li> <li>Press mixture firmly into the tin and smooth the top.</li> <li>Bake for 22–25 minutes until golden at the edges.</li> <li>Cool completely in the tin, then cut into bars or squares.</li></ol> <h2>Tips</h2> <ul><li>Add chopped apricots, mixed peel, or seeds for extra texture.</li> <li>For extra chewy texture, slightly underbake and let firm up as it cools.</li> <li>Store airtight for up to a week—or freeze in slices.</li></ul> <h2>Goes Great With</h2> <ul><li>A strong cup of tea</li> <li>Packed lunches or hiking snacks</li> <li>A drizzle of dark chocolate (optional but excellent)</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fruity_flapjacks_cherries_sultanas_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_10 as _,
  metadata as m
};
