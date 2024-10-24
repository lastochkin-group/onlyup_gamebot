import { useSSRContext, mergeProps, unref } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { _ as _sfc_main$7 } from './Disclosure-CnIEQRBQ.mjs';
import { _ as _sfc_main$8 } from './Contact-DN1S2wAd.mjs';
import { _ as _sfc_main$6 } from './BottomMenu-DK9IKwv9.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main$5 = {
  __name: "DropHero",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "80% of all income"
    },
    subTitle: {
      type: String,
      default: "Total drop"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center items-center gap-y-6" }, _attrs))}><div class="w-[144px] aspect-square rounded-full bg-accent_color flex justify-center items-center overflow-hidden">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "token:ton",
        class: "text-[64px] text-accent_text_color"
      }, null, _parent));
      _push(`</div><div class="flex flex-col items-center font-bold uppercase gap-y-1"><h1 class="text-3xl text-center">${ssrInterpolate(__props.title)}</h1><span class="text-xl">${ssrInterpolate(__props.subTitle)}</span></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DropHero.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "ConnectWalletButton",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center items-center bg-accent_gradient p-6 rounded-3xl gap-y-3" }, _attrs))}><span class="font-bold text-accent_text_color">How to get rewards?</span><button class="bg-white text-accent_color w-full rounded-2xl h-12 uppercase font-bold text-sm">Connect wallet</button></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ConnectWalletButton.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "DropStat",
  __ssrInlineRender: true,
  props: {
    dropDate: {
      type: String,
      default: "December 1, 2024"
    }
  },
  setup(__props) {
    const metrics = [
      { id: 0, title: "in - APP PURCHASES", count: 70, percentType: true },
      { id: 1, title: "in - APP ADVERTISING", count: 10, percentType: true },
      { id: 2, title: "INVESTMENTS OF OUR PARTNERS", count: 20, percentType: true }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ConnectWalletButton = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-secondary_bg_color rounded-3xl uppercase flex flex-col" }, _attrs))}><div class="flex flex-col p-4 gap-y-4"><h3 class="font-bold text-lg">Where does the money come from?</h3><div class="grid grid-cols-2 gap-4"><!--[-->`);
      ssrRenderList(metrics, (metric) => {
        _push(`<div class="flex flex-col text-sm justify-between"><span class="font-semibold">${ssrInterpolate(metric.title)}</span>`);
        if (metric.percentType) {
          _push(`<span class="text-lg font-bold text-accent_color">${ssrInterpolate(metric.count)}%</span>`);
        } else {
          _push(`<span class="text-lg font-bold text-accent_color">${ssrInterpolate(metric.count ? metric.count.toLocaleString("en-EN") : 0)}</span>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
      _push(ssrRenderComponent(_component_ConnectWalletButton, null, null, _parent));
      _push(`<div class="flex flex-col p-4 gap-y-4"><span class="text-lg font-bold">When will we receive them?</span><h2 class="text-3xl font-bold bg-accent_gradient bg-clip-text text-transparent">${ssrInterpolate(__props.dropDate)}</h2></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DropStat.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "DropTerms",
  __ssrInlineRender: true,
  setup(__props) {
    const terms = [
      { id: 0, title: "Title", description: "Description" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Disclosure = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-y-4" }, _attrs))}><h4 class="px-4 text-lg font-bold uppercase">About our project:</h4><!--[-->`);
      ssrRenderList(terms, (el) => {
        _push(ssrRenderComponent(_component_Disclosure, {
          key: el.id,
          title: el.title,
          description: el.description
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DropTerms.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "DropContacts",
  __ssrInlineRender: true,
  setup(__props) {
    const contacts = [
      { id: 0, title: "Our news - Official channel", link: "https://t.me/OnlyUpNews" },
      { id: 1, title: "Support team", link: "https://t.me/OnlyUpSupportBot" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Contact = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-y-4" }, _attrs))}><h4 class="px-4 text-lg font-bold uppercase">Contacts:</h4><!--[-->`);
      ssrRenderList(contacts, (el) => {
        _push(ssrRenderComponent(_component_Contact, {
          key: el.id,
          title: el.title,
          link: el.link
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DropContacts.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_DropHero = _sfc_main$5;
  const _component_DropStat = _sfc_main$3;
  const _component_DropTerms = _sfc_main$2;
  const _component_DropContacts = _sfc_main$1;
  const _component_BottomMenu = _sfc_main$6;
  _push(`<!--[--><template><div class="flex flex-col gap-y-6">`);
  _push(ssrRenderComponent(_component_DropHero, null, null, _parent));
  _push(ssrRenderComponent(_component_DropStat, null, null, _parent));
  _push(ssrRenderComponent(_component_DropTerms, null, null, _parent));
  _push(ssrRenderComponent(_component_DropContacts, null, null, _parent));
  _push(`</div></template>`);
  _push(ssrRenderComponent(_component_BottomMenu, { activePage: 2 }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/drop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const drop = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { drop as default };
//# sourceMappingURL=drop-Bnb79kg2.mjs.map
