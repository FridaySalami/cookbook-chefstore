import { I as sanitize_props, J as spread_props } from "./index3.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Thai Green Curry",
  "slug": "thai-green-curry",
  "description": "A fragrant, coconut-based curry with tender chunks of chicken, vibrant vegetables, and the perfect balance of heat and sweetness.",
  "date": "2025-04-23T00:00:00.000Z",
  "featured": true,
  "image": "/placeholder.webp",
  "prepTime": 20,
  "cookTime": 25,
  "totalTime": 45,
  "servings": 4,
  "categories": ["mains", "asian"],
  "tags": ["curry", "chicken", "difficulty-medium"],
  "relatedProducts": [
    {
      "handle": "thai-taste-gang-keow-wan-green-curry-paste-400gm",
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
function Thai_green_curry_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Ingredients</h2> <ul><li>2 tablespoons vegetable oil</li> <li>3 tablespoons Thai green curry paste</li> <li>500g chicken breast, diced</li> <li>400ml coconut milk</li> <li>1 tablespoon fish sauce</li> <li>1 teaspoon sugar</li> <li>100g baby corn</li> <li>100g sugar snap peas</li> <li>Fresh Thai basil or coriander to garnish</li> <li>Steamed jasmine rice to serve</li></ul> <h2>Instructions</h2> <ol><li>Heat a splash of oil in a deep pan or wok. Add the curry paste and let it sizzle for 1–2 minutes until your kitchen smells like a Thai street stall.</li> <li>Toss in the diced chicken and cook until it starts to brown at the edges.</li> <li>Pour in the coconut milk, stir gently, then add the fish sauce and sugar. Simmer for 10 minutes.</li> <li>Add baby corn and sugar snap peas. Simmer for another 5 minutes, just until the veg is tender and bright.</li> <li>Taste and adjust—maybe a splash more fish sauce, a pinch of sugar, or a squeeze of lime if you’re feelin’ zesty.</li> <li>Serve hot over jasmine rice and top with fresh basil or coriander. Close your eyes and listen for tuk-tuks.</li></ol> <h2>Tips</h2> <ul><li>Want it hotter? Add a chopped green chili to the pan with the chicken.</li> <li>Out of chicken? Prawns, tofu, or aubergine work great.</li> <li>Leftover curry paste? Freeze it in an ice cube tray for next time.</li></ul> <h2>Goes Great With</h2> <ul><li>Thai prawn crackers</li> <li>Iced jasmine tea or a cold Singha beer</li> <li>An early dinner when you need to impress, fast</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Thai_green_curry_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_17 as _,
  metadata as m
};
