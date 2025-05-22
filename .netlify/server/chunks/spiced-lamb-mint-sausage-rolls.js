import { D as sanitize_props, E as spread_props } from "./index2.js";
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
  "tags": ["snack", "difficulty-medium"],
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
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>These sausage rolls aren’t messing about.<br> They come wrapped in golden pastry, sure, but inside is a filling that brings warmth, boldness, and just the right lift of mint.<br> Cumin and coriander give a deep, earthy rhythm. Cinnamon adds a hum of sweetness underneath. And then the tahini mint yoghurt comes in, cool, creamy, and a little tangy to tie it all together.</p> <p>They’re at home on a party platter, in a packed lunch, or eaten standing at the counter before they’ve even cooled.<br> Comfort food, with a bit of flair. Honest and flaky, with just enough spice to make you pause.</p> <h2>Ingredients</h2> <h3>For the Sausage Rolls</h3> <ul><li>500g Lamb Mince</li> <li>1 Small Onion</li> <li>2 Garlic Cloves</li> <li>1 Teaspoon Ground Cumin</li> <li>1 Teaspoon Ground Coriander</li> <li>1 Teaspoon Smoked Paprika</li> <li>1/2 Teaspoon Cinnamon</li> <li>1 Tablespoon Mint Sauce</li> <li>2 Tablespoons Chopped Fresh Mint or Parsley</li> <li>Salt</li> <li>Black Pepper</li> <li>1 Sheet Ready-Rolled Puff Pastry</li> <li>1 Egg</li> <li>Sesame Seeds (Optional)</li></ul> <h3>For the Mint Tahini Yoghurt Dip</h3> <ul><li>2 Tablespoons Tahini</li> <li>3 Tablespoons Natural Yoghurt</li> <li>1 Teaspoon Mint Sauce</li> <li>1 Teaspoon Lemon Juice</li> <li>Salt</li></ul> <h2>Instructions</h2> <h3>Make the Filling</h3> <ol><li>Add the lamb mince to a large bowl. Grate the onion and garlic directly into the bowl.</li> <li>Sprinkle over the cumin, coriander, paprika, cinnamon, and a generous pinch each of salt and pepper.</li> <li>Add the mint sauce and herbs. Mix everything together with your hands or a fork until just combined. Don’t overwork it.</li></ol> <h3>Shape and Bake</h3> <ol start="4"><li>Preheat your oven to 200°C and line a baking tray with parchment.</li> <li>Unroll the puff pastry and cut lengthways into two even strips.</li> <li>Divide the lamb filling in half and form each half into a long sausage shape down the middle of each pastry strip.</li> <li>Brush one long edge of the pastry with water. Fold the other side over the filling and press to seal. Place seam-side down.</li> <li>Slice into individual rolls. Brush the tops with beaten egg and sprinkle with sesame seeds if using.</li> <li>Arrange on the tray and bake for 20 to 25 minutes or until golden brown and cooked through.</li></ol> <h3>Make the Dip</h3> <ol start="10"><li>In a small bowl, whisk together the tahini, yoghurt, mint sauce, lemon juice, and a pinch of salt.</li> <li>If the dip is too thick, add a splash of cold water to loosen it to your liking.</li></ol> <h2>Tips</h2> <ul><li>Assemble the rolls ahead and freeze before baking. Bake straight from frozen—just add 5 to 10 extra minutes in the oven.</li> <li>Add a pinch of chilli flakes or a spoonful of harissa to the lamb for extra heat.</li> <li>Serve with crisp salad leaves or pickled onions for brightness and crunch.</li></ul> <h2>Goes Great With</h2> <ul><li>A Minty Sparkling Drink or Light Lager</li> <li>Herby Couscous or Spiced Roasted Veg</li> <li>A rainy afternoon and a kitchen full of spice</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_45 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Spiced_lamb_mint_sausage_rolls_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_45 as _,
  metadata as m
};
