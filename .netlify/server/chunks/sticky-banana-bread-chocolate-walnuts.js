import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Sticky Banana Bread with Dark Chocolate & Walnuts",
  "slug": "sticky-banana-bread-chocolate-walnuts",
  "description": "A soft, sticky banana loaf studded with chunks of dark chocolate and toasted walnuts. Deep, rich flavour, perfect for slicing, toasting, or devouring straight out the tin.",
  "date": "2025-05-12T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/sticky-banana-bread-chocolate-walnuts.webp",
  "prepTime": 10,
  "cookTime": 55,
  "totalTime": 65,
  "servings": 8,
  "categories": ["bakes", "sweet"],
  "tags": [
    "comfort-food",
    "freezer-friendly",
    "difficulty-easy"
  ],
  "relatedProducts": [
    {
      "handle": "callebaut-45-4-dark-chocolate-chunks-2-5kg",
      "featured": true
    },
    { "handle": "buchanan-walnut-pieces-1kg" },
    {
      "handle": "tate-lyle-soft-light-brown-sugar-1kg"
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
function Sticky_banana_bread_chocolate_walnuts_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This banana bread doesn’t hold back.<br> It’s sticky in the best way. Rich from brown sugar and melting chocolate. Textured with toasted walnut crunch. The bananas carry their weight, sweet, ripe, and bold. Giving the loaf a natural depth and softness that stays moist for days.</p> <p>There’s no whisper of restraint here. Just a bake that feels familiar and luxurious all at once.<br> Toast it, eat it warm, wrap it up for later, this loaf is good every time. And if you don’t have time to let it cool completely before slicing, well… no one’s judging.</p> <h2>Ingredients</h2> <ul><li>3 Overripe Bananas</li> <li>100g Soft Light Brown Sugar</li> <li>2 Eggs</li> <li>75g Unsalted Butter (Melted) or Neutral Oil</li> <li>1 Teaspoon Vanilla Extract</li> <li>200g Plain Flour</li> <li>1 Teaspoon Baking Powder</li> <li>1/2 Teaspoon Bicarbonate of Soda</li> <li>Pinch of Salt</li> <li>100g Dark Chocolate Chunks</li> <li>50g Walnut Pieces</li></ul> <h3>Optional Topping</h3> <ul><li>1 Extra Banana</li> <li>Brown Sugar</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Preheat and prep</strong><br> Heat the oven to 170°C. Grease and line a loaf tin with parchment paper.</p></li> <li><p><strong>Mix the wet ingredients</strong><br> In a large bowl, mash the bananas until mostly smooth. Stir in the sugar, eggs, melted butter, and vanilla until well blended.</p></li> <li><p><strong>Combine the dry ingredients</strong><br> In a separate bowl, whisk together the flour, baking powder, bicarbonate of soda, and salt.</p></li> <li><p><strong>Bring the mix together</strong><br> Pour the dry ingredients into the wet mixture and stir gently until just combined. Don’t overmix.</p></li> <li><p><strong>Fold in the extras</strong><br> Add the chocolate chunks and walnut pieces, folding them in so they’re evenly distributed.</p></li> <li><p><strong>Fill the tin</strong><br> Pour the batter into the prepared loaf tin. Top with a halved banana lengthways or a sprinkle of brown sugar if you like a caramelised finish.</p></li> <li><p><strong>Bake</strong><br> Bake for 50 to 60 minutes. The top should be deep golden and a skewer inserted into the middle should come out with only a few sticky crumbs.</p></li> <li><p><strong>Cool and enjoy</strong><br> Let the loaf cool in the tin for 10 minutes before lifting out to cool fully. Or slice it warm and enjoy with butter while the chocolate is still molten.</p></li></ol> <h2>Tips</h2> <ul><li>Store in an airtight container at room temperature for up to 3 days, or freeze individual slices for quick weekday treats.</li> <li>Toasted banana bread with salted butter or a smear of cream cheese is next level good.</li> <li>Want to make it dairy-free? Use oil instead of butter and choose a dairy-free chocolate.</li></ul> <h2>Goes Great With</h2> <ul><li>A Mug of Coffee, Chai, or Hot Chocolate</li> <li>Slow Mornings and Cold Afternoons</li> <li>That Craving You Didn’t Know You Had Until Now</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_37 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sticky_banana_bread_chocolate_walnuts_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_37 as _,
  metadata as m
};
