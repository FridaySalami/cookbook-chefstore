import { I as sanitize_props, J as spread_props, K as slot, P as rest_props, A as push, Q as fallback, S as spread_attributes, T as clsx, O as bind_props, C as pop } from "./index3.js";
import { I as Icon, c as cn } from "./clock.js";
function Chevron_right($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [["path", { "d": "m9 18 6-6-6-6" }]];
  Icon($$payload, spread_props([
    { name: "chevron-right" },
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
function Card_footer($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = fallback($$props["class"], void 0);
  $$payload.out += `<div${spread_attributes(
    {
      class: clsx(cn("flex items-center p-6 pt-0", className)),
      ...$$restProps
    }
  )}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { class: className });
  pop();
}
export {
  Card_footer as C,
  Chevron_right as a
};
