import { useSSRContext, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';

const _sfc_main = {
  __name: "Contact",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "Contact title"
    },
    link: {
      type: String,
      default: "#"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: __props.link,
        target: "_blank",
        class: "bg-secondary_bg_color rounded-3xl p-4 flex gap-x-4 items-center"
      }, _attrs))}><span class="w-10 shrink-0 aspect-square rounded-full flex justify-center items-center bg-accent_gradient">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "mingcute:telegram-fill",
        class: "text-accent_text_color text-xl"
      }, null, _parent));
      _push(`</span><span class="font-medium">${ssrInterpolate(__props.title)}</span></a>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Contact-DN1S2wAd.mjs.map
