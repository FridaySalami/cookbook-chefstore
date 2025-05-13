import { I as sanitize_props, J as spread_props } from "./index3.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Crunchy Asian Slaw with Sesame-Ginger Dressing",
  "slug": "crunchy-asian-slaw",
  "description": "A light, zesty slaw loaded with crisp veg and tossed in a sesame-ginger dressing—perfect alongside rich mains or piled high in wraps and buns.",
  "date": "2025-05-12T00:00:00.000Z",
  "featured": true,
  "image": "/images/recipes/category-name/recipe-name/crunchy-asian-slaw.webp",
  "prepTime": 15,
  "cookTime": 0,
  "totalTime": 15,
  "servings": 4,
  "categories": ["sides", "salad"],
  "tags": ["vegetarian", "quick", "difficulty-easy"],
  "relatedProducts": [
    {
      "handle": "lee-kum-kee-premium-light-soy-sauce-500ml",
      "featured": true
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
function Crunchy_asian_slaw_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This slaw crunches like fresh snow underfoot.<br> It’s cool, it’s bright, it’s got <strong>zing for days</strong>—and just a flicker of heat that lingers like a goodbye hug.<br> Serve it on the side or build your whole meal around it.</p> <h2>Ingredients</h2> <h3>For the Slaw</h3> <ul><li>¼ red cabbage, finely shredded</li> <li>¼ white cabbage, finely shredded</li> <li>1 large carrot, julienned or grated</li> <li>½ red pepper, thinly sliced</li> <li>2 spring onions, finely sliced</li> <li>Handful of fresh coriander leaves</li> <li>1 tbsp toasted sesame seeds</li></ul> <h3>For the Dressing</h3> <ul><li>2 tbsp Lee Kum Kee Rice Wine Vinegar</li> <li>1 tbsp light soy sauce</li> <li>1 tbsp toasted sesame oil</li> <li>1 tbsp honey or maple syrup</li> <li>1 garlic clove, minced</li> <li>1 tsp fresh ginger, grated</li> <li>Juice of ½ lime</li> <li>Optional: pinch of chilli flakes or a dash of sriracha</li></ul> <h2>Instructions</h2> <ol><li>In a large bowl, combine all the slaw ingredients.</li> <li>In a separate jar or bowl, whisk together the dressing until smooth.</li> <li>Pour dressing over the slaw and toss well to coat.</li> <li>Let sit for 5–10 minutes to mellow and marry the flavors.</li> <li>Top with extra sesame seeds or coriander if you’re feelin’ fancy.</li></ol> <h2>Tips</h2> <ul><li>Want protein? Add shredded rotisserie chicken or crispy tofu.</li> <li>This slaw keeps great in the fridge—perfect for next-day wraps or rice bowls.</li> <li>Swap honey for maple syrup to keep it vegan.</li></ul> <h2>Goes Great With</h2> <ul><li>Sticky Soy Garlic Noodles</li> <li>BBQ pork buns or satay skewers</li> <li>Anything heavy that needs liftin’</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Crunchy_asian_slaw_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_6 as _,
  metadata as m
};
