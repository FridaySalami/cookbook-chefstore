import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Baked Camembert with Bay Tree Cheeseboard Chutney",
  "slug": "baked-camembert-cheeseboard-chutney",
  "description": "Soft, gooey Camembert baked until molten and spoonable—topped with Bay Tree Cheeseboard Chutney and served with crusty bread for sharing.",
  "date": "2025-05-12T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/baked-camembert-cheeseboard-chutney.webp",
  "prepTime": 5,
  "cookTime": 15,
  "totalTime": 20,
  "servings": 4,
  "categories": ["starter", "snack", "sharing"],
  "tags": [
    "bake",
    "british-twist",
    "comfort-food",
    "crowd-pleaser",
    "difficulty-easy",
    "vegetarian-option"
  ],
  "relatedProducts": [
    { "handle": "bay-tree-cheeseboard-chutney-1-2kg" }
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
function Baked_camembert_cheeseboard_chutney_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>It’s soft. It’s spoonable. It’s got tang, warmth, and enough gooey charm to turn any table into a gathering.<br> The chutney lifts the richness, the thyme adds a whisper of woodland, and the bread? That’s your shovel to scoop it all up.<br> One bake and you’ll be hooked.</p> <h2>Ingredients</h2> <ul><li>1 whole Camembert</li> <li>2–3 tbsp Bay Tree Cheeseboard Chutney</li> <li>A few thyme sprigs (optional)</li> <li>Crusty bread, crackers, or toasted baguette, to serve</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Preheat your oven to 180°C (fan).</strong><br> This allows the cheese to melt slowly and evenly.</p></li> <li><p><strong>Unwrap the Camembert and place it in the base of its wooden box.</strong><br> Discard any plastic wrapping. If there’s no box, wrap the cheese in baking paper and foil to contain the melt.</p></li> <li><p><strong>Score the top of the rind with a sharp knife in a criss cross pattern.</strong><br> This helps the heat reach the creamy centre and makes it easier to spoon once baked.</p></li> <li><p><strong>Set the box on a baking tray and bake for 15–20 minutes.</strong><br> It’s ready when the middle feels soft and molten to the touch. If it starts to bulge or leak, you’re right on time.</p></li> <li><p><strong>Carefully remove from oven and spoon the chutney over the top.</strong><br> Let the heat warm it through it’ll mingle with the cheese like old friends.</p></li> <li><p><strong>Scatter with thyme if using and serve immediately.</strong><br> Get the bread in there while it’s hot and drippy.</p></li></ol> <h2>Tips</h2> <ul><li><strong>Tuck in garlic slivers</strong> before baking for a mellow, roasted depth.</li> <li><strong>Drizzle with honey</strong> before the oven for that sweet-meets-savoury hit.</li> <li><strong>Switch up the chutney</strong> Bay Tree Spicy Onion Marmalade brings a sharper contrast.</li> <li><strong>Don’t overbake.</strong> If it’s bubbling like lava and looks greasy, it’s gone too far.</li></ul> <h2>Goes Great With</h2> <ul><li>A <strong>chilled white wine</strong> (Sauvignon Blanc or Chenin Blanc) or a <strong>dry cider</strong></li> <li><strong>Pickles, charcuterie</strong>, or even <strong>roasted grapes</strong> for a pop of sweetness</li> <li>A <strong>fireside evening</strong>, or as the <strong>centrepiece of a Sunday spread</strong></li></ul> <hr> <blockquote><p><strong>Gather round, tear the bread, and let it drip.</strong><br> Good food don’t always need cutlery just timing, company, and the right kind of mess.</p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Baked_camembert_cheeseboard_chutney_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_0 as _,
  metadata as m
};
