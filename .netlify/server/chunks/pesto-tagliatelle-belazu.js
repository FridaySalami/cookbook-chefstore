import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Pesto Tagliatelle with Belazu Genovese",
  "slug": "pesto-tagliatelle-belazu",
  "description": "A quick yet luxurious bowl of silky tagliatelle coated in vibrant, herby Belazu Genovese pesto—ready in the time it takes to boil pasta.",
  "date": "2025-05-14T00:00:00.000Z",
  "featured": true,
  "image": "/images/recipes/category-name/recipe-name/pesto-tagliatelle-belazu.webp",
  "prepTime": 5,
  "cookTime": 10,
  "totalTime": 15,
  "servings": 2,
  "categories": ["main", "pasta", "quick"],
  "tags": ["italian", "vegetarian", "difficulty-easy"],
  "relatedProducts": [
    {
      "handle": "rummo-premium-italian-no-107-tagliatelle-12-500gm",
      "featured": true
    },
    {
      "handle": "belazu-retail-traditional-pesto-genovese-165gm",
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
function Pesto_tagliatelle_belazu_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>Sometimes dinner doesn’t need to be loud to be good.<br> This is quiet luxury in a bowl—ribbons of warm tagliatelle, coated in a pesto that hums with basil, cheese, and a touch of garlic. No need to chop, no need to fuss. Just pasta, pesto, and a few minutes of gentle stirring.</p> <p>It’s the kind of meal that catches you off guard with how good it is.<br> You might stand over the stove tasting spoon after spoon before it even hits the plate.<br> It’s quick enough for a tired Tuesday but comforting enough for when you want to feel looked after.<br> One pot. One bowl. One very content sigh.</p> <h2>Ingredients</h2> <ul><li>250g Tagliatelle</li> <li>2 Heaped Tablespoons Pesto Genovese</li> <li>2 Tablespoons Reserved Pasta Water</li> <li>Grated Grana Padano or Parmigiano</li> <li>Black Pepper</li> <li>Optional: Olive Oil or Rocket Leaves</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Cook the pasta</strong><br> Bring a large pot of salted water to a boil. Add the tagliatelle and cook until tender with a little bite, usually 8 to 9 minutes.</p></li> <li><p><strong>Prep the pesto</strong><br> While the pasta cooks, place the pesto in a large bowl—one big enough to toss the pasta in later. Let it come to room temperature while you wait.</p></li> <li><p><strong>Reserve the water</strong><br> Just before draining, scoop out a small cup of the pasta water. This starchy liquid will help the pesto cling and gloss every strand.</p></li> <li><p><strong>Combine</strong><br> Drain the pasta and add it straight into the bowl with the pesto. Pour in a splash of the pasta water and gently stir or toss until the pesto melts into a silky sauce. If it looks too thick, add a little more water. If too thin, let it sit for a minute to thicken.</p></li> <li><p><strong>Taste and serve</strong><br> Finish with grated cheese and a crack of black pepper. If you like, drizzle over a little olive oil or scatter rocket on top for a fresh lift.</p></li></ol> <h2>Tips</h2> <ul><li>Use the heat of the pasta to warm the pesto gently—no need to cook it.</li> <li>Lemon zest or a spoonful of ricotta adds brightness and richness.</li> <li>Make it heartier with grilled chicken, roasted vegetables, or pan fried mushrooms.</li></ul> <h2>Goes Great With</h2> <ul><li>A chilled glass of white wine or sparkling elderflower</li> <li>Crusty bread and olive oil for mopping the bowl</li> <li>A quick midweek dinner that feels like something more</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_40 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pesto_tagliatelle_belazu_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_40 as _,
  metadata as m
};
