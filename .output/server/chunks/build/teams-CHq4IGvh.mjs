import { _ as _sfc_main$1 } from './LeadboardWidget-OyKDlxBa.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-V08wtwK9.mjs';
import { _ as _sfc_main$2 } from './LeadboardItem-CQiDYyoU.mjs';
import { _ as _sfc_main$3 } from './PayButton-CvulN3-_.mjs';
import { _ as _sfc_main$4 } from './BottomMenu-DK9IKwv9.mjs';
import { _ as _sfc_main$5 } from './MainButton-wKHtjEam.mjs';
import { withCtx, createVNode, unref, Transition, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { u as useNuxtApp } from './server.mjs';
import './Avatar-B2Gh6mcJ.mjs';
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

const _sfc_main = {
  __name: "teams",
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
      const _component_LeadboardWidget = _sfc_main$1;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_LeadboardItem = _sfc_main$2;
      const _component_PayButton = _sfc_main$3;
      const _component_BottomMenu = _sfc_main$4;
      const _component_MainButton = _sfc_main$5;
      _push(`<!--[--><template><div class="flex flex-col gap-y-6"><h2 class="text-2xl font-bold uppercase text-center">Top teams</h2>`);
      _push(ssrRenderComponent(_component_LeadboardWidget, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_link, {
              to: "/team/1",
              class: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_LeadboardItem, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_LeadboardItem)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_link, {
                to: "/team/1",
                class: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_LeadboardItem)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_PayButton, {
        onMainClick: ($event) => unref(router).push("/frens"),
        title: "Create a team"
      }, null, _parent));
      _push(`<div class="flex flex-col gap-y-2"><h4 class="px-4 text-lg font-bold uppercase">All teams:</h4><!--[-->`);
      ssrRenderList(3, (el) => {
        _push(ssrRenderComponent(_component_LeadboardItem, { key: el }, null, _parent));
      });
      _push(`<!--]--></div></div></template>`);
      _push(ssrRenderComponent(_component_BottomMenu, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between items-center gap-x-2"${_scopeId}>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/teams.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=teams-CHq4IGvh.mjs.map
