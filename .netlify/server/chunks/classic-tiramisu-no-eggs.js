import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Classic Tiramisu (No Eggs)",
  "slug": "classic-tiramisu-no-eggs",
  "description": "A layered dessert of coffee-soaked Savoiardi sponge fingers and mascarpone cream—rich, smooth, and egg-free for ease and safety.",
  "date": "2025-05-13T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/classic-tiramisu-no-eggs.webp",
  "prepTime": 20,
  "cookTime": 0,
  "totalTime": "20 (plus chilling)",
  "servings": "6–8",
  "categories": ["dessert", "italian"],
  "tags": [
    "indulgent",
    "crowd-pleaser",
    "difficulty-easy"
  ],
  "relatedProducts": [
    {
      "handle": "savoiardi-balocco-sponge-fingers",
      "featured": true
    },
    {
      "handle": "nielsen-massey-vanilla-extract-60ml",
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
function Classic_tiramisu_no_eggs_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>It’s everything you want from a tiramisu, but simpler.<br> No eggs, no fuss just layers of cool mascarpone cream and coffee soaked sponge, dusted in cocoa like a secret.<br> The kind of dessert that makes you pause between bites. The kind you eat slowly, even if you didn’t plan to.</p> <h2>Ingredients</h2> <ul><li>250g Mascarpone</li> <li>300ml Double Cream</li> <li>75g Icing Sugar</li> <li>1 Tsp Vanilla Extract</li> <li>250ml Strong Brewed Coffee, Cooled</li> <li>2 Tbsp Coffee Liqueur (Optional)</li> <li>200g Savoiardi Balocco Sponge Fingers</li> <li>Cocoa Powder, For Dusting</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Make the cream.</strong><br> In a large bowl, whisk together the mascarpone, double cream, icing sugar, and vanilla extract.<br> You’re aiming for soft peaks, thick and smooth enough to spread, but still gentle.</p></li> <li><p><strong>Mix the coffee soak.</strong><br> In a shallow dish, combine the cooled coffee with the liqueur if you’re using it.<br> Keep it close, you’ll need to move quickly when dipping.</p></li> <li><p><strong>Start layering.</strong><br> Dip each sponge finger into the coffee mixture just for a second—enough to darken, not to collapse.<br> Lay them snug in the base of a serving dish, breaking a few if you need to fill the gaps.</p></li> <li><p><strong>Add cream and repeat.</strong><br> Spoon over half the mascarpone cream and smooth it out. Add another layer of dipped sponge fingers. Finish with the rest of the cream, spreading gently to the edges.</p></li> <li><p><strong>Chill.</strong><br> Cover and refrigerate for at least 4 hours overnight is even better.<br> This rest allows the layers to meld and the texture to settle into silk.</p></li> <li><p><strong>Dust and serve.</strong><br> Just before serving, sift a thick blanket of cocoa powder over the top.<br> Serve chilled, with spoons and silence.</p></li></ol> <h2>Tips</h2> <ul><li>Grate dark chocolate between layers for texture and a little bitter contrast.</li> <li>Make it in individual glasses for clean plating (and easier fridge storage).</li> <li>Use decaf coffee if little ones are joining in or if it’s a late-night bite.</li></ul> <h2>Goes Great With</h2> <ul><li>A hot espresso or splash of amaretto</li> <li>A quiet night in and low lighting</li> <li>That last bite you eat slower than all the rest</li></ul> <hr> <blockquote><p><strong>A dish that’s soft without being shy. The kind you don’t rush. The kind you remember.</strong></p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Classic_tiramisu_no_eggs_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_8 as _,
  metadata as m
};
