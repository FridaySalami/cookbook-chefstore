import { _ as __vite_glob_4_19, a as __vite_glob_4_18, b as __vite_glob_4_17, c as __vite_glob_4_16, d as __vite_glob_4_15, e as __vite_glob_4_14, f as __vite_glob_4_13, g as __vite_glob_4_12, h as __vite_glob_4_11, i as __vite_glob_4_10, j as __vite_glob_4_9, k as __vite_glob_4_8, l as __vite_glob_4_7, m as __vite_glob_4_6, n as __vite_glob_4_5, o as __vite_glob_4_4, p as __vite_glob_4_3, q as __vite_glob_4_2, r as __vite_glob_4_1, s as __vite_glob_4_0 } from "../../../../chunks/thai-green-curry.metadata.js";
import { _ as __variableDynamicImportRuntimeHelper } from "../../../../chunks/dynamic-import-helper.js";
import { e as error } from "../../../../chunks/index.js";
import { d as dev } from "../../../../chunks/index4.js";
const entries = async () => {
  const modules = /* @__PURE__ */ Object.assign({
    "/src/content/recipes/buttermilk-chicken-tenders.metadata.js": __vite_glob_4_0,
    "/src/content/recipes/cheesy-leek-potato-gratin.metadata.js": __vite_glob_4_1,
    "/src/content/recipes/coconut-milk-rice-pudding.metadata.js": __vite_glob_4_2,
    "/src/content/recipes/creamy-chicken-korma.metadata.js": __vite_glob_4_3,
    "/src/content/recipes/crispy-panko-chicken-bites.metadata.js": __vite_glob_4_4,
    "/src/content/recipes/crunchy-asian-slaw.metadata.js": __vite_glob_4_5,
    "/src/content/recipes/fluffy-buttermilk-pancakes.metadata.js": __vite_glob_4_6,
    "/src/content/recipes/garlic-herb-tear-and-share-bread.metadata.js": __vite_glob_4_7,
    "/src/content/recipes/kimchi-fried-rice.metadata.js": __vite_glob_4_8,
    "/src/content/recipes/miso-glazed-roasted-vegetables.metadata.js": __vite_glob_4_9,
    "/src/content/recipes/one-pan-harissa-chickpeas-eggs.metadata.js": __vite_glob_4_10,
    "/src/content/recipes/poppadom-snack-platter.metadata.js": __vite_glob_4_11,
    "/src/content/recipes/salted-caramel-chocolate-tart.metadata.js": __vite_glob_4_12,
    "/src/content/recipes/silky-milk-chocolate-mousse.metadata.js": __vite_glob_4_13,
    "/src/content/recipes/spiced-lamb-mint-sausage-rolls.metadata.js": __vite_glob_4_14,
    "/src/content/recipes/sticky-banana-bread-chocolate-walnuts.metadata.js": __vite_glob_4_15,
    "/src/content/recipes/sticky-soy-braised-pork-ribs.metadata.js": __vite_glob_4_16,
    "/src/content/recipes/sticky-soy-garlic-noodles.metadata.js": __vite_glob_4_17,
    "/src/content/recipes/tagliatelle-bolognese-traditional.metadata.js": __vite_glob_4_18,
    "/src/content/recipes/thai-green-curry.metadata.js": __vite_glob_4_19
  });
  const slugs = Object.entries(modules).filter(([, module]) => module?.metadata).map(([path]) => {
    const slug = path.split("/").pop()?.replace(".metadata.js", "");
    return slug;
  }).filter((slug) => slug !== void 0).map((slug) => ({ slug }));
  return slugs;
};
const prerender = true;
const load = async ({ params, parent }) => {
  const parentData = await parent();
  const { slug } = params;
  try {
    const metadataImports = /* @__PURE__ */ Object.assign({
      "/src/content/recipes/buttermilk-chicken-tenders.metadata.js": __vite_glob_4_0,
      "/src/content/recipes/cheesy-leek-potato-gratin.metadata.js": __vite_glob_4_1,
      "/src/content/recipes/coconut-milk-rice-pudding.metadata.js": __vite_glob_4_2,
      "/src/content/recipes/creamy-chicken-korma.metadata.js": __vite_glob_4_3,
      "/src/content/recipes/crispy-panko-chicken-bites.metadata.js": __vite_glob_4_4,
      "/src/content/recipes/crunchy-asian-slaw.metadata.js": __vite_glob_4_5,
      "/src/content/recipes/fluffy-buttermilk-pancakes.metadata.js": __vite_glob_4_6,
      "/src/content/recipes/garlic-herb-tear-and-share-bread.metadata.js": __vite_glob_4_7,
      "/src/content/recipes/kimchi-fried-rice.metadata.js": __vite_glob_4_8,
      "/src/content/recipes/miso-glazed-roasted-vegetables.metadata.js": __vite_glob_4_9,
      "/src/content/recipes/one-pan-harissa-chickpeas-eggs.metadata.js": __vite_glob_4_10,
      "/src/content/recipes/poppadom-snack-platter.metadata.js": __vite_glob_4_11,
      "/src/content/recipes/salted-caramel-chocolate-tart.metadata.js": __vite_glob_4_12,
      "/src/content/recipes/silky-milk-chocolate-mousse.metadata.js": __vite_glob_4_13,
      "/src/content/recipes/spiced-lamb-mint-sausage-rolls.metadata.js": __vite_glob_4_14,
      "/src/content/recipes/sticky-banana-bread-chocolate-walnuts.metadata.js": __vite_glob_4_15,
      "/src/content/recipes/sticky-soy-braised-pork-ribs.metadata.js": __vite_glob_4_16,
      "/src/content/recipes/sticky-soy-garlic-noodles.metadata.js": __vite_glob_4_17,
      "/src/content/recipes/tagliatelle-bolognese-traditional.metadata.js": __vite_glob_4_18,
      "/src/content/recipes/thai-green-curry.metadata.js": __vite_glob_4_19
    });
    const metadataPath = `/src/content/recipes/${slug}.metadata.js`;
    const metadataModule = metadataImports[metadataPath];
    if (!metadataModule || !metadataModule.metadata) {
      throw error(404, `Recipe "${slug}" not found`);
    }
    const moduleImporter = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../content/recipes/buttermilk-chicken-tenders.md": () => import("../../../../chunks/buttermilk-chicken-tenders.js").then((n) => n._), "../../../content/recipes/cheesy-leek-potato-gratin.md": () => import("../../../../chunks/cheesy-leek-potato-gratin.js").then((n) => n._), "../../../content/recipes/coconut-milk-rice-pudding.md": () => import("../../../../chunks/coconut-milk-rice-pudding.js").then((n) => n._), "../../../content/recipes/creamy-chicken-korma.md": () => import("../../../../chunks/creamy-chicken-korma.js").then((n) => n._), "../../../content/recipes/crispy-panko-chicken-bites.md": () => import("../../../../chunks/crispy-panko-chicken-bites.js").then((n) => n._), "../../../content/recipes/crunchy-asian-slaw.md": () => import("../../../../chunks/crunchy-asian-slaw.js").then((n) => n._), "../../../content/recipes/fluffy-buttermilk-pancakes.md": () => import("../../../../chunks/fluffy-buttermilk-pancakes.js").then((n) => n._), "../../../content/recipes/garlic-herb-tear-and-share-bread.md": () => import("../../../../chunks/garlic-herb-tear-and-share-bread.js").then((n) => n._), "../../../content/recipes/kimchi-fried-rice.md": () => import("../../../../chunks/kimchi-fried-rice.js").then((n) => n._), "../../../content/recipes/miso-glazed-roasted-vegetables.md": () => import("../../../../chunks/miso-glazed-roasted-vegetables.js").then((n) => n._), "../../../content/recipes/one-pan-harissa-chickpeas-eggs.md": () => import("../../../../chunks/one-pan-harissa-chickpeas-eggs.js").then((n) => n._), "../../../content/recipes/poppadom-snack-platter.md": () => import("../../../../chunks/poppadom-snack-platter.js").then((n) => n._), "../../../content/recipes/salted-caramel-chocolate-tart.md": () => import("../../../../chunks/salted-caramel-chocolate-tart.js").then((n) => n._), "../../../content/recipes/silky-milk-chocolate-mousse.md": () => import("../../../../chunks/silky-milk-chocolate-mousse.js").then((n) => n._), "../../../content/recipes/spiced-lamb-mint-sausage-rolls.md": () => import("../../../../chunks/spiced-lamb-mint-sausage-rolls.js").then((n) => n._), "../../../content/recipes/sticky-banana-bread-chocolate-walnuts.md": () => import("../../../../chunks/sticky-banana-bread-chocolate-walnuts.js").then((n) => n._), "../../../content/recipes/sticky-soy-braised-pork-ribs.md": () => import("../../../../chunks/sticky-soy-braised-pork-ribs.js").then((n) => n._), "../../../content/recipes/sticky-soy-garlic-noodles.md": () => import("../../../../chunks/sticky-soy-garlic-noodles.js").then((n) => n._), "../../../content/recipes/tagliatelle-bolognese-traditional.md": () => import("../../../../chunks/tagliatelle-bolognese-traditional.js").then((n) => n._), "../../../content/recipes/thai-green-curry.md": () => import("../../../../chunks/thai-green-curry.js").then((n) => n._) }), `../../../content/recipes/${slug}.md`, 6);
    const rawContent = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../content/recipes/buttermilk-chicken-tenders.md": () => import("../../../../chunks/buttermilk-chicken-tenders2.js"), "../../../content/recipes/cheesy-leek-potato-gratin.md": () => import("../../../../chunks/cheesy-leek-potato-gratin2.js"), "../../../content/recipes/coconut-milk-rice-pudding.md": () => import("../../../../chunks/coconut-milk-rice-pudding2.js"), "../../../content/recipes/creamy-chicken-korma.md": () => import("../../../../chunks/creamy-chicken-korma2.js"), "../../../content/recipes/crispy-panko-chicken-bites.md": () => import("../../../../chunks/crispy-panko-chicken-bites2.js"), "../../../content/recipes/crunchy-asian-slaw.md": () => import("../../../../chunks/crunchy-asian-slaw2.js"), "../../../content/recipes/fluffy-buttermilk-pancakes.md": () => import("../../../../chunks/fluffy-buttermilk-pancakes2.js"), "../../../content/recipes/garlic-herb-tear-and-share-bread.md": () => import("../../../../chunks/garlic-herb-tear-and-share-bread2.js"), "../../../content/recipes/kimchi-fried-rice.md": () => import("../../../../chunks/kimchi-fried-rice2.js"), "../../../content/recipes/miso-glazed-roasted-vegetables.md": () => import("../../../../chunks/miso-glazed-roasted-vegetables2.js"), "../../../content/recipes/one-pan-harissa-chickpeas-eggs.md": () => import("../../../../chunks/one-pan-harissa-chickpeas-eggs2.js"), "../../../content/recipes/poppadom-snack-platter.md": () => import("../../../../chunks/poppadom-snack-platter2.js"), "../../../content/recipes/salted-caramel-chocolate-tart.md": () => import("../../../../chunks/salted-caramel-chocolate-tart2.js"), "../../../content/recipes/silky-milk-chocolate-mousse.md": () => import("../../../../chunks/silky-milk-chocolate-mousse2.js"), "../../../content/recipes/spiced-lamb-mint-sausage-rolls.md": () => import("../../../../chunks/spiced-lamb-mint-sausage-rolls2.js"), "../../../content/recipes/sticky-banana-bread-chocolate-walnuts.md": () => import("../../../../chunks/sticky-banana-bread-chocolate-walnuts2.js"), "../../../content/recipes/sticky-soy-braised-pork-ribs.md": () => import("../../../../chunks/sticky-soy-braised-pork-ribs2.js"), "../../../content/recipes/sticky-soy-garlic-noodles.md": () => import("../../../../chunks/sticky-soy-garlic-noodles2.js"), "../../../content/recipes/tagliatelle-bolognese-traditional.md": () => import("../../../../chunks/tagliatelle-bolognese-traditional2.js"), "../../../content/recipes/thai-green-curry.md": () => import("../../../../chunks/thai-green-curry2.js") }), `../../../content/recipes/${slug}.md`, 6).then((m) => m.default);
    if (!rawContent) {
      throw error(404, `Recipe content not found`);
    }
    const ingredients = [];
    const instructions = [];
    let currentSection = null;
    const productLinks = [];
    const linkRegex = /\[.*?\]\((.*?)\)/g;
    const lines = rawContent.split("\n");
    for (const line of lines) {
      const trimmedLine = line.trim();
      if (trimmedLine.startsWith("## Ingredients")) {
        currentSection = "ingredients";
        continue;
      }
      if (trimmedLine.startsWith("## Instructions")) {
        currentSection = "instructions";
        continue;
      }
      if (trimmedLine.startsWith("## ")) {
        currentSection = null;
        continue;
      }
      if (currentSection === "ingredients" && trimmedLine.startsWith("- ")) {
        const ingredientText = trimmedLine.substring(2).trim().replace(/\[(.*?)\]\(.*?\)/g, "$1");
        ingredients.push(ingredientText);
        let match;
        while ((match = linkRegex.exec(trimmedLine)) !== null) {
          const url = match[1];
          const urlParts = url.split("/");
          const id = urlParts[urlParts.length - 1].split("?")[0];
          productLinks.push({ id, url });
        }
      } else if (currentSection === "instructions" && /^\d+\.\s/.test(trimmedLine)) {
        instructions.push({
          "@type": "HowToStep",
          text: trimmedLine.replace(/^\d+\.\s/, "").trim()
        });
      }
    }
    const allMetadataImports = /* @__PURE__ */ Object.assign({
      "/src/content/recipes/buttermilk-chicken-tenders.metadata.js": __vite_glob_4_0,
      "/src/content/recipes/cheesy-leek-potato-gratin.metadata.js": __vite_glob_4_1,
      "/src/content/recipes/coconut-milk-rice-pudding.metadata.js": __vite_glob_4_2,
      "/src/content/recipes/creamy-chicken-korma.metadata.js": __vite_glob_4_3,
      "/src/content/recipes/crispy-panko-chicken-bites.metadata.js": __vite_glob_4_4,
      "/src/content/recipes/crunchy-asian-slaw.metadata.js": __vite_glob_4_5,
      "/src/content/recipes/fluffy-buttermilk-pancakes.metadata.js": __vite_glob_4_6,
      "/src/content/recipes/garlic-herb-tear-and-share-bread.metadata.js": __vite_glob_4_7,
      "/src/content/recipes/kimchi-fried-rice.metadata.js": __vite_glob_4_8,
      "/src/content/recipes/miso-glazed-roasted-vegetables.metadata.js": __vite_glob_4_9,
      "/src/content/recipes/one-pan-harissa-chickpeas-eggs.metadata.js": __vite_glob_4_10,
      "/src/content/recipes/poppadom-snack-platter.metadata.js": __vite_glob_4_11,
      "/src/content/recipes/salted-caramel-chocolate-tart.metadata.js": __vite_glob_4_12,
      "/src/content/recipes/silky-milk-chocolate-mousse.metadata.js": __vite_glob_4_13,
      "/src/content/recipes/spiced-lamb-mint-sausage-rolls.metadata.js": __vite_glob_4_14,
      "/src/content/recipes/sticky-banana-bread-chocolate-walnuts.metadata.js": __vite_glob_4_15,
      "/src/content/recipes/sticky-soy-braised-pork-ribs.metadata.js": __vite_glob_4_16,
      "/src/content/recipes/sticky-soy-garlic-noodles.metadata.js": __vite_glob_4_17,
      "/src/content/recipes/tagliatelle-bolognese-traditional.metadata.js": __vite_glob_4_18,
      "/src/content/recipes/thai-green-curry.metadata.js": __vite_glob_4_19
    });
    const allRecipes = Object.entries(allMetadataImports).filter(([, module]) => module?.metadata).map(([path, module]) => {
      const filename = path.split("/").pop()?.replace(".metadata.js", "") || "";
      return {
        ...module.metadata,
        slug: module.metadata.slug || filename
      };
    }).filter((recipe) => dev ? true : !recipe.draft).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const currentTags = metadataModule.metadata.tags || [];
    const relatedRecipes = allRecipes.filter((recipe) => {
      if (recipe.slug === slug) return false;
      return currentTags.some((tag) => recipe.tags?.includes(tag));
    }).slice(0, 3);
    const relatedProducts = parentData.relatedProducts || metadataModule.metadata.relatedProducts || [];
    console.log("Page.ts relatedProducts:", JSON.stringify(relatedProducts));
    return {
      metadata: metadataModule.metadata,
      ingredients,
      instructions,
      relatedRecipes,
      productLinks,
      rawContent,
      relatedProducts
    };
  } catch (e) {
    console.error(`Error loading recipe: ${e}`);
    if (e instanceof Error) {
      throw error(500, e.message);
    }
    throw error(500, "An unknown error occurred while loading the recipe");
  }
};
export {
  entries,
  load,
  prerender
};
