import { I as sanitize_props, J as spread_props } from "./index3.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Crispy Chicken Katsu Curry",
  "slug": "crispy-chicken-katsu-curry",
  "description": "Breaded, golden chicken breast sliced over fluffy rice and smothered in rich, Japanese-style katsu curry made with Yutaka paste.",
  "date": "2025-05-13T00:00:00.000Z",
  "featured": true,
  "image": "/images/recipes/category-name/recipe-name/crispy-chicken-katsu-curry.webp",
  "prepTime": 15,
  "cookTime": 20,
  "totalTime": 35,
  "servings": 2,
  "categories": ["dinner", "asian"],
  "tags": [
    "comfort-food",
    "family-friendly",
    "crowd-pleaser",
    "difficulty-easy"
  ],
  "relatedProducts": [
    {
      "handle": "yutaka-japanese-style-katsu-curry-paste-1kg",
      "featured": true
    },
    {
      "handle": "gluten-free-panko-style-crumbs",
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
function Crispy_chicken_katsu_curry_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>Crispy panko chicken. A smooth, golden curry sauce.<br> Sliced and served with rice like it just came off the pass at your favourite Japanese joint—only this time, it’s your kitchen.</p> <h2>Ingredients</h2> <h3>For the Chicken</h3> <ul><li>2 chicken breasts</li> <li>Salt &amp; pepper</li> <li>2 tbsp plain flour</li> <li>1 egg, beaten</li> <li>50g Centaur Panko Breadcrumbs</li> <li>Oil for shallow frying</li></ul> <h3>For the Curry Sauce</h3> <ul><li>2–3 tbsp Yutaka Japanese Style Katsu Curry Paste</li> <li>250ml water (or chicken stock for richness)</li></ul> <h3>To Serve</h3> <ul><li>Steamed rice</li> <li>Pickled veg or shredded cabbage (optional)</li> <li>Spring onions or sesame seeds for garnish</li></ul> <h2>Instructions</h2> <h3>1. Prepare the Chicken</h3> <ol><li>Flatten chicken breasts slightly with a rolling pin or under cling film.</li> <li>Season with salt and pepper.</li> <li>Dredge each piece in flour, then egg, then panko breadcrumbs until well coated.</li></ol> <h3>2. Cook the Chicken</h3> <ol><li>Heat 1–2cm oil in a large pan over medium-high heat.</li> <li>Fry the chicken for 3–4 minutes per side until golden and cooked through.</li> <li>Drain on kitchen paper and rest before slicing.</li></ol> <h3>3. Make the Sauce</h3> <ol><li>In a small pan, mix katsu paste with water or stock.</li> <li>Bring to a simmer and stir until smooth and slightly thickened.</li></ol> <h3>4. Assemble</h3> <ol><li>Slice chicken and serve over steamed rice.</li> <li>Spoon curry sauce over the top.</li> <li>Garnish with spring onions, sesame seeds, or shredded cabbage.</li></ol> <h2>Tips</h2> <ul><li>Swap chicken for tofu or sweet potato for a veggie version.</li> <li>Serve with Japanese pickles or a side salad for crunch.</li> <li>Leftover sauce? Freeze it—it keeps beautifully.</li></ul> <h2>Goes Great With</h2> <ul><li>Steamed jasmine or sticky rice</li> <li>Crunchy slaw with sesame dressing</li> <li>A cold drink and a quiet Friday night</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Crispy_chicken_katsu_curry_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_6 as _,
  metadata as m
};
