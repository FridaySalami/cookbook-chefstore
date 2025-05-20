import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Family-Friendly Mac & Cheese with Hidden Veg",
  "slug": "family-mac-cheese-hidden-veg",
  "description": "A golden, bubbling tray of mac and cheese the whole family will eat without negotiation. Creamy cheddar sauce, soft pasta, and blended veg snuck in for peace of mind. Comfort food that doesn’t need to shout.",
  "date": "2025-05-20T00:00:00.000Z",
  "featured": true,
  "image": "/images/recipes/category-name/recipe-name/family-mac-cheese-hidden-veg.webp",
  "prepTime": 15,
  "cookTime": 30,
  "totalTime": 45,
  "servings": 4,
  "categories": ["dinner", "pasta", "comfort-food"],
  "tags": [
    "vegetarian-option",
    "comfort-food",
    "difficulty-easy"
  ],
  "relatedProducts": [
    { "handle": "maldon-sea-salt", "featured": true },
    {
      "handle": "colavita-100-italian-extra-virgin-olive-oil-750ml",
      "featured": false
    },
    {
      "handle": "triple-lion-elbow-macaroni-pasta-3kg",
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
function Family_mac_cheese_hidden_veg_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This is mac and cheese for real life. For kids who won’t touch a carrot unless it’s disguised. For parents who want one quiet mealtime in a week full of negotiations. For evenings when comfort matters more than presentation.</p> <p>It’s soft and creamy, with pasta that hugs the sauce and a golden top that crackles just enough. But beneath all that, there’s something more. Carrots and cauliflower melt into the sauce, sweetening it quietly. You won’t see them. You might not even taste them. But they’re there, doing good in the background like a lullaby you forgot you knew.</p> <p>It’s a recipe that says you tried today. You made something warm. Something they’ll eat. And maybe you even liked it too.</p> <h2>Ingredients</h2> <ul><li>250g Macaroni or small pasta shapes</li> <li>1 Tbsp Olive oil or butter</li> <li>1 Onion</li> <li>1 Garlic clove</li> <li>1 Carrot</li> <li>200g Cauliflower</li> <li>500ml Whole milk</li> <li>1 Tsp Maldon Sea Salt</li> <li>1 Tsp Dijon mustard or ½ Tsp Miso paste (optional)</li> <li>100g Cheddar cheese</li> <li>50g Mozzarella cheese</li> <li>30g Parmesan cheese</li> <li>Black pepper</li> <li>2 Tbsp Breadcrumbs (optional)</li> <li>Extra grated cheese for topping (optional)</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Bring a pot of salted water to a boil and cook the pasta</strong> Until just shy of tender. It should still have a slight bite when you drain it. This helps it hold shape in the oven.</p></li> <li><p><strong>While the pasta cooks, start the sauce base.</strong><br> Heat the olive oil or butter in a large saucepan. Add the onion, garlic, carrot and cauliflower. Cook gently over medium heat for about 10 minutes. You’re aiming for softness and a little sweetness, not browning.</p></li> <li><p><strong>Pour in the milk and let it all bubble gently for 5 minutes.</strong><br> This softens the vegetables fully and draws out their sweetness into the milk. Once done, blend the mixture until smooth using a stick blender or jug blender. Be careful with hot liquid.</p></li> <li><p><strong>Return the smooth sauce to the pan and stir in the cheeses.</strong><br> Add the cheddar, mozzarella and Parmesan. Stir over low heat until melted and smooth. Add the mustard or miso if using. Season with salt and a few grinds of black pepper. Taste it. It should be rich, mellow and savoury.</p></li> <li><p><strong>Tip in the drained pasta and stir until every piece is coated.</strong><br> You want the sauce to cling to it like it belongs there. If it seems too thick, a splash of milk will loosen it.</p></li> <li><p><strong>Spoon everything into a baking dish.</strong><br> Scatter the top with breadcrumbs and a little extra cheese if you want a golden, crisp crust. Bake at 200°C (fan 180°C) for about 20 minutes or until bubbling and golden on top.</p></li> <li><p><strong>Let it rest for 5 minutes before serving.</strong><br> This helps it settle and makes it easier to scoop without sliding all over the plate.</p></li></ol> <h2>Tips</h2> <ul><li>You can swap the cauliflower for butternut squash or sweet potato if that’s what you’ve got.</li> <li>If you want protein, stir in some shredded cooked chicken or crispy bacon before baking.</li> <li>Leftovers reheat well with a splash of milk stirred through. Try pan-frying slices the next day for golden edges.</li> <li>If you’re feeding 4 hungry adults, consider increasing to pasta amount to 300g–350g for comfort</li></ul> <h2>Goes Great With</h2> <ul><li>Steamed peas or green beans for something bright on the side</li> <li>Cherry tomatoes tossed with olive oil and a pinch of salt</li> <li>A quiet evening and a second helping just because</li></ul> <hr> <blockquote><p>Creamy, quiet, and kind. A dish that feeds more than just hunger.</p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Family_mac_cheese_hidden_veg_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_16 as _,
  metadata as m
};
