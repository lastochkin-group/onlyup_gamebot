import { _ as _sfc_main$4 } from './LifeCounter-DuxnFWIm.mjs';
import { withCtx, createVNode, Transition, useSSRContext, mergeProps, unref, ref, watch } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderTeleport, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { _ as _sfc_main$5 } from './BottomMenu-DK9IKwv9.mjs';
import { _ as _sfc_main$6 } from './MainButton-wKHtjEam.mjs';
import { useRouter } from 'vue-router';
import { u as useNuxtApp } from './server.mjs';
import './nuxt-link-V08wtwK9.mjs';
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
  __name: "InventoryItem",
  __ssrInlineRender: true,
  props: {
    count: {
      type: Number,
      default: 1
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({ class: "bg-secondary_bg_color relative flex justify-center aspect-square items-center rounded-3xl" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "tabler:jetpack-filled",
        class: "text-[52px] text-accent_color"
      }, null, _parent));
      _push(`<template>`);
      if (__props.count > 0) {
        _push(`<span class="w-10 absolute z-[2] -bottom-4 right-0 aspect-square rounded-full flex justify-center items-center bg-accent_gradient font-bold text-accent_text_color">${ssrInterpolate(__props.count)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</template></button>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InventoryItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const isVisible = ref(props.isOpen);
    watch(() => props.isOpen, (newValue) => {
      isVisible.value = newValue;
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div style="${ssrRenderStyle(isVisible.value ? null : { display: "none" })}" class="fixed inset-0 z-50 bg-[#00000030]"><div style="${ssrRenderStyle(isVisible.value ? null : { display: "none" })}" class="absolute inset-x-0 bottom-6 bg-bg_color transform flex flex-col h-80 rounded-3xl mx-4"><div class="z-10 aspect-square flex h-14 justify-center items-center absolute right-0 top-0 rounded-2xl text-xl">`);
        _push2(ssrRenderComponent(unref(Icon), { icon: "mingcute:close-fill" }, null, _parent));
        _push2(`</div><div class="overflow-y-auto flex-grow p-4">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
        _push2(`</div></div></div>`);
      }, "body", false, _parent);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "StoreItem",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "Title"
    },
    description: {
      type: String,
      default: "Description"
    },
    price: {
      type: Number,
      default: 1
    },
    sale: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const isOpen = ref(false);
    const setModal = () => {
      isOpen.value = !isOpen.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Modal = _sfc_main$2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Modal, {
        isOpen: isOpen.value,
        onClose: setModal
      }, null, _parent));
      _push(`<div class="${ssrRenderClass(["flex overflow-clip", __props.sale && "p-1 scale-[102%]"])}"><button class="flex relative items-center p-4 rounded-3xl bg-secondary_bg_color gap-x-4 w-full"><span class="rounded-2xl h-24 aspect-square shrink-0 flex justify-center items-center">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "tabler:jetpack-filled",
        class: "text-[52px] text-accent_color"
      }, null, _parent));
      _push(`</span><div class="flex flex-col items-start gap-y-2 w-full"><h4 class="font-bold line-clamp-1">${ssrInterpolate(__props.title)}</h4><span class="text-sm line-clamp-2">${ssrInterpolate(__props.description)}</span><button class="flex gap-x-1 mt-1 items-center bg-pay_gradient rounded-2xl h-10 w-full justify-center text-accent_text_color font-bold"><div class="flex gap-x-1 items-center"><span>${ssrInterpolate(__props.price.toLocaleString("en-EN"))}</span>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "ic:round-star",
        class: "text-lg"
      }, null, _parent));
      _push(`</div></button></div></button></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StoreItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "store",
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
      const _component_LifeCounter = _sfc_main$4;
      const _component_InventoryItem = _sfc_main$3;
      const _component_StoreItem = _sfc_main$1;
      const _component_BottomMenu = _sfc_main$5;
      const _component_MainButton = _sfc_main$6;
      _push(`<!--[--><template><div class="flex flex-col gap-y-6"><div class="flex justify-between items-center px-4"><h4 class="text-lg font-bold uppercase">Inventory:</h4>`);
      _push(ssrRenderComponent(_component_LifeCounter, null, null, _parent));
      _push(`</div><div class="grid grid-cols-3 gap-2"><!--[-->`);
      ssrRenderList(4, (el) => {
        _push(ssrRenderComponent(_component_InventoryItem, null, null, _parent));
      });
      _push(`<!--]--></div><div class="flex justify-between items-center px-4"><h4 class="text-lg font-bold uppercase">Special offers:</h4></div><div class="flex flex-col gap-y-2">`);
      _push(ssrRenderComponent(_component_StoreItem, { sale: true }, null, _parent));
      _push(`</div></div></template>`);
      _push(ssrRenderComponent(_component_BottomMenu, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(``);
            _push2(ssrRenderComponent(_component_MainButton, {
              onMainClick: back,
              title: "Back"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Transition, {
                name: "slide-fade",
                mode: "out-in"
              }, {
                default: withCtx(() => [
                  createVNode(_component_MainButton, {
                    onMainClick: back,
                    title: "Back"
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/store.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=store-C3nnaZ1d.mjs.map
