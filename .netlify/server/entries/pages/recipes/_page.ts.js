import { _ as __vite_glob_4_19, a as __vite_glob_4_18, b as __vite_glob_4_17, c as __vite_glob_4_16, d as __vite_glob_4_15, e as __vite_glob_4_14, f as __vite_glob_4_13, g as __vite_glob_4_12, h as __vite_glob_4_11, i as __vite_glob_4_10, j as __vite_glob_4_9, k as __vite_glob_4_8, l as __vite_glob_4_7, m as __vite_glob_4_6, n as __vite_glob_4_5, o as __vite_glob_4_4, p as __vite_glob_4_3, q as __vite_glob_4_2, r as __vite_glob_4_1, s as __vite_glob_4_0 } from "../../../chunks/thai-green-curry.metadata.js";
import { d as dev } from "../../../chunks/index4.js";
const load = async () => {
  try {
    const recipeMetadataImports = /* @__PURE__ */ Object.assign({
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
    const recipes = Object.entries(recipeMetadataImports).filter(([, module]) => module?.metadata).map(([path, module]) => {
      const filename = path.split("/").pop()?.replace(".metadata.js", "") || "";
      const metadata = module.metadata;
      return {
        ...metadata,
        slug: metadata.slug || filename
      };
    }).filter((recipe) => dev ? true : !recipe.draft).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const categories = [...new Set(recipes.flatMap((recipe) => recipe.categories || []))].sort();
    const tags = [...new Set(recipes.flatMap((recipe) => recipe.tags || []))].sort();
    return {
      recipes,
      categories,
      tags
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error loading recipes:", error.message);
    } else {
      console.error("An unexpected error occurred:", error);
    }
    return {
      recipes: [],
      categories: [],
      tags: []
    };
  }
};
export {
  load
};
