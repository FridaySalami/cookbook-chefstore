import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Crunchy Asian Slaw with Sesame-Ginger Dressing",
  "slug": "crunchy-asian-slaw",
  "description": "A light, zesty slaw loaded with crisp veg and tossed in a sesame-ginger dressing—perfect alongside rich mains or piled high in wraps and buns.",
  "date": "2025-05-12T00:00:00.000Z",
  "featured": false,
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
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>It’s fresh. It’s vibrant. It crunches like walking through autumn leaves.<br> A bowl of bright colours and bold flavours, lifted with lime and laced with sesame.<br> It’ll perk up heavy mains, lighten rich dishes, or be the star in a wrap with a little grilled chicken or tofu.<br> Simple to throw together, but never boring.</p> <h2>Ingredients</h2> <h3>For the Slaw</h3> <ul><li>¼ Red Cabbage</li> <li>¼ White Cabbage</li> <li>1 Large Carrot</li> <li>½ Red Pepper</li> <li>2 Spring Onions</li> <li>Handful of Fresh Coriander Leaves</li> <li>1 Tablespoon Toasted Sesame Seeds</li></ul> <h3>For the Dressing</h3> <ul><li>2 Tablespoons Lee Kum Kee Rice Wine Vinegar</li> <li>1 Tablespoon Light Soy Sauce</li> <li>1 Tablespoon Toasted Sesame Oil</li> <li>1 Tablespoon Honey or Maple Syrup</li> <li>1 Garlic Clove</li> <li>1 Teaspoon Fresh Ginger</li> <li>Juice of ½ Lime</li> <li>Optional: Pinch of Chilli Flakes or Dash of Sriracha</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Prepare the vegetables</strong><br> Finely shred the red and white cabbage. Julienne or grate the carrot. Slice the red pepper and spring onions. Add everything to a large mixing bowl along with the coriander leaves and sesame seeds.</p></li> <li><p><strong>Make the dressing</strong><br> In a small jar or bowl, whisk together the vinegar, soy sauce, sesame oil, honey or maple syrup, garlic, ginger, and lime juice. Add chilli or sriracha if using. Mix until smooth and emulsified.</p></li> <li><p><strong>Toss it all together</strong><br> Pour the dressing over the slaw and toss well until every piece is coated and glistening.</p></li> <li><p><strong>Let it rest</strong><br> Leave the slaw to sit for 5 to 10 minutes. This softens the vegetables slightly and lets the flavours settle into each other.</p></li> <li><p><strong>Garnish and serve</strong><br> Sprinkle over a few extra sesame seeds or coriander leaves if you like. Serve chilled or at room temperature.</p></li></ol> <h2>Tips</h2> <ul><li>Add cooked shredded chicken or crispy tofu to turn it into a full meal</li> <li>This slaw holds up well in the fridge and makes a great topping for sandwiches or rice bowls</li> <li>To keep it vegan, choose maple syrup over honey</li></ul> <h2>Goes Great With</h2> <ul><li>Grilled satay skewers or glazed salmon</li> <li>Pork belly bao or BBQ jackfruit wraps</li> <li>A chilled noodle bowl on a warm evening</li></ul> <hr> <blockquote><p><strong>Crunchy, zesty, and full of life — this is salad with a little strut in its step.</strong></p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Crunchy_asian_slaw_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_25 as _,
  metadata as m
};
