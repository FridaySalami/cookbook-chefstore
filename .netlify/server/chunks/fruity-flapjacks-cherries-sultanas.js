import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Fruity Flapjacks with Cherries & Sultanas",
  "slug": "fruity-flapjacks-cherries-sultanas",
  "description": "Chewy golden oat bars packed with glace cherries and sultanas. Sticky, sweet, and perfect with a cup of tea or packed in a lunchbox.",
  "date": "2025-05-13T00:00:00.000Z",
  "featured": false,
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
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>These are the kind of bakes that feel like home.<br> Sticky and sweet from golden syrup, with bursts of fruit in every bite. They’re chewy where it counts, golden around the edges, and just the right kind of nostalgic.<br> Perfect with a hot cuppa or tucked into a lunchbox for later. And maybe even better the next day—if they last that long.</p> <h2>Ingredients</h2> <ul><li>250g Porridge Oats</li> <li>125g Unsalted Butter</li> <li>125g Tate &amp; Lyle Squeezy Golden Syrup</li> <li>100g Buchanan Sultanas</li> <li>75g Glace Cherries, Halved</li> <li>50g Light Brown Sugar</li> <li>Pinch of Salt</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Preheat and prep</strong><br> Preheat the oven to 160°C fan. Line a 20cm square baking tin with parchment paper.</p></li> <li><p><strong>Melt the base</strong><br> In a saucepan over low heat, melt the butter, golden syrup, and sugar together. Stir gently until smooth and combined.</p></li> <li><p><strong>Mix in the dry ingredients</strong><br> Remove from the heat. Stir in the oats, salt, sultanas, and cherries. Mix until all the oats are glossy and the fruit is evenly distributed.</p></li> <li><p><strong>Fill the tin</strong><br> Spoon the mixture into the lined tin. Press it down firmly with the back of a spoon to level and compact the surface.</p></li> <li><p><strong>Bake</strong><br> Bake for 22 to 25 minutes until golden around the edges and lightly set in the centre.</p></li> <li><p><strong>Cool and slice</strong><br> Let the flapjacks cool completely in the tin. Once firm, lift out and cut into bars or squares.</p></li></ol> <h2>Tips</h2> <ul><li>Add dried apricots, cranberries, or mixed seeds for more texture</li> <li>For chewier flapjacks, bake for the shorter time and cool fully before slicing</li> <li>Store in an airtight container for up to a week, or freeze in portions for grab-and-go snacking</li></ul> <h2>Goes Great With</h2> <ul><li>A Mug of Strong Tea or Fresh Coffee</li> <li>Packed Lunches or Picnic Hampers</li> <li>A Light Drizzle of Melted Dark Chocolate on Top (Highly Recommended)</li></ul> <hr> <blockquote><p><strong>Not fancy. Just right. Sweet, chewy, and ready when you are.</strong></p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_29 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fruity_flapjacks_cherries_sultanas_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_29 as _,
  metadata as m
};
