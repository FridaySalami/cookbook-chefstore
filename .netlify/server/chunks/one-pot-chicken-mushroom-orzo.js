import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "One-Pot Chicken & Mushroom Orzo",
  "slug": "one-pot-chicken-mushroom-orzo",
  "description": "Tender chicken and golden mushrooms cooked with orzo pasta in a creamy, savoury broth. A comforting one-pot dish with all the ease of pasta and the soul of risotto.",
  "date": "2025-05-22T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/one-pot-chicken-mushroom-orzo.webp",
  "prepTime": 10,
  "cookTime": 25,
  "totalTime": 35,
  "servings": 4,
  "categories": ["dinner", "one-pot", "comfort-food"],
  "tags": ["chicken", "difficulty-easy"],
  "relatedProducts": [
    {
      "handle": "pasta-reggia-riso-orzo-pasta-1x500g",
      "featured": true
    },
    {
      "handle": "oscar-all-natural-chicken-stock-1ltr",
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
function One_pot_chicken_mushroom_orzo_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This is the kind of meal you cook when you want to feel held but don’t have the energy for fuss. A one-pot dinner where everything comes together gently — chicken turning tender in the warmth, mushrooms softening and deepening in flavour, and orzo soaking up every bit of it like it’s been waiting for this moment.</p> <p>It’s creamy without being heavy, familiar without being dull. The mushrooms give it earth, the chicken gives it comfort, and the orzo makes it all feel like something between a stew and a risotto — but simpler, quicker, and somehow just as satisfying.</p> <p>You don’t need to watch it too closely. It’s forgiving. It tastes like effort, even though it hardly is. And when the spoon hits the bowl, you’ll know why it’s one to come back to.</p> <h2>Ingredients</h2> <ul><li>1 Tablespoon Olive Oil</li> <li>300g Chicken Thigh or Breast</li> <li>1 Onion</li> <li>2 Garlic Cloves</li> <li>200g Mushrooms</li> <li>180g Orzo Pasta</li> <li>500ml Chicken Stock</li> <li>100ml Double Cream</li> <li>50g Grated Cheese (optional)</li> <li>1 Teaspoon Bonferme Fine Sea Salt</li> <li>Black Pepper</li> <li>Fresh Parsley (optional)</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Sear the chicken.</strong><br> Warm the olive oil in a large sauté pan or casserole over medium heat. Add the diced chicken and cook for 5 to 6 minutes until lightly golden and just cooked through. Transfer to a bowl and set aside.</p></li> <li><p><strong>Soften the base.</strong><br> In the same pan, add the finely chopped onion and sauté for 3 to 4 minutes until soft. Add the sliced mushrooms and cook until they release their moisture and start to brown. Stir in the minced garlic and cook for 1 more minute.</p></li> <li><p><strong>Add the orzo and liquids.</strong><br> Pour in the orzo and stir to coat it in the base. Add the chicken stock, salt, and a few grinds of pepper. Return the chicken to the pan. Bring to a simmer and cook for 10 to 12 minutes, stirring occasionally, until the orzo is tender and most of the liquid is absorbed.</p></li> <li><p><strong>Finish with cream and cheese.</strong><br> Reduce the heat and pour in the double cream. Stir through gently, then add the grated cheese if using. Let everything warm through until creamy and just thickened.</p></li> <li><p><strong>Let it rest.</strong><br> Remove from heat and let the pan sit for a couple of minutes. The orzo will settle, the sauce will thicken just enough, and it’ll be perfect for scooping.</p></li></ol> <h2>Tips</h2> <ul><li>You can swap the mushrooms for courgettes or spinach if you prefer</li> <li>A splash of lemon juice right at the end lifts the whole dish</li> <li>Add a pinch of nutmeg or smoked paprika for extra depth</li></ul> <h2>Goes Great With</h2> <ul><li>A rocket salad with balsamic vinegar</li> <li>Warm crusty bread or garlic flatbreads</li> <li>A glass of white wine or sparkling water with lemon</li></ul> <hr> <blockquote><p>A single pan. A gentle stir. A bowl of something that feels like it cooked longer than it did. Simple, honest comfort.</p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_46 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: One_pot_chicken_mushroom_orzo_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_46 as _,
  metadata as m
};
