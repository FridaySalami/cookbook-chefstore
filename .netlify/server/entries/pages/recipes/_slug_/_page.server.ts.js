import { _ as __vite_glob_2_0 } from "../../../../chunks/buttermilk-chicken-tenders.js";
import { _ as __vite_glob_2_1 } from "../../../../chunks/coconut-milk-rice-pudding.js";
import { _ as __vite_glob_2_2 } from "../../../../chunks/creamy-chicken-korma.js";
import { _ as __vite_glob_2_3 } from "../../../../chunks/crispy-panko-chicken-bites.js";
import { _ as __vite_glob_2_4 } from "../../../../chunks/crunchy-asian-slaw.js";
import { _ as __vite_glob_2_5 } from "../../../../chunks/fluffy-buttermilk-pancakes.js";
import { _ as __vite_glob_2_6 } from "../../../../chunks/kimchi-fried-rice.js";
import { _ as __vite_glob_2_7 } from "../../../../chunks/miso-glazed-roasted-vegetables.js";
import { _ as __vite_glob_2_8 } from "../../../../chunks/one-pan-harissa-chickpeas-eggs.js";
import { _ as __vite_glob_2_9 } from "../../../../chunks/poppadom-snack-platter.js";
import { _ as __vite_glob_2_10 } from "../../../../chunks/salted-caramel-chocolate-tart.js";
import { _ as __vite_glob_2_11 } from "../../../../chunks/silky-milk-chocolate-mousse.js";
import { _ as __vite_glob_2_12 } from "../../../../chunks/sticky-soy-braised-pork-ribs.js";
import { _ as __vite_glob_2_13 } from "../../../../chunks/sticky-soy-garlic-noodles.js";
import { _ as __vite_glob_2_14 } from "../../../../chunks/thai-green-curry.js";
import { _ as __variableDynamicImportRuntimeHelper } from "../../../../chunks/dynamic-import-helper.js";
import { e as error } from "../../../../chunks/index.js";
const load = async ({ params }) => {
  const { slug } = params;
  try {
    const recipeModule = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../content/recipes/buttermilk-chicken-tenders.md": () => import("../../../../chunks/buttermilk-chicken-tenders.js").then((n) => n._), "../../../content/recipes/coconut-milk-rice-pudding.md": () => import("../../../../chunks/coconut-milk-rice-pudding.js").then((n) => n._), "../../../content/recipes/creamy-chicken-korma.md": () => import("../../../../chunks/creamy-chicken-korma.js").then((n) => n._), "../../../content/recipes/crispy-panko-chicken-bites.md": () => import("../../../../chunks/crispy-panko-chicken-bites.js").then((n) => n._), "../../../content/recipes/crunchy-asian-slaw.md": () => import("../../../../chunks/crunchy-asian-slaw.js").then((n) => n._), "../../../content/recipes/fluffy-buttermilk-pancakes.md": () => import("../../../../chunks/fluffy-buttermilk-pancakes.js").then((n) => n._), "../../../content/recipes/kimchi-fried-rice.md": () => import("../../../../chunks/kimchi-fried-rice.js").then((n) => n._), "../../../content/recipes/miso-glazed-roasted-vegetables.md": () => import("../../../../chunks/miso-glazed-roasted-vegetables.js").then((n) => n._), "../../../content/recipes/one-pan-harissa-chickpeas-eggs.md": () => import("../../../../chunks/one-pan-harissa-chickpeas-eggs.js").then((n) => n._), "../../../content/recipes/poppadom-snack-platter.md": () => import("../../../../chunks/poppadom-snack-platter.js").then((n) => n._), "../../../content/recipes/salted-caramel-chocolate-tart.md": () => import("../../../../chunks/salted-caramel-chocolate-tart.js").then((n) => n._), "../../../content/recipes/silky-milk-chocolate-mousse.md": () => import("../../../../chunks/silky-milk-chocolate-mousse.js").then((n) => n._), "../../../content/recipes/sticky-soy-braised-pork-ribs.md": () => import("../../../../chunks/sticky-soy-braised-pork-ribs.js").then((n) => n._), "../../../content/recipes/sticky-soy-garlic-noodles.md": () => import("../../../../chunks/sticky-soy-garlic-noodles.js").then((n) => n._), "../../../content/recipes/thai-green-curry.md": () => import("../../../../chunks/thai-green-curry.js").then((n) => n._) }), `../../../content/recipes/${slug}.md`, 6);
    const { metadata } = recipeModule;
    const rawContent = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../content/recipes/buttermilk-chicken-tenders.md": () => import("../../../../chunks/buttermilk-chicken-tenders2.js"), "../../../content/recipes/coconut-milk-rice-pudding.md": () => import("../../../../chunks/coconut-milk-rice-pudding2.js"), "../../../content/recipes/creamy-chicken-korma.md": () => import("../../../../chunks/creamy-chicken-korma2.js"), "../../../content/recipes/crispy-panko-chicken-bites.md": () => import("../../../../chunks/crispy-panko-chicken-bites2.js"), "../../../content/recipes/crunchy-asian-slaw.md": () => import("../../../../chunks/crunchy-asian-slaw2.js"), "../../../content/recipes/fluffy-buttermilk-pancakes.md": () => import("../../../../chunks/fluffy-buttermilk-pancakes2.js"), "../../../content/recipes/kimchi-fried-rice.md": () => import("../../../../chunks/kimchi-fried-rice2.js"), "../../../content/recipes/miso-glazed-roasted-vegetables.md": () => import("../../../../chunks/miso-glazed-roasted-vegetables2.js"), "../../../content/recipes/one-pan-harissa-chickpeas-eggs.md": () => import("../../../../chunks/one-pan-harissa-chickpeas-eggs2.js"), "../../../content/recipes/poppadom-snack-platter.md": () => import("../../../../chunks/poppadom-snack-platter2.js"), "../../../content/recipes/salted-caramel-chocolate-tart.md": () => import("../../../../chunks/salted-caramel-chocolate-tart2.js"), "../../../content/recipes/silky-milk-chocolate-mousse.md": () => import("../../../../chunks/silky-milk-chocolate-mousse2.js"), "../../../content/recipes/sticky-soy-braised-pork-ribs.md": () => import("../../../../chunks/sticky-soy-braised-pork-ribs2.js"), "../../../content/recipes/sticky-soy-garlic-noodles.md": () => import("../../../../chunks/sticky-soy-garlic-noodles2.js"), "../../../content/recipes/thai-green-curry.md": () => import("../../../../chunks/thai-green-curry2.js") }), `../../../content/recipes/${slug}.md`, 6);
    const content = rawContent.default;
    const productLinks = extractProductLinks(content);
    const relatedProducts = metadata.relatedProducts || [];
    const relatedRecipes = await findRelatedRecipes(metadata, slug);
    const ingredients = parseIngredients(content);
    const instructions = parseInstructions(content);
    return {
      metadata,
      productLinks,
      relatedProducts,
      relatedRecipes,
      ingredients,
      instructions
    };
  } catch (err) {
    console.error(`Error loading recipe ${slug}:`, err);
    throw error(404, `Recipe "${slug}" not found`);
  }
};
function extractProductLinks(content) {
  const productLinks = [];
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    const [, text, url] = match;
    if (url.includes("thechefstoreuk.com/products/")) {
      const urlParts = url.split("/");
      const productId = urlParts[urlParts.length - 1];
      productLinks.push({
        id: productId,
        url,
        productName: text
      });
    }
  }
  return productLinks;
}
async function findRelatedRecipes(metadata, currentSlug, limit = 4) {
  const allRecipes = /* @__PURE__ */ Object.assign({ "../../../content/recipes/buttermilk-chicken-tenders.md": __vite_glob_2_0, "../../../content/recipes/coconut-milk-rice-pudding.md": __vite_glob_2_1, "../../../content/recipes/creamy-chicken-korma.md": __vite_glob_2_2, "../../../content/recipes/crispy-panko-chicken-bites.md": __vite_glob_2_3, "../../../content/recipes/crunchy-asian-slaw.md": __vite_glob_2_4, "../../../content/recipes/fluffy-buttermilk-pancakes.md": __vite_glob_2_5, "../../../content/recipes/kimchi-fried-rice.md": __vite_glob_2_6, "../../../content/recipes/miso-glazed-roasted-vegetables.md": __vite_glob_2_7, "../../../content/recipes/one-pan-harissa-chickpeas-eggs.md": __vite_glob_2_8, "../../../content/recipes/poppadom-snack-platter.md": __vite_glob_2_9, "../../../content/recipes/salted-caramel-chocolate-tart.md": __vite_glob_2_10, "../../../content/recipes/silky-milk-chocolate-mousse.md": __vite_glob_2_11, "../../../content/recipes/sticky-soy-braised-pork-ribs.md": __vite_glob_2_12, "../../../content/recipes/sticky-soy-garlic-noodles.md": __vite_glob_2_13, "../../../content/recipes/thai-green-curry.md": __vite_glob_2_14 });
  const recipes = Object.entries(allRecipes).filter(([path, _]) => !path.includes(currentSlug)).map(([path, module]) => {
    const slug = path.split("/").pop()?.replace(".md", "");
    return { slug, ...module.metadata };
  }).filter((recipe) => recipe.metadata);
  const relatedRecipes = recipes.map((recipe) => {
    const commonTagsCount = countCommonItems(metadata.tags || [], recipe.tags || []);
    const commonCategoriesCount = countCommonItems(metadata.categories || [], recipe.categories || []);
    return { ...recipe, relevance: commonTagsCount + commonCategoriesCount };
  }).filter((recipe) => recipe.relevance > 0).sort((a, b) => b.relevance - a.relevance).slice(0, limit);
  if (relatedRecipes.length < limit) {
    const recentRecipes = recipes.filter((recipe) => !relatedRecipes.some((r) => r.slug === recipe.slug)).sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    }).slice(0, limit - relatedRecipes.length);
    relatedRecipes.push(...recentRecipes);
  }
  return relatedRecipes;
}
function countCommonItems(array1, array2) {
  return array1.filter((item) => array2.includes(item)).length;
}
function parseIngredients(content) {
  const ingredientsRegex = /## Ingredients\s+([\s\S]*?)(?=##|$)/;
  const match = content.match(ingredientsRegex);
  if (!match || !match[1]) return [];
  return match[1].split(/\n-\s*/).map((line) => line.trim()).filter(Boolean).filter((line) => !line.startsWith("**") && !line.startsWith("Optional"));
}
function parseInstructions(content) {
  const instructionsRegex = /## Instructions\s+([\s\S]*?)(?=##|$)/;
  const match = content.match(instructionsRegex);
  if (!match || !match[1]) return [];
  const steps = match[1].split(/\n\d+\.\s*/).map((line) => line.trim()).filter(Boolean);
  return steps.map((step) => ({
    "@type": "HowToStep",
    text: step
  }));
}
export {
  load
};
