import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Chicken & Pearl Barley Broth",
  "slug": "chicken-pearl-barley-broth",
  "description": "A golden, soul-soothing broth loaded with tender chicken, pearl barley, and soft vegetables—finished with lemon, thyme, and a crack of black pepper.",
  "date": "2025-05-14T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/chicken-pearl-barley-broth.webp",
  "prepTime": 10,
  "cookTime": 60,
  "totalTime": 70,
  "servings": 6,
  "categories": ["soup", "batch-cook", "lunch"],
  "tags": [
    "comfort-food",
    "chicken",
    "slow-cooked",
    "difficulty-easy"
  ],
  "relatedProducts": [
    {
      "handle": "knorr-professional-chicken-bouillon-jelly-800g",
      "featured": true
    },
    {
      "handle": "triple-lion-pearl-barley-3kg",
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
function Chicken_pearl_barley_broth_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>There’s something about a pot gently bubbling on the hob that settles a house.<br> This isn’t just soup it’s a reset button.<br> Pearl barley gives it weight. Chicken adds calm. And that broth? It carries stories your body remembers even if your mind’s too tired.</p> <p>For quiet days. Cold nights. Or when you just need something to <em>hold you up a bit</em>.</p> <h2>Ingredients</h2> <ul><li>2 Tbsp Olive Oil</li> <li>1 Onion</li> <li>2 Carrots</li> <li>2 Sticks Celery</li> <li>1 Leek</li> <li>2 Garlic Cloves</li> <li>1.2 Litres Hot Water</li> <li>1 Heaped Tbsp Knorr Chicken Bouillon Jelly</li> <li>150g Triple Lion Pearl Barley</li> <li>300g Cooked Chicken</li> <li>1 Bay Leaf</li> <li>2 Sprigs Fresh Thyme (or ½ tsp Dried Thyme)</li> <li>Juice of Half a Lemon</li> <li>Salt</li> <li>Black Pepper</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Start slow.</strong><br> Heat the oil in a big pot over medium heat. Add the onion, carrots, celery, and leek.<br> Let them soften gently about 8–10 minutes until they start to lose their edges and smell like the start of something healing.</p></li> <li><p><strong>Build the flavour.</strong><br> Stir in the garlic and let it warm for a minute. Pour in the hot water, then stir in the bouillon. It should melt into gold—rich, savoury, and honest.</p></li> <li><p><strong>Let the barley bloom.</strong><br> Add the rinsed pearl barley, bay leaf, and thyme. Bring everything to a boil, then lower the heat and let it simmer quietly.<br> Cover and leave it for around 45 minutes, checking in now and then as the barley softens and the broth thickens like it’s remembering something.</p></li> <li><p><strong>Bring it together.</strong><br> Stir in the chicken and let it warm through for another 10–15 minutes.<br> Take out the bay leaf. Breathe it in. You’re nearly there.</p></li> <li><p><strong>Finish and balance.</strong><br> Squeeze in the lemon juice. Season with salt and a good crack of pepper.<br> Taste. Adjust. Taste again if you feel like it. This bit is for you.</p></li></ol> <h2>Tips</h2> <ul><li>Make it ahead. Like all good broths, this one deepens overnight. It reheats like a dream just loosen with a splash of water.</li> <li>A knob of butter stirred in at the end adds richness and rounds out the sharp lemon.</li> <li>Want it veggie? Knorr Vegetable Bouillon + butter beans or mushrooms = just as lovely.</li></ul> <h2>Goes Great With</h2> <ul><li>Warm, crusty sourdough with plenty of butter</li> <li>A melted cheese toastie on the side</li> <li>Quiet nights, deep breaths, and nowhere to be</li></ul> <hr> <blockquote><p><strong>Simmer slow. Season well. Let it hold you for a while.</strong></p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Chicken_pearl_barley_broth_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_7 as _,
  metadata as m
};
