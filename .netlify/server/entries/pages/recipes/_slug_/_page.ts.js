import { m as metadata, a as metadata$1, b as metadata$2, c as metadata$3, d as metadata$4, e as metadata$5, f as metadata$6, g as metadata$7 } from "../../../../chunks/thai-green-curry.js";
import { e as error } from "../../../../chunks/index.js";
import { d as dev } from "../../../../chunks/index4.js";
const entries = async () => {
  const modules = /* @__PURE__ */ Object.assign({ "/src/content/recipes/coconut-milk-rice-pudding.md": () => import("../../../../chunks/thai-green-curry.js").then((n) => n.o), "/src/content/recipes/crispy-panko-chicken-bites.md": () => import("../../../../chunks/thai-green-curry.js").then((n) => n.n), "/src/content/recipes/fluffy-buttermilk-pancakes.md": () => import("../../../../chunks/thai-green-curry.js").then((n) => n.l), "/src/content/recipes/miso-glazed-roasted-vegetables.md": () => import("../../../../chunks/thai-green-curry.js").then((n) => n.k), "/src/content/recipes/poppadom-snack-platter.md": () => import("../../../../chunks/thai-green-curry.js").then((n) => n.j), "/src/content/recipes/salted-caramel-chocolate-tart.md": () => import("../../../../chunks/thai-green-curry.js").then((n) => n.i), "/src/content/recipes/silky-milk-chocolate-mousse.md": () => import("../../../../chunks/thai-green-curry.js").then((n) => n.h), "/src/content/recipes/thai-green-curry.md": () => import("../../../../chunks/thai-green-curry.js").then((n) => n._) });
  const slugs = [];
  for (const path in modules) {
    const slug = path.split("/").pop()?.replace(".md", "");
    if (slug) {
      slugs.push({ slug });
    }
  }
  return slugs;
};
const prerender = true;
const load = async ({ params, parent }) => {
  const parentData = await parent();
  const { slug } = params;
  try {
    const modules = /* @__PURE__ */ Object.assign({ "/src/content/recipes/coconut-milk-rice-pudding.md": () => import("../../../../chunks/thai-green-curry.js").then((n) => n.o), "/src/content/recipes/crispy-panko-chicken-bites.md": () => import("../../../../chunks/thai-green-curry.js").then((n) => n.n), "/src/content/recipes/fluffy-buttermilk-pancakes.md": () => import("../../../../chunks/thai-green-curry.js").then((n) => n.l), "/src/content/recipes/miso-glazed-roasted-vegetables.md": () => import("../../../../chunks/thai-green-curry.js").then((n) => n.k), "/src/content/recipes/poppadom-snack-platter.md": () => import("../../../../chunks/thai-green-curry.js").then((n) => n.j), "/src/content/recipes/salted-caramel-chocolate-tart.md": () => import("../../../../chunks/thai-green-curry.js").then((n) => n.i), "/src/content/recipes/silky-milk-chocolate-mousse.md": () => import("../../../../chunks/thai-green-curry.js").then((n) => n.h), "/src/content/recipes/thai-green-curry.md": () => import("../../../../chunks/thai-green-curry.js").then((n) => n._) });
    const rawModules = /* @__PURE__ */ Object.assign({
      "/src/content/recipes/coconut-milk-rice-pudding.md": () => import("../../../../chunks/coconut-milk-rice-pudding.js").then((m) => m["default"]),
      "/src/content/recipes/crispy-panko-chicken-bites.md": () => import("../../../../chunks/crispy-panko-chicken-bites.js").then((m) => m["default"]),
      "/src/content/recipes/fluffy-buttermilk-pancakes.md": () => import("../../../../chunks/fluffy-buttermilk-pancakes.js").then((m) => m["default"]),
      "/src/content/recipes/miso-glazed-roasted-vegetables.md": () => import("../../../../chunks/miso-glazed-roasted-vegetables.js").then((m) => m["default"]),
      "/src/content/recipes/poppadom-snack-platter.md": () => import("../../../../chunks/poppadom-snack-platter.js").then((m) => m["default"]),
      "/src/content/recipes/salted-caramel-chocolate-tart.md": () => import("../../../../chunks/salted-caramel-chocolate-tart.js").then((m) => m["default"]),
      "/src/content/recipes/silky-milk-chocolate-mousse.md": () => import("../../../../chunks/silky-milk-chocolate-mousse.js").then((m) => m["default"]),
      "/src/content/recipes/thai-green-curry.md": () => import("../../../../chunks/thai-green-curry2.js").then((m) => m["default"])
    });
    const modulePath = `/src/content/recipes/${slug}.md`;
    const moduleImporter = modules[modulePath];
    const rawImporter = rawModules[modulePath];
    if (!moduleImporter || !rawImporter) {
      throw error(404, `Recipe "${slug}" not found`);
    }
    const [post, rawContent] = await Promise.all([moduleImporter(), rawImporter()]);
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
          // This will now correctly match the type
          text: trimmedLine.replace(/^\d+\.\s/, "").trim()
        });
      }
    }
    const allRecipeModules = /* @__PURE__ */ Object.assign({
      "/src/content/recipes/coconut-milk-rice-pudding.md": metadata$7,
      "/src/content/recipes/crispy-panko-chicken-bites.md": metadata$6,
      "/src/content/recipes/fluffy-buttermilk-pancakes.md": metadata$5,
      "/src/content/recipes/miso-glazed-roasted-vegetables.md": metadata$4,
      "/src/content/recipes/poppadom-snack-platter.md": metadata$3,
      "/src/content/recipes/salted-caramel-chocolate-tart.md": metadata$2,
      "/src/content/recipes/silky-milk-chocolate-mousse.md": metadata$1,
      "/src/content/recipes/thai-green-curry.md": metadata
    });
    const allRecipes = Object.entries(allRecipeModules).filter(([, module]) => module).map(([path, module]) => {
      const filename = path.split("/").pop()?.replace(".md", "") || "";
      return {
        ...module,
        slug: module.slug || filename
      };
    }).filter((recipe) => dev ? true : !recipe.draft).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const currentTags = post.metadata.tags || [];
    const relatedRecipes = allRecipes.filter((recipe) => {
      if (recipe.slug === slug) return false;
      return currentTags.some((tag) => recipe.tags?.includes(tag));
    }).slice(0, 3);
    const relatedProducts = parentData.relatedProducts || post.metadata.relatedProducts || [];
    console.log("Page.ts relatedProducts:", JSON.stringify(relatedProducts));
    return {
      metadata: post.metadata,
      ingredients,
      instructions,
      relatedRecipes,
      productLinks,
      rawContent,
      // Add the raw markdown content to the returned data
      relatedProducts
      // Use server data if available, fall back to local data
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
