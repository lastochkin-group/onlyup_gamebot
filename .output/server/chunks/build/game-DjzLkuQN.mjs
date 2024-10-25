import { _ as _sfc_main$1$1, a as _sfc_main$4 } from './Counter-b-jZQNxQ.mjs';
import { _ as _sfc_main$5 } from './Disclosure-CnIEQRBQ.mjs';
import { _ as _sfc_main$6 } from './LifeCounter-DuxnFWIm.mjs';
import { useSSRContext, withCtx, createVNode, Transition, mergeProps, computed, unref } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, u as useNuxtApp } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-V08wtwK9.mjs';
import { _ as _sfc_main$7 } from './BottomMenu-DK9IKwv9.mjs';
import { _ as _sfc_main$8 } from './MainButton-wKHtjEam.mjs';
import { useRouter } from 'vue-router';
import '@iconify/vue';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _sfc_main$3 = {
  __name: "BeforeRecord",
  __ssrInlineRender: true,
  props: {
    recordMeters: {
      type: Number,
      default: 200
    },
    score: {
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const message = computed(() => {
      if (props.score >= props.recordMeters) {
        return "The record is broken!";
      } else {
        return `Before the record: ${(props.recordMeters - props.score).toLocaleString("en-EN")}`;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-x-1 font-semibold text-sm justify-center w-full bg-secondary_bg_color rounded-2xl h-11" }, _attrs))}><span>${ssrInterpolate(unref(message))}</span></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BeforeRecord.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "GameButton",
  __ssrInlineRender: true,
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        disabled: !__props.isActive,
        class: ["w-full aspect-square rounded-3xl relative overflow-hidden bg-accent_color", __props.isActive ? "wave-animation" : "opacity-40 active:opacity-40"]
      }, _attrs))} data-v-6e491015>`);
      if (__props.isActive) {
        _push(`<span class="uppercase font-bold text-sm text-accent_text_color wave-text" data-v-6e491015>Select</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GameButton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-6e491015"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_GameButton = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col overflow-hidden fade-out-mask" }, _attrs))}><span class="w-full flex justify-center font-bold text-sm p-2 text-accent_color">20 M</span><div class="grid grid-cols-4 gap-2"><!--[-->`);
  ssrRenderList(4, (el) => {
    _push(ssrRenderComponent(_component_GameButton, null, null, _parent));
  });
  _push(`<!--]--></div><span class="w-full flex justify-center font-bold text-sm p-2 text-accent_color">10 M</span><div class="grid grid-cols-4 gap-2"><!--[-->`);
  ssrRenderList(4, (el) => {
    _push(ssrRenderComponent(_component_GameButton, { isActive: true }, null, _parent));
  });
  _push(`<!--]--></div><span class="w-full flex justify-center font-bold text-sm p-2 text-accent_color">0 M</span></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GameField.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "game",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp().$webapp;
    const router = useRouter();
    const back = () => {
      if ((void 0).history.length > 1) {
        router.go(-1);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BagePosition = _sfc_main$1$1;
      const _component_Counter = _sfc_main$4;
      const _component_Disclosure = _sfc_main$5;
      const _component_LifeCounter = _sfc_main$6;
      const _component_BeforeRecord = _sfc_main$3;
      const _component_GameField = __nuxt_component_5;
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_BottomMenu = _sfc_main$7;
      const _component_MainButton = _sfc_main$8;
      _push(`<!--[--><template><div class="flex flex-col gap-y-6" data-v-7b3dca0c><div class="flex flex-col justify-center items-center gap-y-2" data-v-7b3dca0c>`);
      _push(ssrRenderComponent(_component_BagePosition, null, null, _parent));
      _push(ssrRenderComponent(_component_Counter, {
        value: 0,
        description: "Total score"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Disclosure, null, null, _parent));
      _push(`<div class="flex gap-x-2 items-center" data-v-7b3dca0c>`);
      _push(ssrRenderComponent(_component_LifeCounter, null, null, _parent));
      _push(ssrRenderComponent(_component_BeforeRecord, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_GameField, null, null, _parent));
      _push(`<div class="flex flex-col gap-y-2" data-v-7b3dca0c><h4 class="px-4 text-lg font-bold uppercase" data-v-7b3dca0c>Inventory:</h4><div class="flex justify-between gap-x-2 items-center p-4 rounded-3xl bg-secondary_bg_color" data-v-7b3dca0c><span class="uppercase font-semibold text-hint_color text-sm" data-v-7b3dca0c>Inventory is empty</span>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/store",
        class: "bg-pay_gradient text-accent_text_color uppercase font-semibold rounded-2xl w-24 h-11 flex justify-center items-center text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-7b3dca0c${_scopeId}>Store</span>`);
          } else {
            return [
              createVNode("span", null, "Store")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></template>`);
      _push(ssrRenderComponent(_component_BottomMenu, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between items-center gap-x-2" data-v-7b3dca0c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MainButton, {
              onMainClick: back,
              title: "Back"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(Transition, {
                name: "slide-fade",
                mode: "out-in"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex justify-between items-center gap-x-2" }, [
                    createVNode(_component_MainButton, {
                      onMainClick: back,
                      title: "Back"
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/game.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const game = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7b3dca0c"]]);

export { game as default };
//# sourceMappingURL=game-DjzLkuQN.mjs.map
