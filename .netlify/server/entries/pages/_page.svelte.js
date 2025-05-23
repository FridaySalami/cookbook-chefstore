import { I as head, U as ensure_array_like, G as attr, V as escape_html, X as stringify, C as pop, A as push } from "../../chunks/index2.js";
import "clsx";
import { B as Button } from "../../chunks/index4.js";
import "../../chunks/client.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  const featuredRecipes = data.featuredRecipes;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Chefstore Cookbook - Home</title>`;
    $$payload2.out += `<meta name="description" content="Delicious, no-fuss recipes made with real ingredients. From weeknight wonders to weekend crowd-pleasers.">`;
  });
  $$payload.out += `<main class="flex-grow pt-4 pb-8 lg:pt-6 lg:pb-12">`;
  if (featuredRecipes && featuredRecipes.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(featuredRecipes);
    $$payload.out += `<section class="mb-6"><div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`;
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let recipe = each_array[index];
      $$payload.out += `<a${attr("href", `/recipes/${stringify(recipe.slug)}`)} class="group relative block overflow-hidden"><div class="relative overflow-hidden"><img${attr("src", recipe.image ?? "/placeholder.png")}${attr("alt", recipe.title)} class="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="eager" fetchpriority="high" onload="this.__e=event" onerror="this.__e=event"> <div class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent"><div class="absolute bottom-0 w-full p-4"><h3 class="mb-3 text-center font-sans text-base leading-tight font-medium tracking-wide text-white md:text-lg">${escape_html(recipe.title)}</h3> <div class="text-center"><button class="min-h-[44px] w-full cursor-pointer rounded-full bg-white/95 px-6 py-2 text-base font-semibold text-amber-900 transition-colors duration-200 hover:bg-white focus:bg-white focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:outline-none"${attr("aria-label", `View recipe for ${stringify(recipe.title)}`)}>View Recipe</button></div></div></div></div></a>`;
    }
    $$payload.out += `<!--]--></div> <div class="mt-4 text-center">`;
    Button($$payload, {
      href: "/recipes",
      size: "lg",
      class: "min-h-[44px] w-auto cursor-pointer rounded-full border-2 border-amber-900/40 bg-white px-8 py-3 text-base font-semibold text-amber-900 shadow-lg transition-colors duration-200 hover:bg-white/90 focus:bg-white focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:outline-none",
      children: ($$payload2) => {
        $$payload2.out += `<!---->Explore All Recipes`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----></div></section>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<p class="text-muted-foreground text-center">No featured recipes available at the moment.</p>`;
  }
  $$payload.out += `<!--]--> <section class="mb-8 text-center"><h1 class="text-foreground mb-4 font-serif text-4xl font-bold tracking-widest md:text-5xl lg:text-5xl">Real meals for real tables</h1> <p class="text-muted-foreground mx-auto mb-8 max-w-3xl text-lg md:text-xl">Simple, satisfying recipes for your everyday life.</p> <p class="text-muted-foreground mx-auto mb-8 max-w-3xl text-sm md:text-base">Browse recipes and shop ingredients straight from the kitchen.</p></section></main>`;
  pop();
}
export {
  _page as default
};
