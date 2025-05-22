import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Creamy Polenta with Wild Mushrooms and Truffle Oil",
  "slug": "creamy-polenta-wild-mushrooms-truffle",
  "description": "A bowl of comfort—creamy polenta topped with wild mushrooms sautéed in garlic and thyme, finished with a generous drizzle of black truffle oil.",
  "date": "2025-05-14T00:00:00.000Z",
  "featured": true,
  "image": "/images/recipes/category-name/recipe-name/creamy-polenta-wild-mushrooms-truffle.webp",
  "prepTime": 10,
  "cookTime": 25,
  "totalTime": 35,
  "servings": 2,
  "categories": ["main", "vegetarian", "comfort"],
  "tags": ["vegetarian", "difficulty-medium"],
  "relatedProducts": [
    {
      "handle": "merchant-gourmet-one-minute-polenta-500gm",
      "featured": true
    },
    {
      "handle": "dried-mixed-mushrooms-400g",
      "featured": true
    },
    {
      "handle": "essentail-cuisine-mushroom-stock",
      "featured": true
    },
    {
      "handle": "belazu-black-truffle-extra-virgin-olive-oil-250ml",
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
function Creamy_polenta_wild_mushrooms_truffle_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>It’s the kind of meal that quiets things down.<br> The polenta is soft like memory, the mushrooms soak up every bit of garlic and thyme, and that last swirl of truffle oil makes you close your eyes for a second.<br> Perfect for when you want something that feels both simple and special.</p> <h2>Ingredients</h2> <ul><li>100g Merchant Gourmet Polenta</li> <li>600ml Water or Mushroom Stock (Essential Cuisine recommended)</li> <li>25g Butter</li> <li>50g Parmesan (Optional)</li> <li>20g Dried Mixed Mushrooms or Porcini</li> <li>1 Garlic Clove</li> <li>1 Teaspoon Fresh Thyme Leaves</li> <li>1 Tablespoon Olive Oil or Butter</li> <li>Salt</li> <li>Black Pepper</li> <li>Belazu Black Truffle Extra Virgin Olive Oil, To Finish</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Soak the mushrooms</strong><br> Place the dried mushrooms in warm water for 20 minutes. Once softened, drain and gently squeeze out excess moisture. Roughly chop if any pieces are large.</p></li> <li><p><strong>Start the polenta</strong><br> In a saucepan, bring the water or stock to a gentle boil. Gradually pour in the polenta while whisking. Lower the heat and stir often until thick and creamy. This takes 5 to 7 minutes with quick-cook polenta, longer with traditional.</p></li> <li><p><strong>Enrich the base</strong><br> Stir in the butter and Parmesan if using. Season with salt and black pepper. Keep warm on low heat while you finish the mushrooms.</p></li> <li><p><strong>Cook the mushrooms</strong><br> Heat olive oil or butter in a frying pan over medium heat. Add the garlic and thyme and cook for a minute until fragrant. Add the mushrooms and sauté for 4 to 5 minutes until golden and slightly crisp at the edges.</p></li> <li><p><strong>Bring it together</strong><br> Spoon the polenta into bowls. Top with the warm mushrooms and a drizzle of Belazu Truffle Oil. Finish with extra Parmesan or a touch of flaky salt if you like.</p></li></ol> <h2>Tips</h2> <ul><li>Stir in a splash of cream to the polenta for extra richness</li> <li>A poached or fried egg on top turns this into a dreamy brunch or comfort dinner</li> <li>If using mushroom stock concentrate or glace, add a spoonful while cooking the mushrooms for more depth</li></ul> <h2>Goes Great With</h2> <ul><li>A peppery rocket salad with lemon dressing</li> <li>Crusty bread to catch every bit of sauce</li> <li>A dry red or a cold glass of white Burgundy and a quiet moment</li></ul> <hr> <blockquote><p><strong>Comfort that doesn’t shout. Just warmth, flavour, and a little truffle for good measure.</strong></p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Creamy_polenta_wild_mushrooms_truffle_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_14 as _,
  metadata as m
};
