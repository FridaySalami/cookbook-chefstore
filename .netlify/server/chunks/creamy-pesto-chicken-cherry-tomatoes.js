import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Creamy Pesto Chicken with Cherry Tomatoes",
  "slug": "creamy-pesto-chicken-cherry-tomatoes",
  "description": "Juicy chicken simmered in a pesto cream sauce with bursting cherry tomatoes. Quick, comforting, and full of fresh basil flavour — ideal with pasta, rice, or warm crusty bread.",
  "date": "2025-05-20T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/creamy-pesto-chicken-cherry-tomatoes.webp",
  "prepTime": 10,
  "cookTime": 20,
  "totalTime": 30,
  "servings": 4,
  "categories": ["dinner", "skillet", "comfort-food"],
  "tags": ["chicken", "quick", "difficulty-easy"],
  "relatedProducts": [
    {
      "handle": "belazu-retail-traditional-pesto-genovese-165gm",
      "featured": true
    },
    {
      "handle": "manfredi-barbera-unfiltered-italian-extra-virgin-oil",
      "featured": false
    },
    {
      "handle": "kerrymaid-uht-double-blue-cream-1ltr",
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
function Creamy_pesto_chicken_cherry_tomatoes_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This dish is the kind that quietly makes everything feel a little easier. It doesn’t shout, it doesn’t need to. Just a skillet of chicken turning golden, cherry tomatoes softening around the edges, and a sauce that comes together in a single swirl of pesto and cream.</p> <p>It’s bright but comforting. Fresh but rich. The kind of thing you can serve over pasta when the day needs a bit of gentleness, or spoon over rice when all you want is to be fed well with no extra effort.</p> <p>It’s easy to make, quick to clean up, and generous in flavour. The chicken stays tender, the tomatoes bring sweet tang, and the pesto lifts it all into something that feels just a little bit special — even on a Wednesday.</p> <h2>Ingredients</h2> <ul><li>1 Tablespoon Olive Oil</li> <li>4 Chicken Breasts</li> <li>200g Cherry Tomatoes</li> <li>100ml Double Cream</li> <li>2 Tablespoons Basil Pesto</li> <li>1 Teaspoon Fine Sea Salt</li> <li>Black Pepper</li> <li>50g Grated Cheese (optional)</li> <li>Fresh Basil or Parsley (optional)</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Sear the chicken.</strong><br> Heat the olive oil in a large skillet over medium heat. Season the chicken breasts with salt and black pepper. Add them to the pan and cook for 5 to 6 minutes on each side until golden and nearly cooked through. Transfer to a plate and set aside.</p></li> <li><p><strong>Soften the tomatoes.</strong><br> Add the cherry tomatoes to the pan. Let them cook undisturbed for 2 to 3 minutes until the skins begin to split. Stir gently and cook for another minute so their juices start to release.</p></li> <li><p><strong>Make the sauce.</strong><br> Reduce the heat to low. Pour in the double cream and stir through the pesto. Let it come to a gentle simmer. Taste and adjust seasoning if needed.</p></li> <li><p><strong>Return the chicken.</strong><br> Place the chicken back in the pan. Spoon some of the sauce over each piece. Simmer for 5 to 7 minutes until the chicken is fully cooked and the sauce is slightly thickened.</p></li> <li><p><strong>Finish and serve.</strong><br> Stir in the grated cheese if using. Let the pan rest off the heat for a couple of minutes before serving. Garnish with fresh basil or parsley if you like.</p></li></ol> <h2>Tips</h2> <ul><li>Slice the chicken before cooking for faster, even searing</li> <li>Swap cherry tomatoes for sun-dried tomatoes if you prefer a richer base</li> <li>Add a handful of spinach in the final minutes for extra greens</li></ul> <h2>Goes Great With</h2> <ul><li>Linguine or tagliatelle</li> <li>Buttered couscous or rice</li> <li>Garlic bread and a lemon-dressed salad</li></ul> <hr> <blockquote><p>A skillet supper that feels thoughtful without being fussy. It comes together easily and disappears just as quickly.</p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Creamy_pesto_chicken_cherry_tomatoes_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_15 as _,
  metadata as m
};
