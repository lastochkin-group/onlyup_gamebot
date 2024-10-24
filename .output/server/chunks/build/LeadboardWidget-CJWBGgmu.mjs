import { _ as __nuxt_component_0 } from './nuxt-link-V08wtwK9.mjs';
import { _ as _sfc_main$1 } from './Avatar-B2Gh6mcJ.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = {
  __name: "LeadboardWidget",
  __ssrInlineRender: true,
  props: {
    leaders: {
      type: Array,
      default: [
        { id: 0, name: "Player/Team", score: 1e5, place: 3 },
        { id: 1, name: "Player/Team", score: 2e5, place: 2 },
        { id: 2, name: "Player/Team", score: 3e5, place: 1 }
      ]
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_Avatar = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-secondary_bg_color rounded-3xl overflow-hidden pt-6" }, _attrs))}><div class="grid grid-cols-3 items-end rounded-b-3xl overflow-hidden"><!--[-->`);
      ssrRenderList(__props.leaders, (leader) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          key: leader.id,
          to: "/team/" + leader.id,
          class: ["flex flex-col gap-y-3", leader.place === 1 && "order-2", leader.place === 2 && "order-1", leader.place === 3 && "order-3"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col items-center justify-center gap-y-1.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Avatar, {
                name: leader.name
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-sm font-bold line-clamp-2 text-center"${_scopeId}>${ssrInterpolate(leader.name)}</span></div><div class="${ssrRenderClass(["bg-accent_gradient flex flex-col justify-between items-center py-2.5", leader.place === 1 && "h-[220px] rounded-t-2xl", leader.place === 2 && "h-[170px]", leader.place === 3 && "h-[120px]"])}"${_scopeId}><span class="${ssrRenderClass(["text-accent_text_color opacity-50 text-sm uppercase font-bold text-nowrap", leader.score > 1e8 && "text-[10px]"])}"${_scopeId}>${ssrInterpolate(leader.score.toLocaleString("en-EN"))} M</span><span class="text-[48px] font-bold text-accent_text_color"${_scopeId}>${ssrInterpolate(leader.place)}</span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col items-center justify-center gap-y-1.5" }, [
                  createVNode(_component_Avatar, {
                    name: leader.name
                  }, null, 8, ["name"]),
                  createVNode("span", { class: "text-sm font-bold line-clamp-2 text-center" }, toDisplayString(leader.name), 1)
                ]),
                createVNode("div", {
                  class: ["bg-accent_gradient flex flex-col justify-between items-center py-2.5", leader.place === 1 && "h-[220px] rounded-t-2xl", leader.place === 2 && "h-[170px]", leader.place === 3 && "h-[120px]"]
                }, [
                  createVNode("span", {
                    class: ["text-accent_text_color opacity-50 text-sm uppercase font-bold text-nowrap", leader.score > 1e8 && "text-[10px]"]
                  }, toDisplayString(leader.score.toLocaleString("en-EN")) + " M", 3),
                  createVNode("span", { class: "text-[48px] font-bold text-accent_text_color" }, toDisplayString(leader.place), 1)
                ], 2)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LeadboardWidget.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=LeadboardWidget-CJWBGgmu.mjs.map
