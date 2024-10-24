import { _ as __nuxt_component_0 } from './nuxt-link-V08wtwK9.mjs';
import { useSSRContext, ref, withCtx, unref, createVNode } from 'vue';
import { ssrRenderStyle, ssrRenderSlot, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';

const _sfc_main = {
  __name: "BottomMenu",
  __ssrInlineRender: true,
  props: {
    activePage: {
      type: Number
    }
  },
  setup(__props) {
    const pages = [
      { id: 0, icon: "ci:users", path: "/frens" },
      { id: 1, icon: "solar:graph-up-broken", path: "/" },
      { id: 2, icon: "token:ton", path: "/drop" }
    ];
    ref(null);
    const menuHeight = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<!--[--><span style="${ssrRenderStyle({ height: menuHeight.value + "px" })}" class="flex"></span><div class="fixed bottom-0 left-0 right-0">`);
      if (_ctx.$slots.default) {
        _push(`<div class="px-4 pb-4 z-10 relative">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-secondary_bg_color h-24 pb-6 flex justify-around items-center z-20 relative"><!--[-->`);
      ssrRenderList(pages, (page) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: page.path,
          class: ["w-full h-full flex justify-center items-center", __props.activePage === page.id ? "text-accent_color" : "text-hint_color"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Icon), {
                icon: page.icon,
                class: "text-3xl"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(Icon), {
                  icon: page.icon,
                  class: "text-3xl"
                }, null, 8, ["icon"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BottomMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BottomMenu-DK9IKwv9.mjs.map
