import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Creamy Tomato & Butter Bean Pasta",
  "slug": "creamy-tomato-butter-bean-pasta",
  "description": "A quick stovetop pasta dish made with butter beans, passata, garlic, and a swirl of cream. Simple, comforting, and ready in under 30 minutes. The kind of meal that fills the house with warmth and the bowls with ease.",
  "date": "2025-05-20T00:00:00.000Z",
  "featured": true,
  "image": "/images/recipes/category-name/recipe-name/creamy-tomato-butter-bean-pasta.webp",
  "prepTime": 10,
  "cookTime": 15,
  "totalTime": 25,
  "servings": 4,
  "categories": ["dinner", "pasta", "vegetarian"],
  "tags": [
    "vegetarian",
    "comfort-food",
    "pasta",
    "quick",
    "difficulty-easy"
  ],
  "relatedProducts": [
    {
      "handle": "riverdene-butter-beans-800g",
      "featured": true
    },
    {
      "handle": "ballerina-tomato-paste-800g-tin",
      "featured": true
    },
    {
      "handle": "colavita-100-italian-extra-virgin-olive-oil-750ml",
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
function Creamy_tomato_butter_bean_pasta_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This is a bowlful of quiet comfort. It comes together with ease and ends with something warm, familiar, and quietly indulgent. Butter beans bring their soft, creamy calm. The tomato sauce is simple but deep, simmered just long enough to settle. And then a swirl of cream or soft cheese rounds the whole thing off — not rich exactly, but mellow. Complete.</p> <p>It’s a pantry meal that doesn’t taste like a compromise. Something to make when time is short but you still want to sit down with something kind and warm in your bowl. No shouting flavours. No big performance. Just gentle layers that hold together well.</p> <p>Serve it with a crust of bread or a sharp little salad and you’ve got dinner that gives more than it asks.</p> <h2>Ingredients</h2> <ul><li>350g Pasta</li> <li>1 Tablespoon Olive oil</li> <li>1 Onion</li> <li>2 Garlic cloves</li> <li>1 Teaspoon Maldon Sea Salt</li> <li>Black pepper</li> <li>690g Tomato Paste</li> <li>400g Butter beans</li> <li>1 Teaspoon White miso or Dijon mustard</li> <li>3 Tablespoons Double cream or soft cheese</li> <li>Chilli flakes</li> <li>Parmesan cheese</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Bring a large pot of salted water to a boil.</strong><br> Add the pasta and cook until just al dente. Before draining, scoop out a mugful of the cooking water and set it aside.</p></li> <li><p><strong>Make the base of the sauce.</strong><br> While the pasta cooks, heat the olive oil in a large saucepan over medium heat. Add the onion and cook for 5 to 7 minutes until soft and lightly golden. Stir in the garlic and cook for another minute, just until fragrant.</p></li> <li><p><strong>Simmer the tomato and beans.</strong><br> Pour in the paste and stir in the drained butter beans. Add the salt, some black pepper, and the miso or mustard. Simmer gently for 10 minutes. The beans will soften slightly, and the sauce will reduce a little and grow richer.</p></li> <li><p><strong>Finish the sauce.</strong><br> Lower the heat and stir in the cream or soft cheese. Let it melt into the sauce until smooth. Add a splash of pasta water if the sauce is thicker than you’d like. Taste and adjust seasoning.</p></li> <li><p><strong>Combine with the pasta.</strong><br> Add the drained pasta to the sauce and stir gently until everything is coated and glossy. Warm it through for a minute or two if needed.</p></li> <li><p><strong>Serve and garnish.</strong><br> Spoon into bowls. Top with Parmesan and a pinch of chilli flakes if you like a little warmth.</p></li></ol> <h2>Tips</h2> <ul><li>Use chickpeas or cannellini beans in place of butter beans if needed</li> <li>Add a few handfuls of spinach or frozen peas at the end for colour and contrast</li> <li>Blend the sauce before adding cream if you want it completely smooth</li></ul> <h2>Goes Great With</h2> <ul><li>A crisp green salad with balsamic or lemon dressing</li> <li>Warm garlic bread or focaccia</li> <li>A glass of cold white wine or sparkling water with lemon</li></ul> <hr> <blockquote><p>A dish made of easy things. Nothing flashy, just the soft kind of dinner that makes everything slow down for a while.</p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Creamy_tomato_butter_bean_pasta_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_15 as _,
  metadata as m
};
