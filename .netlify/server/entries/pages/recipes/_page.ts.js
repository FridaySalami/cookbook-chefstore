import { m as metadata, a as metadata$1, b as metadata$2, c as metadata$3, d as metadata$4, e as metadata$5, f as metadata$6, g as metadata$7 } from "../../../chunks/thai-green-curry.js";
import { d as dev } from "../../../chunks/index4.js";
const PAGE_SIZE = 12;
const load = async ({ url }) => {
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
    const allRecipes = Object.entries(recipeModules).filter(([, module]) => module).map(([path, module]) => {
      const filename = path.split("/").pop()?.replace(".md", "") || "";
      return {
        ...module,
        slug: module.slug || filename
        // Ensure slug exists
      };
    }).filter((recipe) => !!recipe.slug).filter((recipe) => dev ? true : !recipe.draft).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const allTags = [
      ...new Set(
        allRecipes.flatMap((recipe) => recipe.tags?.map((t) => t.toLowerCase()) || [])
      )
    ].sort();
    const selectedTagParam = url.searchParams.get("tag");
    const selectedTag = selectedTagParam ? selectedTagParam.toLowerCase() : null;
    console.log("Server: selectedTag:", selectedTag);
    console.log("Server: allTags:", allTags);
    const filteredRecipes = selectedTag ? allRecipes.filter((recipe) => {
      const lowerCaseRecipeTags = recipe.tags?.map((t) => t.toLowerCase()) || [];
      const isIncluded = lowerCaseRecipeTags.includes(selectedTag);
      return isIncluded;
    }) : allRecipes;
    console.log("Server: Number of recipes BEFORE pagination:", filteredRecipes.length);
    const pageParam = url.searchParams.get("page");
    const currentPage = pageParam ? parseInt(pageParam, 10) : 1;
    const totalRecipes = filteredRecipes.length;
    const totalPages = Math.ceil(totalRecipes / PAGE_SIZE);
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const paginatedRecipes = filteredRecipes.slice(startIndex, endIndex);
    if (currentPage > totalPages && totalPages > 0) {
      return {
        recipes: [],
        // Return empty if page is invalid
        allTags,
        currentPage,
        totalPages,
        totalRecipes,
        selectedTag
      };
    }
    return {
      recipes: paginatedRecipes,
      allTags,
      // Return the unique lowercase tags
      currentPage,
      totalPages,
      totalRecipes,
      selectedTag
      // Return the normalized (lowercase) selected tag
    };
  } catch (error) {
    console.error("Error loading recipes:", error);
    return {
      recipes: [],
      allTags: [],
      currentPage: 1,
      totalPages: 0,
      totalRecipes: 0,
      selectedTag: null
    };
  }
};
export {
  load
};
