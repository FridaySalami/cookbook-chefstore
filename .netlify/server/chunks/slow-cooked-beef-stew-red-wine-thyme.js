import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Slow-Cooked Beef Stew with Red Wine & Thyme",
  "slug": "slow-cooked-beef-stew-red-wine-thyme",
  "description": "A rich, slow-simmered beef stew layered with red wine, thyme, and deep umami—finished with a touch of miso for unexpected depth.",
  "date": "2025-05-20T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/slow-cooked-beef-stew-red-wine-thyme.webp",
  "prepTime": 20,
  "cookTime": 180,
  "totalTime": 200,
  "servings": 4,
  "categories": ["dinner", "comfort-food"],
  "tags": [
    "slow-cooked",
    "beef",
    "winter-warmer",
    "difficulty-medium"
  ],
  "relatedProducts": [
    {
      "handle": "oscar-all-natural-beef-stock-1ltr",
      "featured": true
    },
    {
      "handle": "colavita-100-italian-extra-virgin-olive-oil-750ml",
      "featured": false
    },
    {
      "handle": "maldon-sea-salt",
      "featured": false
    },
    {
      "handle": "ballerina-tomato-paste-800g-tin",
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
function Slow_cooked_beef_stew_red_wine_thyme_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This is stew the way time intended. A recipe that doesn’t rush. It unfolds slowly—like winter light creeping through curtains, like stories told beside the fire. You start with simple things: onion, carrot, celery. Add beef, browned deep like bark. Wine simmers down. Thyme lifts the pot like memory. And then, just before the end, a quiet whisper of miso. Unexpected, but right.</p> <p>Serve it on a Sunday when nothing else will do. Or a Tuesday when you need to feel held. It’s humble, but it carries itself with quiet confidence.</p> <h2>Ingredients</h2> <ul><li>600g Stewing Beef, cut into chunks</li> <li>Salt</li> <li>Black Pepper</li> <li>2 Tablespoons Plain Flour</li> <li>1 Tablespoon Olive Oil</li> <li>1 Tablespoon Butter</li> <li>1 Onion</li> <li>2 Carrots</li> <li>2 Celery Sticks</li> <li>3 Garlic Cloves (1 whole, 2 chopped)</li> <li>75g Pancetta, diced</li> <li>2 Tablespoons Tomato Paste</li> <li>300ml Red Wine</li> <li>500ml Beef Stock</li> <li>1 Bay Leaf</li> <li>2 Sprigs Fresh Thyme</li> <li>1 Strip Orange Zest</li> <li>1 Star Anise</li> <li>1 Teaspoon Miso Paste (white or red)</li> <li>2 Teaspoons Worcestershire Sauce</li></ul> <h2>Instructions</h2> <h3>Sear the Beef</h3> <ol><li>Pat the beef dry and season generously with salt and pepper. Toss with flour until evenly coated.</li> <li>Heat olive oil and butter in a large heavy pot over high heat. Sear the beef in batches until deeply browned on all sides. Don’t overcrowd. Set aside.</li></ol> <h3>Build the Base</h3> <ol start="3"><li>Lower the heat to medium. Add pancetta and cook until golden.</li> <li>Add onion, carrots, celery, and the chopped garlic. Sauté for 10 minutes until softened and catching some colour.</li> <li>Stir in the tomato paste. Cook for 2 minutes to take the edge off its acidity.</li></ol> <h3>Deglaze and Simmer</h3> <ol start="6"><li>Pour in the red wine. Let it bubble and reduce by at least half, scraping up all the goodness from the bottom of the pot.</li> <li>Return the beef to the pot along with beef stock, bay leaf, thyme, star anise, orange zest, the whole garlic clove, Worcestershire sauce, and a small pinch of salt.</li> <li>Bring to a gentle simmer. Cover and cook on low heat for 2.5 to 3 hours until the beef is tender and the sauce is thickened.</li></ol> <h3>Finish with Depth</h3> <ol start="9"><li>Discard the bay leaf, star anise, and orange zest.</li> <li>Stir in the miso paste. Let it melt in gently, giving body and deep savouriness.</li> <li>Taste and adjust seasoning if needed. Let rest off the heat for 10 minutes before serving.</li></ol> <h2>Tips</h2> <ul><li>Don’t rush the browning—it builds essential flavour.</li> <li>A strip of orange zest and a star anise lift this stew into a slightly new place without overpowering the heart of it.</li> <li>Leftovers are even better the next day. Reheat gently.</li></ul> <h2>Goes Great With</h2> <ul><li>Creamy Mashed Potatoes or Buttered Polenta</li> <li>Steamed Green Beans or Roasted Carrots</li> <li>A heavy spoon, a deep bowl, and a little silence</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_46 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Slow_cooked_beef_stew_red_wine_thyme_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_46 as _,
  metadata as m
};
