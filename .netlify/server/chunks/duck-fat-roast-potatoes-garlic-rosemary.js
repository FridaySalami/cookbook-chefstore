import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Duck Fat Roast Potatoes with Garlic & Rosemary",
  "slug": "duck-fat-roast-potatoes-garlic-rosemary",
  "description": "Crispy on the outside, fluffy within—these golden roasties are infused with garlic, rosemary, and rich duck fat. The ultimate side dish that steals the show.",
  "date": "2025-05-14T00:00:00.000Z",
  "featured": true,
  "image": "/images/recipes/category-name/recipe-name/duck-fat-roast-potatoes-garlic-rosemary.webp",
  "prepTime": 10,
  "cookTime": 50,
  "totalTime": 60,
  "servings": 4,
  "categories": ["side", "sunday", "roast"],
  "tags": [
    "comfort-food",
    "crowd-pleaser",
    "difficulty-easy",
    "gluten-free"
  ],
  "relatedProducts": [
    {
      "handle": "centaur-duck-fat-1kg",
      "featured": true
    },
    { "handle": "maldon-sea-salt", "featured": true },
    { "handle": "tidmans-rock-salt-500gm" }
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
function Duck_fat_roast_potatoes_garlic_rosemary_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>A roast potato done right is a kind of devotion.<br> Crisp edges that shatter under a fork. Golden crust giving way to soft, fluffy middles.<br> When they’re roasted in duck fat, kissed with garlic and rosemary, you’re not just making a side. You’re delivering a memory. The kind people ask about on the drive home.</p> <h2>Ingredients</h2> <ul><li>1kg Floury Potatoes (Maris Piper or King Edward)</li> <li>2 to 3 Tablespoons Centaur Duck Fat</li> <li>1 Head Garlic, Cloves Peeled But Left Whole</li> <li>A Few Sprigs Fresh Rosemary</li> <li>Maldon Sea Salt, To Taste</li> <li>Tidman’s Rock Salt (Optional), To Finish</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Prepare the potatoes</strong><br> Peel the potatoes and cut into chunky, even pieces. Rinse under cold water to remove excess starch.<br> Boil in salted water for 8 to 10 minutes until just tender. You want the outsides soft but the insides still firm.<br> Drain well, then return to the pot and shake gently to roughen the edges. This helps build that legendary crisp.</p></li> <li><p><strong>Heat the fat</strong><br> Preheat your oven to 200°C fan.<br> Place the duck fat into a large roasting tray and put it in the oven for 5 minutes until the fat is hot and shimmering.</p></li> <li><p><strong>Roast the potatoes</strong><br> Carefully add the potatoes to the hot fat. They should sizzle on contact.<br> Add the garlic cloves and rosemary sprigs. Toss everything gently to coat.<br> Roast for 45 to 50 minutes, turning once or twice, until the potatoes are golden, crisp, and deeply tempting.</p></li> <li><p><strong>Finish and serve</strong><br> Remove the tray from the oven. Let the potatoes rest briefly on kitchen paper if needed.<br> Sprinkle generously with Maldon sea salt and, if you like extra crunch, a touch of Tidman’s rock salt.<br> Serve hot and expect silence around the table.</p></li></ol> <h2>Tips</h2> <ul><li>Don’t overcrowd the tray — space means crisp, steam means soft</li> <li>A drizzle of Belazu Lemon Oil at the end brings a bright citrus note that lifts everything</li> <li>Leftovers reheat beautifully or can be smashed in a skillet for crispy breakfast potatoes</li></ul> <h2>Goes Great With</h2> <ul><li>Roast chicken, lamb, or nut roast</li> <li>Yorkshire puddings and proper gravy</li> <li>A chilled cider or sparkling white wine</li></ul> <hr> <blockquote><p><strong>Crispy, golden, deeply comforting — these are the potatoes your future self will thank you for.</strong></p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Duck_fat_roast_potatoes_garlic_rosemary_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_14 as _,
  metadata as m
};
