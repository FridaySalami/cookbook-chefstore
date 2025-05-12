import { I as sanitize_props, J as spread_props } from "./index3.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Buttermilk Chicken Tenders with Honey Mustard Dip",
  "slug": "buttermilk-chicken-tenders",
  "description": "Crispy golden chicken tenders marinated in buttermilk, coated in seasoned crumbs, and served with a sweet-spicy honey mustard dip. Perfect for kids, parties, or snacking straight from the tray.",
  "date": "2025-05-12T00:00:00.000Z",
  "featured": true,
  "image": "/images/recipes/category-name/recipe-name/buttermilk-chicken-tenders.webp",
  "prepTime": 15,
  "cookTime": 20,
  "totalTime": 35,
  "servings": 4,
  "categories": ["dinner", "kids", "snack"],
  "tags": ["crispy", "crowd-pleaser", "difficulty-easy"],
  "relatedProducts": [
    {
      "handle": "centaur-dijon-mustard-1kg",
      "featured": true
    },
    { "handle": "hyve-squeezy-honey-340g" }
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
function Buttermilk_chicken_tenders_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>Soaked in buttermilk till they’re tender as a slow song, then breaded and cooked to golden perfection—these chicken tenders are the kind you dunk, devour, and go back for more. The honey mustard dip? Sharp, sweet, and makes the whole thing sing.</p> <h2>Ingredients</h2> <h3>For the Chicken</h3> <ul><li>500g chicken breast or mini fillets</li> <li>250ml buttermilk</li> <li>1 tsp garlic powder</li> <li>1 tsp smoked paprika</li> <li>Salt &amp; pepper to taste</li> <li>100g plain flour</li> <li>100g breadcrumbs or panko</li> <li>Oil for shallow frying (if frying) or olive oil spray (if baking)</li></ul> <h3>For the Honey Mustard Dip</h3> <ul><li>3 tbsp Centaur Dijon Mustard</li> <li>2 tbsp Hyve Squeezy Honey</li> <li>1 tbsp mayonnaise or Greek yoghurt</li> <li>1 tsp lemon juice (optional)</li></ul> <h2>Instructions</h2> <h3>1. Marinate the Chicken</h3> <ol><li>Cut chicken into strips if using breasts.</li> <li>In a bowl, mix buttermilk, garlic powder, paprika, salt and pepper.</li> <li>Add chicken and marinate for at least 1 hour, or overnight in the fridge.</li></ol> <h3>2. Coat the Chicken</h3> <ol><li>Mix flour and breadcrumbs in a shallow bowl.</li> <li>Remove chicken from marinade, shake off excess, then coat in crumb mix.</li> <li>For extra crispiness, double-dip: back into buttermilk, then back into crumbs.</li></ol> <h3>3. Cook the Chicken</h3> <h4>🧑‍🍳 Oven Method</h4> <ol><li>Preheat oven to 200°C (fan). Line a tray with baking paper.</li> <li>Spray tenders with oil and bake for 18–22 minutes, turning once, until golden and cooked through.</li></ol> <h4>🍳 Shallow Fry Method</h4> <ol><li>Heat 1–2cm of oil in a pan over medium heat.</li> <li>Fry tenders in batches for 3–4 minutes per side, until golden and crispy.</li> <li>Drain on kitchen paper.</li></ol> <h3>4. Make the Dip</h3> <ol><li>In a small bowl, whisk mustard, honey, and mayo/yoghurt until smooth.</li> <li>Add lemon juice to brighten it up, if you like.</li></ol> <h2>Tips</h2> <ul><li>Great for batch cooking—freeze uncooked tenders, then bake straight from frozen.</li> <li>Switch Dijon for wholegrain or American mustard for a milder dip.</li> <li>Add cayenne to the coating if you like heat.</li></ul> <h2>Goes Great With</h2> <ul><li>Fries or sweet potato wedges</li> <li>Crunchy slaw or pickles</li> <li>A night where nobody wants to wash up</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Buttermilk_chicken_tenders_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_0 as _,
  metadata as m
};
