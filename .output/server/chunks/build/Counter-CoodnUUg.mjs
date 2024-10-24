import { _ as __nuxt_component_0 } from './nuxt-link-V08wtwK9.mjs';
import { useSSRContext, mergeProps, withCtx, unref, createVNode, toDisplayString, computed } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';

const _sfc_main$1 = {
  __name: "BagePosition",
  __ssrInlineRender: true,
  props: {
    place: {
      type: Number,
      default: 1e4
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
        to: "/players",
        class: "flex items-center gap-x-1 bg-accent_color w-fit rounded-xl text-sm font-bold text-accent_text_color px-4 h-8"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}># ${ssrInterpolate(__props.place.toLocaleString("en-EN"))}</span>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "ep:arrow-right-bold",
              class: "text-xs"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", null, "# " + toDisplayString(__props.place.toLocaleString("en-EN")), 1),
              createVNode(unref(Icon), {
                icon: "ep:arrow-right-bold",
                class: "text-xs"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BagePosition.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Counter",
  __ssrInlineRender: true,
  props: {
    value: {
      type: Number,
      default: 0
    },
    description: {
      type: String,
      default: "Record meters"
    }
  },
  setup(__props) {
    const props = __props;
    const formattedValue = computed(() => {
      return String(props.value).padStart(6, "0");
    });
    const grayDigits = computed(() => {
      var _a;
      const leadingZeros = ((_a = formattedValue.value.match(/^0+/)) == null ? void 0 : _a[0].length) || 0;
      return leadingZeros;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center items-center flex-col gap-y-2" }, _attrs))}><div class="text-[70px] font-extrabold flex leading-none"><!--[-->`);
      ssrRenderList(formattedValue.value, (digit, index) => {
        _push(`<div><span class="${ssrRenderClass({ "text-hint_color": index < grayDigits.value })}">${ssrInterpolate(digit)}</span></div>`);
      });
      _push(`<!--]--></div>`);
      if (__props.description) {
        _push(`<span class="uppercase font-bold text-lg">${ssrInterpolate(__props.description)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Counter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=Counter-CoodnUUg.mjs.map
