import { I as sanitize_props, J as spread_props } from "./index3.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Sticky Banana Bread with Dark Chocolate & Walnuts",
  "slug": "sticky-banana-bread-chocolate-walnuts",
  "description": "A soft, sticky banana loaf studded with chunks of dark chocolate and toasted walnuts. Deep, rich flavour, perfect for slicing, toasting, or devouring straight out the tin.",
  "date": "2025-05-12T00:00:00.000Z",
  "featured": true,
  "image": "/images/recipes/category-name/recipe-name/sticky-banana-bread-chocolate-walnuts.webp",
  "prepTime": 10,
  "cookTime": 55,
  "totalTime": 65,
  "servings": 8,
  "categories": ["bakes", "sweet"],
  "tags": [
    "comfort-food",
    "freezer-friendly",
    "difficulty-easy"
  ],
  "relatedProducts": [
    {
      "handle": "callebaut-45-4-dark-chocolate-chunks-2-5kg",
      "featured": true
    },
    { "handle": "buchanan-walnut-pieces-1kg" },
    {
      "handle": "tate-lyle-soft-light-brown-sugar-1kg"
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
function Sticky_banana_bread_chocolate_walnuts_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>It’s rich. It’s sticky. It hugs your insides.<br> This banana bread doesn’t whisper “healthy”—it yells <em>“Have another slice.”</em><br> Dark chocolate melts into the crumb, walnuts add crunch, and the bananas do the heavy lifting on flavour and moisture.</p> <h2>Ingredients</h2> <ul><li>3 overripe bananas (the browner the better)</li> <li>100g Tate &amp; Lyle Soft Light Brown Sugar</li> <li>2 eggs</li> <li>75g unsalted butter, melted (or neutral oil)</li> <li>1 tsp vanilla extract</li> <li>200g plain flour</li> <li>1 tsp baking powder</li> <li>½ tsp bicarbonate of soda</li> <li>Pinch of salt</li> <li>100g Callebaut 45.4% Dark Chocolate Chunks</li> <li>50g Buchanan Walnut Pieces, roughly chopped</li> <li>Optional: extra banana or sugar for topping</li></ul> <h2>Instructions</h2> <ol><li>Preheat oven to 170°C (fan). Grease and line a loaf tin.</li> <li>In a bowl, mash bananas well. Stir in sugar, eggs, melted butter, and vanilla.</li> <li>In another bowl, mix flour, baking powder, bicarb, and salt.</li> <li>Combine wet and dry mixes until just combined—don’t overmix.</li> <li>Fold in chocolate chunks and walnuts.</li> <li>Pour into tin. Top with a halved banana or sprinkle of brown sugar if you like.</li> <li>Bake for 50–60 minutes, until golden and a skewer comes out with only a few sticky crumbs.</li> <li>Cool slightly before slicing (or don’t—we don’t judge).</li></ol> <h2>Tips</h2> <ul><li>Store wrapped at room temp for 2–3 days or freeze slices for later.</li> <li>Toast leftovers and spread with butter or cream cheese.</li> <li>Want it dairy-free? Use oil instead of butter and skip the chocolate (or use DF-friendly chunks).</li></ul> <h2>Goes Great With</h2> <ul><li>Coffee or a mug of chai</li> <li>Late breakfasts or midnight snacks</li> <li>A slice of peace on a loud day</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sticky_banana_bread_chocolate_walnuts_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_15 as _,
  metadata as m
};
