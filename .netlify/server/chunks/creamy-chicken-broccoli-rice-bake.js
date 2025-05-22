import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Creamy Chicken & Broccoli Rice Bake",
  "slug": "creamy-chicken-broccoli-rice-bake",
  "description": "Tender chicken, soft rice, and broccoli in a creamy cheese sauce, baked until golden and bubbling. A one-dish dinner that’s hearty, family-friendly, and freezer-friendly too.",
  "date": "2025-05-22T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/creamy-chicken-broccoli-rice-bake.webp",
  "prepTime": 15,
  "cookTime": 35,
  "totalTime": 50,
  "servings": 4,
  "categories": ["dinner", "bake", "one-pot"],
  "tags": [
    "chicken",
    "comfort-food",
    "freezer-friendly",
    "difficulty-easy"
  ],
  "relatedProducts": [
    {
      "handle": "oscar-all-natural-chicken-stock-1ltr",
      "featured": true
    },
    {
      "handle": "kerrymaid-uht-double-blue-cream-1ltr",
      "featured": true
    },
    {
      "handle": "manfredi-barbera-unfiltered-italian-extra-virgin-oil",
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
function Creamy_chicken_broccoli_rice_bake_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This is dinner that wraps itself around you. A one-dish meal where everything softens together in the oven — the rice swelling gently in creamy stock, the broccoli turning just tender, the chicken settling in like it belongs there. It’s rich but not heavy. Comforting but still balanced.</p> <p>There’s something about a bake that feeds without fanfare. You spoon it out and it holds together, golden at the edges and steaming underneath. It reheats well. It freezes even better. And it always feels like more than the sum of its parts.</p> <p>Whether it’s made from scratch or using what you’ve got left in the fridge, this is the kind of food that keeps a home warm.</p> <h2>Ingredients</h2> <ul><li>1 Tablespoon Olive oil</li> <li>1 Onion</li> <li>2 Garlic cloves</li> <li>300g Cooked chicken</li> <li>150g Arborio rice or short-grain rice</li> <li>400ml Chicken stock</li> <li>150ml Milk</li> <li>100ml Double cream</li> <li>150g Broccoli florets</li> <li>1 Teaspoon Fine Sea Salt</li> <li>Black pepper</li> <li>100g Grated cheese (plus extra for topping)</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Preheat the oven.</strong><br> Heat the oven to 200°C (fan 180°C). Lightly grease a medium baking dish and set it aside.</p></li> <li><p><strong>Soften the aromatics.</strong><br> In a large pan, heat the olive oil over medium heat. Add the finely chopped onion and sauté for 5 minutes until softened. Add the garlic and cook for another minute until fragrant.</p></li> <li><p><strong>Stir in the rice and liquids.</strong><br> Add the rice to the pan and stir to coat in the oil. Pour in the stock, milk, and cream. Add the salt and a few cracks of black pepper. Bring to a gentle simmer and cook for 2 to 3 minutes, just until starting to thicken.</p></li> <li><p><strong>Fold in the chicken and broccoli.</strong><br> Stir in the cooked chicken and broccoli florets. Let them warm through in the sauce for a minute, then take off the heat.</p></li> <li><p><strong>Add cheese and transfer.</strong><br> Stir through the grated cheese until melted. Pour the whole mixture into the prepared baking dish. Smooth the top and scatter over a little extra cheese.</p></li> <li><p><strong>Bake.</strong><br> Cover loosely with foil and bake for 25 minutes. Remove the foil and bake for another 10 minutes until golden and bubbling.</p></li> <li><p><strong>Let it rest.</strong><br> Allow the bake to sit for 5 to 10 minutes before serving. This helps it settle and makes it easier to portion.</p></li></ol> <h2>Tips</h2> <ul><li>Frozen broccoli works straight from the freezer</li> <li>Add chopped thyme or a pinch of paprika for a deeper flavour</li> <li>A handful of frozen peas or leeks can bulk it out nicely</li></ul> <h2>Goes Great With</h2> <ul><li>A lemony rocket or spinach salad</li> <li>Garlic bread or herby flatbreads</li> <li>A spoonful of cranberry or apple chutney for contrast</li></ul> <hr> <blockquote><p>The kind of dinner that takes care of you while it cooks. Just one dish, a warm oven, and something deeply satisfying waiting at the table.</p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Creamy_chicken_broccoli_rice_bake_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_12 as _,
  metadata as m
};
