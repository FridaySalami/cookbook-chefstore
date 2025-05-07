import { I as sanitize_props, J as spread_props, K as slot, E as head, M as ensure_array_like, F as escape_html, D as attr, O as bind_props, C as pop, A as push } from "../../../chunks/index3.js";
import { C as Card, a as Card_header, d as Card_content, b as Card_title, c as Card_description } from "../../../chunks/card-title.js";
import { C as Card_footer, a as Chevron_right } from "../../../chunks/chevron-right.js";
import { B as Badge, U as Users } from "../../../chunks/users.js";
import { B as Button } from "../../../chunks/index5.js";
import { I as Icon, C as Clock } from "../../../chunks/clock.js";
import { h as html } from "../../../chunks/html.js";
function Chevron_left($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [["path", { "d": "m15 18-6-6 6-6" }]];
  Icon($$payload, spread_props([
    { name: "chevron-left" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {}, null);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function _page($$payload, $$props) {
  push();
  let currentPage, totalPages, selectedTag, totalRecipes, displayedRecipes, difficultyTags, dietaryTags, otherTags, itemListSchema;
  let data = $$props["data"];
  const dietaryKeywords = [
    "chicken",
    "plant-based",
    "vegan",
    "vegetarian",
    "thai",
    "curry"
  ];
  const siteBaseUrl = "https://chefstorecookbook.netlify.app";
  function getDifficultyFromTags(tags) {
    if (!tags) return "N/A";
    const difficultyTag = tags.find((tag) => tag.startsWith("difficulty-"));
    return difficultyTag ? difficultyTag.replace("difficulty-", "") : "N/A";
  }
  function getPageUrl(pageNumber) {
    const params = new URLSearchParams();
    if (selectedTag) {
      params.set("tag", selectedTag);
    }
    params.set("page", pageNumber.toString());
    return `/recipes?${params.toString()}`;
  }
  function getTagUrl(tag) {
    if (tag && tag === selectedTag) {
      return "/recipes";
    }
    if (!tag) {
      return "/recipes";
    }
    const params = new URLSearchParams();
    params.set("tag", tag);
    params.set("page", "1");
    return `/recipes?${params.toString()}`;
  }
  function formatTag(tag) {
    if (tag.startsWith("difficulty-")) {
      const difficulty = tag.replace("difficulty-", "");
      return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
    }
    return tag.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  currentPage = 1;
  totalPages = 1;
  selectedTag = null;
  totalRecipes = data.recipes?.length || 0;
  displayedRecipes = data.recipes || [];
  difficultyTags = data.tags?.filter((tag) => tag.startsWith("difficulty-")) || [];
  dietaryTags = data.tags?.filter((tag) => dietaryKeywords.includes(tag)) || [];
  otherTags = data.tags?.filter((tag) => !tag.startsWith("difficulty-") && !dietaryKeywords.includes(tag)) || [];
  itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: displayedRecipes.map((recipe, index) => ({
      "@type": "ListItem",
      position: (currentPage - 1) * 12 + index + 1,
      url: `${siteBaseUrl}/recipes/${recipe.slug}`
    }))
  };
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(selectedTag ? `Recipes tagged "${formatTag(selectedTag)}"` : "All Recipes")} | Chefstore Recipe
		Hub</title>`;
    $$payload2.out += `<meta name="description"${attr("content", selectedTag ? `Browse recipes tagged with "${formatTag(selectedTag)}".` : "Discover our collection of delicious recipes for every occasion.")}> `;
    if (currentPage > 1) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<link rel="prev"${attr("href", getPageUrl(currentPage - 1))}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (currentPage < totalPages) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<link rel="next"${attr("href", getPageUrl(currentPage + 1))}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (displayedRecipes.length > 0) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `${html((() => {
        const safeJsonString = JSON.stringify(itemListSchema, null, 2).replace(/</g, "\\u003c");
        return `<script type="application/ld+json">${safeJsonString}<\/script>`;
      })())}`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]-->`;
  });
  $$payload.out += `<section class="bg-background text-foreground px-6 pt-10 pb-20 sm:px-10 md:px-16 lg:px-20"><div class="container mx-auto max-w-7xl"><header class="mb-16 text-center"><h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">All Recipes</h1> <p class="mx-auto mt-4 max-w-2xl text-xl text-[hsl(var(--muted-foreground))]">Browse our collection of chef-tested recipes for every meal and occasion.</p> <div class="mt-8 flex flex-col items-center gap-4"><div class="mb-2">`;
  Button($$payload, {
    href: getTagUrl(null),
    variant: selectedTag === null ? "default" : "outline",
    size: "sm",
    "aria-current": selectedTag === null ? "page" : void 0,
    children: ($$payload2) => {
      $$payload2.out += `<!---->All Recipes`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> `;
  if (difficultyTags.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(difficultyTags);
    $$payload.out += `<div class="flex flex-wrap justify-center gap-2 sm:gap-3"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let tag = each_array[$$index];
      Button($$payload, {
        href: getTagUrl(tag),
        variant: selectedTag === tag ? "default" : "outline",
        size: "sm",
        class: "capitalize",
        "aria-current": selectedTag === tag ? "page" : void 0,
        children: ($$payload2) => {
          $$payload2.out += `<!---->${escape_html(formatTag(tag))}`;
        },
        $$slots: { default: true }
      });
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (dietaryTags.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array_1 = ensure_array_like(dietaryTags);
    $$payload.out += `<div class="flex flex-wrap justify-center gap-2 sm:gap-3"><!--[-->`;
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let tag = each_array_1[$$index_1];
      Button($$payload, {
        href: getTagUrl(tag),
        variant: selectedTag === tag ? "default" : "outline",
        size: "sm",
        "aria-current": selectedTag === tag ? "page" : void 0,
        children: ($$payload2) => {
          $$payload2.out += `<!---->${escape_html(formatTag(tag))}`;
        },
        $$slots: { default: true }
      });
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (otherTags.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array_2 = ensure_array_like(otherTags);
    $$payload.out += `<div class="flex flex-wrap justify-center gap-2 sm:gap-3"><!--[-->`;
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let tag = each_array_2[$$index_2];
      Button($$payload, {
        href: getTagUrl(tag),
        variant: selectedTag === tag ? "default" : "outline",
        size: "sm",
        "aria-current": selectedTag === tag ? "page" : void 0,
        children: ($$payload2) => {
          $$payload2.out += `<!---->${escape_html(formatTag(tag))}`;
        },
        $$slots: { default: true }
      });
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></header> <div class="mb-6 text-center">`;
  if (selectedTag) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<h2 class="mb-1 text-2xl font-semibold tracking-tight">Filtered by: <span class="capitalize">${escape_html(formatTag(selectedTag))}</span></h2>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <p class="text-muted-foreground text-sm">Showing ${escape_html(displayedRecipes.length)} of ${escape_html(totalRecipes)} recipes.</p></div> `;
  if (displayedRecipes.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array_3 = ensure_array_like(displayedRecipes);
    $$payload.out += `<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"><!--[-->`;
    for (let $$index_4 = 0, $$length = each_array_3.length; $$index_4 < $$length; $$index_4++) {
      let recipe = each_array_3[$$index_4];
      $$payload.out += `<a${attr("href", `/recipes/${recipe.slug}`)} class="group block"><article>`;
      Card($$payload, {
        class: "flex h-full flex-col overflow-hidden transition-all group-hover:-translate-y-1 group-hover:shadow-lg",
        children: ($$payload2) => {
          Card_header($$payload2, {
            class: "relative p-0",
            children: ($$payload3) => {
              $$payload3.out += `<img${attr("src", recipe.image || "/placeholder.png")}${attr("alt", recipe.title)} class="aspect-video w-full object-cover" loading="lazy" onload="this.__e=event" onerror="this.__e=event"> `;
              Badge($$payload3, {
                variant: "secondary",
                class: "absolute top-3 right-3 border border-white/20 bg-black/60 text-white capitalize backdrop-blur-sm",
                children: ($$payload4) => {
                  $$payload4.out += `<!---->${escape_html(getDifficultyFromTags(recipe.tags))}`;
                },
                $$slots: { default: true }
              });
              $$payload3.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload2.out += `<!----> `;
          Card_content($$payload2, {
            class: "flex-grow p-4",
            children: ($$payload3) => {
              Card_title($$payload3, {
                class: "mb-1 text-lg leading-tight font-semibold tracking-tight",
                children: ($$payload4) => {
                  $$payload4.out += `<!---->${escape_html(recipe.title)}`;
                },
                $$slots: { default: true }
              });
              $$payload3.out += `<!----> `;
              if (recipe.description) {
                $$payload3.out += "<!--[-->";
                Card_description($$payload3, {
                  class: "text-muted-foreground mb-3 line-clamp-3 text-sm",
                  children: ($$payload4) => {
                    $$payload4.out += `<!---->${escape_html(recipe.description)}`;
                  },
                  $$slots: { default: true }
                });
              } else {
                $$payload3.out += "<!--[!-->";
              }
              $$payload3.out += `<!--]--> `;
              if (recipe.tags && recipe.tags.length > 0) {
                $$payload3.out += "<!--[-->";
                const each_array_4 = ensure_array_like(recipe.tags.slice(0, 3));
                $$payload3.out += `<div class="mt-2 flex flex-wrap gap-1"><!--[-->`;
                for (let $$index_3 = 0, $$length2 = each_array_4.length; $$index_3 < $$length2; $$index_3++) {
                  let tag = each_array_4[$$index_3];
                  Badge($$payload3, {
                    variant: "secondary",
                    children: ($$payload4) => {
                      $$payload4.out += `<!---->${escape_html(formatTag(tag))}`;
                    },
                    $$slots: { default: true }
                  });
                }
                $$payload3.out += `<!--]--></div>`;
              } else {
                $$payload3.out += "<!--[!-->";
              }
              $$payload3.out += `<!--]-->`;
            },
            $$slots: { default: true }
          });
          $$payload2.out += `<!----> `;
          Card_footer($$payload2, {
            class: "mt-auto flex items-center justify-between p-4 pt-0",
            children: ($$payload3) => {
              $$payload3.out += `<div class="text-muted-foreground flex items-center gap-1 text-xs">`;
              Clock($$payload3, { class: "h-4 w-4" });
              $$payload3.out += `<!----> <span>${escape_html(recipe.totalTime || "N/A")} min</span></div> `;
              if (recipe.servings) {
                $$payload3.out += "<!--[-->";
                $$payload3.out += `<div class="text-muted-foreground flex items-center gap-1 text-xs">`;
                Users($$payload3, { class: "h-4 w-4" });
                $$payload3.out += `<!----> <span>${escape_html(recipe.servings)} servings</span></div>`;
              } else {
                $$payload3.out += "<!--[!-->";
              }
              $$payload3.out += `<!--]-->`;
            },
            $$slots: { default: true }
          });
          $$payload2.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload.out += `<!----></article></a>`;
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<p class="text-muted-foreground col-span-full text-center">No recipes found${escape_html(selectedTag ? ` matching the tag "${formatTag(selectedTag)}"` : "")}. Try
				removing the filter.</p>`;
  }
  $$payload.out += `<!--]--> `;
  if (totalPages > 1) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<nav aria-label="Recipe pagination" class="mt-12 flex items-center justify-center gap-4">`;
    if (currentPage > 1) {
      $$payload.out += "<!--[-->";
      Button($$payload, {
        href: getPageUrl(currentPage - 1),
        variant: "outline",
        size: "sm",
        children: ($$payload2) => {
          Chevron_left($$payload2, { class: "mr-2 h-4 w-4" });
          $$payload2.out += `<!----> Previous`;
        },
        $$slots: { default: true }
      });
    } else {
      $$payload.out += "<!--[!-->";
      Button($$payload, {
        variant: "outline",
        size: "sm",
        disabled: true,
        children: ($$payload2) => {
          Chevron_left($$payload2, { class: "mr-2 h-4 w-4" });
          $$payload2.out += `<!----> Previous`;
        },
        $$slots: { default: true }
      });
    }
    $$payload.out += `<!--]--> <span class="text-muted-foreground text-sm">Page ${escape_html(currentPage)} of ${escape_html(totalPages)}</span> `;
    if (currentPage < totalPages) {
      $$payload.out += "<!--[-->";
      Button($$payload, {
        href: getPageUrl(currentPage + 1),
        variant: "outline",
        size: "sm",
        children: ($$payload2) => {
          $$payload2.out += `<!---->Next `;
          Chevron_right($$payload2, { class: "ml-2 h-4 w-4" });
          $$payload2.out += `<!---->`;
        },
        $$slots: { default: true }
      });
    } else {
      $$payload.out += "<!--[!-->";
      Button($$payload, {
        variant: "outline",
        size: "sm",
        disabled: true,
        children: ($$payload2) => {
          $$payload2.out += `<!---->Next `;
          Chevron_right($$payload2, { class: "ml-2 h-4 w-4" });
          $$payload2.out += `<!---->`;
        },
        $$slots: { default: true }
      });
    }
    $$payload.out += `<!--]--></nav>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></section>`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
