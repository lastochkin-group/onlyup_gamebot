import { _ as __nuxt_component_0 } from './nuxt-link-V08wtwK9.mjs';
import { useSSRContext, mergeProps, withCtx, unref, createVNode, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';

const _sfc_main = {
  __name: "LifeCounter",
  __ssrInlineRender: true,
  props: {
    lifes: {
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
        to: "/store",
        class: "flex items-center justify-center gap-x-2 bg-secondary_bg_color rounded-2xl h-11 px-4"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "typcn:heart-full-outline",
              class: "text-accent_color text-2xl"
            }, null, _parent2, _scopeId));
            _push2(`<span class="font-bold text-lg"${_scopeId}>${ssrInterpolate(__props.lifes)}</span><span class="flex justify-center items-center overflow-hidden bg-pay_gradient rounded-full w-5 aspect-square shrink-0"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "heroicons-solid:plus-sm",
              class: "text-accent_text_color text-lg"
            }, null, _parent2, _scopeId));
            _push2(`</span>`);
          } else {
            return [
              createVNode(unref(Icon), {
                icon: "typcn:heart-full-outline",
                class: "text-accent_color text-2xl"
              }),
              createVNode("span", { class: "font-bold text-lg" }, toDisplayString(__props.lifes), 1),
              createVNode("span", { class: "flex justify-center items-center overflow-hidden bg-pay_gradient rounded-full w-5 aspect-square shrink-0" }, [
                createVNode(unref(Icon), {
                  icon: "heroicons-solid:plus-sm",
                  class: "text-accent_text_color text-lg"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LifeCounter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=LifeCounter-DuxnFWIm.mjs.map
