import { useSSRContext, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';

function stringToColor(str) {
  let hash1 = 0;
  let hash2 = 0;
  let hash3 = 0;
  for (let i = 0; i < str.length; i++) {
    hash1 = str.charCodeAt(i) + ((hash1 << 5) - hash1);
    hash2 = str.charCodeAt(i) + ((hash2 << 7) - hash2);
    hash3 = str.charCodeAt(i) + ((hash3 << 3) - hash3);
  }
  let r = hash1 & 255;
  let g = hash2 & 255;
  let b = hash3 & 255;
  const color = `#${("00" + r.toString(16)).slice(-2)}${("00" + g.toString(16)).slice(-2)}${("00" + b.toString(16)).slice(-2)}`;
  return color;
}
function isColorDark(color) {
  const rgb = parseInt(color.slice(1), 16);
  const r = rgb >> 16 & 255;
  const g = rgb >> 8 & 255;
  const b = rgb >> 0 & 255;
  const luma = 0.299 * r + 0.587 * g + 0.114 * b;
  return luma < 128;
}
const _sfc_main = {
  __name: "Avatar",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      default: "Player"
    }
  },
  setup(__props) {
    var _a;
    const props = __props;
    let avatarColor = stringToColor((_a = props.name) == null ? void 0 : _a.slice(0, 2));
    let textColor = isColorDark(avatarColor) ? "#FFFFFF" : "#000000";
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: { backgroundColor: unref(avatarColor), color: unref(textColor) },
        class: "w-11 h-11 shrink-0 rounded-[20px] flex items-center justify-center text-sm font-bold uppercase"
      }, _attrs))}>${ssrInterpolate((_a2 = __props.name) == null ? void 0 : _a2.slice(0, 2))}</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Avatar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Avatar-B2Gh6mcJ.mjs.map
