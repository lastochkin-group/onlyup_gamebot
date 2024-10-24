import { _ as _sfc_main$1 } from './Avatar-B2Gh6mcJ.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "LeadboardItem",
  __ssrInlineRender: true,
  props: {
    place: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: "Player"
    },
    score: {
      type: Number,
      default: 0
    },
    owner: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Avatar = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex justify-between items-center bg-secondary_bg_color rounded-3xl px-4 py-2.5", __props.owner && "outline-2 outline-accent_color outline"]
      }, _attrs))}><div class="flex gap-x-4 items-center">`);
      _push(ssrRenderComponent(_component_Avatar, { name: __props.name }, null, _parent));
      _push(`<div class="flex flex-col"><span class="text-sm font-semibold line-clamp-1">${ssrInterpolate(__props.name)}</span><span class="text-xs text-hint_color font-medium">#${ssrInterpolate(__props.place.toLocaleString("en-EN"))}</span></div></div><span class="text-sm font-bold text-nowrap">${ssrInterpolate(__props.score.toLocaleString("en-EN"))} \u041C</span></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LeadboardItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=LeadboardItem-CQiDYyoU.mjs.map
