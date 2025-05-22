import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Baked Beef & Bean Quesadilla Casserole",
  "slug": "baked-beef-bean-quesadilla-casserole",
  "description": "Layers of soft tortillas, spiced beef, black beans, tomato sauce, and bubbling cheese — a comforting tray-bake version of a quesadilla that feeds a family with ease.",
  "date": "2025-05-22T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/baked-beef-bean-quesadilla-casserole.webp",
  "prepTime": 15,
  "cookTime": 30,
  "totalTime": 45,
  "servings": 4,
  "categories": ["dinner", "bake", "comfort-food"],
  "tags": ["beef", "family-friendly", "difficulty-easy"],
  "relatedProducts": [
    {
      "handle": "epicure-black-beans-400gm",
      "featured": true
    },
    {
      "handle": "riverdene-chopped-tomatoes-800g",
      "featured": true
    },
    {
      "handle": "triple-lion-fajita-seasoning-600g",
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
function Baked_beef_bean_quesadilla_casserole_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This bake is like the warm middle ground between tacos and lasagne. It has all the joy of a quesadilla — melted cheese, seasoned meat, soft tortillas — but with none of the mess. Just a tray full of comfort, bubbling at the edges, ready to be sliced and shared.</p> <p>The beef is gently spiced, the black beans hearty and mild. The tomato sauce soaks into the tortillas just enough to make them tender without falling apart. And every bite carries that familiar Tex-Mex hum — savoury, creamy, and just the right amount of cosy.</p> <p>It feeds everyone. It reheats beautifully. And it’s forgiving enough to make with what’s in your cupboard. That’s why you’ll come back to this one again and again.</p> <h2>Ingredients</h2> <ul><li>1 Tablespoon Olive Oil</li> <li>1 Onion</li> <li>2 Garlic Cloves</li> <li>400g Minced Beef</li> <li>1 Tablespoon Fajita Seasoning</li> <li>400g Chopped Tomatoes</li> <li>2 Tablespoons Tomato Puree</li> <li>1 Teaspoon Bonferme Fine Sea Salt</li> <li>Black Pepper</li> <li>400g Tinned Black Beans</li> <li>6 Soft Tortillas</li> <li>150g Grated Cheese (plus extra for topping)</li> <li>Fresh Coriander or Spring Onions (optional)</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Preheat the oven.</strong><br> Heat the oven to 200°C (fan 180°C). Lightly grease a baking dish.</p></li> <li><p><strong>Cook the onion and garlic.</strong><br> Warm the olive oil in a large pan. Add the finely chopped onion and cook over medium heat for about 5 minutes until soft and just starting to colour. Stir in the garlic and cook for 1 minute more.</p></li> <li><p><strong>Add beef and seasoning.</strong><br> Tip in the minced beef. Break it up with your spoon and cook for 5 to 7 minutes until browned. Stir in the fajita seasoning, chopped tomatoes, tomato puree, salt, and a few twists of black pepper. Simmer for 8 to 10 minutes until thick and saucy.</p></li> <li><p><strong>Fold in the beans.</strong><br> Drain the black beans and stir them through the beef. Let them warm gently in the sauce for another 2 minutes. Remove from the heat and taste for seasoning.</p></li> <li><p><strong>Layer the casserole.</strong><br> Spread a spoonful of the beef mixture across the base of the baking dish. Lay down one tortilla, then spread over more beef, followed by a sprinkle of grated cheese. Repeat the layering until you run out of filling, finishing with a final tortilla and a good handful of cheese.</p></li> <li><p><strong>Bake.</strong><br> Cover the dish loosely with foil and bake for 20 minutes. Remove the foil and bake for another 10 minutes until the top is golden and bubbling.</p></li> <li><p><strong>Rest and serve.</strong><br> Let the bake rest for 5 minutes before slicing. Garnish with fresh coriander or spring onions if you like.</p></li></ol> <h2>Tips</h2> <ul><li>You can swap black beans for kidney or pinto beans</li> <li>Add a pinch of smoked paprika or cumin for a deeper flavour</li> <li>This freezes well in portions — perfect for future dinners</li></ul> <h2>Goes Great With</h2> <ul><li>Crisp salad with lime and olive oil</li> <li>Sour cream or Greek yogurt on the side</li> <li>Tortilla chips for crunch</li></ul> <hr> <blockquote><p>A casserole with the heart of a quesadilla and the ease of a traybake. Mess-free, satisfying, and full of warmth.</p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Baked_beef_bean_quesadilla_casserole_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_0 as _,
  metadata as m
};
