import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Dark Chocolate Pots with Orange Blossom and Sea Salt",
  "slug": "dark-chocolate-orange-blossom-sea-salt",
  "description": "Silky dark chocolate pots infused with floral orange blossom water and finished with a pinch of flaked sea salt. A no-bake dessert with big impact.",
  "date": "2025-05-14T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/dark-chocolate-orange-blossom-sea-salt.webp",
  "prepTime": 10,
  "cookTime": 5,
  "totalTime": 15,
  "servings": 4,
  "categories": ["dessert", "no-bake", "dinner-party"],
  "tags": [
    "chocolate",
    "indulgent",
    "difficulty-easy",
    "vegetarian"
  ],
  "relatedProducts": [
    {
      "handle": "nielsen-massey-orange-blossom-water-60ml",
      "featured": true
    },
    { "handle": "maldon-sea-salt", "featured": true },
    { "handle": "callebaut-extra-bitter-callets-5kg" }
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
function Dark_chocolate_orange_blossom_sea_salt_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>Rich, velvety, and just a little mysterious.<br> These pots are small but deep, like conversations after midnight.<br> The dark chocolate is smooth and confident. The orange blossom is floral and fleeting. And the sea salt? That’s the detail you didn’t know you needed.<br> It’s a dessert that doesn’t shout. It whispers. And it lingers.</p> <h2>Ingredients</h2> <ul><li>150g Dark Chocolate (70 Percent), Chopped</li> <li>250ml Double Cream</li> <li>1 Tablespoon Nielsen-Massey Orange Blossom Water</li> <li>1 Tablespoon Sugar (Optional, To Taste)</li> <li>Maldon Sea Salt Flakes, To Finish</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Heat the cream</strong><br> Pour the cream into a small saucepan and place over low heat. Warm gently until it begins to steam around the edges but do not let it boil.</p></li> <li><p><strong>Add the chocolate</strong><br> Remove the pan from heat and add the chopped chocolate. Let it sit for a full minute to begin melting in the warmth.</p></li> <li><p><strong>Stir slowly</strong><br> Using a spoon or spatula, stir the mixture until smooth and glossy. Add the orange blossom water and stir again. Taste and add sugar if you want a slightly softer finish.</p></li> <li><p><strong>Divide and chill</strong><br> Pour the chocolate mixture into ramekins, espresso cups, or small glasses. Let them cool slightly at room temperature, then refrigerate for at least 2 hours until set with a gentle wobble.</p></li> <li><p><strong>Finish and serve</strong><br> Just before serving, sprinkle each pot with a few flakes of Maldon sea salt. Keep it delicate. A little goes a long way.</p></li></ol> <h2>Tips</h2> <ul><li>These are rich, so small portions really do go the distance</li> <li>For added depth, stir in a splash of coffee liqueur or a drop of almond extract</li> <li>Garnish with candied orange peel, crushed pistachios, or dark chocolate shards</li> <li>Serve with a crisp biscuit or a spoonful of crème fraîche to cut through the richness</li></ul> <h2>Goes Great With</h2> <ul><li>A glass of tawny port, sweet sherry, or strong espresso</li> <li>A short silence between friends who don’t need to fill the air</li> <li>The feeling of something simple done beautifully</li></ul> <hr> <blockquote><p><strong>Dark, floral, and just a little bit daring — these pots don’t need attention. They earn it.</strong></p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dark_chocolate_orange_blossom_sea_salt_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_13 as _,
  metadata as m
};
