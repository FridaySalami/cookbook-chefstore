import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Creamy Sausage & Spinach Gnocchi",
  "slug": "creamy-sausage-spinach-gnocchi",
  "description": "A one-pan dinner of soft gnocchi, herby sausage, and wilted spinach in a creamy garlic sauce. Rich, warming, and ready in under 30 minutes.",
  "date": "2025-05-20T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/creamy-sausage-spinach-gnocchi.webp",
  "prepTime": 10,
  "cookTime": 20,
  "totalTime": 30,
  "servings": 4,
  "categories": ["dinner", "one-pot", "comfort-food"],
  "tags": ["comfort-food", "difficulty-easy"],
  "relatedProducts": [
    {
      "handle": "rummo-premium-italian-no-117-gnocchi-500gm",
      "featured": true
    },
    {
      "handle": "kerrymaid-uht-double-blue-cream-1ltr",
      "featured": true
    },
    {
      "handle": "retail-maille-dijon-mustard-210gm",
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
function Creamy_sausage_spinach_gnocchi_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This is the kind of dinner that feels like you’ve done something special — even if you barely looked at the clock. It all happens in one pan. Gnocchi goes straight in, no boiling first. It simmers in cream, alongside golden bits of sausage, garlic, and just a touch of mustard to lift everything without shouting.</p> <p>Spinach folds in right at the end. It softens into the warmth, bringing colour and calm. The gnocchi turns pillowy, the sauce clings just enough, and everything tastes like it belongs.</p> <p>This is food for when the day has been long and you need the evening to feel easy. Something to eat slowly, from a warm bowl, with good bread and nothing else planned.</p> <h2>Ingredients</h2> <ul><li>1 Tablespoon Olive oil</li> <li>300g Herby sausages (casings removed)</li> <li>2 Garlic cloves</li> <li>500g Gnocchi</li> <li>200ml Double cream</li> <li>1 Teaspoon Dijon mustard</li> <li>½ Teaspoon Bonferme Fine Sea Salt</li> <li>Black pepper</li> <li>100g Baby spinach</li> <li>Grated Parmesan (optional, to serve)</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Brown the sausage.</strong><br> Heat olive oil in a large sauté pan or deep frying pan over medium heat. Add the sausage meat and break it apart with a wooden spoon. Cook for 6 to 8 minutes until browned and cooked through. If there’s too much fat in the pan, spoon some off.</p></li> <li><p><strong>Add the garlic and gnocchi.</strong><br> Stir in the minced garlic and cook for 1 minute, just to take the edge off. Add the gnocchi and stir to coat it in the sausage and oil. Let it sit for a minute or two so it picks up a bit of golden colour.</p></li> <li><p><strong>Pour in the cream.</strong><br> Add the double cream, Dijon mustard, salt, and a good grind of black pepper. Stir gently to combine. Bring to a simmer and cook uncovered for 5 to 7 minutes. Stir occasionally until the gnocchi is tender and the sauce has thickened slightly.</p></li> <li><p><strong>Fold in the spinach.</strong><br> Add the spinach and stir it through. Let it wilt gently in the heat for 1 to 2 minutes. The sauce should be creamy and coating everything nicely.</p></li> <li><p><strong>Taste and serve.</strong><br> Taste and adjust the seasoning. Serve warm, with Parmesan grated over the top if you like.</p></li></ol> <h2>Tips</h2> <ul><li>Use mushrooms instead of sausage for a vegetarian version</li> <li>Add chilli flakes or lemon zest for a brighter or spicier lift</li> <li>Gnocchi will keep soaking up sauce as it sits, so add a splash of stock or water to loosen it when reheating</li></ul> <h2>Goes Great With</h2> <ul><li>A bitter green salad with lemon dressing</li> <li>Garlic bread or a slice of crusty sourdough</li> <li>A cold glass of white wine or sparkling elderflower</li></ul> <hr> <blockquote><p>A bowl of something warm, creamy, and deeply satisfying — made in the time it takes to set the table.</p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Creamy_sausage_spinach_gnocchi_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_17 as _,
  metadata as m
};
