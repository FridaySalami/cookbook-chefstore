import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Cheesy Tuna Pasta Bake",
  "slug": "cheesy-tuna-pasta-bake",
  "description": "A nostalgic, bubbling tray of pasta folded through creamy tuna sauce and sweetcorn, topped with cheese and baked until golden. Simple, filling, and family-friendly.",
  "date": "2025-05-22T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/cheesy-tuna-pasta-bake.webp",
  "prepTime": 15,
  "cookTime": 25,
  "totalTime": 40,
  "servings": 4,
  "categories": ["dinner", "pasta", "bake"],
  "tags": [
    "comfort-food",
    "freezer-friendly",
    "difficulty-easy"
  ],
  "relatedProducts": [
    {
      "handle": "retail-maille-dijon-mustard-210gm",
      "featured": true
    },
    {
      "handle": "reggia-macaroni-elbows-pasta-500g",
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
function Cheesy_tuna_pasta_bake_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This is a dish that doesn’t try too hard. It just shows up warm, creamy, and familiar — like the dinners you grew up with but never quite wrote down. The kind you throw together on a weeknight and end up craving again by Friday.</p> <p>The pasta is soft but not soggy. The sauce is thick and coats everything without being too heavy. Tuna brings depth. Sweetcorn brings a little pop of lightness. And the cheese? The cheese bubbles and browns, pulling everything together under a golden lid.</p> <p>You can stretch it across a few meals. It reheats like a dream. And best of all, it feeds people without fuss. One tray, twenty minutes in the oven, and a whole lot of comfort in every bite.</p> <h2>Ingredients</h2> <ul><li>300g Pasta (Macaroni or Fusilli)</li> <li>2 Tablespoons Butter</li> <li>2 Tablespoons Plain Flour</li> <li>500ml Milk</li> <li>1 Teaspoon Dijon Mustard</li> <li>½ Teaspoon Bonferme Fine Sea Salt</li> <li>Black Pepper</li> <li>2 x 145g Tins Tuna in Spring Water</li> <li>150g Tinned Sweetcorn</li> <li>100g Grated Cheese (plus extra for topping)</li> <li>Chopped Parsley or Chives (optional)</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Cook the pasta.</strong><br> Bring a large pot of salted water to the boil. Add the pasta and cook for 2 minutes less than the packet time. This helps it hold its shape in the oven. Drain and set aside.</p></li> <li><p><strong>Make the sauce.</strong><br> In a medium saucepan, melt the butter over medium heat. Add the flour and whisk for 1 minute until smooth and slightly foamy. Slowly add the milk, whisking constantly to avoid lumps. Simmer for 4 to 5 minutes until thickened. Stir in the mustard, salt, and a few grinds of black pepper.</p></li> <li><p><strong>Combine everything.</strong><br> Stir the drained tuna and sweetcorn into the sauce. Add the grated cheese and stir until melted. Fold in the cooked pasta until everything is coated and combined.</p></li> <li><p><strong>Transfer and top.</strong><br> Spoon the mixture into a baking dish. Spread it evenly. Sprinkle over a handful of extra cheese.</p></li> <li><p><strong>Bake.</strong><br> Place the dish in a 200°C (fan 180°C) oven and bake for 20 to 25 minutes. It should be bubbling and golden on top.</p></li> <li><p><strong>Rest and serve.</strong><br> Let the bake sit for 5 minutes before serving. Top with chopped herbs if you’re using them.</p></li></ol> <h2>Tips</h2> <ul><li>Add frozen peas, spinach, or a handful of chopped broccoli for more veg</li> <li>Swap tuna for cooked shredded chicken or smoked mackerel</li> <li>Leftovers can be frozen or stored in the fridge and reheated with a splash of milk</li></ul> <h2>Goes Great With</h2> <ul><li>A cucumber salad with dill and lemon</li> <li>Steamed broccoli or green beans</li> <li>Toasted garlic bread or buttered rolls</li></ul> <hr> <blockquote><p>A tray of something warm, simple, and exactly what the day calls for. No stress. Just dinner.</p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cheesy_tuna_pasta_bake_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_5 as _,
  metadata as m
};
