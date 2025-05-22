import { D as sanitize_props, E as spread_props } from "./index2.js";
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
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>Smooth as silk, gentle on spice, and rich enough to feel like you’ve pulled out all the stops this is the korma that soothes without ever being boring.<br> It’s got warmth without burn, sweetness without sugar rush, and just enough depth to make you pause mid-bite.<br> Great on a Tuesday. Showstoppin’ by Saturday. Always hits the spot.</p> <h2>Ingredients</h2> <h3>Protein &amp; Dairy</h3> <ul><li>500g Chicken Breast, Diced</li> <li>100–150g Plain Yoghurt (Room Temperature)</li> <li>100ml Double Cream</li></ul> <h3>Base</h3> <ul><li>1 Large Onion</li> <li>2 Tablespoons Oil or Ghee</li> <li>1 Teaspoon Garlic Paste</li> <li>1 Teaspoon Ginger Paste</li> <li>1 Tablespoon Tomato Purée</li></ul> <h3>Spices (Ground)</h3> <ul><li>1 Teaspoon Ground Cumin</li> <li>1 Teaspoon Ground Coriander</li> <li>½ Teaspoon Ground Turmeric</li> <li>½ Teaspoon Garam Masala</li> <li>½ Teaspoon Paprika or Mild Curry Powder</li> <li>Salt, To Taste</li></ul> <h3>Whole Spices (Optional)</h3> <ul><li>1 Small Cinnamon Stick</li> <li>2 Cardamom Pods, Lightly Crushed</li> <li>1 Clove</li></ul> <h3>Sweet/Nut Layer</h3> <ul><li>2 Tablespoons Ground Almonds</li> <li>1 Teaspoon Sugar</li> <li>25g Creamed Coconut (About ⅛ Block), Chopped</li></ul> <h3>Liquids</h3> <ul><li>1 × 400ml Can Coconut Milk</li> <li>Splash of Hot Water (If Needed)</li></ul> <h3>Optional Finishing Touches</h3> <ul><li>¼ Teaspoon Rose Water or Kewra Water</li> <li>Toasted Almonds and Chopped Coriander, To Serve</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Start the base.</strong><br> Heat the oil or ghee in a deep pan. Add the onion and cook gently for 10–12 minutes until golden and soft. Stir often this is where the flavour builds.</p></li> <li><p><strong>Bring in the aromatics.</strong><br> Add the garlic and ginger pastes. Stir for a minute until fragrant, then mix in the tomato purée and all the ground spices. Cook for another minute or two until everything smells warm and deep.</p></li> <li><p><strong>Whole spices next.</strong><br> Drop in the cinnamon, cardamom, and clove if using. Let them toast lightly to release their oils. They stay in the pot, but if you want to fish them out before serving, that’s fine too.</p></li> <li><p><strong>Add the chicken.</strong><br> Stir in the diced chicken and cook for 3–4 minutes until sealed on all sides. Don’t worry about cooking it through just yet it’ll finish in the sauce.</p></li> <li><p><strong>Build the sauce.</strong><br> Pour in the coconut milk and stir in the ground almonds, sugar, and creamed coconut. Let it all come together into a creamy, lightly sweet base. Add a splash of water if it starts to get too thick.</p></li> <li><p><strong>Simmer gently.</strong><br> Cover the pan and cook on low heat for about 20 minutes, until the chicken is tender and the sauce has thickened to a rich, scoopable consistency.</p></li> <li><p><strong>Finish gently.</strong><br> Stir in the yoghurt slowly, a bit at a time, to keep it from splitting. Warm through, but don’t let it boil.</p></li> <li><p><strong>Add the cream and flourish.</strong><br> Stir in the double cream and rose or kewra water, if using. It’s subtle but lifts the whole dish. Taste and adjust seasoning as needed.</p></li> <li><p><strong>Serve it up.</strong><br> Remove the whole spices if you’d like. Serve hot, garnished with toasted almonds and a scatter of fresh coriander.</p></li></ol> <h2>Tips</h2> <ul><li>Marinate the chicken in yoghurt and a little spice for 30 minutes beforehand for extra tenderness and flavour.</li> <li>Want it veggie? Paneer or chickpeas make an easy swap and hold the sauce beautifully.</li> <li>This curry gets better the next day just reheat gently with a splash of water.</li></ul> <h2>Goes Great With</h2> <ul><li>Steamed Basmati Rice or Warm Naan</li> <li>Sweet Mango Chutney</li> <li>A Cool Cucumber Raita</li></ul> <hr> <blockquote><p><strong>Rich, mellow, and quietly indulgent this is a curry with calm in its bones and flavour in every fold.</strong></p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Creamy_chicken_korma_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_10 as _,
  metadata as m
};
