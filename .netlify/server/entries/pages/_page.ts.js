import { m as metadata, a as metadata$1, b as metadata$2, c as metadata$3, d as metadata$4, e as metadata$5, f as metadata$6, g as metadata$7 } from "../../chunks/thai-green-curry.js";
import { d as dev } from "../../chunks/index4.js";
const load = async () => {
  try {
    const recipeModules = /* @__PURE__ */ Object.assign({
      "/src/content/recipes/coconut-milk-rice-pudding.md": metadata$7,
      "/src/content/recipes/crispy-panko-chicken-bites.md": metadata$6,
      "/src/content/recipes/fluffy-buttermilk-pancakes.md": metadata$5,
      "/src/content/recipes/miso-glazed-roasted-vegetables.md": metadata$4,
      "/src/content/recipes/poppadom-snack-platter.md": metadata$3,
      "/src/content/recipes/salted-caramel-chocolate-tart.md": metadata$2,
      "/src/content/recipes/silky-milk-chocolate-mousse.md": metadata$1,
      "/src/content/recipes/thai-green-curry.md": metadata
    });
    const recipes = Object.entries(recipeModules).filter(([, module]) => module).map(([path, module]) => {
      const filename = path.split("/").pop()?.replace(".md", "") || "";
      return {
        ...module,
        // Spread the metadata object directly
        slug: module.slug || filename
        // Use slug from the metadata object
      };
    }).filter((recipe) => dev ? true : !recipe.draft).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const featuredRecipes = recipes.filter((recipe) => recipe.featured).slice(0, 3);
    return {
      recipes,
      featuredRecipes
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error loading recipes:", error.message);
    } else {
      console.error("An unexpected error occurred:", error);
    }
    return {
      recipes: [],
      featuredRecipes: []
    };
  }
};
export {
  load
};
