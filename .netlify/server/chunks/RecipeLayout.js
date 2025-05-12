import { O as store_get, E as head, D as attr, F as escape_html, M as ensure_array_like, P as unsubscribe_stores, C as pop, A as push } from "./index3.js";
import { U as Users, B as Badge, p as page } from "./users.js";
import "clsx";
import { C as Clock } from "./clock.js";
function RecipeLayout($$payload, $$props) {
  push();
  var $$store_subs;
  let { $$slots, $$events, ...props } = $$props;
  let title = props.title ?? "";
  let description = props.description ?? "";
  let image = props.image ?? "";
  let prepTime = props.prepTime ?? null;
  let cookTime = props.cookTime ?? null;
  let totalTime = props.totalTime ?? null;
  let difficulty = props.difficulty ?? "";
  let servings = props.servings ?? null;
  let tags = props.tags ?? [];
  let date = props.date ?? null;
  let author = props.author ?? "Chefstore Cookbook";
  props.relatedProducts ?? [];
  let content = props.content;
  let slug = props.slug ?? "";
  const siteBaseUrl = "https://chefstorecookbook.netlify.app";
  const fullImageUrl = image ? image.startsWith("http") ? image : `${siteBaseUrl}${image.startsWith("/") ? "" : "/"}${image}` : `${siteBaseUrl}/default-og-image.png`;
  const canonicalUrl = `${siteBaseUrl}/recipes/${store_get($$store_subs ??= {}, "$page", page).params.slug}`;
  function formatTime(minutes) {
    if (minutes === null) return "N/A";
    return `${minutes} min`;
  }
  function getResponsiveImageData(image2) {
    if (!image2 || !image2.startsWith("/images/recipes/")) return null;
    const pathParts = image2.split("/");
    const filename = pathParts.pop()?.replace(".webp", "") ?? "";
    const resizedFolder = `${pathParts.join("/")}/resized`;
    return {
      srcset: [400, 800, 1200].map((w) => `${resizedFolder}/${filename}-${w}w.webp ${w}w`).join(", "),
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px",
      fallback: `${resizedFolder}/${filename}-800w.webp`
    };
  }
  let responsiveImage = (() => getResponsiveImageData(image))();
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(title)} | Chefstore Cookbook</title>`;
    $$payload2.out += `<meta name="description"${attr("content", description)}> <meta name="author"${attr("content", author)}> <meta property="og:title"${attr("content", title)}> <meta property="og:description"${attr("content", description)}> <meta property="og:image"${attr("content", fullImageUrl)}> <meta property="og:url"${attr("content", canonicalUrl)}> <meta property="og:type" content="article"> <meta property="og:site_name" content="Chefstore Cookbook"> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:title"${attr("content", title)}> <meta name="twitter:description"${attr("content", description)}> <meta name="twitter:image"${attr("content", fullImageUrl)}> `;
    if (date) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta property="article:published_time"${attr("content", new Date(date).toISOString())}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (tags && tags.length > 0) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta property="article:tag"${attr("content", tags.join(", "))}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> <link rel="canonical"${attr("href", canonicalUrl)}> `;
    if (responsiveImage) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<link rel="preload" as="image"${attr("href", responsiveImage.fallback)}${attr("imagesrcset", responsiveImage.srcset)}${attr("imagesizes", responsiveImage.sizes)} type="image/webp">`;
    } else if (image) {
      $$payload2.out += "<!--[1-->";
      $$payload2.out += `<link rel="preload" as="image"${attr("href", image)} type="image/webp">`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]-->`;
  });
  $$payload.out += `<article class="recipe-article mx-auto max-w-3xl svelte-1qodeup">`;
  if (image) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="mb-6 overflow-hidden rounded-lg svelte-1qodeup">`;
    if (responsiveImage) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<picture><source${attr("srcset", responsiveImage.srcset)}${attr("sizes", responsiveImage.sizes)} type="image/webp"> <img${attr("src", responsiveImage.fallback)}${attr("alt", title)} class="aspect-video w-full object-cover svelte-1qodeup" width="800" height="450" onload="this.__e=event" onerror="this.__e=event"></picture>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<img${attr("src", image || "/placeholder.png")}${attr("srcset", image && image.startsWith("/images/recipes/") ? `/images/recipes/${slug}/resized/${slug}-400w.webp 400w, /images/recipes/${slug}/resized/${slug}-800w.webp 800w, /images/recipes/${slug}/resized/${slug}-1200w.webp 1200w` : void 0)} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"${attr("alt", title)} class="aspect-video w-full object-cover svelte-1qodeup" width="800" height="450" onload="this.__e=event" onerror="this.__e=event">`;
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <header class="mb-8 svelte-1qodeup"><h1 class="mb-4 text-3xl leading-tight font-bold lg:text-4xl svelte-1qodeup">${escape_html(title)}</h1> `;
  if (description) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p class="text-muted-foreground mb-6 text-lg svelte-1qodeup">${escape_html(description)}</p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="flex flex-wrap items-center gap-x-6 gap-y-2 svelte-1qodeup">`;
  if (prepTime !== null || cookTime !== null || totalTime !== null) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="flex items-center gap-2 svelte-1qodeup">`;
    Clock($$payload, { class: "h-5 w-5 text-amber-600" });
    $$payload.out += `<!----> <div class="text-sm svelte-1qodeup">`;
    if (totalTime !== null) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<strong>Total:</strong> ${escape_html(formatTime(totalTime))}`;
    } else {
      $$payload.out += "<!--[!-->";
      if (prepTime !== null) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<span><strong>Prep:</strong> ${escape_html(formatTime(prepTime))}</span>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--> `;
      if (prepTime !== null && cookTime !== null) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<span class="mx-1">•</span>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--> `;
      if (cookTime !== null) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<span><strong>Cook:</strong> ${escape_html(formatTime(cookTime))}</span>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]--></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (servings !== null) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="flex items-center gap-2 svelte-1qodeup">`;
    Users($$payload, { class: "h-5 w-5 text-amber-600" });
    $$payload.out += `<!----> <div class="text-sm svelte-1qodeup"><strong>Serves:</strong> ${escape_html(servings)}</div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (difficulty) {
    $$payload.out += "<!--[-->";
    Badge($$payload, {
      variant: "outline",
      class: "text-sm capitalize",
      children: ($$payload2) => {
        $$payload2.out += `<!---->${escape_html(difficulty)}`;
      },
      $$slots: { default: true }
    });
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> `;
  if (tags && tags.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(tags.filter((tag) => !tag.startsWith("difficulty-")));
    $$payload.out += `<div class="mt-4 flex flex-wrap gap-2 svelte-1qodeup"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let tag = each_array[$$index];
      Badge($$payload, {
        variant: "secondary",
        class: "text-xs",
        children: ($$payload2) => {
          $$payload2.out += `<!---->${escape_html(tag)}`;
        },
        $$slots: { default: true }
      });
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></header> <div class="prose prose-amber recipe-content max-w-none">`;
  if (content) {
    $$payload.out += "<!--[-->";
    content($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></article>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  RecipeLayout as R
};
