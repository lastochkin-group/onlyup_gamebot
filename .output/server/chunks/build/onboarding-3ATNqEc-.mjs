import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useRouter } from 'vue-router';

const _sfc_main$2 = {
  __name: "OnboardingSlide",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "Onboarding title"
    },
    description: {
      type: String,
      default: "Description"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center gap-y-4" }, _attrs))}><h1 class="text-2xl font-bold text-center">${ssrInterpolate(__props.title)}</h1><p class="text-hint_color">${ssrInterpolate(__props.description)}</p></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OnboardingSlide.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "OnboardingButton",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "Continue"
    }
  },
  emits: ["submit"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed bottom-0 left-0 right-0 h-20 px-4 bg-bg_color" }, _attrs))}><button class="bg-accent_color text-accent_text_color w-full h-[60px] rounded-3xl font-bold">${ssrInterpolate(__props.title)}</button></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OnboardingButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "onboarding",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const mainButtonClicked = (e) => {
      router.push("/");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_OnboardingSlide = _sfc_main$2;
      const _component_OnboardingButton = _sfc_main$1;
      _push(`<template><div${ssrRenderAttrs(mergeProps({ class: "relative flex justify-center items-center h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_OnboardingSlide, null, null, _parent));
      _push(ssrRenderComponent(_component_OnboardingButton, { onSubmit: mainButtonClicked }, null, _parent));
      _push(`</div></template>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/onboarding.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=onboarding-3ATNqEc-.mjs.map
