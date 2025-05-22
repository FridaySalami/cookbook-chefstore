import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Kimchi Fried Rice (Bokkeumbap)",
  "slug": "kimchi-fried-rice",
  "description": "A fiery, tangy, deeply savoury fried rice made with kimchi, garlic, and soy sauce—finished with a crispy fried egg and a drizzle of sesame oil.",
  "date": "2025-05-12T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/kimchi-fried-rice.webp",
  "prepTime": 10,
  "cookTime": 15,
  "totalTime": 25,
  "servings": 2,
  "categories": ["dinner", "quick"],
  "tags": [
    "spicy",
    "vegetarian-option",
    "difficulty-easy"
  ],
  "relatedProducts": [
    { "handle": "biona-organic-kimchi-350gm" },
    {
      "handle": "lee-kum-kee-premium-dark-soy-sauce-500ml"
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
function Kimchi_fried_rice_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This is the kind of dish that catches you off guard with how much joy it holds.<br> Kimchi fried rice isn’t trying to be fancy, but it hits every craving at once.<br> You’ve got heat and tang and umami—plus that deep soul satisfaction of transforming yesterday’s rice into something that feels like a celebration.</p> <p>It’s a dish built on humble leftovers but feels bold and deliberate.<br> When the garlic hits the hot oil, the kitchen smells alive.<br> When the rice starts to crisp, you’ll want to lean in and watch.<br> And when that fried egg lands on top, yolk ready to run, everything just… makes sense.</p> <p>It’s comfort food, but not quiet. It’s sharp and sizzling and totally unapologetic.<br> And sometimes, that’s exactly what you need.</p> <h2>Ingredients</h2> <ul><li>1 Tbsp Sesame Oil</li> <li>1 Tbsp Neutral Oil (Sunflower or Vegetable)</li> <li>2 Garlic Cloves</li> <li>150g Kimchi</li> <li>250g Cooked Rice</li> <li>1 Tbsp Dark Soy Sauce</li> <li>1 Tsp Gochujang (Optional)</li> <li>2 Eggs</li> <li>Spring Onions</li> <li>Sesame Seeds</li> <li>Optional: Nori Flakes, Toasted Peanuts, Sriracha</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Start with the sizzle</strong><br> Heat the sesame oil and neutral oil in a large pan over medium-high heat. Let it get hot enough that a tiny piece of garlic would dance.</p></li> <li><p><strong>Wake the garlic</strong><br> Add the garlic, minced fine. Stir it gently for 30 seconds until fragrant. It should smell sweet and sharp, not burnt. If it browns, the heat’s too high—turn it down.</p></li> <li><p><strong>Cook the kimchi down</strong><br> Add the chopped kimchi. Stir-fry for 2 to 3 minutes until it softens and caramelises a little. This tames its bite and brings out the sweetness hidden inside.</p></li> <li><p><strong>Add the rice</strong><br> Tip in the cold rice. Use a spatula to break it apart and toss it with the kimchi. Press it gently into the pan every so often to crisp the edges. Stir-fry for 5 to 6 minutes until it’s steaming hot with golden flecks.</p></li> <li><p><strong>Season with soy and spice</strong><br> Pour in the soy sauce. If using gochujang, stir that in too. Toss everything until the rice is evenly coated and just glossy enough to catch the light.</p></li> <li><p><strong>Fry the eggs</strong><br> In a separate pan, fry the eggs sunny-side up. Cook until the whites are set but the yolks are still runny. You want that golden spill to soak into the rice later.</p></li> <li><p><strong>Assemble and finish</strong><br> Divide the rice between bowls. Slide a fried egg on top of each. Scatter with sliced spring onions, sesame seeds, and any extras you like—nori, peanuts, or a sharp drizzle of sriracha.</p></li></ol> <h2>Tips</h2> <ul><li>Cold rice is your best friend here. Freshly cooked rice turns mushy. Let it chill in the fridge for at least a few hours first.</li> <li>Use up what you have. Leftover roast meat, a few mushrooms, or cubes of tofu all work brilliantly stirred in before the egg.</li> <li>For a vegan version, skip the egg and top with avocado slices or pan-fried tofu. Add a splash of lime for contrast.</li></ul> <h2>Goes Great With</h2> <ul><li>Pickled cucumber or daikon for crunch and contrast</li> <li>A small bowl of miso soup or broth to sip between bites</li> <li>A quiet evening that needs waking up with spice</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kimchi_fried_rice_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_27 as _,
  metadata as m
};
