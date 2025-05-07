import { I as sanitize_props, J as spread_props, K as slot, E as head, M as ensure_array_like, C as pop, A as push, D as attr, N as stringify, F as escape_html } from "../../chunks/index3.js";
import { C as Card, a as Card_header, b as Card_title, c as Card_description, d as Card_content } from "../../chunks/card-title.js";
import "clsx";
import { B as Button } from "../../chunks/index5.js";
import { I as Icon, C as Clock } from "../../chunks/clock.js";
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
    $$payload2.out += `<meta name="description" content="Welcome to the Chefstore Cookbook. Discover delicious recipes for every occasion.">`;
  });
  $$payload.out += `<main class="flex-grow py-8 lg:py-12"><section class="mb-16 text-center"><h1 class="text-foreground mb-4 font-serif text-4xl font-bold tracking-tight md:text-5xl lg:text-5xl">Real meals for real tables</h1> <p class="text-muted-foreground mx-auto mb-8 max-w-3xl text-lg md:text-xl">Simple, satisfying recipes for your everyday life.</p> <p class="text-muted-foreground mx-auto mb-8 max-w-3xl text-sm md:text-base">Browse recipes and shop ingredients straight from the kitchen.</p> `;
  Button($$payload, {
    href: "/recipes",
    size: "lg",
    class: "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring mb-8 rounded-full px-8 py-3 text-base font-semibold shadow-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
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
      children: ($$payload2) => {
        $$payload2.out += `<!---->Quick Dinners`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----> `;
    Button($$payload, {
      variant: "outline",
      size: "sm",
      children: ($$payload2) => {
        $$payload2.out += `<!---->Plant-Based`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----> `;
    Button($$payload, {
      variant: "outline",
      size: "sm",
      children: ($$payload2) => {
        $$payload2.out += `<!---->Desserts`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----></div> <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`;
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let recipe = each_array[index];
      Card($$payload, {
        class: "group bg-card text-card-foreground flex flex-col overflow-hidden rounded-lg border shadow-sm transition-shadow hover:shadow-lg",
        children: ($$payload2) => {
          $$payload2.out += `<a${attr("href", `/recipes/${stringify(recipe.slug)}`)} class="flex h-full flex-col"><div class="overflow-hidden"><img${attr("src", recipe.image ?? "/placeholder.png")}${attr("alt", recipe.title)} class="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-105"${attr("loading", index === 0 ? "eager" : "lazy")}${attr("fetchpriority", index === 0 ? "high" : "auto")} onload="this.__e=event" onerror="this.__e=event"></div> <div class="flex flex-grow flex-col p-4 md:p-5">`;
          Card_header($$payload2, {
            class: "p-0 pb-2",
            children: ($$payload3) => {
              Card_title($$payload3, {
                class: "group-hover:text-primary font-serif text-lg leading-tight font-semibold md:text-xl",
                children: ($$payload4) => {
                  $$payload4.out += `<!---->${escape_html(recipe.title)}`;
                },
                $$slots: { default: true }
              });
              $$payload3.out += `<!----> `;
              if (recipe.description) {
                $$payload3.out += "<!--[-->";
                Card_description($$payload3, {
                  class: "text-muted-foreground mt-1 line-clamp-3 h-[4.5em] text-sm",
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
          Card_content($$payload2, {
            class: "mt-auto p-0 pt-3",
            children: ($$payload3) => {
              $$payload3.out += `<div class="text-muted-foreground flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t pt-3 text-xs">`;
              if (recipe.totalTime) {
                $$payload3.out += "<!--[-->";
                $$payload3.out += `<span class="flex items-center gap-1">`;
                Clock($$payload3, { class: "h-3.5 w-3.5" });
                $$payload3.out += `<!----> ${escape_html(recipe.totalTime)} min</span>`;
              } else {
                $$payload3.out += "<!--[!-->";
              }
              $$payload3.out += `<!--]--> `;
              if (recipe.difficulty) {
                $$payload3.out += "<!--[-->";
                $$payload3.out += `<span class="flex items-center gap-1">`;
                Utensils_crossed($$payload3, { class: "h-3.5 w-3.5" });
                $$payload3.out += `<!----> ${escape_html(recipe.difficulty)}</span>`;
              } else {
                $$payload3.out += "<!--[!-->";
              }
              $$payload3.out += `<!--]--></div>`;
            },
            $$slots: { default: true }
          });
          $$payload2.out += `<!----></div></a>`;
        },
        $$slots: { default: true }
      });
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
