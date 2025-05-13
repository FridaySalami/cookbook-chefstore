import { I as sanitize_props, J as spread_props } from "./index3.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Creamy Chicken Korma",
  "slug": "creamy-chicken-korma",
  "description": "A rich, crowd-pleasin’ curry with tender chicken, aromatic spices, and a luxuriously creamy coconut-almond sauce—fit for weeknight comfort or weekend showstoppin’.",
  "date": "2025-05-12T00:00:00.000Z",
  "featured": true,
  "image": "/images/recipes/category-name/recipe-name/creamy-chicken-korma.webp",
  "prepTime": 20,
  "cookTime": 30,
  "totalTime": 50,
  "servings": 4,
  "categories": ["dinner"],
  "tags": [
    "comfort-food",
    "curry",
    "family-friendly",
    "difficulty-medium"
  ],
  "relatedProducts": [
    {
      "handle": "triple-lion-ground-cumin-450g",
      "featured": true
    },
    { "handle": "triple-lion-garam-masala-450g" },
    { "handle": "triple-lion-ground-coriander-450g" },
    {
      "handle": "khanum-pure-creamed-coconut-block-200g"
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
function Creamy_chicken_korma_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>Smooth as a Southern sunset and full of spice like a backroad preacher’s sermon.<br> This korma ain’t shoutin’—it’s <strong>seducin’</strong>.<br> Mild enough for the kids, rich enough to feel fancy, and easy enough for a Tuesday.</p> <h2>Ingredients</h2> <h3>Protein &amp; Dairy</h3> <ul><li>500g chicken breast, diced</li> <li>100–150g plain yoghurt (room temp)</li> <li>100ml double cream</li></ul> <h3>Base</h3> <ul><li>1 large onion, finely chopped</li> <li>2 tbsp oil or ghee</li> <li>1 tsp garlic paste</li> <li>1 tsp ginger paste</li> <li>1 tbsp tomato purée</li></ul> <h3>Spices (ground)</h3> <ul><li>1 tsp ground cumin</li> <li>1 tsp ground coriander</li> <li>½ tsp ground turmeric</li> <li>½ tsp garam masala</li> <li>½ tsp paprika or mild curry powder</li> <li>Salt to taste</li></ul> <h3>Whole Spices (optional but boss-tier)</h3> <ul><li>1 small cinnamon stick</li> <li>2 cardamom pods (lightly crushed)</li> <li>1 clove</li></ul> <h3>Sweet/Nut Layer</h3> <ul><li>2 tbsp ground almonds</li> <li>1 tsp sugar (adjust to taste)</li> <li>25g creamed coconut (about ⅛ block), chopped</li></ul> <h3>Liquids</h3> <ul><li>1 x 400ml can coconut milk</li> <li>Splash of hot water if too thick</li></ul> <h3>Optional Flourish</h3> <ul><li>¼ tsp rose water or kewra water</li> <li>Toasted almonds &amp; chopped coriander to serve</li></ul> <h2>Instructions</h2> <ol><li>In a deep pan, heat oil or ghee. Sauté the chopped onion until golden.</li> <li>Add garlic and ginger paste. Fry for a minute, then stir in tomato purée and dry ground spices. Let it sizzle.</li> <li>Add whole spices and toast them gently until fragrant—they’ll stay in the dish till the end for full flavor. You can fish them out before serving.</li> <li>Stir in the chicken. Cook until sealed on all sides.</li> <li>Pour in coconut milk, ground almonds, sugar, and creamed coconut. Stir well.</li> <li>Add a splash of hot water if needed. Cover and cook for 20 minutes on low heat, until chicken is tender and sauce is rich.</li> <li>Now gently stir in the yoghurt and heat through, taking care not to boil.</li> <li>Finish with the double cream and a dash of rose/kewra water if using.</li> <li>Remove whole spices if desired, and serve garnished with toasted almonds and chopped coriander.</li></ol> <h2>Tips</h2> <ul><li>For deeper flavor, marinate the chicken in yoghurt and spices for 30 mins first.</li> <li>Go vegetarian by swappin’ the chicken with paneer or chickpeas.</li> <li>Store leftovers—this curry sings even louder the next day.</li></ul> <h2>Goes Great With</h2> <ul><li>Basmati rice or warm naan</li> <li>Mango chutney</li> <li>Cold yoghurt raita with cucumber</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Creamy_chicken_korma_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_5 as _,
  metadata as m
};
