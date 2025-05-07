import { _ as __vite_glob_4_7, a as __vite_glob_4_6, b as __vite_glob_4_5, c as __vite_glob_4_4, d as __vite_glob_4_3, e as __vite_glob_4_2, f as __vite_glob_4_1, g as __vite_glob_4_0 } from "../../chunks/thai-green-curry.metadata.js";
import { d as dev } from "../../chunks/index4.js";
const prerender = true;
const load = async () => {
  try {
    const recipeMetadataImports = /* @__PURE__ */ Object.assign({
      "/src/content/recipes/coconut-milk-rice-pudding.metadata.js": __vite_glob_4_0,
      "/src/content/recipes/crispy-panko-chicken-bites.metadata.js": __vite_glob_4_1,
      "/src/content/recipes/fluffy-buttermilk-pancakes.metadata.js": __vite_glob_4_2,
      "/src/content/recipes/miso-glazed-roasted-vegetables.metadata.js": __vite_glob_4_3,
      "/src/content/recipes/poppadom-snack-platter.metadata.js": __vite_glob_4_4,
      "/src/content/recipes/salted-caramel-chocolate-tart.metadata.js": __vite_glob_4_5,
      "/src/content/recipes/silky-milk-chocolate-mousse.metadata.js": __vite_glob_4_6,
      "/src/content/recipes/thai-green-curry.metadata.js": __vite_glob_4_7
    });
    const recipes = Object.entries(recipeMetadataImports).filter(([, module]) => module?.metadata).map(([path, module]) => {
      const filename = path.split("/").pop()?.replace(".metadata.js", "") || "";
      const metadata = module.metadata;
      return {
        ...metadata,
        slug: metadata.slug || filename,
        // Ensure date is a valid string, provide a fallback for robust parsing
        date: typeof metadata.date === "string" ? metadata.date : "1970-01-01T00:00:00.000Z"
      };
    }).filter((recipe) => dev ? true : !recipe.draft).sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      if (isNaN(dateA) && isNaN(dateB)) return 0;
      if (isNaN(dateA)) return 1;
      if (isNaN(dateB)) return -1;
      return dateB - dateA;
    });
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
  load,
  prerender
};
