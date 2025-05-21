import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Salted Caramel Mocha",
  "slug": "salted-caramel-mocha",
  "description": "A silky, café-style mocha made with rich chocolate, a kiss of salted caramel, and topped with cream for the ultimate indulgent treat—no barista required.",
  "date": "2025-05-14T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/salted-caramel-mocha.webp",
  "prepTime": 5,
  "cookTime": 5,
  "totalTime": 10,
  "servings": 2,
  "categories": ["drink", "dessert", "coffee-shop"],
  "tags": ["chocolate", "difficulty-easy", "indulgent"],
  "relatedProducts": [
    {
      "handle": "monin-salted-caramel-syrup-glass-70cl",
      "featured": true
    },
    { "handle": "monin-chocolate-syrup-glass-70cl" },
    {
      "handle": "monin-gourmet-white-chocolate-sauce-500ml"
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
function Salted_caramel_mocha_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This is more than just a coffee.<br> It’s the kind of drink that meets you where you are curled up on the sofa, hunched over your laptop, or catching your breath in the quiet after a long day.</p> <p>Sweet and salty in perfect balance, it hugs the tongue with rich chocolate and finishes with a little cream cloud on top.<br> You don’t need a café. You don’t need a queue.<br> Just a mug, a minute, and a reason to pause.</p> <p>The best part? You can tailor every sip. Make it bold, light, extra whipped, dairy free, spiked, or spiced.<br> However you serve it, it feels like a small luxury. And sometimes, that’s exactly what you need.</p> <h2>Ingredients</h2> <ul><li>100ml Strong Brewed Coffee or 2 Shots Espresso</li> <li>2 Tablespoons Salted Caramel Syrup</li> <li>1 Tablespoon Chocolate Syrup or White Chocolate Sauce</li> <li>250ml Milk</li> <li>Whipped Cream (Optional)</li> <li>Flaky Sea Salt (Optional)</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Brew the coffee</strong><br> Make your espresso or strong brewed coffee and pour it into a small saucepan or heatproof jug while hot.</p></li> <li><p><strong>Add the syrups</strong><br> Stir in the salted caramel and chocolate syrup. Let them melt into the coffee, turning it smooth and fragrant.</p></li> <li><p><strong>Warm the milk</strong><br> Heat the milk in a small pan or using a milk frother until steamy but not boiling. If you like foam, whisk or froth to your heart’s content.</p></li> <li><p><strong>Bring it together</strong><br> Pour the flavoured coffee into your favourite mug. Top with the hot milk and stir gently to combine.</p></li> <li><p><strong>Top and finish</strong><br> Spoon whipped cream over the top if using. Add a pinch of flaky sea salt for a little sparkle. Sip slow and savour.</p></li></ol> <h2>Tips</h2> <ul><li>To make it iced, let the coffee cool completely. Shake all the ingredients with ice and pour over chilled milk.</li> <li>Try swapping the syrups—use Toffee Nut, Cinnamon, or Pumpkin Spice for seasonal spins.</li> <li>Add a splash of Irish cream liqueur or bourbon for a grown-up version worth staying in for.</li></ul> <h2>Goes Great With</h2> <ul><li>A soft blanket and a storm outside</li> <li>Chocolate cookies or shortbread on the side</li> <li>A slow morning that doesn’t need to start just yet</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_36 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Salted_caramel_mocha_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_36 as _,
  metadata as m
};
