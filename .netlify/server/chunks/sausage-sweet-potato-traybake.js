import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Sausage & Sweet Potato Traybake with Apples, Garlic and Greens",
  "slug": "sausage-sweet-potato-traybake",
  "description": "A golden tray of sausages roasted with sweet potatoes, apples, jammy red onions and whole garlic cloves, finished with a handful of greens and a mustard-maple glaze. Sweet, savoury, and ready to feed the family with ease.",
  "date": "2025-05-20T00:00:00.000Z",
  "featured": true,
  "image": "/images/recipes/category-name/recipe-name/sausage-sweet-potato-traybake.webp",
  "prepTime": 15,
  "cookTime": 40,
  "totalTime": 55,
  "servings": 4,
  "categories": ["dinner", "traybake", "comfort-food"],
  "tags": ["family-friendly", "pork", "difficulty-easy"],
  "relatedProducts": [
    { "handle": "maldon-sea-salt", "featured": true },
    {
      "handle": "colavita-100-italian-extra-virgin-olive-oil-750ml",
      "featured": true
    },
    {
      "handle": "centaur-dijon-mustard-1kg",
      "featured": true
    },
    {
      "handle": "hyve-squeezy-honey-340g",
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
function Sausage_sweet_potato_traybake_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This is the kind of traybake that earns its place in your weekly rhythm. The sort of meal that feels like a sigh at the end of a long day. The oven does most of the work while you clear the table, run a bath, or sit for five quiet minutes.</p> <p>Sausages go golden and split at the seams. Sweet potatoes soften into golden wedges that catch just enough at the edges. Apples turn syrupy. Red onions go jammy. The whole garlic cloves roast until they’re soft enough to spread, sweet enough to eat with a spoon. A simple glaze of mustard, maple, and vinegar clings to everything and ties it all together with a nudge of brightness.</p> <p>And then, just when it might be getting too rich, too warm, too sweet, in come the greens. A handful of kale or beans tossed through near the end. It’s dinner with contrast. Colour. Comfort. And almost no cleanup.</p> <h2>Ingredients</h2> <ul><li>8 Pork sausages</li> <li>2 Sweet potatoes</li> <li>2 Red onions</li> <li>2 Eating apples</li> <li>4 Garlic cloves</li> <li>100g Kale or green beans</li> <li>2 Tablespoons Olive oil</li> <li>1 Tablespoon Apple cider vinegar, plus extra to finish</li> <li>1 Teaspoon Maldon Sea Salt</li> <li>Black pepper</li> <li>1 Tablespoon Dijon mustard</li> <li>1 Teaspoon Maple syrup or honey</li> <li>A few sprigs Thyme (optional)</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Heat your oven to 200°C (fan 180°C).</strong><br> Line a large roasting tin or baking tray for easier cleanup. Choose one that gives everything space to brown.</p></li> <li><p><strong>Mix the glaze.</strong><br> In a small bowl, whisk together the olive oil, apple cider vinegar, Dijon mustard, maple syrup, salt and a few grinds of black pepper. This will coat the sausages and vegetables with sweetness and tang.</p></li> <li><p><strong>Prepare the ingredients.</strong><br> Peel the sweet potatoes and cut them into wedges. Cut the red onions into quarters. Core the apples and slice into thick wedges. Leave the garlic cloves whole and unpeeled. You want everything chunky so it roasts rather than steams.</p></li> <li><p><strong>Assemble the tray.</strong><br> Add the sausages, sweet potatoes, onions, apples, and garlic cloves to the tray. Pour over the glaze and toss everything gently with your hands so it’s well coated. Tuck in the thyme sprigs if using.</p></li> <li><p><strong>Roast for 30 minutes.</strong><br> After 15 minutes, turn the sausages and shuffle the vegetables a little to help everything brown evenly. You’re looking for golden skins, soft garlic, and sticky corners where apples and onion start to melt.</p></li> <li><p><strong>Add the greens.</strong><br> Scatter the kale or green beans over the tray. Return to the oven for another 10 minutes. The greens should wilt and crisp slightly but stay vibrant.</p></li> <li><p><strong>Rest and finish.</strong><br> Once out of the oven, let the tray sit for 5 minutes. This helps the juices settle and makes serving easier. Just before you bring it to the table, splash over a little extra cider vinegar to lift everything.</p></li></ol> <h2>Tips</h2> <ul><li>Use halved sprouts or broccoli instead of kale depending on what you have.</li> <li>Swap pork sausages for veggie or chicken varieties but reduce cooking time by 5 to 10 minutes.</li> <li>Leftovers keep well and can be pan-fried the next day as a breakfast hash.</li></ul> <h2>Goes Great With</h2> <ul><li>Crusty bread or soft white rolls to mop up the tray juices</li> <li>A green salad with sharp vinaigrette to cut through the sweetness</li> <li>A spoonful of apple sauce or grainy mustard alongside</li></ul> <hr> <blockquote><p>It’s sweet, sticky, and savoury all at once. The sort of meal that makes everything feel like it’s going to be alright.</p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_41 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sausage_sweet_potato_traybake_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_41 as _,
  metadata as m
};
