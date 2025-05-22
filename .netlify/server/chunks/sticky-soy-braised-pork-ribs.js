import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Sticky Soy-Braised Pork Ribs",
  "slug": "sticky-soy-braised-pork-ribs",
  "description": "Fall-apart tender pork ribs slow-braised in soy, ginger, and garlic until they’re sticky, savoury, and irresistible, whether you cook 'em low and slow or fast and furious.",
  "date": "2025-05-12T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/sticky-soy-braised-pork-ribs.webp",
  "prepTime": 15,
  "cookTime": 120,
  "totalTime": 135,
  "servings": 4,
  "categories": ["dinner"],
  "tags": [
    "comfort-food",
    "pork",
    "crowd-pleaser",
    "difficulty-medium"
  ],
  "relatedProducts": [
    {
      "handle": "lee-kum-kee-premium-dark-soy-sauce-500ml"
    },
    {
      "handle": "lee-kum-kee-rice-wine-vinegar-500ml"
    },
    {
      "handle": "chef-william-chinese-five-spice-405g"
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
function Sticky_soy_braised_pork_ribs_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>These ribs are the kind of meal that make you stop mid chew and close your eyes.<br> They’re rich and tender, slow cooked until the meat slides off the bone with barely a nudge. Every inch is soaked in a dark, glossy glaze that clings to your fingers and leaves its mark on your soul.</p> <p>Soy, garlic, ginger and just enough sweetness to round it out. A little five spice if you’re feeling generous.<br> They taste like you spent all day in the kitchen, but with the right method, you barely have to.</p> <p>Oven or pressure cooker, these ribs always show up bold.<br> Make a big batch. There won’t be leftovers, but if there are, they get better by the hour.</p> <h2>Ingredients</h2> <ul><li>1.2kg Pork Ribs (Baby Back or Spare Ribs)</li> <li>4 Tablespoons Dark Soy Sauce</li> <li>2 Tablespoons Light Soy Sauce</li> <li>2 Tablespoons Rice Wine Vinegar</li> <li>2 Tablespoons Honey or Brown Sugar</li> <li>1 Tablespoon Sesame Oil</li> <li>1 Tablespoon Neutral Oil</li> <li>4 Garlic Cloves</li> <li>1 Thumb-Sized Piece of Ginger</li> <li>1 Teaspoon Five Spice Powder (Optional)</li> <li>250ml Water or Chicken Stock</li> <li>2 Spring Onions</li> <li>1 Teaspoon Sesame Seeds (Optional)</li> <li>Optional: 1 Teaspoon Chilli Oil or Fresh Red Chilli</li></ul> <h2>Instructions</h2> <h3>Oven Method (Low and Slow)</h3> <ol><li>Preheat your oven to 160°C (fan) or 180°C (conventional).</li> <li>Heat neutral oil in a large, deep ovenproof pot or Dutch oven over medium-high heat. Sear the ribs in batches until golden brown on all sides.</li> <li>Add the garlic (smashed), ginger (sliced), both soy sauces, rice vinegar, honey or sugar, sesame oil, five spice powder, and water or stock. Stir to combine and bring to a gentle simmer.</li> <li>Cover the pot tightly with a lid or foil. Transfer to the oven and braise for 2 hours, turning the ribs once halfway through.</li> <li>Uncover and return to the oven for 15 to 20 minutes. This step helps the sauce reduce and become beautifully sticky.</li> <li>Remove from the oven, garnish with chopped spring onions, sesame seeds, or fresh chilli if using. Serve hot.</li></ol> <h3>Pressure Cooker Method (Fast and Furious)</h3> <ol><li>Set your pressure cooker or Instant Pot to sauté mode. Add neutral oil and sear the ribs until browned all over.</li> <li>Add garlic, ginger, soy sauces, vinegar, honey, sesame oil, five spice, and stock. Stir well.</li> <li>Lock the lid and cook on high pressure for 35 minutes.</li> <li>Let the pressure release naturally for 10 minutes, then quick release any remaining steam.</li> <li>Remove the lid, switch back to sauté mode, and simmer uncovered for 10 to 15 minutes to reduce the sauce. Stir occasionally until it becomes thick and glossy.</li> <li>Garnish and serve hot.</li></ol> <h2>Tips</h2> <ul><li>For extra caramelisation, place the cooked ribs under a hot grill for 3 to 5 minutes before serving.</li> <li>Leftover ribs? Shred the meat and use in bao buns, rice bowls, or noodle salads.</li> <li>No five spice? No problem. The dish holds its own with just the soy, garlic, and ginger.</li></ul> <h2>Goes Great With</h2> <ul><li>Steamed Jasmine Rice or Coconut Rice</li> <li>Crunchy Asian Slaw or Pickled Vegetables</li> <li>Soft Bao Buns or Lettuce Wraps</li> <li>Sticky Noodles with Sesame and Soy</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_55 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sticky_soy_braised_pork_ribs_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_55 as _,
  metadata as m
};
