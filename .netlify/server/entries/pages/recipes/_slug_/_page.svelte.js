import { I as sanitize_props, P as rest_props, Q as fallback, S as spread_attributes, T as clsx, K as slot, O as bind_props, A as push, U as attr_class, C as pop, E as head, M as ensure_array_like, D as attr, F as escape_html, V as store_get, W as unsubscribe_stores } from "../../../../chunks/index3.js";
import { R as RecipeLayout, p as page } from "../../../../chunks/RecipeLayout.js";
import "clsx";
import { c as cn, C as Clock } from "../../../../chunks/clock.js";
import { a as Chevron_right, C as Card_footer } from "../../../../chunks/chevron-right.js";
import { C as Card, a as Card_header, d as Card_content, b as Card_title, c as Card_description } from "../../../../chunks/card-title.js";
import { B as Badge, U as Users } from "../../../../chunks/users.js";
import { marked } from "marked";
import { h as html } from "../../../../chunks/html.js";
function Breadcrumb($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["el", "class"]);
  let el = fallback($$props["el"], void 0);
  let className = fallback($$props["class"], void 0);
  $$payload.out += `<nav${spread_attributes(
    {
      class: clsx(className),
      "aria-label": "breadcrumb",
      ...$$restProps
    }
  )}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></nav>`;
  bind_props($$props, { el, class: className });
}
function Breadcrumb_item($$payload, $$props) {
  push();
  let el = fallback($$props["el"], void 0);
  let className = fallback($$props["class"], void 0);
  $$payload.out += `<li${attr_class(clsx(cn("inline-flex items-center gap-1.5", className)))}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></li>`;
  bind_props($$props, { el, class: className });
  pop();
}
function Breadcrumb_separator($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["el", "class"]);
  push();
  let el = fallback($$props["el"], void 0);
  let className = fallback($$props["class"], void 0);
  $$payload.out += `<li${spread_attributes(
    {
      role: "presentation",
      "aria-hidden": "true",
      class: clsx(cn("[&>svg]:size-3.5", className)),
      ...$$restProps
    }
  )}><!---->`;
  slot($$payload, $$props, "default", {}, () => {
    Chevron_right($$payload, { class: "h-3.5 w-3.5", tabindex: -1 });
  });
  $$payload.out += `<!----></li>`;
  bind_props($$props, { el, class: className });
  pop();
}
function Breadcrumb_link($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["href", "el", "asChild", "class"]);
  push();
  let href = fallback($$props["href"], void 0);
  let el = fallback($$props["el"], void 0);
  let asChild = fallback($$props["asChild"], false);
  let className = fallback($$props["class"], void 0);
  let attrs;
  attrs = {
    class: cn("hover:text-foreground transition-colors", className),
    href,
    ...$$restProps
  };
  if (asChild) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "default", { attrs }, null);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<a${spread_attributes({ ...attrs, href })}><!---->`;
    slot($$payload, $$props, "default", { attrs }, null);
    $$payload.out += `<!----></a>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { href, el, asChild, class: className });
  pop();
}
function Breadcrumb_list($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["el", "class"]);
  push();
  let el = fallback($$props["el"], void 0);
  let className = fallback($$props["class"], void 0);
  $$payload.out += `<ol${spread_attributes(
    {
      class: clsx(cn("text-muted-foreground flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5", className)),
      ...$$restProps
    }
  )}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></ol>`;
  bind_props($$props, { el, class: className });
  pop();
}
function Breadcrumb_page($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["el", "class"]);
  push();
  let el = fallback($$props["el"], void 0);
  let className = fallback($$props["class"], void 0);
  $$payload.out += `<span${spread_attributes(
    {
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      class: clsx(cn("text-foreground font-normal", className)),
      ...$$restProps
    }
  )}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></span>`;
  bind_props($$props, { el, class: className });
  pop();
}
function RelatedProducts($$payload, $$props) {
  push();
  let { productHandles = [] } = $$props;
  if (productHandles.length > 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="mb-8"><h2 class="mb-4 border-b pb-2 text-xl font-semibold">Shop These Ingredients</h2> `;
    {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="flex items-center justify-center py-4"><div class="h-6 w-6 animate-spin rounded-full border-t-2 border-b-2 border-amber-600"></div></div>`;
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let data = $$props["data"];
  let parsedContent = "";
  let whyYouLlLoveThis = "";
  let ingredients = "";
  let instructions = "";
  let tips = "";
  let goesGreatWith = "";
  const processMdContent = async () => {
    parsedContent = "";
    whyYouLlLoveThis = "";
    ingredients = "";
    instructions = "";
    tips = "";
    goesGreatWith = "";
    if (!data.rawContent) {
      return;
    }
    try {
      parsedContent = await marked(data.rawContent);
      const sections = data.rawContent.split(/^##\s+/m).filter(Boolean);
      for (const section of sections) {
        const sectionLines = section.trim().split("\n");
        const title = sectionLines[0].trim();
        const content = sectionLines.slice(1).join("\n").trim();
        const renderedContent = await marked(content);
        if (title === "Why You'll Love This") {
          whyYouLlLoveThis = renderedContent;
        } else if (title === "Ingredients") {
          ingredients = renderedContent;
        } else if (title === "Instructions") {
          instructions = renderedContent;
        } else if (title === "Tips") {
          tips = renderedContent;
        } else if (title === "Goes Great With") {
          goesGreatWith = renderedContent;
        }
      }
    } catch (error) {
      console.error("Error parsing markdown:", error);
    }
  };
  const recipeTitle = data.metadata?.title ?? "Recipe";
  const siteBaseUrl = "https://chefstorecookbook.netlify.app";
  function getDifficultyFromTags(tags) {
    if (!tags) return "N/A";
    const difficultyTag = tags.find((tag) => tag.startsWith("difficulty-"));
    return difficultyTag ? difficultyTag.replace("difficulty-", "") : "N/A";
  }
  function convertToNumber(value) {
    if (value === void 0) return void 0;
    if (value === null) return null;
    if (typeof value === "number") return value;
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? null : parsed;
  }
  const prepTimeNum = convertToNumber(data.metadata.prepTime);
  const cookTimeNum = convertToNumber(data.metadata.cookTime);
  const totalTimeNum = convertToNumber(data.metadata.totalTime);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: data.metadata?.title,
    image: data.metadata?.image ? [
      siteBaseUrl + (data.metadata.image.startsWith("/") ? "" : "/") + data.metadata.image
    ] : void 0,
    author: {
      "@type": "Organization",
      name: "Chefstore Cookbook"
    },
    description: data.metadata?.description,
    datePublished: data.metadata?.date ? new Date(data.metadata.date).toISOString().split("T")[0] : void 0,
    prepTime: prepTimeNum ? `PT${prepTimeNum}M` : void 0,
    cookTime: cookTimeNum ? `PT${cookTimeNum}M` : void 0,
    totalTime: totalTimeNum ? `PT${totalTimeNum}M` : void 0,
    recipeYield: data.metadata?.servings ? `${data.metadata.servings} servings` : void 0,
    recipeCategory: data.metadata?.categories?.join(", "),
    keywords: data.metadata?.tags?.join(", "),
    recipeIngredient: data.ingredients && data.ingredients.length > 0 ? data.ingredients : void 0,
    recipeInstructions: data.instructions && data.instructions.length > 0 ? data.instructions : void 0,
    recipeCuisine: data.metadata?.recipeCuisine?.join(", ")
  };
  Object.keys(schema).forEach((key) => {
    if (schema[key] === void 0 || schema[key] === null) {
      delete schema[key];
    }
  });
  if (schema.image && (!schema.image[0] || !data.metadata?.image)) {
    delete schema.image;
  }
  if (data?.rawContent) {
    processMdContent();
  } else {
    parsedContent = "";
    whyYouLlLoveThis = "";
    ingredients = "";
    instructions = "";
    tips = "";
    goesGreatWith = "";
  }
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(recipeTitle)} | Chefstore Cookbook</title>`;
    if (data.metadata?.description) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta name="description"${attr("content", data.metadata.description)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> <link rel="canonical"${attr("href", `https://www.chefstorecookbook.netlify.app/recipes/${store_get($$store_subs ??= {}, "$page", page).params.slug}`)}> `;
    if (Object.keys(schema).length > 2) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `${html((() => {
        const safeJsonString = JSON.stringify(schema, null, 2).replace(/</g, "\\u003c");
        return `<script type="application/ld+json">${safeJsonString}<\/script>`;
      })())}`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]-->`;
  });
  $$payload.out += `<div class="container mx-auto px-4 py-6">`;
  Breadcrumb($$payload, {
    class: "mb-6",
    children: ($$payload2) => {
      Breadcrumb_list($$payload2, {
        children: ($$payload3) => {
          Breadcrumb_item($$payload3, {
            children: ($$payload4) => {
              Breadcrumb_link($$payload4, {
                href: "/",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Home`;
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Breadcrumb_separator($$payload3, {});
          $$payload3.out += `<!----> `;
          Breadcrumb_item($$payload3, {
            children: ($$payload4) => {
              Breadcrumb_link($$payload4, {
                href: "/recipes",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Recipes`;
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Breadcrumb_separator($$payload3, {});
          $$payload3.out += `<!----> `;
          Breadcrumb_item($$payload3, {
            children: ($$payload4) => {
              Breadcrumb_page($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->${escape_html(recipeTitle)}`;
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  {
    let content = function($$payload2) {
      if (whyYouLlLoveThis) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<div class="mb-8"><h2 class="border-border mb-4 border-b pb-2 text-xl font-semibold">Why You'll Love This</h2> ${html(whyYouLlLoveThis)}</div>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (ingredients) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<div class="mb-8"><h2 class="border-border mb-4 border-b pb-2 text-xl font-semibold">Ingredients</h2> ${html(ingredients)}</div>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (data.relatedProducts && data.relatedProducts.length > 0) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<div class="mb-8">`;
        RelatedProducts($$payload2, { productHandles: data.relatedProducts });
        $$payload2.out += `<!----></div>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (instructions) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<div class="mb-8"><h2 class="border-border mb-4 border-b pb-2 text-xl font-semibold">Instructions</h2> ${html(instructions)}</div>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (tips) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<div class="mb-8"><h2 id="tips" class="border-border mb-4 border-b pb-2 text-xl font-semibold">Tips</h2> ${html(tips)}</div>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (goesGreatWith) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<div class="mb-8"><h2 id="goes-great-with" class="border-border mb-4 border-b pb-2 text-xl font-semibold">Goes Great With</h2> ${html(goesGreatWith)}</div>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]-->`;
    };
    RecipeLayout($$payload, {
      title: data.metadata.title,
      description: data.metadata.description,
      image: data.metadata.image,
      prepTime: prepTimeNum,
      cookTime: cookTimeNum,
      totalTime: totalTimeNum,
      difficulty: data.metadata.difficulty,
      servings: data.metadata.servings,
      tags: data.metadata.tags,
      relatedProducts: data.relatedProducts,
      content,
      $$slots: { content: true }
    });
  }
  $$payload.out += `<!----> `;
  if (data.relatedRecipes && data.relatedRecipes.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(data.relatedRecipes);
    $$payload.out += `<section class="mx-auto mt-12 max-w-2xl border-t pt-8"><h2 class="mb-6 text-2xl font-bold tracking-tight">You might also like</h2> <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let recipe = each_array[$$index];
      $$payload.out += `<a${attr("href", `/recipes/${recipe.slug}`)} class="group block">`;
      Card($$payload, {
        class: "flex h-full flex-col overflow-hidden transition-all group-hover:-translate-y-1 group-hover:shadow-lg",
        children: ($$payload2) => {
          Card_header($$payload2, {
            class: "relative p-0",
            children: ($$payload3) => {
              $$payload3.out += `<img${attr("src", recipe.image || "/placeholder.png")}${attr("alt", recipe.title)} class="aspect-video w-full object-cover" loading="lazy"> `;
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
                class: "mb-1 text-base leading-tight font-semibold tracking-tight",
                children: ($$payload4) => {
                  $$payload4.out += `<!---->${escape_html(recipe.title)}`;
                },
                $$slots: { default: true }
              });
              $$payload3.out += `<!----> `;
              if (recipe.description) {
                $$payload3.out += "<!--[-->";
                Card_description($$payload3, {
                  class: "text-muted-foreground mb-3 line-clamp-2 text-sm",
                  children: ($$payload4) => {
                    $$payload4.out += `<!---->${escape_html(recipe.description)}`;
                  },
                  $$slots: { default: true }
                });
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
              $$payload3.out += `<!----> <span>${escape_html(recipe.totalTime ? `${recipe.totalTime} min` : "N/A")}</span></div> `;
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
      $$payload.out += `<!----></a>`;
    }
    $$payload.out += `<!--]--></div></section>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
