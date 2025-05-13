import { I as sanitize_props, J as spread_props } from "./index3.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Classic Tiramisu (No Eggs)",
  "slug": "classic-tiramisu-no-eggs",
  "description": "A layered dessert of coffee-soaked Savoiardi sponge fingers and mascarpone cream—rich, smooth, and egg-free for ease and safety.",
  "date": "2025-05-13T00:00:00.000Z",
  "featured": true,
  "image": "/images/recipes/category-name/recipe-name/classic-tiramisu-no-eggs.webp",
  "prepTime": 20,
  "cookTime": 0,
  "totalTime": "20 (plus chilling)",
  "servings": "6–8",
  "categories": ["dessert", "italian"],
  "tags": [
    "indulgent",
    "crowd-pleaser",
    "difficulty-easy"
  ],
  "relatedProducts": [
    {
      "handle": "savoiardi-balocco-sponge-fingers",
      "featured": true
    },
    {
      "handle": "nielsen-massey-vanilla-extract-60ml",
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
function Classic_tiramisu_no_eggs_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>Rich coffee. Soft sponge. Cool, whipped mascarpone.<br> This is tiramisu stripped back to what matters—flavour, texture, and that last spoonful you always wish was bigger. And with no raw egg, it keeps cleaner and lasts longer.</p> <h2>Ingredients</h2> <ul><li>250g mascarpone</li> <li>300ml double cream</li> <li>75g icing sugar</li> <li>1 tsp vanilla extract</li> <li>250ml strong brewed coffee, cooled</li> <li>2 tbsp coffee liqueur (optional)</li> <li>200g Savoiardi Balocco Sponge Fingers</li> <li>Cocoa powder, for dusting</li></ul> <h2>Instructions</h2> <ol><li>In a large bowl, whisk mascarpone, cream, icing sugar, and vanilla until thick and smooth.</li> <li>In a shallow dish, combine coffee and liqueur (if using).</li> <li>Dip each Savoiardi briefly in the coffee mix—just enough to soak the outside but not go soggy.</li> <li>Layer soaked fingers into a dish, breaking to fit as needed.</li> <li>Spread half the mascarpone cream over the top. Repeat with a second layer of dipped fingers and finish with remaining cream.</li> <li>Chill for at least 4 hours, ideally overnight.</li> <li>Dust generously with cocoa powder just before serving.</li></ol> <h2>Tips</h2> <ul><li>Add grated dark chocolate between layers for texture.</li> <li>Make it in individual glasses for easy plating.</li> <li>Use decaf coffee if serving to kids.</li></ul> <h2>Goes Great With</h2> <ul><li>A shot of espresso or amaretto</li> <li>After-dinner silence</li> <li>That one last spoon when no one’s looking</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Classic_tiramisu_no_eggs_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_3 as _,
  metadata as m
};
