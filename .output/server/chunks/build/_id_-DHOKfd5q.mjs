import { unref, withCtx, createVNode, Transition, useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttrs, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './Contact-DN1S2wAd.mjs';
import { _ as _sfc_main$3 } from './LeadboardItem-CQiDYyoU.mjs';
import { _ as _sfc_main$4 } from './BottomMenu-DK9IKwv9.mjs';
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
import { u as useNuxtApp } from './server.mjs';
import './Avatar-B2Gh6mcJ.mjs';
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

const _sfc_main$1 = {
  __name: "TeamHero",
  __ssrInlineRender: true,
  props: {
    place: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: "Team name"
    },
    username: {
      type: String,
      default: "@username"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center gap-y-6" }, _attrs))}><div class="flex w-[124px] justify-center items-center aspect-square rounded-3xl bg-secondary_bg_color overflow-hidden"><span class="${ssrRenderClass(["font-bold", __props.place < 100 ? "text-3xl" : "text-xl"])}">${ssrInterpolate(__props.place.toLocaleString("en-EN"))}</span></div><div class="flex flex-col gap-y-0.5 justify-center items-center"><h2 class="text-xl font-bold text-center line-clamp-1">${ssrInterpolate(__props.name)}</h2><a href="#" target="_blank" class="font-medium text-hint_color line-clamp-1">${ssrInterpolate(__props.username)}</a></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TeamHero.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp().$webapp;
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TeamHero = _sfc_main$1;
      const _component_Contact = _sfc_main$2;
      const _component_LeadboardItem = _sfc_main$3;
      const _component_BottomMenu = _sfc_main$4;
      _push(`<!--[--><template><div class="relative flex flex-col gap-y-6"><template><button class="flex absolute top-0 right-0 justify-center items-center w-14 aspect-square rounded-3xl">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "ci:exit",
        class: "text-3xl text-hint_color"
      }, null, _parent));
      _push(`</button></template>`);
      _push(ssrRenderComponent(_component_TeamHero, {
        place: 3,
        name: "Captains Bay [Official channel]",
        username: "@captainsbay"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Contact, { title: "Our channel" }, null, _parent));
      _push(`<div class="flex flex-wrap gap-2 justify-between items-center px-4"><span class="flex gap-x-1 font-bold text-sm"><span>Players:</span><span class="text-accent_color">257 000</span></span><span class="flex gap-x-1 font-bold text-sm"><span>Meters:</span><span class="text-accent_color">257 000 000</span></span></div><div class="flex flex-col gap-y-2"><!--[-->`);
      ssrRenderList(3, (el) => {
        _push(ssrRenderComponent(_component_LeadboardItem, null, null, _parent));
      });
      _push(`<!--]--></div></div></template>`);
      _push(ssrRenderComponent(_component_BottomMenu, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between items-center gap-x-2"${_scopeId}><button class="flex justify-center items-center h-14 bg-accent_color w-full rounded-[20px] text-accent_text_color uppercase font-semibold"${_scopeId}>Join</button></div>`);
          } else {
            return [
              createVNode(Transition, {
                name: "slide-fade",
                mode: "out-in"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex justify-between items-center gap-x-2" }, [
                    createVNode("button", { class: "flex justify-center items-center h-14 bg-accent_color w-full rounded-[20px] text-accent_text_color uppercase font-semibold" }, "Join")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/team/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-DHOKfd5q.mjs.map
