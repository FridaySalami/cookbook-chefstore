import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Homemade Pizza Dough & Tomato Sauce Base",
  "slug": "homemade-pizza-dough-tomato-sauce",
  "description": "Soft, chewy, golden-edged pizza dough with a rich tomato sauce base—this is your canvas for pizza night perfection.",
  "date": "2025-05-14T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/homemade-pizza-dough-tomato-sauce.webp",
  "prepTime": 20,
  "cookTime": 20,
  "totalTime": 40,
  "servings": "2 large pizzas",
  "categories": ["main", "family", "italian"],
  "tags": ["vegetarian", "difficulty-medium"],
  "relatedProducts": [
    {
      "handle": "colavita-100-italian-extra-virgin-olive-oil-750ml",
      "featured": true
    },
    { "handle": "triple-lion-dried-oregano-150gm" }
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
function Homemade_pizza_dough_tomato_sauce_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>Pizza dough from scratch isn’t just food. It’s a rhythm.<br> The way your hands work the dough like they remember something older than you.<br> The little bubble in the crust that tells you the yeast is alive and well.</p> <p>It’s Friday night music in the kitchen. It’s joy under your fingernails.<br> The sauce is bright and honest. It doesn’t need fancy words—just time, and a little heat to wake it up.<br> Let this be your base for whatever toppings your week has earned.</p> <h2>Ingredients</h2> <h3>Dough</h3> <ul><li>500g Strong White Bread Flour</li> <li>7g Dried Yeast</li> <li>1 Tsp Sugar</li> <li>1.5 Tsp Salt</li> <li>2 Tbsp Olive Oil</li> <li>325ml Warm Water</li></ul> <h3>Tomato Sauce</h3> <ul><li>1 Tbsp Olive Oil</li> <li>2 Garlic Cloves</li> <li>400g Chopped Tomatoes (1 tin)</li> <li>1 Tsp Dried Oregano</li> <li>1 Tsp Sugar</li> <li>Salt</li> <li>Black Pepper</li></ul> <h2>Instructions</h2> <h3>Make the Dough</h3> <ol><li><p><strong>Wake the yeast</strong><br> Stir the warm water, sugar, and dried yeast in a jug. Let it sit for 5 to 10 minutes until it foams on top like a lazy cappuccino. That’s the yeast stretching its legs.</p></li> <li><p><strong>Bring it together</strong><br> In a large bowl, combine the flour and salt. Pour in the yeast mixture and olive oil. Stir with a fork or your hands until it turns from shaggy to sticky and stubborn.</p></li> <li><p><strong>Knead with care</strong><br> Tip the dough onto a floured surface. Knead for 8 to 10 minutes. You’re not fighting it—more like guiding it. It should go from rough to smooth, stretchy and just a little springy when pressed.</p></li> <li><p><strong>Let it rest</strong><br> Tuck the dough into an oiled bowl. Cover it with a damp tea towel or cling film. Leave it in a warm spot for about an hour, or until it’s doubled in size. It should feel pillowy, like it’s holding a secret.</p></li></ol> <h3>Make the Sauce</h3> <ol start="5"><li><p><strong>Start soft</strong><br> Heat the olive oil in a small pan over medium heat. Add the garlic and cook for a minute or two, just until it smells sweet. Don’t let it brown—it should whisper, not shout.</p></li> <li><p><strong>Simmer slow</strong><br> Pour in the chopped tomatoes, oregano, sugar, salt, and pepper. Let it bubble gently for 15 to 20 minutes until the sauce thickens and deepens. Stir now and then. You’ll know it’s ready when it clings to the spoon like it means it.</p></li> <li><p><strong>Smooth if you like</strong><br> Want it velvety? Blend it. Want it rustic? Leave it be.</p></li></ol> <h3>Shape and Bake</h3> <ol start="8"><li><p><strong>Roll it out</strong><br> Once the dough has risen, knock it back with your knuckles. Divide it into two. Roll each out on a lightly floured surface into whatever shape fits your tray—circle, rectangle, or some wild map of nowhere.</p></li> <li><p><strong>Sauce and top</strong><br> Heat your oven to 240°C fan or as high as it’ll go. Place the dough on floured trays or stones. Spread on your sauce—just enough for flavour, not flooding. Then add toppings if you’re using any.</p></li> <li><p><strong>Bake until it sings</strong><br> Slide into the oven and bake for 10 to 12 minutes. The crust should puff and crisp at the edges. The sauce will sizzle and darken just a touch. If there’s cheese, it should be molten and golden.</p></li></ol> <h2>Tips</h2> <ul><li>Let the dough rise overnight in the fridge for deeper flavour. Cold fermentation works magic while you sleep.</li> <li>Freeze extra dough or sauce for another night when time’s not on your side.</li> <li>No yeast? Use 1 Tsp of baking powder in the flour and skip the rising. It’ll be different—but still dinner.</li> <li>Finish with a drizzle of garlic oil, truffle oil, or chilli oil once it’s out of the oven. That final whisper of flavour makes all the difference.</li></ul> <h2>Goes Great With</h2> <ul><li>A green salad with balsamic and toasted seeds</li> <li>Garlic bread to mop the crusts</li> <li>A cold drink and a good mood</li></ul>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_38 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Homemade_pizza_dough_tomato_sauce_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_38 as _,
  metadata as m
};
