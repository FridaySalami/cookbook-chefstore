import { I as sanitize_props, J as spread_props } from "./index3.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Sticky Soy Garlic Noodles",
  "slug": "sticky-soy-garlic-noodles",
  "description": "Quick, glossy noodles coated in a sticky soy-garlic sauce—ready in minutes and dangerously slurpable.",
  "date": "2025-05-12T00:00:00.000Z",
  "featured": true,
  "image": "/images/recipes/category-name/recipe-name/sticky-soy-garlic-noodles.webp",
  "prepTime": 10,
  "cookTime": 10,
  "totalTime": 20,
  "servings": 2,
  "categories": ["dinner", "quick"],
  "tags": ["vegetarian", "noodles", "difficulty-easy"],
  "relatedProducts": [
    {
      "handle": "blue-dragon-medium-egg-noodles-300gm",
      "featured": true
    },
    {
      "handle": "lee-kum-kee-premium-light-soy-sauce-500ml"
    },
    {
      "handle": "lee-kum-kee-premium-dark-soy-sauce-500ml"
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
function Sticky_soy_garlic_noodles_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>These noodles are a full-body nod.<br> Quick to make, packed with umami, and just the right kind of messy.<br> Serve ‘em straight or toss in extras—leftover chicken, crispy tofu, or a fried egg on top.</p> <h2>Ingredients</h2> <ul><li>200g wheat noodles or spaghetti</li> <li>2 tbsp dark soy sauce</li> <li>1 tbsp light soy sauce</li> <li>1 tbsp honey or brown sugar</li> <li>1 tbsp rice vinegar or lime juice</li> <li>1 tsp sesame oil</li> <li>2 garlic cloves, minced</li> <li>1 tsp ginger, grated</li> <li>1 tbsp neutral oil (like sunflower or vegetable)</li> <li>Optional toppings: spring onions, sesame seeds, chilli flakes</li></ul> <h2>Instructions</h2> <ol><li>Cook noodles according to packet instructions. Drain and set aside.</li> <li>In a bowl, mix both soy sauces, honey, vinegar, and sesame oil.</li> <li>Heat oil in a wok or frying pan over medium heat. Add garlic and ginger. Sizzle gently for 30 seconds.</li> <li>Pour in the sauce mix. Let it bubble and thicken slightly—about 1 minute.</li> <li>Add the cooked noodles. Toss and stir until they’re glossy and coated in sticky sauce.</li> <li>Serve hot, topped with spring onions, sesame seeds, and chilli flakes if you fancy a kick.</li></ol> <h2>Tips</h2> <ul><li>Want it spicy? Add a spoon of chilli crisp or fresh chopped red chilli.</li> <li>Leftover roast veg or shredded chicken can jump in here with no fuss.</li> <li>Gluten-free? Use tamari and rice noodles.</li></ul> <h2>Goes Great With</h2> <ul><li>Stir-fried greens or pak choi</li> <li>Fried egg with a runny yolk</li> <li>Cold beer or sweet iced tea</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sticky_soy_garlic_noodles_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_13 as _,
  metadata as m
};
