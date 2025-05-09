import { I as sanitize_props, J as spread_props } from "./index3.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Miso Glazed Roasted Vegetables",
  "slug": "miso-glazed-roasted-vegetables",
  "description": "A savory-sweet vegetable medley with a rich umami glaze—the perfect side dish that might just steal the show.",
  "date": "2025-04-25T00:00:00.000Z",
  "featured": true,
  "image": "/images/recipes/category-name/recipe-name/miso-glazed-roasted-vegetables.png",
  "prepTime": 15,
  "cookTime": 30,
  "totalTime": 45,
  "servings": 4,
  "categories": ["sides", "vegetarian"],
  "tags": ["easy", "vegetables", "difficulty-easy"],
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
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>Roasted veg is already good. But slather it with a sweet-salty <strong>miso glaze</strong>?<br> Now you’re talkin’ about somethin’ that could steal the whole table.<br> Earthy, savory, just a little sweet—this dish brings the kind of flavor that feels deep down <em>earned</em>.</p> <p>Perfect next to a roast chicken, a grilled steak, or just a big ol’ bowl of rice.</p> <h2>Ingredients</h2> <ul><li>500g mixed vegetables (carrots, parsnips, sweet potato, cauliflower)</li> <li>2 tablespoons <a href="https://www.thechefstoreuk.com/products/hikari-shinshu-awase-brown-miso-paste-1kg" rel="nofollow">Hikari Shinshu Awase Brown Miso Paste</a></li> <li>2 tablespoons olive oil</li> <li>1 tablespoon maple syrup (or honey)</li> <li>1 tablespoon soy sauce</li> <li>1 teaspoon rice vinegar or lemon juice</li> <li>1/2 teaspoon sesame oil (optional)</li> <li>Toasted sesame seeds, for garnish</li> <li>Fresh coriander or parsley, for garnish</li></ul> <h2>Instructions</h2> <ol><li>Preheat your oven to 200°C (400°F).</li> <li>Cut vegetables into bite-sized pieces and spread on a large baking tray.</li> <li>In a small bowl, whisk together the miso paste, olive oil, maple syrup, soy sauce, rice vinegar, and sesame oil.</li> <li>Pour the glaze over the veggies and toss well to coat evenly.</li> <li>Roast for 20–25 minutes, tossing halfway, until tender and caramelized at the edges.</li> <li>Sprinkle with sesame seeds and fresh herbs before serving.</li></ol> <h2>Tips</h2> <ul><li>Want deeper flavor? Add a spoonful of chili paste or a splash of mirin to the glaze.</li> <li>Works great with aubergine, broccoli, and mushrooms too.</li> <li>Leftovers make an incredible filling for wraps or grain bowls.</li></ul> <h2>Goes Great With</h2> <ul><li>Grilled salmon or tofu</li> <li>Steamed jasmine rice</li> <li>Cold soba noodle salad</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Miso_glazed_roasted_vegetables_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_3 as _,
  metadata as m
};
