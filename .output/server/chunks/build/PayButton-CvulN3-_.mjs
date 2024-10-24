import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = {
  __name: "PayButton",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "Pay"
    }
  },
  emits: ["mainClick"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<button${ssrRenderAttrs(mergeProps({ class: "flex justify-center items-center h-14 bg-pay_gradient w-full rounded-[20px] text-accent_text_color uppercase font-semibold gap-x-1" }, _attrs))}>${(_a = __props.title) != null ? _a : ""}</button>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PayButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=PayButton-CvulN3-_.mjs.map
