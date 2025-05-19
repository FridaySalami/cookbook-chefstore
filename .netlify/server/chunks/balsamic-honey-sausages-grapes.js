import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Balsamic Honey Glazed Sausages with Roasted Grapes & Shallots",
  "slug": "balsamic-honey-sausages-grapes",
  "description": "Juicy sausages roasted in a sticky balsamic-honey glaze, nestled among jammy grapes and golden shallots. Sweet, savoury, and perfect for tearing bread and dunking into the syrupy tray juices.",
  "date": "2025-05-14T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/balsamic-honey-sausages-grapes.webp",
  "prepTime": 10,
  "cookTime": 35,
  "totalTime": 45,
  "servings": 4,
  "categories": ["dinner", "traybake", "comfort-food"],
  "tags": ["comfort-food", "pork", "difficulty-easy"],
  "relatedProducts": [
    {
      "handle": "fattoria-estense-silver-label-balsamic-modena-vin",
      "featured": true
    },
    {
      "handle": "centaur-walnut-oil-500ml-bottle",
      "featured": true
    },
    { "handle": "maldon-sea-salt", "featured": true }
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
function Balsamic_honey_sausages_grapes_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This dish is a tray of contrasts sticky, crisp, jammy, savoury.<br> Sausages turn golden and glossy, grapes collapse into sweetness, and the shallots mellow into something you can almost spread.<br> It smells like a roast dinner but eats like something you dreamed up with wine in hand.</p> <h2>Ingredients</h2> <ul><li>8 sausages</li> <li>300g red seedless grapes</li> <li>6–8 shallots</li> <li>2 tbsp Fattoria Estense Balsamic Vinegar</li> <li>1 tbsp runny honey</li> <li>2 tbsp Centaur Walnut Oil or olive oil</li> <li>1 tsp Maldon Sea Salt</li> <li>Thyme sprigs (optional)</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Heat the oven to 200°C (fan 180°C).</strong><br> While it warms, place grapes and halved shallots in a large roasting tray. Keep them spread out for better browning.</p></li> <li><p><strong>Whisk up the glaze.</strong><br> In a small bowl, combine balsamic vinegar, honey, oil, and sea salt. Stir until it looks syrupy and glossy this will coat everything with flavour.</p></li> <li><p><strong>Add sausages and coat.</strong><br> Tuck the sausages among the grapes and shallots. Pour over the glaze and gently toss everything to get a good coating. Add thyme if using.</p></li> <li><p><strong>Roast for 35–40 minutes.</strong><br> Turn sausages halfway through. You’re aiming for golden skins, blistered grapes, and shallots soft enough to yield to a spoon.</p></li> <li><p><strong>Serve in the tray, juices and all.</strong><br> Bring it to the table hot. Dunk bread into those sticky, savoury sweet juices or spoon over mash like it’s gravy with flair.</p></li></ol> <h2>Tips</h2> <ul><li>Figs make a great seasonal swap for grapes add them in the last 10 minutes to avoid mush.</li> <li>For veggie sausages, reduce cooking time by 5–10 minutes and avoid overcrowding the tray.</li> <li>A last minute drizzle of balsamic can brighten the flavours right before serving.</li></ul> <h2>Goes Great With</h2> <ul><li>Creamy polenta or mash for a soft, rich base</li> <li>A bitter leaf salad with mustard vinaigrette to cut through the sweetness</li> <li>Crusty sourdough or ciabatta something sturdy enough to swipe up the juices</li></ul> <hr> <blockquote><p><strong>Sticky edges. Jammy middles. No need for knives—just a good loaf and good company.</strong></p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Balsamic_honey_sausages_grapes_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_1 as _,
  metadata as m
};
