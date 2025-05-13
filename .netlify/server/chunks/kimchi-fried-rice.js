import { I as sanitize_props, J as spread_props } from "./index3.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Kimchi Fried Rice (Bokkeumbap)",
  "slug": "kimchi-fried-rice",
  "description": "A fiery, tangy, deeply savoury fried rice made with kimchi, garlic, and soy sauce—finished with a crispy fried egg and a drizzle of sesame oil.",
  "date": "2025-05-12T00:00:00.000Z",
  "featured": true,
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
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This rice is comfort food with a kick.<br> Sour, spicy kimchi gets cooked down till mellow and sweet, rice goes crispy round the edges, and a fried egg slides over the top like a crown.<br> Fast, fiery, and straight-up addictive.</p> <h2>Ingredients</h2> <ul><li>1 tbsp sesame oil</li> <li>1 tbsp neutral oil (like sunflower or vegetable)</li> <li>2 garlic cloves, minced</li> <li>150g Biona Organic Kimchi, roughly chopped</li> <li>250g cooked, cold rice (jasmine or short grain ideal)</li> <li>1 tbsp dark soy sauce</li> <li>1 tsp gochujang (optional, for extra heat)</li> <li>2 eggs</li> <li>Spring onions, sliced, for garnish</li> <li>Sesame seeds, for garnish</li> <li>Optional: nori flakes, toasted peanuts, or a drizzle of sriracha</li></ul> <h2>Instructions</h2> <ol><li>Heat sesame oil and neutral oil in a pan over medium-high heat.</li> <li>Add garlic and cook until fragrant, about 30 seconds.</li> <li>Stir in chopped kimchi. Cook for 2–3 minutes until slightly caramelised and reduced.</li> <li>Add rice and break it up with a spatula. Stir-fry for 5–6 minutes until heated through and lightly crispy.</li> <li>Stir in soy sauce and gochujang if using. Toss to coat evenly.</li> <li>In a separate pan, fry the eggs sunny-side up until whites are set and yolks are runny.</li> <li>Plate the rice, top with fried eggs, and garnish with spring onions, sesame seeds, and extras if desired.</li></ol> <h2>Tips</h2> <ul><li>Use <strong>day-old rice</strong> for best texture—it fries better than freshly cooked rice.</li> <li>Add chopped bacon, tofu, or leftover roast meats if you like.</li> <li>Want it vegan? Skip the egg and top with avocado or crispy tofu cubes.</li></ul> <h2>Goes Great With</h2> <ul><li>Pickled cucumber or radish</li> <li>A mug of broth or miso soup</li> <li>A night when fridge odds and ends need a new lease on life</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kimchi_fried_rice_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_13 as _,
  metadata as m
};
