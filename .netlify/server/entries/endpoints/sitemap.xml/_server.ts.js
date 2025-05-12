import { m as metadata$h } from "../../../chunks/buttermilk-chicken-tenders.js";
import { m as metadata$g } from "../../../chunks/coconut-milk-rice-pudding.js";
import { m as metadata$f } from "../../../chunks/creamy-chicken-korma.js";
import { m as metadata$e } from "../../../chunks/crispy-panko-chicken-bites.js";
import { m as metadata$d } from "../../../chunks/crunchy-asian-slaw.js";
import { m as metadata$c } from "../../../chunks/fluffy-buttermilk-pancakes.js";
import { m as metadata$b } from "../../../chunks/garlic-herb-tear-and-share-bread.js";
import { m as metadata$a } from "../../../chunks/kimchi-fried-rice.js";
import { m as metadata$9 } from "../../../chunks/miso-glazed-roasted-vegetables.js";
import { m as metadata$8 } from "../../../chunks/one-pan-harissa-chickpeas-eggs.js";
import { m as metadata$7 } from "../../../chunks/poppadom-snack-platter.js";
import { m as metadata$6 } from "../../../chunks/salted-caramel-chocolate-tart.js";
import { m as metadata$5 } from "../../../chunks/silky-milk-chocolate-mousse.js";
import { m as metadata$4 } from "../../../chunks/spiced-lamb-mint-sausage-rolls.js";
import { m as metadata$3 } from "../../../chunks/sticky-banana-bread-chocolate-walnuts.js";
import { m as metadata$2 } from "../../../chunks/sticky-soy-braised-pork-ribs.js";
import { m as metadata$1 } from "../../../chunks/sticky-soy-garlic-noodles.js";
import { m as metadata } from "../../../chunks/thai-green-curry.js";
const site = "chefstorecookbook.netlify.app";
const GET = async () => {
  const recipeModules = /* @__PURE__ */ Object.assign({
    "/src/content/recipes/buttermilk-chicken-tenders.md": metadata$h,
    "/src/content/recipes/coconut-milk-rice-pudding.md": metadata$g,
    "/src/content/recipes/creamy-chicken-korma.md": metadata$f,
    "/src/content/recipes/crispy-panko-chicken-bites.md": metadata$e,
    "/src/content/recipes/crunchy-asian-slaw.md": metadata$d,
    "/src/content/recipes/fluffy-buttermilk-pancakes.md": metadata$c,
    "/src/content/recipes/garlic-herb-tear-and-share-bread.md": metadata$b,
    "/src/content/recipes/kimchi-fried-rice.md": metadata$a,
    "/src/content/recipes/miso-glazed-roasted-vegetables.md": metadata$9,
    "/src/content/recipes/one-pan-harissa-chickpeas-eggs.md": metadata$8,
    "/src/content/recipes/poppadom-snack-platter.md": metadata$7,
    "/src/content/recipes/salted-caramel-chocolate-tart.md": metadata$6,
    "/src/content/recipes/silky-milk-chocolate-mousse.md": metadata$5,
    "/src/content/recipes/spiced-lamb-mint-sausage-rolls.md": metadata$4,
    "/src/content/recipes/sticky-banana-bread-chocolate-walnuts.md": metadata$3,
    "/src/content/recipes/sticky-soy-braised-pork-ribs.md": metadata$2,
    "/src/content/recipes/sticky-soy-garlic-noodles.md": metadata$1,
    "/src/content/recipes/thai-green-curry.md": metadata
  });
  const recipes = Object.entries(recipeModules).filter(([, module]) => module).map(([path, module]) => {
    const filename = path.split("/").pop()?.replace(".md", "") || "";
    return {
      ...module,
      slug: module.slug || filename,
      date: module.date
    };
  }).filter((recipe) => !!recipe.slug && !!recipe.date).filter((recipe) => !recipe.draft);
  const body = render(recipes);
  const headers = {
    "Cache-Control": "max-age=0, s-maxage=3600",
    "Content-Type": "application/xml"
  };
  return new Response(body, { headers });
};
const render = (recipes) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  <url>
    <loc>${site}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${site}/recipes</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  ${recipes.map(
  (recipe) => `
  <url>
    <loc>${site}/recipes/${recipe.slug}</loc>
    <changefreq>weekly</changefreq>
    <lastmod>${new Date(recipe.date).toISOString().split("T")[0]}</lastmod>
    <priority>0.5</priority>
  </url>
  `
).join("")}
</urlset>`;
export {
  GET
};
