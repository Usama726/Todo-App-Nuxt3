import { ref, mergeProps, unref, useSSRContext } from "vue";
import { u as useHead } from "./index-BabADJUJ.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
import "klona";
import "@vue/devtools-api";
import "destr";
import "devalue";
const _imports_0 = "" + __publicAssetsURL("images/about-3.jpg");
const _sfc_main = {
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    const features = ref([
      {
        heading: "Add Column Feature",
        description: "Users can easily expand their board by adding columns using a prominent button located at the top. This intuitive feature ensures swift organization of tasks by enabling users to create new categories effortlessly."
      },
      {
        heading: "Task Management within Columns",
        description: "Each column boasts a three-dot menu, granting users access to a suite of options tailored to task management. This includes the ability to add tasks specific to the column, edit column titles via a double-click action, and edit individual task titles with a simple click."
      },
      {
        heading: "Deletion with Confirmation",
        description: "To prevent accidental data loss, the app implements a confirmation mechanism for deleting both tasks and columns. Users are prompted to confirm their deletion actions, ensuring deliberate decisions and maintaining data integrity."
      },
      {
        heading: "Drag-and-Drop Functionality",
        description: "Enhancing user flexibility, the app facilitates column reordering through intuitive drag-and-drop functionality. This feature empowers users to customize their workspace layout effortlessly, optimizing productivity and workflow efficiency."
      }
    ]);
    useHead({
      title: "Todo | About"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}><div class="w-full max-w-custom mx-auto"><h1 class="bg-gradient-to-r from-secondary via-cyan-500 to-secondary bg-opacity-10 z-[-10] py-8 text-center text-2xl sm:text-4xl mt-16 rounded-tl-[150px] text-blue-200 md:text-secondary rounded-br-[150px] shadow-xl"> About App </h1><div class="lg:relative z-[-10] flex flex-col-reverse lg:flex-row items-center justify-between mt-16 gap-8 lg:gap-4"><div class="flex items-center justify-center lg:justify-start w-full max-w-5/12"><p class="lg:absolute lg:w-7/12 w-full md:w-10/12 text-sm md:text-lg text-gray-800 bg-gray-300 p-2 rounded-lg"> Introducing our innovative todo app designed to streamline your task management experience. With a sleek interface and intuitive features, organizing your tasks has never been easier. Effortlessly add columns to categorize your tasks with a single click, and customize them by editing titles through simple interactions. Manage tasks efficiently within each column, utilizing options like adding, editing, and deleting tasks with ease. Our app prioritizes user control and data integrity, requiring confirmation for deletion actions to prevent accidental loss. Plus, enhance productivity by rearranging columns seamlessly through intuitive drag-and-drop functionality. Experience the convenience of efficient task management with our todo app, making productivity a breeze.</p></div><div class="h-[25rem] md:h-[30rem] w-full max-w-6/12"><img${ssrRenderAttr("src", _imports_0)} class="h-full rounded-lg w-full"></div></div><div class="my-44 relative w-full z-[-10]"><p class="border-t-8 border-secondary"></p><div class="absolute top-[-5.8rem] w-full"><div class="flex items-center justify-between"><div class="h-8 w-8 bg-secondary rounded-full hidden xl:block"></div><div class="flex flex-col items-center justify-center border border-blue-100 shadow-xl rounded-xl w-full bg-white p-8 max-w-5xl mx-auto"><h1 class="text-2xl md:text-4xl mb-4 text-secondary shadow-lg p-2 border border-blue-100"> How IT Works </h1><p class="text-center text-gray-700 text-sm md:text-lg">Easily create and personalize columns for task categorization. Seamlessly manage tasks within each column, with options for adding, editing, and deleting tasks, ensuring a streamlined workflow.. </p></div><div class="h-8 w-8 bg-secondary rounded-full hidden xl:block"></div></div></div></div><div><!--[-->`);
      ssrRenderList(unref(features), (feature, index) => {
        _push(`<div class="ml-6 relative z-[-10] bg-gray-100 rounded-lg"><p class="absolute top-[-0.3rem] left-[-1.3rem] w-12 h-12 text-center bg-secondary p-3 rounded-full text-white font-bold text-lg">${ssrInterpolate(`${index + 1}`)}</p><div class="border-l-4 border-secondary px-12 pb-8 mb-16"><h1 class="text-lg md:text-2xl font-medium text-gray-800">${ssrInterpolate(feature.heading)}</h1><p class="pt-4 text-gray-700 text-sm md:text-lg">${ssrInterpolate(feature.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=About-DkoGDbet.js.map
