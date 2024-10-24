import { ref, unref, withCtx, createVNode, Transition, openBlock, createBlock, createCommentVNode, useSSRContext, computed, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttrs, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { _ as _sfc_main$4 } from './Disclosure-CnIEQRBQ.mjs';
import { _ as _sfc_main$5 } from './LeadboardItem-CQiDYyoU.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as _sfc_main$6 } from './BottomMenu-DK9IKwv9.mjs';
import { Icon } from '@iconify/vue';
import { _ as _sfc_main$7 } from './PayButton-CvulN3-_.mjs';
import './Avatar-B2Gh6mcJ.mjs';
import './nuxt-link-V08wtwK9.mjs';
import './server.mjs';
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

const _sfc_main$3 = {
  __name: "FrenTabs",
  __ssrInlineRender: true,
  props: {
    activeTab: {
      type: Number,
      default: 0
    }
  },
  emits: ["switch"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const tab = ref(props.activeTab);
    const sliderPosition = computed(() => {
      return tab.value === 0 ? "0%" : "100%";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex items-center justify-between bg-secondary_bg_color rounded-3xl h-20 overflow-hidden" }, _attrs))}><div class="absolute inset-0 w-1/2 h-full bg-accent_gradient transition-all duration-300 ease-in-out rounded-3xl" style="${ssrRenderStyle({ transform: `translateX(${sliderPosition.value})` })}"></div><button class="${ssrRenderClass([tab.value === 0 ? "text-accent_text_color" : "text-hint_color", "relative flex justify-center items-center h-full w-1/2 text-2xl font-bold rounded-3xl transition-colors duration-300"])}">Frens</button><button class="${ssrRenderClass([tab.value === 1 ? "text-accent_text_color" : "text-hint_color", "relative flex justify-center items-center h-full w-1/2 text-2xl font-bold rounded-3xl transition-colors duration-300"])}">Team</button></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FrenTabs.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-y-2.5" }, _attrs))}><h4 class="px-4 text-lg font-bold uppercase">Create team:</h4><input class="flex bg-secondary_bg_color rounded-3xl outline-none h-14 px-4 text-sm font-medium" placeholder="@Write the username of your channel"><button class="flex justify-center items-center rounded-3xl h-14 bg-accent_gradient text-accent_text_color text-sm uppercase font-bold">Connect channel</button></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CreateTeamForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "InviteButton",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-between items-center gap-x-2" }, _attrs))}><button class="flex justify-center items-center h-14 bg-accent_color w-full rounded-[20px] text-accent_text_color uppercase font-semibold">Click to Invite Fren</button><button class="flex justify-center items-center h-14 aspect-square bg-accent_color rounded-[20px] text-accent_text_color">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "solar:copy-linear",
        class: "text-xl"
      }, null, _parent));
      _push(`</button></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InviteButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "frens",
  __ssrInlineRender: true,
  setup(__props) {
    const activeTab = ref(0);
    const switchTab = (indexTab) => {
      activeTab.value = indexTab;
    };
    const frens = [
      { id: 0, name: "Player", place: 1, score: 3e3 },
      { id: 1, name: "User", place: 2, score: 2e3 },
      { id: 2, name: "Superuser", place: 3, score: 1e3 }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FrenTabs = _sfc_main$3;
      const _component_Disclosure = _sfc_main$4;
      const _component_LeadboardItem = _sfc_main$5;
      const _component_CreateTeamForm = __nuxt_component_3;
      const _component_BottomMenu = _sfc_main$6;
      const _component_InviteButton = _sfc_main$1;
      const _component_PayButton = _sfc_main$7;
      _push(`<!--[--><template><div class="flex flex-col gap-y-6">`);
      _push(ssrRenderComponent(_component_FrenTabs, {
        activeTab: unref(activeTab),
        onSwitch: switchTab
      }, null, _parent));
      if (unref(activeTab) === 0) {
        _push(`<div class="flex flex-col gap-y-6">`);
        _push(ssrRenderComponent(_component_Disclosure, {
          title: "You invited 3<span class='text-hint_color'>/10</span> friends",
          description: "Description"
        }, null, _parent));
        if (frens && frens.length > 0) {
          _push(`<div class="flex flex-col gap-y-2"><!--[-->`);
          ssrRenderList(frens, (fren) => {
            _push(ssrRenderComponent(_component_LeadboardItem, {
              key: fren.id,
              place: fren.place,
              name: fren.name,
              score: fren.score
            }, null, _parent));
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else if (unref(activeTab) === 1) {
        _push(`<div class="flex flex-col gap-y-6">`);
        _push(ssrRenderComponent(_component_Disclosure, {
          title: "Info",
          description: "Description"
        }, null, _parent));
        _push(ssrRenderComponent(_component_CreateTeamForm, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></template>`);
      _push(ssrRenderComponent(_component_BottomMenu, { activePage: 0 }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(``);
            if (unref(activeTab) === 0) {
              _push2(ssrRenderComponent(_component_InviteButton, null, null, _parent2, _scopeId));
            } else if (unref(activeTab) === 1) {
              _push2(ssrRenderComponent(_component_PayButton, { title: "Create a team <span class='opacity-50'>for</span> 1 000 Stars" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(Transition, {
                name: "slide-fade",
                mode: "out-in"
              }, {
                default: withCtx(() => [
                  unref(activeTab) === 0 ? (openBlock(), createBlock(_component_InviteButton, { key: 0 })) : unref(activeTab) === 1 ? (openBlock(), createBlock(_component_PayButton, {
                    key: 1,
                    title: "Create a team <span class='opacity-50'>for</span> 1 000 Stars"
                  })) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/frens.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=frens-C2Lk9I0P.mjs.map
