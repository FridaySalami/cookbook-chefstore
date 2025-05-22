import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Chicken & Veggie Enchilada Bake",
  "slug": "chicken-veggie-enchilada-bake",
  "description": "A comforting traybake of soft tortillas layered with shredded chicken, beans, vegetables, and a lightly spiced tomato sauce, all baked under bubbling cheese. Easier than rolling and every bit as satisfying.",
  "date": "2025-05-22T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/chicken-veggie-enchilada-bake.webp",
  "prepTime": 20,
  "cookTime": 30,
  "totalTime": 50,
  "servings": 4,
  "categories": ["dinner", "bake", "family-friendly"],
  "tags": ["chicken", "difficulty-easy"],
  "relatedProducts": [
    {
      "handle": "ballerina-tomato-paste-800g-tin",
      "featured": true
    },
    {
      "handle": "epicure-black-beans-400gm",
      "featured": false
    },
    { "handle": "maldon-sea-salt", "featured": true }
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
function Chicken_veggie_enchilada_bake_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This bake brings all the comfort of enchiladas without the faff of rolling and stuffing. Everything is layered, like a lasagna, but with soft tortillas, tender chicken, black beans, and a sauce that simmers into something warm and spiced and deeply welcoming.</p> <p>It bakes until bubbling and golden at the edges, with cheese melting across the top like a blanket. And underneath, you’ve got layers of flavour — rich tomato, sweet vegetables, and enough texture to keep every bite interesting.</p> <p>It feeds a crowd or feeds tomorrow’s lunchbox. It’s mild enough for little ones but takes well to a spoon of hot sauce if the grown-ups want more heat. This is the kind of dinner that fills the table, the kitchen, and your evening with the good kind of quiet.</p> <h2>Ingredients</h2> <ul><li>1 Tablespoon Olive oil</li> <li>1 Onion</li> <li>2 Garlic cloves</li> <li>1 Red pepper</li> <li>1 Courgette</li> <li>1 Teaspoon Ground cumin</li> <li>1 Teaspoon Smoked paprika</li> <li>½ Teaspoon Maldon Sea Salt</li> <li>Black pepper</li> <li>690g Tomato passata</li> <li>200g Cooked chicken</li> <li>400g Black beans</li> <li>6 Soft tortillas</li> <li>120g Grated cheese</li> <li>Feta or sour cream (optional, to serve)</li> <li>Fresh coriander or parsley (optional)</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Preheat the oven to 200°C (fan 180°C).</strong><br> Lightly grease a medium baking dish and set it aside.</p></li> <li><p><strong>Cook the vegetables.</strong><br> In a large pan, heat the olive oil over medium heat. Add the finely chopped onion, red pepper, and courgette. Cook for 7 to 8 minutes, stirring occasionally, until softened.</p></li> <li><p><strong>Add the flavour.</strong><br> Stir in the minced garlic, cumin, paprika, salt, and a few grinds of black pepper. Let everything toast for about a minute until fragrant.</p></li> <li><p><strong>Simmer the filling.</strong><br> Pour in the passata and stir through the drained black beans and shredded cooked chicken. Simmer gently for 5 to 10 minutes until thickened slightly. Taste and adjust seasoning as needed.</p></li> <li><p><strong>Layer the bake.</strong><br> Spoon a small amount of the sauce into the bottom of the dish to stop sticking. Tear or overlap tortillas to cover the base. Follow with more sauce. Continue layering tortillas and sauce until both are used up, finishing with sauce on top.</p></li> <li><p><strong>Add cheese and bake.</strong><br> Sprinkle the grated cheese evenly over the top. Bake for 20 to 25 minutes until golden, bubbling, and slightly crisp at the edges.</p></li> <li><p><strong>Let it rest before serving.</strong><br> Give the bake 5 minutes to settle before slicing. Serve with a spoon of sour cream or a crumble of feta, and scatter over herbs if using.</p></li></ol> <h2>Tips</h2> <ul><li>Swap chicken for roasted sweet potato or extra beans for a vegetarian option</li> <li>Stir through a spoon of chipotle paste or harissa if you like a smoky heat</li> <li>Freeze leftovers in portions and reheat gently for easy lunches</li></ul> <h2>Goes Great With</h2> <ul><li>A crisp green salad with lime dressing</li> <li>Corn on the cob or grilled peppers</li> <li>A side of guacamole or smashed avocado with lime and salt</li></ul> <hr> <blockquote><p>A tray full of layers. A dinner that invites seconds. A way to bring everyone back to the table.</p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Chicken_veggie_enchilada_bake_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_9 as _,
  metadata as m
};
