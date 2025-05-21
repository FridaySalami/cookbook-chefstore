import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Tagliatelle Bolognese (Traditional)",
  "slug": "tagliatelle-bolognese-traditional",
  "description": "A rich, slow-cooked Bolognese made with veal and pork, pancetta, and a delicate sofrito—served with tagliatelle and finished with Parmesan.",
  "date": "2025-05-13T00:00:00.000Z",
  "featured": true,
  "image": "/images/recipes/category-name/recipe-name/tagliatelle-bolognese-traditional.webp",
  "prepTime": 20,
  "cookTime": 60,
  "totalTime": 80,
  "servings": 4,
  "categories": ["dinner", "pasta"],
  "tags": [
    "italian",
    "slow-cooked",
    "comfort-food",
    "difficulty-medium"
  ],
  "relatedProducts": [
    {
      "handle": "oscar-all-natural-chicken-stock-1ltr",
      "featured": true
    },
    { "handle": "ballerina-tomato-paste-800g-tin" },
    {
      "handle": "rummo-premium-italian-no-107-tagliatelle-12-500gm"
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
function Tagliatelle_bolognese_traditional_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This isn’t just dinner. It’s a quiet kind of triumph.<br> A pot of Bolognese bubbling gently while the world spins too fast outside. You stir the sauce slow, sip something red, taste and adjust, and somewhere along the way, the kitchen begins to feel like home.</p> <p>It’s the kind of food that teaches you things. About patience. About layering. About the way a few humble bits a carrot, a splash of wine, a spoon of tomato paste can become something generous and rich when given time.</p> <p>This version pulls no punches. Veal and pork, pancetta for soul, and a long exhale of a cook. Serve it when you need to come back to earth. Eat it warm. Eat it twice.</p> <h2>Ingredients</h2> <ul><li>2 Tablespoons Olive Oil</li> <li>1 Small Onion</li> <li>1 Carrot</li> <li>1 Celery Stick</li> <li>75 Grams Pancetta</li> <li>250 Grams Veal Mince</li> <li>250 Grams Pork Mince</li> <li>100 Millilitres Red Wine</li> <li>2 Tablespoons Tomato Paste</li> <li>300 Millilitres Chicken or Vegetable Stock</li> <li>Salt and Pepper, to taste</li> <li>300 Grams Tagliatelle</li> <li>Parmesan, to serve</li></ul> <h2>Instructions</h2> <p><strong>Make the sofrito.</strong><br> Warm the olive oil in a heavy-bottomed pan over medium heat. Dice the onion, carrot, and celery nothing fancy, just small enough to disappear into the sauce later. Add them to the pan with the pancetta. Let it all soften slowly for about 10 minutes. This step lays the foundation, so give it time. When it smells sweet and mellow, you’re ready.</p> <p><strong>Brown the meat.</strong><br> Add the veal and pork mince. Stir and break it up gently with a wooden spoon. Let it cook until all the pink has gone and the moisture’s cooked off. If you hear it begin to sizzle and see little golden bits forming on the bottom, you’re doing it right. That’s flavour waking up.</p> <p><strong>Add the wine.</strong><br> Pour in the red wine and give everything a stir, scraping the bottom of the pan to lift any tasty bits. Let it bubble away until the harshness cooks off and you’re left with something rich and fragrant.</p> <p><strong>Build the sauce.</strong><br> Stir in the tomato paste and let it cook for a minute to deepen. Then pour in the stock start with 200 millilitres and add more if the sauce feels too thick. You want something loose, not runny. A gentle cloak for the pasta, not a soup.</p> <p><strong>Simmer low and slow.</strong><br> Turn the heat down to low. Partially cover the pan and let it simmer for 1 hour. Stir it from time to time so nothing sticks. This is where the sauce finds itself darkens, thickens, calms down. If the pan goes quiet, give it a stir. It’s not a sprint.</p> <p><strong>Cook the pasta.</strong><br> Ten minutes before the sauce is done, bring a large pot of salted water to the boil. Add the tagliatelle and cook until it’s just al dente. Keep back a little pasta water before draining you’ll need it to bring everything together.</p> <p><strong>Marry the sauce and pasta.</strong><br> Add the drained pasta straight into the sauce. Pour in a splash of the reserved pasta water and toss gently to coat. Stir until the sauce clings to the tagliatelle like it’s meant to be there. This moment is where it all comes together.</p> <p><strong>Serve with love.</strong><br> Spoon into warm bowls and finish with a shower of freshly grated Parmesan. Eat slow. This one deserves it.</p> <h2>Tips</h2> <ul><li>Cook the sauce for 2 hours if you have the time. It only gets better.</li> <li>Swap veal for beef mince if needed, the soul of the dish is still intact.</li> <li>Let the sauce sit a while before serving, or even rest overnight. The next day version hits deeper.</li></ul> <h2>Goes Great With</h2> <ul><li>Garlic and Herb Tear-and-Share Bread</li> <li>A green salad with lemon dressing</li> <li>A glass of something dry and red</li> <li>Rainy nights and people you trust</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_49 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tagliatelle_bolognese_traditional_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_49 as _,
  metadata as m
};
