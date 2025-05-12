import { I as sanitize_props, J as spread_props } from "./index3.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Sticky Soy-Braised Pork Ribs",
  "slug": "sticky-soy-braised-pork-ribs",
  "description": "Fall-apart tender pork ribs slow-braised in soy, ginger, and garlic until they’re sticky, savoury, and irresistible—whether you cook 'em low and slow or fast and furious.",
  "date": "2025-05-12T00:00:00.000Z",
  "featured": true,
  "image": "/images/recipes/category-name/recipe-name/sticky-soy-braised-pork-ribs.webp",
  "prepTime": 15,
  "cookTime": 120,
  "totalTime": 135,
  "servings": 4,
  "categories": ["dinner"],
  "tags": [
    "comfort food",
    "ribs",
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
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>These ribs ain’t just tender—they’re <strong>confessional</strong>.<br> Slow-braised in a soy-spiked bath until every bite’s coated in glossy, deep flavor and fallin’ clean off the bone.<br> Whether you let ‘em ride low and slow in the oven or put your pressure cooker to work, they’ll taste like they took all day.</p> <h2>Ingredients</h2> <ul><li>1.2kg pork ribs (baby back or spare ribs), cut into individual pieces</li> <li>4 tbsp dark soy sauce</li> <li>2 tbsp light soy sauce</li> <li>2 tbsp rice wine vinegar</li> <li>2 tbsp honey or brown sugar</li> <li>1 tbsp sesame oil</li> <li>1 tbsp neutral oil</li> <li>4 garlic cloves, smashed</li> <li>1 thumb-sized piece of ginger, sliced</li> <li>1 tsp five spice powder (optional, but real good)</li> <li>2 spring onions, chopped (for garnish)</li> <li>1 tsp sesame seeds (optional, for garnish)</li> <li>Optional: 1 tsp chilli oil or fresh red chilli for heat</li> <li>250ml water or chicken stock</li></ul> <hr> <h2>Instructions</h2> <h3>🔥 Oven Method (Low &amp; Slow)</h3> <ol><li>Preheat oven to 160°C (fan) / 180°C (conventional).</li> <li>Heat neutral oil in a deep, oven-safe pot or Dutch oven. Sear the ribs on both sides until golden.</li> <li>Add garlic, ginger, soy sauces, vinegar, honey, sesame oil, five spice, and water or stock.</li> <li>Bring to a simmer, cover tightly with a lid or foil.</li> <li>Transfer to oven and braise for <strong>2 hours</strong>, turning ribs halfway.</li> <li>Remove the lid and return to oven for <strong>15–20 mins</strong> to reduce sauce and get sticky.</li> <li>Garnish with spring onions, sesame seeds, or chilli. Serve with rice, slaw, or bao buns.</li></ol> <h3>⚡ Pressure Cooker Method (Fast &amp; Furious)</h3> <ol><li>Set pressure cooker (or Instant Pot) to sauté mode. Sear ribs in oil until browned.</li> <li>Add garlic, ginger, soy sauces, vinegar, honey, sesame oil, five spice, and stock.</li> <li>Lock lid, cook on <strong>high pressure for 35 minutes</strong>.</li> <li>Let pressure release naturally for 10 minutes, then quick release.</li> <li>Remove lid and switch back to sauté mode. Simmer for <strong>10–15 mins</strong> to reduce sauce until sticky and glossy.</li> <li>Finish with garnishes and serve hot.</li></ol> <hr> <h2>Tips</h2> <ul><li>Want more caramelisation? Pop ribs under a hot grill for 5 minutes after cooking.</li> <li>Got leftovers? Shred the meat and stuff it into bao buns or rice bowls.</li> <li>Five spice adds warmth—skip it if you’re keepin’ it simple.</li></ul> <hr> <h2>Goes Great With</h2> <ul><li>Steamed jasmine rice or fried rice</li> <li>Crunchy Asian Slaw</li> <li>Sticky Soy Garlic Noodles</li> <li>Bao buns or lettuce wraps</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sticky_soy_braised_pork_ribs_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_14 as _,
  metadata as m
};
