import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Miso Glazed Roasted Vegetables",
  "slug": "miso-glazed-roasted-vegetables",
  "description": "A savory-sweet vegetable medley with a rich umami glaze—the perfect side dish that might just steal the show.",
  "date": "2025-04-25T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/miso-glazed-roasted-vegetables.webp",
  "prepTime": 15,
  "cookTime": 30,
  "totalTime": 45,
  "servings": 4,
  "categories": ["sides", "vegetarian"],
  "tags": ["vegetarian", "difficulty-easy"],
  "relatedProducts": [
    {
      "handle": "hikari-shinshu-awase-brown-miso-paste-1kg",
      "featured": true
    },
    {
      "handle": "colavita-100-italian-extra-virgin-olive-oil-750ml"
    },
    {
      "handle": "lee-kum-kee-premium-light-soy-sauce-500ml"
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
function Miso_glazed_roasted_vegetables_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>There’s roasted veg, and then there’s <em>this</em> crisp-edged, golden, and dressed in a glaze so packed with umami it practically hums.</p> <p>The miso brings salt and depth, the maple syrup a touch of sweetness, the soy and vinegar balance everything with bite.<br> It’s simple, but feels like something from a little restaurant where the menu’s handwritten and every dish means something.</p> <p>This recipe is more than a side it’s that dish everyone asks about when the plates come out.<br> Something familiar made just a little better.<br> Savory and sweet, charred in the right places, finished with herbs and sesame seeds that pop in your teeth like little thank-yous.</p> <h2>Ingredients</h2> <ul><li>500g Mixed Vegetables (Carrots, Parsnips, Sweet Potato, Cauliflower)</li> <li>2 Tablespoons Miso Paste</li> <li>2 Tablespoons Olive Oil</li> <li>1 Tablespoon Maple Syrup (or Honey)</li> <li>1 Tablespoon Soy Sauce</li> <li>1 Teaspoon Rice Vinegar or Lemon Juice</li> <li>1/2 Teaspoon Sesame Oil (Optional)</li> <li>Sesame Seeds</li> <li>Fresh Coriander or Parsley</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Preheat and prepare</strong><br> Heat your oven to 200°C. Cut the vegetables into bite sized pieces and scatter them across a large roasting tray. Keep the sizes fairly even so everything cooks at the same pace.</p></li> <li><p><strong>Mix the glaze</strong><br> In a small bowl, whisk together the miso paste, olive oil, maple syrup, soy sauce, rice vinegar, and sesame oil if using. It should be thick enough to cling, thin enough to coat.</p></li> <li><p><strong>Dress the veg</strong><br> Pour the glaze over the vegetables and toss thoroughly until every piece is coated. Use your hands or a spatula—just make sure the glaze finds every edge.</p></li> <li><p><strong>Roast to perfection</strong><br> Place the tray in the oven and roast for 20 to 25 minutes. About halfway through, give the vegetables a good turn with a spatula. You want crisp edges and caramelised bits where the glaze meets heat.</p></li> <li><p><strong>Finish and serve</strong><br> Once the veg is tender and golden, remove from the oven. Sprinkle with sesame seeds and chopped herbs just before serving.</p></li></ol> <h2>Tips</h2> <ul><li>Add a teaspoon of chili paste to the glaze if you want heat to balance the sweetness.</li> <li>Don’t overcrowd the tray if the veg are piled too high, they’ll steam instead of roast.</li> <li>This glaze works beautifully on aubergine, mushrooms, or halved Brussels sprouts.</li> <li>Leftovers? Tuck them into wraps, grain bowls, or even fold through cooked noodles.</li></ul> <h2>Goes Great With</h2> <ul><li>Grilled salmon or crispy tofu</li> <li>Steamed jasmine or brown rice</li> <li>A soba salad with pickled veg and lime dressing</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Miso_glazed_roasted_vegetables_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_24 as _,
  metadata as m
};
