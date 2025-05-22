import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Crispy Baked Chicken Goujons",
  "slug": "crispy-baked-chicken-goujons",
  "description": "Tender strips of chicken coated in golden seasoned breadcrumbs and baked to a perfect crunch. No frying, no fuss — just comforting, crispy goujons you’ll keep making again and again.",
  "date": "2025-05-22T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/crispy-baked-chicken-goujons.webp",
  "prepTime": 15,
  "cookTime": 25,
  "totalTime": 40,
  "servings": 4,
  "categories": ["dinner", "lunch", "kid-friendly"],
  "tags": [
    "chicken",
    "baked",
    "family-friendly",
    "difficulty-easy"
  ],
  "relatedProducts": [
    {
      "handle": "gluten-free-panko-style-crumbs",
      "featured": true
    },
    {
      "handle": "centaur-dijon-mustard-1kg",
      "featured": false
    },
    {
      "handle": "manfredi-barbera-unfiltered-italian-extra-virgin-oil",
      "featured": false
    },
    {
      "handle": "chef-william-garlic-powder-500gm",
      "featured": false
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
function Crispy_baked_chicken_goujons_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>There’s something deeply comforting about a tray of crispy chicken goujons coming out of the oven. The smell alone is enough to gather people around. And the first bite? Crunchy outside, tender inside — just as it should be.</p> <p>This version skips the fryer and goes straight to the oven. The panko coating brings the crunch. A little mustard in the egg mix brings lift. Garlic and pepper bring warmth without heat. These are the kind of goujons you’ll make when you don’t want to think too hard, but still want to eat well.</p> <p>Perfect for little hands. Ideal for grown-ups who just want a good dipping situation. And the kind of thing that’s always worth making a few extra of — because they disappear quickly.</p> <h2>Ingredients</h2> <ul><li>500g Chicken breast fillets</li> <li>50g Plain flour</li> <li>2 Eggs</li> <li>1 Teaspoon Dijon mustard</li> <li>120g Panko breadcrumbs</li> <li>1 Teaspoon Bonferme Fine Sea Salt</li> <li>Black pepper</li> <li>1 Teaspoon Garlic powder</li> <li>2 Tablespoons Olive oil</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Preheat the oven.</strong><br> Heat your oven to 200°C (fan 180°C). Line a large baking tray with parchment paper and set aside.</p></li> <li><p><strong>Set up your coating bowls.</strong><br> Place flour in one shallow bowl. In a second, beat the eggs and stir in the Dijon mustard. In a third, combine the panko breadcrumbs, sea salt, black pepper, and garlic powder.</p></li> <li><p><strong>Prepare the chicken.</strong><br> Slice the chicken breasts into strips around 2cm wide. Pat dry with kitchen paper so the coating sticks better.</p></li> <li><p><strong>Coat each piece.</strong><br> One by one, dredge the chicken strips in flour, then dip into the egg mixture, and finally press into the breadcrumb bowl to coat. Lay them on the baking tray, spaced apart.</p></li> <li><p><strong>Finish with oil.</strong><br> Drizzle the olive oil over the top or mist with spray oil. This helps the coating crisp up without frying.</p></li> <li><p><strong>Bake.</strong><br> Place in the oven and bake for 20 to 25 minutes, turning halfway through. The goujons should be golden and the chicken cooked through.</p></li> <li><p><strong>Rest and serve.</strong><br> Let them sit for 2 to 3 minutes before serving. Serve hot with your favourite dip.</p></li></ol> <h2>Tips</h2> <ul><li>Add smoked paprika or dried herbs to the breadcrumb mix for variety</li> <li>For extra tenderness, marinate the chicken in buttermilk for a few hours beforehand</li> <li>Leftovers can be cooled, stored, and reheated in a hot oven or air fryer</li></ul> <h2>Goes Great With</h2> <ul><li>Sweet potato wedges or oven fries</li> <li>Crunchy slaw or a green salad</li> <li>Dips like garlic mayo, ketchup, or sweet chilli</li></ul> <hr> <blockquote><p>These are the kind of goujons that vanish before the tray is cold. No fuss. Just really good crunch and comfort.</p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Crispy_baked_chicken_goujons_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_20 as _,
  metadata as m
};
