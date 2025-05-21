import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Romanian-Style Sarmale (Stuffed Cabbage Rolls)",
  "slug": "romanian-sarmale-cabbage-rolls",
  "description": "These traditional Romanian cabbage rolls are slow-cooked in tomato broth, stuffed with pork, rice, and herbs—wrapped in sauerkraut leaves and steeped in comfort.",
  "date": "2025-05-14T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/romanian-sarmale-cabbage-rolls.webp",
  "prepTime": 45,
  "cookTime": 180,
  "totalTime": 225,
  "servings": 6,
  "categories": ["main", "traditional", "comfort"],
  "tags": ["slow-cooked", "difficulty-hard", "pork"],
  "relatedProducts": [
    {
      "handle": "triple-lion-paprika-550g",
      "featured": true
    },
    {
      "handle": "ballerina-tomato-paste-800g-tin",
      "featured": true
    },
    { "handle": "triple-lion-dried-thyme-180g" }
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
function Romanian_sarmale_cabbage_rolls_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This is more than just a meal.<br> It’s tradition wrapped in cabbage leaves, simmered slow, and served warm from the pot while someone’s still telling a story at the table.</p> <p>Sarmale is food that holds memory. The tang of the sauerkraut leaves, the richness of pork and rice tucked inside, the deep tomato broth that gently steams the rolls until they’re soft enough to fall apart on a fork.</p> <p>Every layer carries care. Every bite tastes like it came from someone who loves you enough to let it simmer for three hours.<br> It’s not fancy, but it is sacred in its own quiet way. A dish for holidays and quiet Sundays alike.</p> <p>This is the kind of food that feeds more than hunger.</p> <h2>Ingredients</h2> <ul><li>1 Large Jar Pickled Cabbage Leaves or 1 Large White Cabbage</li> <li>500g Minced Pork or Pork and Beef Blend</li> <li>1 Onion</li> <li>100g Short or Medium Grain Rice</li> <li>2 Tablespoons Tomato Paste</li> <li>1 Teaspoon Sweet Paprika</li> <li>1 Teaspoon Dried Thyme</li> <li>Salt</li> <li>Black Pepper</li> <li>1 Tablespoon Vegetable Oil</li> <li>200g Smoked Bacon or Pork Belly</li> <li>400ml Passata or Chopped Tomatoes</li> <li>300ml Water or Light Stock</li> <li>Dill (Optional)</li></ul> <h2>Instructions</h2> <h3>Prepare the Cabbage</h3> <ol><li>If using pickled cabbage, remove the leaves and rinse under cold water to remove excess brine. Trim the thick stalks to make them easier to roll.</li> <li>If using fresh cabbage, core it and blanch in boiling water for several minutes until the leaves soften and can be separated.</li></ol> <h3>Make the Filling</h3> <ol start="3"><li>In a frying pan, heat the oil and sauté the onion until soft and golden. Add the rice and cook for 2 minutes more. Let it cool slightly.</li> <li>In a bowl, mix the rice and onion with the minced pork, salt, pepper, paprika, thyme, and dill if using. Knead until fully combined.</li></ol> <h3>Roll the Sarmale</h3> <ol start="5"><li>Take one cabbage leaf and place a spoonful of filling near the edge. Fold the sides inward, then roll tightly into a small cylinder.</li> <li>Repeat with the rest of the mixture. Use torn or small leaves to line the base of your pot or patchwork any broken ones.</li></ol> <h3>Layer in the Pot</h3> <ol start="7"><li>In a large heavy bottomed pot, lay down a few extra cabbage leaves and scatter over a handful of chopped bacon.</li> <li>Arrange the rolls in circles, layering them with more bacon pieces, spare cabbage, and bay leaves if desired.</li> <li>Pour over the tomato passata and enough water or stock to just cover the top layer.</li></ol> <h3>Simmer Slowly</h3> <ol start="10"><li>Bring to a gentle simmer. Cover the pot and cook over low heat for 2 to 3 hours. Check occasionally and add a little water if needed.</li> <li>The longer they cook, the more tender and flavourful they become.</li></ol> <h3>Pressure Cooker Method</h3> <ol><li>Follow the same steps to prepare and layer the sarmale in your pressure cooker.</li> <li>Reduce the total liquid slightly to around 400ml combined of passata and stock.</li> <li>Seal the lid and cook on high pressure for 30 minutes.</li> <li>Let the pressure release naturally for 10 to 15 minutes.</li> <li>For a thicker sauce, simmer uncovered for a few minutes after opening.</li></ol> <h2>Tips</h2> <ul><li>Add sauerkraut or the chopped cabbage leaves that didn’t quite cut for rolling between layers or into the filling for extra tang.</li> <li>Let the dish rest after cooking flavours deepen as it sits.</li> <li>Make a big batch and freeze in portions. It reheats beautifully and somehow tastes even better the next day.</li></ul> <h2>Goes Great With</h2> <ul><li>A big spoonful of sour cream</li> <li>Mămăligă (Romanian-style polenta)</li> <li>Pickles or crusty rye bread</li> <li>A quiet Sunday or a family table full of stories</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_34 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Romanian_sarmale_cabbage_rolls_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_34 as _,
  metadata as m
};
