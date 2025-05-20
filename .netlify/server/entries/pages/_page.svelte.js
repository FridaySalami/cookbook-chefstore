import { D as sanitize_props, E as spread_props, F as slot, I as head, U as ensure_array_like, G as attr, X as stringify, C as pop, A as push, V as escape_html } from "../../chunks/index2.js";
import "clsx";
import { C as Card_header, a as Card_content, b as Card_title, c as Card_description } from "../../chunks/card-title.js";
import { B as Button } from "../../chunks/index4.js";
import { g as goto } from "../../chunks/client.js";
import { C as Clock } from "../../chunks/clock.js";
import { I as Icon } from "../../chunks/Icon.js";
function Utensils_crossed($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"
      }
    ],
    [
      "path",
      {
        "d": "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"
      }
    ],
    ["path", { "d": "m2.1 21.8 6.4-6.3" }],
    ["path", { "d": "m19 5-7 7" }]
  ];
  Icon($$payload, spread_props([
    { name: "utensils-crossed" },
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
  let { data } = $$props;
  const featuredRecipes = data.featuredRecipes;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Chefstore Cookbook - Home</title>`;
    $$payload2.out += `<meta name="description" content="Delicious, no-fuss recipes made with real ingredients. From weeknight wonders to weekend crowd-pleasers.">`;
  });
  $$payload.out += `<main class="flex-grow py-8 lg:py-12"><section class="mb-8 text-center"><h1 class="text-foreground mb-4 font-serif text-4xl font-bold tracking-tight md:text-5xl lg:text-5xl">Real meals for real tables</h1> <p class="text-muted-foreground mx-auto mb-8 max-w-3xl text-lg md:text-xl">Simple, satisfying recipes for your everyday life.</p> <p class="text-muted-foreground mx-auto mb-8 max-w-3xl text-sm md:text-base">Browse recipes and shop ingredients straight from the kitchen.</p> `;
  Button($$payload, {
    href: "/recipes",
    size: "lg",
    class: "bg-primary text-primary-foreground border-primary/70 mb-8 rounded-full border-2 px-8 py-3 text-base font-semibold shadow-lg transition-all duration-200 hover:bg-blue-100 hover:text-blue-800 focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:outline-none",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Explore All Recipes`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></section> `;
  if (featuredRecipes && featuredRecipes.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(featuredRecipes);
    $$payload.out += `<section class="mb-12"><h2 class="text-foreground mb-8 text-center font-serif text-3xl font-semibold md:text-4xl">Featured Recipes</h2> <div class="mb-8 flex justify-center gap-2">`;
    Button($$payload, {
      variant: "outline",
      size: "sm",
      onclick: () => goto(),
      class: "cursor-pointer rounded-full px-3 py-1 text-sm font-medium transition-all duration-200 hover:bg-blue-100 hover:text-blue-800 focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:outline-none",
      children: ($$payload2) => {
        $$payload2.out += `<!---->Crowd Pleasers`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----> `;
    Button($$payload, {
      variant: "outline",
      size: "sm",
      onclick: () => goto(),
      class: "cursor-pointer rounded-full px-3 py-1 text-sm font-medium transition-all duration-200 hover:bg-blue-100 hover:text-blue-800 focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:outline-none",
      children: ($$payload2) => {
        $$payload2.out += `<!---->Comfort Food`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----> `;
    Button($$payload, {
      variant: "outline",
      size: "sm",
      onclick: () => goto(),
      class: "cursor-pointer rounded-full px-3 py-1 text-sm font-medium transition-all duration-200 hover:bg-blue-100 hover:text-blue-800 focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:outline-none",
      children: ($$payload2) => {
        $$payload2.out += `<!---->Quick Dinners`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----></div> <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`;
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let recipe = each_array[index];
      $$payload.out += `<a${attr("href", `/recipes/${stringify(recipe.slug)}`)} class="group bg-card text-card-foreground flex flex-col overflow-hidden rounded-lg border shadow-sm transition-shadow hover:shadow-lg"><div class="overflow-hidden"><img${attr("src", `https://www.chefstorecookbook.com${recipe.image ?? "/placeholder.png"}`)}${attr("alt", recipe.title)} class="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="eager" fetchpriority="high" onload="this.__e=event" onerror="this.__e=event"></div> <div class="flex flex-grow flex-col p-4 md:p-5">`;
      Card_header($$payload, {
        class: "p-0 pb-2",
        children: ($$payload2) => {
          Card_title($$payload2, {
            class: "group-hover:text-primary font-serif text-lg leading-tight font-semibold md:text-xl",
            children: ($$payload3) => {
              $$payload3.out += `<!---->${escape_html(recipe.title)}`;
            },
            $$slots: { default: true }
          });
          $$payload2.out += `<!----> `;
          if (recipe.description) {
            $$payload2.out += "<!--[-->";
            Card_description($$payload2, {
              class: "text-muted-foreground mt-1 line-clamp-3 h-[4.5em] text-sm",
              children: ($$payload3) => {
                $$payload3.out += `<!---->${escape_html(recipe.description)}`;
              },
              $$slots: { default: true }
            });
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (recipe.tags && recipe.tags.length > 0) {
            $$payload2.out += "<!--[-->";
            const each_array_1 = ensure_array_like(recipe.tags);
            $$payload2.out += `<div class="mt-2 flex flex-wrap gap-1"><!--[-->`;
            for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
              let tag = each_array_1[$$index];
              $$payload2.out += `<span class="bg-muted text-muted-foreground border-muted-foreground/10 inline-block rounded-full border px-2 py-0.5 text-xs font-medium">${escape_html(tag.startsWith("difficulty-") ? tag.replace("difficulty-", "").replace(/\b\w/g, (c) => c.toUpperCase()) : tag.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()))}</span>`;
            }
            $$payload2.out += `<!--]--></div>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]-->`;
        },
        $$slots: { default: true }
      });
      $$payload.out += `<!----> `;
      Card_content($$payload, {
        class: "mt-auto p-0 pt-3",
        children: ($$payload2) => {
          $$payload2.out += `<div class="text-muted-foreground flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t pt-3 text-xs">`;
          if (recipe.totalTime) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<span class="flex items-center gap-1">`;
            Clock($$payload2, { class: "h-3.5 w-3.5" });
            $$payload2.out += `<!----> ${escape_html(recipe.totalTime)} min</span>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (recipe.difficulty) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<span class="flex items-center gap-1">`;
            Utensils_crossed($$payload2, { class: "h-3.5 w-3.5" });
            $$payload2.out += `<!----> ${escape_html(recipe.difficulty)}</span>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--></div>`;
        },
        $$slots: { default: true }
      });
      $$payload.out += `<!----></div></a>`;
    }
    $$payload.out += `<!--]--></div></section>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<p class="text-muted-foreground text-center">No featured recipes available at the moment.</p>`;
  }
  $$payload.out += `<!--]--></main>`;
  pop();
}
export {
  _page as default
};
