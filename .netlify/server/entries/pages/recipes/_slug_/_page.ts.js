import { _ as __vite_glob_4_7, a as __vite_glob_4_6, b as __vite_glob_4_5, c as __vite_glob_4_4, d as __vite_glob_4_3, e as __vite_glob_4_2, f as __vite_glob_4_1, g as __vite_glob_4_0 } from "../../../../chunks/thai-green-curry.metadata.js";
import { _ as __variableDynamicImportRuntimeHelper } from "../../../../chunks/dynamic-import-helper.js";
import { e as error } from "../../../../chunks/index.js";
import { d as dev } from "../../../../chunks/index4.js";
const entries = async () => {
  const modules = /* @__PURE__ */ Object.assign({
    "/src/content/recipes/coconut-milk-rice-pudding.metadata.js": __vite_glob_4_0,
    "/src/content/recipes/crispy-panko-chicken-bites.metadata.js": __vite_glob_4_1,
    "/src/content/recipes/fluffy-buttermilk-pancakes.metadata.js": __vite_glob_4_2,
    "/src/content/recipes/miso-glazed-roasted-vegetables.metadata.js": __vite_glob_4_3,
    "/src/content/recipes/poppadom-snack-platter.metadata.js": __vite_glob_4_4,
    "/src/content/recipes/salted-caramel-chocolate-tart.metadata.js": __vite_glob_4_5,
    "/src/content/recipes/silky-milk-chocolate-mousse.metadata.js": __vite_glob_4_6,
    "/src/content/recipes/thai-green-curry.metadata.js": __vite_glob_4_7
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
      "/src/content/recipes/coconut-milk-rice-pudding.metadata.js": __vite_glob_4_0,
      "/src/content/recipes/crispy-panko-chicken-bites.metadata.js": __vite_glob_4_1,
      "/src/content/recipes/fluffy-buttermilk-pancakes.metadata.js": __vite_glob_4_2,
      "/src/content/recipes/miso-glazed-roasted-vegetables.metadata.js": __vite_glob_4_3,
      "/src/content/recipes/poppadom-snack-platter.metadata.js": __vite_glob_4_4,
      "/src/content/recipes/salted-caramel-chocolate-tart.metadata.js": __vite_glob_4_5,
      "/src/content/recipes/silky-milk-chocolate-mousse.metadata.js": __vite_glob_4_6,
      "/src/content/recipes/thai-green-curry.metadata.js": __vite_glob_4_7
    });
    const metadataPath = `/src/content/recipes/${slug}.metadata.js`;
    const metadataModule = metadataImports[metadataPath];
    if (!metadataModule || !metadataModule.metadata) {
      throw error(404, `Recipe "${slug}" not found`);
    }
    const moduleImporter = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../content/recipes/coconut-milk-rice-pudding.md": () => import("../../../../chunks/coconut-milk-rice-pudding.js").then((n) => n._), "../../../content/recipes/crispy-panko-chicken-bites.md": () => import("../../../../chunks/crispy-panko-chicken-bites.js").then((n) => n._), "../../../content/recipes/fluffy-buttermilk-pancakes.md": () => import("../../../../chunks/fluffy-buttermilk-pancakes.js").then((n) => n._), "../../../content/recipes/miso-glazed-roasted-vegetables.md": () => import("../../../../chunks/miso-glazed-roasted-vegetables.js").then((n) => n._), "../../../content/recipes/poppadom-snack-platter.md": () => import("../../../../chunks/poppadom-snack-platter.js").then((n) => n._), "../../../content/recipes/salted-caramel-chocolate-tart.md": () => import("../../../../chunks/salted-caramel-chocolate-tart.js").then((n) => n._), "../../../content/recipes/silky-milk-chocolate-mousse.md": () => import("../../../../chunks/silky-milk-chocolate-mousse.js").then((n) => n._), "../../../content/recipes/thai-green-curry.md": () => import("../../../../chunks/thai-green-curry.js").then((n) => n._) }), `../../../content/recipes/${slug}.md`, 6);
    const rawContent = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../content/recipes/coconut-milk-rice-pudding.md": () => import("../../../../chunks/coconut-milk-rice-pudding2.js"), "../../../content/recipes/crispy-panko-chicken-bites.md": () => import("../../../../chunks/crispy-panko-chicken-bites2.js"), "../../../content/recipes/fluffy-buttermilk-pancakes.md": () => import("../../../../chunks/fluffy-buttermilk-pancakes2.js"), "../../../content/recipes/miso-glazed-roasted-vegetables.md": () => import("../../../../chunks/miso-glazed-roasted-vegetables2.js"), "../../../content/recipes/poppadom-snack-platter.md": () => import("../../../../chunks/poppadom-snack-platter2.js"), "../../../content/recipes/salted-caramel-chocolate-tart.md": () => import("../../../../chunks/salted-caramel-chocolate-tart2.js"), "../../../content/recipes/silky-milk-chocolate-mousse.md": () => import("../../../../chunks/silky-milk-chocolate-mousse2.js"), "../../../content/recipes/thai-green-curry.md": () => import("../../../../chunks/thai-green-curry2.js") }), `../../../content/recipes/${slug}.md`, 6).then((m) => m.default);
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
      "/src/content/recipes/coconut-milk-rice-pudding.metadata.js": __vite_glob_4_0,
      "/src/content/recipes/crispy-panko-chicken-bites.metadata.js": __vite_glob_4_1,
      "/src/content/recipes/fluffy-buttermilk-pancakes.metadata.js": __vite_glob_4_2,
      "/src/content/recipes/miso-glazed-roasted-vegetables.metadata.js": __vite_glob_4_3,
      "/src/content/recipes/poppadom-snack-platter.metadata.js": __vite_glob_4_4,
      "/src/content/recipes/salted-caramel-chocolate-tart.metadata.js": __vite_glob_4_5,
      "/src/content/recipes/silky-milk-chocolate-mousse.metadata.js": __vite_glob_4_6,
      "/src/content/recipes/thai-green-curry.metadata.js": __vite_glob_4_7
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
