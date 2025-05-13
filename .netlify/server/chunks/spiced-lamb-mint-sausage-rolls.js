import { I as sanitize_props, J as spread_props } from "./index3.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Spiced Lamb & Mint Sausage Rolls",
  "slug": "spiced-lamb-mint-sausage-rolls",
  "description": "A flaky, golden twist on the classic sausage roll—filled with warm-spiced lamb, fresh herbs, and served with a creamy mint and tahini yoghurt dip.",
  "date": "2025-05-12T00:00:00.000Z",
  "featured": true,
  "image": "/images/recipes/category-name/recipe-name/spiced-lamb-mint-sausage-rolls.webp",
  "prepTime": 20,
  "cookTime": 25,
  "totalTime": 45,
  "servings": "4–6",
  "categories": ["snack", "lunch", "party"],
  "tags": [
    "baked",
    "freezer-friendly",
    "british-twist",
    "difficulty-medium"
  ],
  "relatedProducts": [
    {
      "handle": "lefktro-tahini-900gm",
      "featured": true
    },
    { "handle": "colmans-mint-sauce-165gm" }
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
function Spiced_lamb_mint_sausage_rolls_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>These rolls walk the line between <strong>proper pub food</strong> and <strong>midweek marvel</strong>.<br> They’re flaky and rich, spiced with cumin and coriander, and cooled off with a tangy tahini-mint yoghurt dip.<br> Serve ‘em hot, warm, or smuggled into a lunchbox.</p> <h2>Ingredients</h2> <h3>For the Sausage Rolls</h3> <ul><li>500g lamb mince</li> <li>1 small onion, finely grated</li> <li>2 garlic cloves, minced</li> <li>1 tsp ground cumin</li> <li>1 tsp ground coriander</li> <li>1 tsp smoked paprika</li> <li>½ tsp cinnamon</li> <li>1 tbsp Colman’s Mint Sauce</li> <li>2 tbsp fresh chopped parsley or mint (or 1 tsp dried mint)</li> <li>Salt &amp; pepper to taste</li> <li>1 sheet ready-rolled puff pastry</li> <li>1 egg, beaten (for glazing)</li> <li>Sesame seeds, for topping (optional)</li></ul> <h3>For the Mint Tahini Yoghurt Dip</h3> <ul><li>2 tbsp Lefktro Tahini</li> <li>3 tbsp natural yoghurt</li> <li>1 tsp Colman’s Mint Sauce</li> <li>1 tsp lemon juice</li> <li>Salt to taste</li></ul> <h2>Instructions</h2> <h3>1. Make the Filling</h3> <ol><li>In a bowl, mix lamb, onion, garlic, spices, mint sauce, herbs, salt and pepper.</li> <li>Combine well but don’t overwork it—just enough to bring it together.</li></ol> <h3>2. Roll and Bake</h3> <ol><li>Preheat oven to 200°C (fan).</li> <li>Unroll puff pastry and cut lengthwise into two long strips.</li> <li>Divide the lamb mixture in half and form into logs down the centre of each strip.</li> <li>Fold pastry over and seal edges with water. Place seam-side down.</li> <li>Cut into rolls, glaze with beaten egg, and sprinkle sesame seeds if using.</li> <li>Bake on parchment-lined tray for 20–25 minutes until golden and cooked through.</li></ol> <h3>3. Make the Dip</h3> <ol><li>Whisk together tahini, yoghurt, mint sauce, lemon juice, and a pinch of salt until smooth.</li> <li>Add a splash of water if needed to loosen.</li></ol> <h2>Tips</h2> <ul><li>These freeze brilliantly—assemble raw, freeze on trays, then bag and bake from frozen.</li> <li>Fancy it hotter? Add chilli flakes or harissa to the lamb mix.</li> <li>Serve with pickles or a chopped salad to freshen things up.</li></ul> <h2>Goes Great With</h2> <ul><li>Firefly Kiwi, Lime &amp; Mint drink</li> <li>A big bowl of chips or salad</li> <li>Quiet kitchen, radio on, rain at the window</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Spiced_lamb_mint_sausage_rolls_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_14 as _,
  metadata as m
};
