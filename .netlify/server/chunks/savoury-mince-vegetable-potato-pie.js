import { D as sanitize_props, E as spread_props } from "./index2.js";
import { R as RecipeLayout } from "./RecipeLayout.js";
const metadata = {
  "title": "Savoury Mince & Vegetable Potato-Topped Pie",
  "slug": "savoury-mince-vegetable-potato-pie",
  "description": "A gently spiced mince and vegetable filling tucked beneath buttery mashed potatoes and baked until golden. Simple, nourishing, and made for quiet evenings around the table.",
  "date": "2025-05-20T00:00:00.000Z",
  "featured": false,
  "image": "/images/recipes/category-name/recipe-name/savoury-mince-vegetable-potato-pie.webp",
  "prepTime": 25,
  "cookTime": 35,
  "totalTime": 60,
  "servings": 4,
  "categories": ["dinner", "bake", "comfort-food"],
  "tags": ["family-friendly", "beef", "difficulty-easy"],
  "relatedProducts": [
    { "handle": "maldon-sea-salt", "featured": true },
    {
      "handle": "triple-lion-smoked-paprika-550gm",
      "featured": false
    },
    {
      "handle": "manfredi-barbera-unfiltered-italian-extra-virgin-oil",
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
function Savoury_mince_vegetable_potato_pie_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  RecipeLayout($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2>Why You’ll Love This</h2> <p>This is the kind of dish that holds the evening together. Something familiar, but never boring. It comes out of the oven golden and bubbling, steam lifting in little clouds, carrying the smell of something steady and kind.</p> <p>You’ve got a savoury base of mince and soft vegetables cooked down into a rich sauce. Carrots bring sweetness. Courgette disappears gently into the background. A few peas scatter like dots of colour and comfort. And then, on top, a layer of smooth, buttery mash that crisps lightly where the heat kisses it.</p> <p>There’s no trick to it. Just good ingredients, a bit of quiet stirring, and a bake that knows how to feed people without needing to impress. It’s the kind of thing you make once and keep coming back to, especially when the world outside feels a little much.</p> <h2>Ingredients</h2> <ul><li>500g Beef mince</li> <li>1 Onion</li> <li>2 Garlic cloves</li> <li>2 Carrots</li> <li>1 Courgette</li> <li>100g Frozen peas</li> <li>1 Tablespoon Tomato purée</li> <li>400ml Beef stock</li> <li>1 Teaspoon Maldon Sea Salt</li> <li>Black pepper</li> <li>1 Teaspoon Worcestershire sauce</li> <li>½ Teaspoon Smoked paprika</li> <li>1 Tablespoon Olive oil</li> <li>750g Potatoes</li> <li>30g Butter</li> <li>50ml Milk</li></ul> <h2>Instructions</h2> <ol><li><p><strong>Boil the potatoes.</strong><br> Peel and chop the potatoes into even pieces. Place in a pot of cold salted water. Bring to a boil, then simmer gently for 15 to 18 minutes until soft. Drain well and mash with the butter and milk. Season with salt and pepper. Set aside.</p></li> <li><p><strong>Prepare the vegetables.</strong><br> Grate the carrots and courgette. Finely dice the onion and garlic. Set everything near the hob so it’s ready to go when the pan is hot.</p></li> <li><p><strong>Brown the mince.</strong><br> In a large pan, heat the olive oil over medium heat. Add the onion and cook for 5 minutes until softened. Stir in the garlic and cook for 1 minute more. Add the beef mince and cook until browned, breaking it up as it cooks.</p></li> <li><p><strong>Build the base.</strong><br> Stir in the tomato purée, grated vegetables, smoked paprika, salt, and a few grinds of black pepper. Cook for a few minutes until the vegetables begin to soften and meld with the mince.</p></li> <li><p><strong>Simmer the sauce.</strong><br> Pour in the beef stock and Worcestershire sauce. Bring to a simmer and cook uncovered for 10 to 15 minutes, until the mixture thickens slightly and everything tastes like it belongs together. Stir in the peas right at the end.</p></li> <li><p><strong>Assemble the pie.</strong><br> Spoon the mince mixture into a baking dish. Spread the mashed potato over the top, smoothing to the edges. Use a fork to gently rough up the surface — this helps the top brown beautifully in the oven.</p></li> <li><p><strong>Bake until golden.</strong><br> Place in a preheated oven at 200°C (fan 180°C) and bake for 25 minutes until golden and bubbling at the edges.</p></li> <li><p><strong>Let it rest.</strong><br> Take it out of the oven and give it 5 minutes before serving. The layers will settle slightly and the flavours will hold together better on the plate.</p></li></ol> <h2>Tips</h2> <ul><li>Add a splash of balsamic vinegar or a pinch of sugar to the sauce if you like a deeper sweetness</li> <li>Swap the beef mince for turkey, lamb, or lentils to suit what you’ve got</li> <li>Leftovers reheat well and can be frozen in portions for a rainy day</li></ul> <h2>Goes Great With</h2> <ul><li>Steamed green beans or buttered peas</li> <li>A sharp salad with mustard dressing</li> <li>Gravy or brown sauce, if that’s how your house likes it</li></ul> <hr> <blockquote><p>A pie that doesn’t ask for much. Just a quiet oven, a steady spoon, and a table that feels like home.</p></blockquote>`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_2_53 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Savoury_mince_vegetable_potato_pie_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_2_53 as _,
  metadata as m
};
