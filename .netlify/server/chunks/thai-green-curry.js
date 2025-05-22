import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Thai Green Curry",
  "slug": "thai-green-curry",
  "description": "A fragrant, coconut-based curry with tender chunks of chicken, vibrant vegetables, and the perfect balance of heat and sweetness.",
  "date": "2025-04-23T00:00:00.000Z",
  "featured": false,
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
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This curry is a fast track to a full heart and a warm kitchen.<br> It’s the weeknight hero you barely have to think about, but still feels like something special. That first hiss of curry paste hitting the pan? That’s the kind of smell that travels to your neighbours, your memories, and somewhere deep behind your eyes where comfort lives.</p> <p>The sauce is creamy and sharp all at once. Coconut softens the edges. Basil brightens the corners. The veg stays snappy. And the whole thing is ready before you even finish the rice.</p> <p>Best part? You don’t need to follow it too tight. It’s one of those recipes that forgives. That lets you swap, riff, skip, or jazz it up depending on what’s knocking about in the fridge. You don’t make it once. You make it part of the week.</p> <h2>Ingredients</h2> <ul><li>2 Tablespoons Vegetable Oil</li> <li>3 Tablespoons Thai Green Curry Paste</li> <li>500 Grams Chicken Breast</li> <li>400 Millilitres Coconut Milk</li> <li>1 Tablespoon Fish Sauce</li> <li>1 Teaspoon Sugar</li> <li>100 Grams Baby Corn</li> <li>100 Grams Sugar Snap Peas</li> <li>Thai Basil or Coriander, to garnish</li> <li>Steamed Jasmine Rice, to serve</li></ul> <h2>Instructions</h2> <p><strong>Start the base.</strong><br> Heat the vegetable oil in a deep pan or wok over medium heat. Add the green curry paste and let it fry for 1 to 2 minutes. Stir gently but don’t rush you want the paste to bloom, to wake up, to send out that unmistakable Thai aroma. The kitchen should smell bold and bright.</p> <p><strong>Cook the chicken.</strong><br> Dice the chicken breast into bite-sized chunks and add it to the pan. Stir to coat it in the fragrant paste. Let it cook for a few minutes until the outside takes on a little colour and starts to firm up.</p> <p><strong>Add the coconut milk.</strong><br> Pour in the coconut milk and stir until everything is well mixed. Drop in the fish sauce and sugar. Let it simmer gently for about 10 minutes. The chicken should cook through, and the sauce should thicken slightly, taking on a silky texture.</p> <p><strong>Toss in the vegetables.</strong><br> Add the baby corn and sugar snap peas to the sauce. Simmer for another 5 minutes or so. You want the vegetables to stay bright and slightly crisp, not soggy. Keep the heat gentle.</p> <p><strong>Balance the flavours.</strong><br> Taste the sauce. Add a splash more fish sauce if it needs salt, a pinch of sugar for sweetness, or even a squeeze of lime if you’re craving something zesty. The balance is yours to strike.</p> <p><strong>Serve it up.</strong><br> Spoon the curry over warm jasmine rice and finish with a handful of fresh Thai basil or coriander. Serve hot, and if you close your eyes, you might just hear the rattle of a tuk-tuk and the hum of night markets.</p> <h2>Tips</h2> <ul><li>Want it hotter? Add a chopped green chili to the pan with the chicken.</li> <li>Out of chicken? Prawns, tofu, or aubergine work beautifully.</li> <li>Got leftover curry paste? Freeze it in ice cube trays so you’re halfway there next time.</li></ul> <h2>Goes Great With</h2> <ul><li>Thai prawn crackers</li> <li>Iced jasmine tea or a cold Singha beer</li> <li>An early dinner when you need to impress, fast</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_58 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Thai_green_curry_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_58 as _,
  metadata as m
};
