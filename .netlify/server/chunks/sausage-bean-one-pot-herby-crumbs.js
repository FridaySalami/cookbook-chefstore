import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Sausage & Bean One-Pot with Herby Crumbs",
  "slug": "sausage-bean-one-pot-herby-crumbs",
  "description": "A cosy one-pot meal of sausages, white beans, and a rich tomato base, finished with golden herby breadcrumbs for a bit of crunch. Family-friendly, comforting, and all done in one pan.",
  "date": "2025-05-22T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/sausage-bean-one-pot-herby-crumbs.webp",
  "prepTime": 15,
  "cookTime": 35,
  "totalTime": 50,
  "servings": 4,
  "categories": ["dinner", "one-pot", "comfort-food"],
  "tags": ["family-friendly", "difficulty-easy"],
  "relatedProducts": [
    {
      "handle": "riverdene-butter-beans-800g",
      "featured": true
    },
    {
      "handle": "anna-passata-500g",
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
function Sausage_bean_one_pot_herby_crumbs_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>There’s a kind of dinner that wraps itself around you like a soft jumper. This is one of those. Everything happens in one pot — sausages browned and sizzling, beans softened into the sauce, tomato warming through with garlic and herbs. No rush. No fuss.</p> <p>The sauce simmers until it clings gently to the spoon. The sausages soak up the flavour without losing themselves. And just before you serve, you scatter over golden, herby breadcrumbs. They don’t just sit on top — they crackle, contrast, and make each bite more interesting than the last.</p> <p>This is the kind of meal that gets eaten without negotiation. That holds well if people are late to the table. That tastes even better spooned into a bowl the next day. It feeds with ease and finishes with a kind of quiet pride.</p> <h2>Ingredients</h2> <ul><li>6 Pork sausages</li> <li>1 Tablespoon Olive oil</li> <li>1 Onion</li> <li>2 Garlic cloves</li> <li>1 Teaspoon Maldon Sea Salt</li> <li>Black pepper</li> <li>1 Teaspoon Smoked paprika</li> <li>1 Teaspoon Herbes de Provence</li> <li>690g Tomato passata</li> <li>400g Butter beans</li> <li>200ml Water or stock</li> <li>1 Teaspoon Sugar</li> <li>2 Slices Bread</li> <li>1 Tablespoon Olive oil (for the crumbs)</li> <li>1 Teaspoon Dried herbs</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Brown the sausages.</strong><br> Heat a large deep pan over medium heat. Add the olive oil and sausages. Cook for 8 to 10 minutes, turning often, until browned on all sides. Remove from the pan and set aside.</p></li> <li><p><strong>Soften the onion.</strong><br> In the same pan, add the finely chopped onion. Cook gently for 5 to 7 minutes until softened and golden around the edges. Stir in the minced garlic and cook for another minute until fragrant.</p></li> <li><p><strong>Build the sauce.</strong><br> Add the smoked paprika, herbes de Provence, salt, and a few twists of black pepper. Stir to coat the onions, then pour in the passata and water or stock. Stir in the sugar and drained butter beans.</p></li> <li><p><strong>Return the sausages and simmer.</strong><br> Nestle the sausages back into the pan. Bring everything to a gentle simmer. Cook uncovered for 20 to 25 minutes until the sausages are fully cooked and the sauce has thickened.</p></li> <li><p><strong>Make the herby crumbs.</strong><br> While the stew simmers, tear or blend the bread into rough crumbs. Heat a tablespoon of olive oil in a frying pan and add the crumbs with the dried herbs. Toast over medium heat, stirring often, for 3 to 5 minutes until golden and crisp. Set aside to cool.</p></li> <li><p><strong>Serve and top.</strong><br> Spoon the sausage and bean stew into bowls and scatter with the herby crumbs just before serving.</p></li></ol> <h2>Tips</h2> <ul><li>Use vegetarian or chicken sausages and adjust cooking time accordingly</li> <li>Add spinach or kale in the last 5 minutes for colour and balance</li> <li>Leftovers reheat well and freeze beautifully</li></ul> <h2>Goes Great With</h2> <ul><li>A green salad with mustard vinaigrette</li> <li>Crusty bread or garlic toast for dipping</li> <li>A spoonful of mustard or hot sauce on the side</li></ul> <hr> <blockquote><p>A spoonful of warmth, a little crunch, and a dinner that makes the house feel like it’s holding you close.</p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_43 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sausage_bean_one_pot_herby_crumbs_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_43 as _,
  metadata as m
};
