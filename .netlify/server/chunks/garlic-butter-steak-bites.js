import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Garlic Butter Steak Bites with Crispy Potatoes",
  "slug": "garlic-butter-steak-bites",
  "description": "Juicy, golden-seared steak bites tossed in garlic butter, served with crisped potatoes. A hearty meal built on simple pleasures.",
  "date": "2025-05-20T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/garlic-butter-steak-bites.webp",
  "prepTime": 15,
  "cookTime": 25,
  "totalTime": 40,
  "servings": 2,
  "categories": ["dinner", "meat"],
  "tags": [
    "comfort-food",
    "difficulty-easy",
    "crowd-pleaser",
    "beef"
  ],
  "relatedProducts": [
    {
      "handle": "colavita-100-italian-extra-virgin-olive-oil-750ml",
      "featured": true
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
function Garlic_butter_steak_bites_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>Some meals feel like a deep breath out. Like slipping off your boots at the door.<br> This is one of them.</p> <p>It’s a plate of comfort with no grand speeches. Just crisp-edged potatoes, seared steak that still hums with its juices, and a buttery cloak of garlic and parsley to pull it all together.</p> <p>The steak bites brown quickly in the pan and take on that savoury edge you only get from letting the butter do its thing. The potatoes, golden and proud, carry just enough salt and sizzle to remind you they belong.</p> <p>You can dress this up with a side or a glass of something sharp, but it never forgets what it is: real food, fast, and cooked with care.</p> <p>Whether you’re making dinner for someone you love, or just making peace with a Tuesday night, this dish shows up warm, ready, and full of heart.</p> <h2>Ingredients</h2> <h3>For the Potatoes</h3> <ul><li>350g Baby Potatoes</li> <li>Salt</li> <li>1 Garlic Clove</li> <li>1 Bay Leaf</li> <li>1 Tablespoon Olive Oil</li> <li>1 Tablespoon Butter</li> <li>1 Teaspoon White Wine Vinegar or Lemon Juice</li> <li>Fresh Thyme (Optional)</li></ul> <h3>For the Steak</h3> <ul><li>300g Flat Iron or Sirloin Steak</li> <li>Salt</li> <li>Black Pepper</li> <li>1 Tablespoon Neutral Oil (such as Grapeseed or Sunflower)</li> <li>1 Tablespoon Butter</li> <li>2 Garlic Cloves</li> <li>1 Teaspoon Worcestershire Sauce or Soy Sauce (Optional)</li> <li>Handful of Parsley</li> <li>Zest of Half a Lemon (Optional)</li></ul> <h2>Instructions</h2> <h3>Crisp the Potatoes</h3> <ol><li>Cut the baby potatoes in halves or quarters, depending on size.</li> <li>Place them in a pan of cold, salted water with the garlic clove and bay leaf. Bring to a boil and simmer for 8 to 10 minutes, until they yield just slightly to a knife.</li> <li>Drain well and let them steam dry in the colander. This helps them crisp.</li> <li>Heat a wide frying pan over medium heat. Add the olive oil and place the potatoes cut-side down. Let them sit undisturbed for 4 to 5 minutes.</li> <li>Add the butter, thyme if using, and a splash of vinegar or lemon juice. Toss everything gently and cook for another 3 to 4 minutes, until crisp and golden. Set aside and keep warm.</li></ol> <h3>Sear the Steak</h3> <ol start="6"><li>While the potatoes cook, cut the steak into even, bite-sized cubes. Pat dry with kitchen paper and season well with salt and black pepper.</li> <li>Heat a second pan over high heat. Add the neutral oil and wait until it just begins to shimmer.</li> <li>Add the steak in a single layer. Work in batches if needed so the pan stays hot. Sear the pieces for 1 to 2 minutes per side, until browned and crusted.</li> <li>Lower the heat to medium. Add the butter, crushed garlic cloves, and Worcestershire or soy if using. Let the butter foam and the garlic infuse for about 30 seconds.</li> <li>Return all steak to the pan. Toss in the garlic butter to coat and warm through.</li></ol> <h3>Finish and Serve</h3> <ol start="11"><li>Remove from heat. Add the chopped parsley and lemon zest if using. Toss once more.</li> <li>Serve the steak bites over the crispy potatoes. Spoon over any leftover garlic butter from the pan.</li></ol> <h2>Tips</h2> <ul><li>Patting the steak dry helps build a better crust in the pan.</li> <li>Avoid crowding the pan or the steak will steam instead of sear.</li> <li>Letting the potatoes steam dry before crisping helps create that perfect surface.</li> <li>This dish rests well under foil for 5 minutes if you need time to plate sides.</li></ul> <h2>Goes Great With</h2> <ul><li>Garlic aioli or mustard mayo on the side</li> <li>Charred broccoli or steamed green beans</li> <li>A glass of bold red wine or cold beer with a bit of bitterness</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Garlic_butter_steak_bites_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_20 as _,
  metadata as m
};
