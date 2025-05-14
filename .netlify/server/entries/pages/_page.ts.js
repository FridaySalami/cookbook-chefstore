import { _ as __vite_glob_4_29, a as __vite_glob_4_28, b as __vite_glob_4_27, c as __vite_glob_4_26, d as __vite_glob_4_25, e as __vite_glob_4_24, f as __vite_glob_4_23, g as __vite_glob_4_22, h as __vite_glob_4_21, i as __vite_glob_4_20, j as __vite_glob_4_19, k as __vite_glob_4_18, l as __vite_glob_4_17, m as __vite_glob_4_16, n as __vite_glob_4_15, o as __vite_glob_4_14, p as __vite_glob_4_13, q as __vite_glob_4_12, r as __vite_glob_4_11, s as __vite_glob_4_10, t as __vite_glob_4_9, u as __vite_glob_4_8, v as __vite_glob_4_7, w as __vite_glob_4_6, x as __vite_glob_4_5, y as __vite_glob_4_4, z as __vite_glob_4_3, A as __vite_glob_4_2, B as __vite_glob_4_1, C as __vite_glob_4_0 } from "../../chunks/thai-green-curry.metadata.js";
import { d as dev } from "../../chunks/index4.js";
const prerender = true;
const load = async () => {
  try {
    const recipeMetadataImports = /* @__PURE__ */ Object.assign({
      "/src/content/recipe-metadata/baked-camembert-cheeseboard-chutney.metadata.js": __vite_glob_4_0,
      "/src/content/recipe-metadata/buttermilk-chicken-tenders.metadata.js": __vite_glob_4_1,
      "/src/content/recipe-metadata/cheesy-leek-potato-gratin.metadata.js": __vite_glob_4_2,
      "/src/content/recipe-metadata/classic-tiramisu-no-eggs.metadata.js": __vite_glob_4_3,
      "/src/content/recipe-metadata/coconut-milk-rice-pudding.metadata.js": __vite_glob_4_4,
      "/src/content/recipe-metadata/creamy-chicken-korma.metadata.js": __vite_glob_4_5,
      "/src/content/recipe-metadata/crispy-chicken-katsu-curry.metadata.js": __vite_glob_4_6,
      "/src/content/recipe-metadata/crispy-panko-chicken-bites.metadata.js": __vite_glob_4_7,
      "/src/content/recipe-metadata/crunchy-asian-slaw.metadata.js": __vite_glob_4_8,
      "/src/content/recipe-metadata/fluffy-buttermilk-pancakes.metadata.js": __vite_glob_4_9,
      "/src/content/recipe-metadata/fruity-flapjacks-cherries-sultanas.metadata.js": __vite_glob_4_10,
      "/src/content/recipe-metadata/garlic-herb-tear-and-share-bread.metadata.js": __vite_glob_4_11,
      "/src/content/recipe-metadata/goats-cheese-onion-vol-au-vents.metadata.js": __vite_glob_4_12,
      "/src/content/recipe-metadata/kimchi-fried-rice.metadata.js": __vite_glob_4_13,
      "/src/content/recipe-metadata/lemon-posset-shortbread.metadata.js": __vite_glob_4_14,
      "/src/content/recipe-metadata/miso-glazed-roasted-vegetables.metadata.js": __vite_glob_4_15,
      "/src/content/recipe-metadata/one-pan-harissa-chickpeas-eggs.metadata.js": __vite_glob_4_16,
      "/src/content/recipe-metadata/poppadom-snack-platter.metadata.js": __vite_glob_4_17,
      "/src/content/recipe-metadata/salted-caramel-chocolate-tart.metadata.js": __vite_glob_4_18,
      "/src/content/recipe-metadata/sea-bass-lemon-caper-butter.metadata.js": __vite_glob_4_19,
      "/src/content/recipe-metadata/silky-milk-chocolate-mousse.metadata.js": __vite_glob_4_20,
      "/src/content/recipe-metadata/spiced-lamb-mint-sausage-rolls.metadata.js": __vite_glob_4_21,
      "/src/content/recipe-metadata/spicy-chickpea-spinach-stew.metadata.js": __vite_glob_4_22,
      "/src/content/recipe-metadata/spinach-ricotta-cannelloni.metadata.js": __vite_glob_4_23,
      "/src/content/recipe-metadata/sticky-banana-bread-chocolate-walnuts.metadata.js": __vite_glob_4_24,
      "/src/content/recipe-metadata/sticky-soy-braised-pork-ribs.metadata.js": __vite_glob_4_25,
      "/src/content/recipe-metadata/sticky-soy-garlic-noodles.metadata.js": __vite_glob_4_26,
      "/src/content/recipe-metadata/sweetcorn-fritters-chilli-jam.metadata.js": __vite_glob_4_27,
      "/src/content/recipe-metadata/tagliatelle-bolognese-traditional.metadata.js": __vite_glob_4_28,
      "/src/content/recipe-metadata/thai-green-curry.metadata.js": __vite_glob_4_29
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
