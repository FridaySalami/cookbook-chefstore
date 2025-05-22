import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Baked Cajun Salmon with Rice & Corn",
  "slug": "baked-cajun-salmon-rice-corn",
  "description": "Flaky Cajun-spiced salmon fillets roasted until just tender, served with buttery basmati rice and sweetcorn. A balanced, bold weeknight dinner packed with warmth and colour.",
  "date": "2025-05-20T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/baked-cajun-salmon-rice-corn.webp",
  "prepTime": 10,
  "cookTime": 20,
  "totalTime": 30,
  "servings": 4,
  "categories": ["dinner", "fish", "quick"],
  "tags": ["fish", "difficulty-easy"],
  "relatedProducts": [
    {
      "handle": "triple-lion-blackened-cajun-seasoning-600gm",
      "featured": true
    },
    { "handle": "maldon-sea-salt", "featured": true },
    {
      "handle": "tilda-pure-basmati-rice-blue-bag-5kg",
      "featured": true
    },
    {
      "handle": "ballerina-sweetcorn-340g-tin",
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
function Baked_cajun_salmon_rice_corn_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This is one of those quiet recipes that ends up staying in your regular rotation. The kind where you realise halfway through cooking that the whole kitchen smells like something good is coming. Salmon rubbed in smoky Cajun spice, edges just catching in the oven. Rice turned buttery and warm, with sweetcorn folded in like little golden dots of comfort.</p> <p>It’s simple but not plain. Quick but not rushed. The kind of dinner that asks very little but gives you a lot. There’s colour, balance, and enough heat to wake up your tastebuds without demanding water in a panic.</p> <p>Everything sits in harmony on the plate — spice and cream, heat and sweet — and somehow it still only dirties one tray and one pot. That’s the sort of magic we all need more of.</p> <h2>Ingredients</h2> <ul><li>4 Salmon Fillets</li> <li>1 Tablespoon Olive Oil</li> <li>2 Teaspoons Triple Lion Cajun Seasoning</li> <li>1 Teaspoon Maldon Sea Salt</li> <li>Black Pepper</li> <li>200g Tilda Basmati Rice</li> <li>30g Butter</li> <li>300g Ballerina Sweetcorn (drained if tinned)</li> <li>Juice of 1 Lemon</li> <li>Fresh Parsley or Chives (optional)</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Preheat the oven.</strong><br> Set your oven to 200°C (fan 180°C). Line a baking tray with parchment or foil for easier cleanup.</p></li> <li><p><strong>Season the salmon.</strong><br> Pat the salmon dry with kitchen paper. Rub each fillet with olive oil, then coat with Cajun seasoning, sea salt, and a few twists of black pepper. Lay skin-side down on the prepared tray.</p></li> <li><p><strong>Roast the salmon.</strong><br> Bake in the hot oven for 12 to 15 minutes, or until the salmon flakes easily and the top has taken on some colour. If your fillets are thick, add a couple of extra minutes.</p></li> <li><p><strong>Cook the rice.</strong><br> While the salmon roasts, rinse the rice under cold water. Add to a saucepan with water and cook according to packet instructions until fluffy. Drain if needed and set aside.</p></li> <li><p><strong>Warm the corn and combine.</strong><br> In a large pan, melt the butter over low heat. Add the sweetcorn and stir for 2 to 3 minutes until warmed through. Fold in the cooked rice, squeeze in the lemon juice, and taste for seasoning.</p></li> <li><p><strong>Bring it together.</strong><br> Plate up the buttery rice and corn, then top with a salmon fillet. Add herbs if using, and serve immediately.</p></li></ol> <h2>Tips</h2> <ul><li>You can swap sweetcorn for peas or diced red pepper for colour and crunch</li> <li>A spoon of Greek yogurt or crème fraîche on the side softens the Cajun heat</li> <li>Leftover rice makes a quick fried rice with spring onion and egg the next day</li></ul> <h2>Goes Great With</h2> <ul><li>Roasted broccoli or green beans</li> <li>A sharp cucumber and tomato salad</li> <li>Pickled jalapeños or onions for a zesty contrast</li></ul> <hr> <blockquote><p>Smoky salmon, buttery grains, and sunshine-sweet corn. All in under half an hour — no chaos, no corners cut, just dinner that gets it right.</p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Baked_cajun_salmon_rice_corn_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_1 as _,
  metadata as m
};
