import { Y as current_component, I as sanitize_props, P as rest_props, Q as fallback, V as store_get, K as slot, S as spread_attributes, W as unsubscribe_stores, O as bind_props, C as pop, A as push, J as spread_props, E as head, D as attr, F as escape_html, M as ensure_array_like } from "./index3.js";
import { U as Users, B as Badge } from "./users.js";
import "dequal";
import { w as withGet, m as makeElement, c as cn, I as Icon, C as Clock } from "./clock.js";
import "clsx";
import { w as writable } from "./index2.js";
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
function toWritableStores(properties) {
  const result = {};
  Object.keys(properties).forEach((key) => {
    const propertyKey = key;
    const value = properties[propertyKey];
    result[propertyKey] = withGet(writable(value));
  });
  return result;
}
const defaults = {
  orientation: "horizontal",
  decorative: false
};
const createSeparator = (props) => {
  const withDefaults = { ...defaults, ...props };
  const options = toWritableStores(withDefaults);
  const { orientation, decorative } = options;
  const root = makeElement("separator", {
    stores: [orientation, decorative],
    returned: ([$orientation, $decorative]) => {
      const ariaOrientation = $orientation === "vertical" ? $orientation : void 0;
      return {
        role: $decorative ? "none" : "separator",
        "aria-orientation": ariaOrientation,
        "aria-hidden": $decorative,
        "data-orientation": $orientation
      };
    }
  });
  return {
    elements: {
      root
    },
    options
  };
};
function createBitAttrs(bit, parts) {
  const attrs = {};
  parts.forEach((part) => {
    attrs[part] = {
      [`data-${bit}-${part}`]: ""
    };
  });
  return (part) => attrs[part];
}
function removeUndefined(obj) {
  const result = {};
  for (const key in obj) {
    const value = obj[key];
    if (value !== void 0) {
      result[key] = value;
    }
  }
  return result;
}
function getOptionUpdater(options) {
  return function(key, value) {
    if (value === void 0)
      return;
    const store = options[key];
    if (store) {
      store.set(value);
    }
  };
}
function getSeparatorData() {
  const NAME = "separator";
  const PARTS = ["root"];
  return {
    NAME,
    PARTS
  };
}
function setCtx(props) {
  const { NAME, PARTS } = getSeparatorData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const separator = { ...createSeparator(removeUndefined(props)), getAttrs };
  return {
    ...separator,
    updateOption: getOptionUpdater(separator.options)
  };
}
function Separator$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "orientation",
    "decorative",
    "asChild",
    "el"
  ]);
  push();
  var $$store_subs;
  let builder;
  let orientation = fallback($$props["orientation"], "horizontal");
  let decorative = fallback($$props["decorative"], true);
  let asChild = fallback($$props["asChild"], false);
  let el = fallback($$props["el"], () => void 0, true);
  const { elements: { root }, updateOption, getAttrs } = setCtx({ orientation, decorative });
  const attrs = getAttrs("root");
  updateOption("orientation", orientation);
  updateOption("decorative", decorative);
  builder = store_get($$store_subs ??= {}, "$root", root);
  Object.assign(builder, attrs);
  if (asChild) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "default", { builder }, null);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes({ ...builder, ...$$restProps })}></div>`;
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { orientation, decorative, asChild, el });
  pop();
}
function Separator($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "orientation", "decorative"]);
  push();
  let className = fallback($$props["class"], void 0);
  let orientation = fallback($$props["orientation"], "horizontal");
  let decorative = fallback($$props["decorative"], void 0);
  Separator$1($$payload, spread_props([
    {
      class: cn("bg-border shrink-0", orientation === "horizontal" ? "h-[1px] w-full" : "min-h-full w-[1px]", className),
      orientation,
      decorative
    },
    $$restProps
  ]));
  bind_props($$props, { class: className, orientation, decorative });
  pop();
}
function Arrow_left($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "m12 19-7-7 7-7" }],
    ["path", { "d": "M19 12H5" }]
  ];
  Icon($$payload, spread_props([
    { name: "arrow-left" },
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
function Chef_hat($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"
      }
    ],
    ["path", { "d": "M6 17h12" }]
  ];
  Icon($$payload, spread_props([
    { name: "chef-hat" },
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
function RecipeLayout($$payload, $$props) {
  push();
  let {
    children,
    // Add children prop for rendering slot content
    title = "",
    description = "",
    image = "",
    // Will use placeholder if empty
    prepTime = null,
    cookTime = null,
    totalTime = null,
    difficulty = "",
    servings = null,
    tags = [],
    products = [],
    // Added products prop for Shopify integration
    relatedProducts = []
    // Add relatedProducts prop
  } = $$props;
  function formatTag(tag) {
    return tag.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  onDestroy(() => {
  });
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(title)} | Chefstore Cookbook</title>`;
    $$payload2.out += `<meta name="description"${attr("content", description)}> <meta property="og:title"${attr("content", title)}> <meta property="og:description"${attr("content", description)}> `;
    if (image) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta property="og:image"${attr("content", image)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]-->`;
  });
  $$payload.out += `<article class="relative mx-auto max-w-3xl px-4 py-8 md:px-6 lg:px-8"><div class="relative mb-8 h-[300px] overflow-hidden rounded-lg shadow-md md:h-[400px]"><img${attr("src", image)}${attr("alt", title)} class="h-full w-full object-cover" loading="eager" fetchpriority="high" onload="this.__e=event" onerror="this.__e=event"></div> <header class="mb-8"><h1 class="text-foreground mb-3 text-3xl font-bold tracking-tight md:text-4xl">${escape_html(title)}</h1> `;
  if (description) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p class="text-muted-foreground mb-6 text-lg">${escape_html(description)}</p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="text-muted-foreground flex flex-wrap items-center gap-x-6 gap-y-3 border-y py-4 text-sm">`;
  if (totalTime) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="flex items-center gap-1.5">`;
    Clock($$payload, { class: "h-4 w-4" });
    $$payload.out += `<!----> <span><strong>Total:</strong> ${escape_html(totalTime)} min</span></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (prepTime && !totalTime) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="flex items-center gap-1.5">`;
    Clock($$payload, { class: "h-4 w-4" });
    $$payload.out += `<!----> <span><strong>Prep:</strong> ${escape_html(prepTime)} min</span></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (cookTime && !totalTime) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="flex items-center gap-1.5">`;
    Clock($$payload, { class: "h-4 w-4" });
    $$payload.out += `<!----> <span><strong>Cook:</strong> ${escape_html(cookTime)} min</span></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (difficulty) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="flex items-center gap-1.5">`;
    Chef_hat($$payload, { class: "h-4 w-4" });
    $$payload.out += `<!----> <span><strong>Difficulty:</strong> ${escape_html(difficulty)}</span></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (servings) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="flex items-center gap-1.5">`;
    Users($$payload, { class: "h-4 w-4" });
    $$payload.out += `<!----> <span><strong>Servings:</strong> ${escape_html(servings)}</span></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></header> <div class="prose prose-slate dark:prose-invert prose-headings:mb-4 prose-headings:mt-8 prose-p:my-4 prose-ul:my-4 prose-ol:my-4 max-w-none">`;
  children($$payload);
  $$payload.out += `<!----></div> `;
  if (tags && tags.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(tags);
    Separator($$payload, { class: "my-8" });
    $$payload.out += `<!----> <div class="flex flex-wrap items-center gap-2"><span class="text-muted-foreground text-sm font-medium">Tags:</span> <!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let tag = each_array[$$index];
      Badge($$payload, {
        variant: "secondary",
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
  Separator($$payload, { class: "my-8" });
  $$payload.out += `<!----> <div class="text-center"><a href="/recipes" class="text-primary inline-flex items-center gap-2 text-sm transition-colors hover:underline">`;
  Arrow_left($$payload, { class: "h-4 w-4" });
  $$payload.out += `<!----> Back to All Recipes</a></div>  `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></article>`;
  pop();
}
export {
  RecipeLayout as R
};
