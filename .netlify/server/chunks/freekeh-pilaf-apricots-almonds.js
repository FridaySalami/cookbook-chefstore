import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Middle Eastern Freekeh Pilaf with Apricots & Almonds",
  "slug": "freekeh-pilaf-apricots-almonds",
  "description": "A fragrant, textured grain dish made with smoky freekeh, sweet dried apricots, crunchy almonds, and a drizzle of tangy pomegranate molasses.",
  "date": "2025-05-14T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/freekeh-pilaf-apricots-almonds.webp",
  "prepTime": 15,
  "cookTime": 35,
  "totalTime": 50,
  "servings": 4,
  "categories": ["side", "main", "plant-based", "mezze"],
  "tags": [
    "difficulty-medium",
    "vegetarian-option",
    "middle-eastern"
  ],
  "relatedProducts": [
    {
      "handle": "centaur-greenwheat-freekeh-1kg-bag",
      "featured": true
    },
    {
      "handle": "buchanan-dried-whole-apricots-2kg",
      "featured": true
    },
    {
      "handle": "parkers-flaked-almonds-1kg-bag",
      "featured": true
    },
    {
      "handle": "belazu-pomegranate-molasses-250ml",
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
function Freekeh_pilaf_apricots_almonds_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This pilaf walks the line between comfort and celebration.<br> The freekeh brings smoky depth and a chew that feels grounding. The apricots melt in with just enough sweetness to lift it. The almonds crunch back, and the pomegranate molasses ties it all together with a shimmer of tang.<br> It’s balanced, earthy, and quietly bold. Serve it warm, serve it cool, serve it like you made it for someone you care about.</p> <h2>Ingredients</h2> <ul><li>200g Centaur Greenwheat Freekeh, Rinsed</li> <li>1 Small Onion</li> <li>2 Tablespoons Olive Oil</li> <li>600ml Vegetable Stock or Water</li> <li>8 to 10 Dried Apricots</li> <li>50g Flaked Almonds</li> <li>1 Teaspoon Ground Cumin</li> <li>½ Teaspoon Ground Cinnamon</li> <li>Salt</li> <li>Black Pepper</li> <li>1 Tablespoon Belazu Pomegranate Molasses, Plus Extra To Drizzle</li> <li>Fresh Parsley or Mint, To Garnish</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Soften the aromatics</strong><br> Heat olive oil in a saucepan over medium heat. Add the finely chopped onion and cook for about 5 minutes until soft and translucent.</p></li> <li><p><strong>Bloom the spices</strong><br> Stir in the cumin and cinnamon. Let them cook for 30 seconds until the oil smells warm and spiced.</p></li> <li><p><strong>Toast the freekeh</strong><br> Add the rinsed freekeh to the pan. Stir to coat the grains in oil and toast for 1 to 2 minutes.</p></li> <li><p><strong>Simmer until tender</strong><br> Pour in the stock or water. Bring to a gentle boil, then reduce to low, cover, and simmer for 30 to 35 minutes. The freekeh should be tender with a little bite and the liquid mostly absorbed.</p></li> <li><p><strong>Add the fruit and nuts</strong><br> Stir in the chopped dried apricots and toasted flaked almonds. Cover and let it sit for 5 minutes off the heat so the flavours can meld.</p></li> <li><p><strong>Season and finish</strong><br> Add salt, pepper, and the pomegranate molasses. Taste and adjust as needed. Another splash of molasses or grind of pepper can bring it into balance.</p></li> <li><p><strong>Serve with care</strong><br> Spoon into a wide bowl or platter. Scatter with chopped parsley or mint. Finish with a slow drizzle of pomegranate molasses for shine and sharpness.</p></li></ol> <h2>Tips</h2> <ul><li>Use vegetable stock for a vegan version or swap for chicken stock if preferred</li> <li>Toast the almonds in a dry pan for 2 to 3 minutes until golden for deeper flavour</li> <li>This dish is delicious warm but also makes a great chilled mezze option the next day</li></ul> <h2>Goes Great With</h2> <ul><li>Labneh or Greek Yoghurt with Za’atar and Olive Oil</li> <li>Warm Flatbreads or Toasted Pita</li> <li>A Crisp Tomato and Cucumber Salad With Lemon Juice and Mint</li></ul> <hr> <blockquote><p><strong>A dish full of texture, contrast, and calm. It knows when to speak up and when to simply be.</strong></p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Freekeh_pilaf_apricots_almonds_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_18 as _,
  metadata as m
};
