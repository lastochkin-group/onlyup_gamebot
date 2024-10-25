import { _ as _sfc_main$1$1, a as _sfc_main$3 } from './Counter-b-jZQNxQ.mjs';
import { _ as _sfc_main$4 } from './LeadboardWidget-OyKDlxBa.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-V08wtwK9.mjs';
import { withCtx, createVNode, createTextVNode, Transition, useSSRContext, ref, mergeProps, unref } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { _ as _sfc_main$5 } from './BottomMenu-DK9IKwv9.mjs';
import { _ as _export_sfc } from './server.mjs';
import './Avatar-B2Gh6mcJ.mjs';
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
import 'vue-router';

const _sfc_main$2 = {
  __name: "TaskItem",
  __ssrInlineRender: true,
  props: {
    reward: {
      type: Number,
      default: 1
    },
    title: {
      type: String,
      default: "Task title"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-between items-center bg-secondary_bg_color rounded-3xl p-4 gap-x-0.5" }, _attrs))}><div class="flex items-center"><div class="flex items-center justify-center shrink-0 gap-x-1 font-bold text-accent_color w-16 overflow-clip"><span>+${ssrInterpolate(__props.reward.toLocaleString("en-EN"))}</span>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "solar:heart-bold",
        class: "shrink-0"
      }, null, _parent));
      _push(`</div><span class="font-medium text-sm line-clamp-2">${ssrInterpolate(__props.title)}</span></div><button class="bg-accent_color h-10 w-20 rounded-3xl shrink-0 text-accent_text_color uppercase font-semibold text-sm">Claim</button></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TaskItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Tasks",
  __ssrInlineRender: true,
  setup(__props) {
    const activeTab = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TaskItem = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-y-4" }, _attrs))}><div class="flex justify-around items-center font-bold text-hint_color"><button class="${ssrRenderClass([activeTab.value === 0 && "text-text_color", "w-1/2 h-8"])}">Daily tasks</button><button class="${ssrRenderClass([activeTab.value === 1 && "text-text_color", "w-1/2 h-8"])}"><span class="relative"><span>All tasks</span><span class="flex absolute top-0 -right-4 h-2 aspect-square bg-accent_color rounded-full"></span></span></button></div>`);
      if (activeTab.value === 0) {
        _push(`<div class="flex flex-col gap-y-2">`);
        _push(ssrRenderComponent(_component_TaskItem, { title: "Daily check-in" }, null, _parent));
        _push(`</div>`);
      } else if (activeTab.value === 1) {
        _push(`<div class="flex flex-col gap-y-2">`);
        _push(ssrRenderComponent(_component_TaskItem, { title: "Join in Code Hawk" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tasks.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BagePosition = _sfc_main$1$1;
  const _component_Counter = _sfc_main$3;
  const _component_LeadboardWidget = _sfc_main$4;
  const _component_nuxt_link = __nuxt_component_0;
  const _component_Tasks = _sfc_main$1;
  const _component_BottomMenu = _sfc_main$5;
  _push(`<!--[--><template><div class="flex flex-col gap-y-6"><div class="flex flex-col justify-center items-center gap-y-2">`);
  _push(ssrRenderComponent(_component_BagePosition, null, null, _parent));
  _push(ssrRenderComponent(_component_Counter, { value: 200 }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_LeadboardWidget, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="p-4 flex"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_nuxt_link, {
          to: "/teams",
          class: "bg-bg_color flex w-full h-11 rounded-2xl justify-center items-center uppercase font-semibold text-accent_color"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span${_scopeId2}>All teams</span>`);
            } else {
              return [
                createVNode("span", null, "All teams")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "p-4 flex" }, [
            createVNode(_component_nuxt_link, {
              to: "/teams",
              class: "bg-bg_color flex w-full h-11 rounded-2xl justify-center items-center uppercase font-semibold text-accent_color"
            }, {
              default: withCtx(() => [
                createVNode("span", null, "All teams")
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Tasks, null, null, _parent));
  _push(`</div></template>`);
  _push(ssrRenderComponent(_component_BottomMenu, { activePage: 1 }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex justify-between items-center gap-x-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_nuxt_link, {
          to: "/game",
          class: "flex justify-center items-center h-14 bg-accent_color w-full rounded-[20px] text-accent_text_color uppercase font-semibold"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Play now`);
            } else {
              return [
                createTextVNode("Play now")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode(Transition, {
            name: "slide-fade",
            mode: "out-in"
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "flex justify-between items-center gap-x-2" }, [
                createVNode(_component_nuxt_link, {
                  to: "/game",
                  class: "flex justify-center items-center h-14 bg-accent_color w-full rounded-[20px] text-accent_text_color uppercase font-semibold"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Play now")
                  ]),
                  _: 1
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
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-C3xu4itJ.mjs.map
