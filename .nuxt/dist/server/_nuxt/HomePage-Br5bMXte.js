import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { useSSRContext, mergeProps, ref, resolveComponent, unref, withCtx, createTextVNode } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import { u as useHead } from "./index-BabADJUJ.js";
import { u as useTodoAppStore } from "./todoStore-CxR8zpuc.js";
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
const _sfc_main$6 = {
  __name: "TheButton",
  __ssrInlineRender: true,
  props: {
    buttonText: {
      type: String,
      default: ""
    },
    buttonStyling: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><button class="${ssrRenderClass([__props.buttonStyling, "py-2 px-4 text-white bg-gray-600 hover:bg-gray-500 rounded-lg text-xl"])}">${ssrInterpolate(__props.buttonText)}</button></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheButton.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$6;
const _sfc_main$5 = {
  __name: "TheCrossIcon",
  __ssrInlineRender: true,
  props: {},
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cursor-pointer" }, _attrs))}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheCrossIcon.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$5;
const _sfc_main$4 = {
  __name: "AddColumnPopup",
  __ssrInlineRender: true,
  props: {
    showAddColumnModel: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close", "addColumn"],
  setup(__props, { emit: __emit }) {
    ref(/* @__PURE__ */ new Date());
    ref("");
    const formattedDate = ref("");
    const column = ref({
      title: "",
      createdAt: formattedDate
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheCrossIcon = __nuxt_component_2;
      const _component_Button = resolveComponent("Button");
      const _component_TheButton = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div${ssrRenderAttr("show", __props.showAddColumnModel)}><div class="z-50 fixed h-screen flex items-center justify-center inset-0 bg-black bg-opacity-50 transition-opacity"><div class="fixed inset-0 top-[25%] z-10 px-4"><div class="relative flex w-full transform flex-col gap-y-2 overflow-auto rounded-lg bg-white p-4 text-left transition-all mx-auto sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12"><div class="flex items-center justify-between"><div><p class="text-base font-medium"> Write a precise title for a column</p><p class="text-base font-medium">i.e ( In progress, To do )</p></div><div class="flex justify-end hover:bg-gray-200 rounded-lg p-2 cursor-pointer">`);
      _push(ssrRenderComponent(_component_TheCrossIcon, {
        onClick: ($event) => _ctx.$emit("close")
      }, null, _parent));
      _push(`</div></div><form class="w-full flex flex-col gap-4"><div class="w-full flex flex-col gap-3"><div><label for="task-title" class="text-sm"> Column title </label><textarea type="text" class="mt-1 block w-full rounded-lg border border-gray-300 p-3 pl-4 shadow-sm placeholder:text-zinc-500 focus:border-blue-800 focus:outline-blue-800 focus:ring-blue-800 sm:text-sm" placeholder="Enter your column title" required="true">${ssrInterpolate(unref(column).title)}</textarea></div></div><div class="flex items-center justify-end gap-3">`);
      _push(ssrRenderComponent(_component_Button, {
        type: "submit",
        class: "border-2 border-gray-400 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 text-xl",
        onClick: ($event) => _ctx.$emit("close")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Cancel`);
          } else {
            return [
              createTextVNode("Cancel")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_TheButton, {
        class: "text-end",
        type: "submit",
        "button-text": "Add Column"
      }, null, _parent));
      _push(`</div></form></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AddColumnPopup.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$4;
const _sfc_main$3 = {
  __name: "EditTaskPopup",
  __ssrInlineRender: true,
  props: {
    showModel: {
      type: Boolean,
      default: false
    },
    task: {
      type: Object,
      default: {}
    }
  },
  emits: ["close", "save-task"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    ref(props.task.title);
    const editedTask = ref({ ...props.task });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheCrossIcon = __nuxt_component_2;
      const _component_Button = resolveComponent("Button");
      const _component_TheButton = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ show: __props.showModel }, _attrs))}><div class="z-50 fixed h-screen flex items-center justify-center inset-0 bg-black bg-opacity-50 transition-opacity"><div class="fixed inset-0 top-[25%] px-4"><div class="relative flex w-full transform flex-col gap-y-2 overflow-auto rounded-lg bg-white p-4 text-left transition-all mx-auto sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12"><div class="flex items-center justify-between"><p class="text-lg font-medium text-black">Edit task: ${ssrInterpolate(__props.task.title)}</p><div class="flex justify-end hover:bg-gray-200 rounded-lg p-2 cursor-pointer text-black">`);
      _push(ssrRenderComponent(_component_TheCrossIcon, null, null, _parent));
      _push(`</div></div><form class="w-full flex flex-col gap-4"><div class="w-full flex flex-col gap-3"><div><label for="task-title" class="text-xs"> Edit task title </label><input type="text"${ssrRenderAttr("value", unref(editedTask).title)} class="text-black block w-full rounded-lg border border-gray-400 p-3 pl-4 shadow-sm placeholder:text-zinc-400 focus:border-blue-800 focus:outline-blue-800 focus:ring-blue-800 sm:text-sm"></div><div><label for="task-title" class="text-xs"> Edit task description </label><textarea rows="4" type="text" class="text-black block w-full rounded-lg border border-gray-400 p-3 pl-4 shadow-sm placeholder:text-zinc-400 focus:border-blue-800 focus:outline-blue-800 focus:ring-blue-800 sm:text-sm">${ssrInterpolate(unref(editedTask).description)}</textarea></div></div><div class="flex items-center justify-end gap-3">`);
      _push(ssrRenderComponent(_component_Button, {
        type: "button",
        class: "border-2 border-gray-400 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 text-xl",
        onClick: ($event) => _ctx.$emit("close")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Cancel`);
          } else {
            return [
              createTextVNode("Cancel")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_TheButton, {
        type: "submit",
        "button-text": "Save"
      }, null, _parent));
      _push(`</div></form></div></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EditTaskPopup.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "ConfirmDeletePopup",
  __ssrInlineRender: true,
  props: {
    showModel: {
      type: Boolean,
      default: false
    },
    deleteText: {
      type: String,
      default: ""
    },
    deleteConfirmationFor: {
      type: String,
      default: ""
    }
  },
  emits: ["close", "confirm"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(mergeProps({ show: __props.showModel }, _attrs))}><div class="z-50 fixed h-screen flex items-center justify-center inset-0 bg-black bg-opacity-50 transition-opacity"><div class="fixed inset-0 top-[25%] px-4"><div class="relative flex w-full transform flex-col gap-y-2 overflow-auto rounded-lg bg-white p-4 text-left transition-all mx-auto md:w-8/12 lg:w-6/12 xl:w-4/12"><div class="flex justify-end"><button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"><svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button></div><div class="pt-0 text-center"><svg class="w-20 h-20 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><h3 class="text-lg font-normal text-gray-700 mt-5 mb-2">Are you sure you want to delete ${ssrInterpolate(__props.deleteConfirmationFor)}</h3><p class="text-lg font-medium text-black mb-6"> &quot; ${ssrInterpolate(__props.deleteText)} &quot; </p><div class="flex flex-col items-center md:flex-row justify-center md:justify-end w-full gap-3"><p class="text-sm font-medium text-red-600"> You&#39;ll not be able to restore it.</p><div class="flex items-center justify-center gap-3">`);
      _push(ssrRenderComponent(_component_Button, {
        type: "submit",
        class: "border-2 border-gray-400 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 text-xl",
        onClick: ($event) => _ctx.$emit("close")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Cancel`);
          } else {
            return [
              createTextVNode("Cancel")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="cursor-pointer text-white bg-red-600 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2"> Yes, I&#39;m sure </button></div></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ConfirmDeletePopup.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "ConfirmSuccessPopup",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: ""
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.show) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "successBox" }, _attrs))} data-v-aaafe02d><div class="flex rounded-lg bg-white py-4 px-6 items-center gap-2" data-v-aaafe02d><svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-10 w-10 text-green-400" viewBox="0 0 20 20" fill="currentColor" data-v-aaafe02d><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-v-aaafe02d></path></svg><p class="text-base fornt-medium" data-v-aaafe02d>${ssrInterpolate(__props.message)}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ConfirmSuccessPopup.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-aaafe02d"]]);
const _sfc_main = {
  __name: "HomePage",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useTodoAppStore();
    const showForm = ref(false);
    const openDeleteModel = ref(false);
    const editTaskModel = ref(false);
    const successMessage = ref("");
    const showSuccessMessage = ref(false);
    const deleteConfirmationMessage = ref("");
    const deleteConfirmationValue = ref("");
    const deleteConfirmationAction = ref("");
    const columnToDeleteIndex = ref(null);
    const colIndexForTask = ref(null);
    const columns = ref([]);
    ref(/* @__PURE__ */ new Date());
    ref("");
    const formattedDate = ref("");
    const openAddColumnModel = ref(false);
    ref(false);
    const openAddTaskModel = ref(false);
    const activeColumn = ref(null);
    ref(null);
    ref(null);
    const editColumnIndex = ref(null);
    const editTaskIndex = ref(null);
    const editedTask = ref(null);
    const column = ref({
      title: "",
      createdAt: formattedDate
    });
    const task = ref({
      title: "",
      description: "",
      createdAt: formattedDate
    });
    const openDeleteConfirmation = (title, index, action, colIndex) => {
      openDeleteModel.value = true;
      columnToDeleteIndex.value = index;
      colIndexForTask.value = colIndex;
      deleteConfirmationAction.value = action;
      if (action === "column") {
        deleteConfirmationValue.value = " column";
        deleteConfirmationMessage.value = title.title;
      } else if (action === "task") {
        deleteConfirmationValue.value = "task";
        deleteConfirmationMessage.value = title;
      } else if (action === "all") {
        deleteConfirmationValue.value = "";
        deleteConfirmationMessage.value = "Entire task board ";
      }
      console.log(deleteConfirmationMessage.value);
    };
    const deleteAction = () => {
      if (deleteConfirmationAction.value === "column") {
        if (columnToDeleteIndex.value !== null) {
          deleteColumn(columnToDeleteIndex.value);
        }
        triggerSuccessMessage("Column deleted successfully");
      } else if (deleteConfirmationAction.value === "task") {
        deleteTask(colIndexForTask.value, columnToDeleteIndex.value);
        triggerSuccessMessage("Task deleted successfully");
      } else if (deleteConfirmationAction.value === "all") {
        deleteAllColumns();
        triggerSuccessMessage("All columns deleted successfully");
        columns.value = store.loadFromLocalStorage();
      }
      openDeleteModel.value = false;
    };
    const triggerSuccessMessage = (message) => {
      successMessage.value = message;
      showSuccessMessage.value = true;
      setTimeout(() => {
        showSuccessMessage.value = false;
      }, 5e3);
    };
    const addColumn = (column2) => {
      if (column2.title.trim() !== "") {
        store.addColumn(column2);
        triggerSuccessMessage("Column Added successfully");
      }
      console.log(column2);
      openAddColumnModel.value = false;
    };
    const deleteColumn = (index) => {
      store.deleteColumn(index);
      openDeleteModel.value = false;
    };
    const deleteAllColumns = () => {
      store.deleteAllColumns();
      columns.value = store.columns;
    };
    const updateTask = (editedTask2) => {
      store.updateTask(editColumnIndex.value, editTaskIndex.value, editedTask2);
      editedTask2.value = null;
      editColumnIndex.value = null;
      editTaskIndex.value = null;
      editTaskModel.value = false;
    };
    const deleteTask = (columnIndex, taskindex) => {
      store.deleteTask(columnIndex, taskindex);
      console.log(columnIndex, taskindex);
    };
    useHead({
      title: "Todo-App"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheButton = __nuxt_component_0;
      const _component_AddColumnPopup = __nuxt_component_1;
      const _component_Button = resolveComponent("Button");
      const _component_TheCrossIcon = __nuxt_component_2;
      const _component_EditTaskPopup = __nuxt_component_3;
      const _component_ConfirmDeletePopup = __nuxt_component_4;
      const _component_ConfirmSuccessPopup = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))} data-v-1df83b87><div class="w-full max-w-custom mx-auto flex justify-between mt-2" data-v-1df83b87>`);
      _push(ssrRenderComponent(_component_TheButton, {
        buttonText: "Add Column",
        onClick: ($event) => openAddColumnModel.value = true
      }, null, _parent));
      _push(ssrRenderComponent(_component_TheButton, {
        buttonText: "Clear Task Board",
        onClick: ($event) => openDeleteConfirmation(null, null, "all")
      }, null, _parent));
      _push(`</div>`);
      if (openAddColumnModel.value) {
        _push(ssrRenderComponent(_component_AddColumnPopup, {
          onAddColumn: addColumn,
          "show-add-column-model": "openAddColumnModel",
          onClose: ($event) => openAddColumnModel.value = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div data-v-1df83b87><div class="flex overflow-x-scroll scroll-smooth gap-4 overflow-y-hidden no-scrollbar h-auto max-h-[80vh] w-full max-w-custom mx-auto mt-6 z-50 rounded-lg" data-v-1df83b87><!--[-->`);
      ssrRenderList(columns.value, (column2, columnIndex) => {
        _push(`<div class="w-[320px] max-h-[80vh] bg-black rounded-xl" draggable="true" data-v-1df83b87><div class="flex z-20 items-start justify-between bg-black p-2 w-[320px] rounded-xl" data-v-1df83b87><div class="w-full text-gray-300" data-v-1df83b87>`);
        if (!column2.editing) {
          _push(`<h2 class="p-2 text-lg font-medium" data-v-1df83b87>${ssrInterpolate(column2.title.title)}</h2>`);
        } else {
          _push(`<textarea type="text" class="p-2 text-lg font-medium w-[100%] no-scrollbar text-wrap focus:ring-gray-400 bg-transparent" data-v-1df83b87>${ssrInterpolate(column2.title.title)}</textarea>`);
        }
        _push(`<div class="flex items-center justify-between w-full" data-v-1df83b87><p class="text-gray-300 pl-2" data-v-1df83b87>${ssrInterpolate(column2.date.createdAt)}</p><p data-v-1df83b87>${ssrInterpolate(column2.tasks.length)} Cards</p></div></div><div class="group relative" data-v-1df83b87><button class="text-black" data-v-1df83b87><svg class="h-6 w-6 cursor-pointer mt-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-1df83b87><g id="SVGRepo_bgCarrier" stroke-width="0" data-v-1df83b87></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data-v-1df83b87></g><g id="SVGRepo_iconCarrier" data-v-1df83b87><path d="M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5Z" fill="#ffffff" data-v-1df83b87></path><path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#ffffff" data-v-1df83b87></path><path d="M12 21C13.1046 21 14 20.1046 14 19C14 17.8954 13.1046 17 12 17C10.8954 17 10 17.8954 10 19C10 20.1046 10.8954 21 12 21Z" fill="#ffffff" data-v-1df83b87></path></g></svg></button><div tabindex="0" class="border-4 z-10 border-gray-400 invisible w-40 absolute right-2 top-[-0.5rem] transition-all opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-y-1 rounded-lg" data-v-1df83b87><ul class="bg-gray-600 overflow-hidden" data-v-1df83b87><li data-v-1df83b87><p class="border-b-4 cursor-pointer block px-4 py-2 hover:bg-gray-500 text-white" data-v-1df83b87> Add Task </p></li><li data-v-1df83b87><p class="cursor-pointer block px-4 py-2 hover:bg-gray-500 text-white" data-v-1df83b87> Delete Column </p></li></ul></div></div></div><div class="flex flex-col h-[76vh] overflow-y-auto no-scrollbar" data-v-1df83b87>`);
        if (activeColumn.value === columnIndex && openAddTaskModel.value === true) {
          _push(`<form class="${ssrRenderClass([openAddTaskModel.value === true ? "sticky top-0 " : "", "z-30 flex flex-col gap-2 p-2 w-full"])}" data-v-1df83b87><input type=" text"${ssrRenderAttr("value", task.value.title)} placeholder="Add Title" required class="text-white p-2 border border-gray-300 rounded-lg bg-transparent focus:ring-gray-200 focus:border-gray-200 focus:outline-gray-600" data-v-1df83b87><textarea type="text" placeholder="Add description" required class="text-white p-2 border border-gray-300 rounded-lg bg-transparent focus:ring-gray-200 focus:border-gray-200 focus:outline-gray-600" data-v-1df83b87>${ssrInterpolate(task.value.description)}</textarea><div class="flex justify-end items-center gap-2" data-v-1df83b87>`);
          _push(ssrRenderComponent(_component_Button, {
            type: "submit",
            class: "border-2 border-gray-300 px-4 py-2 rounded-lg text-white hover:bg-gray-500 text-xl",
            onClick: ($event) => openAddTaskModel.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Cancel`);
              } else {
                return [
                  createTextVNode("Cancel")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(_component_TheButton, {
            type: "submit",
            "button-text": "Add task"
          }, null, _parent));
          _push(`</div></form>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="relative w-full overflow-y-auto scroll-smooth no-scrollbar p-2 mb-2 pb-32" data-v-1df83b87><!--[-->`);
        ssrRenderList(column2.tasks, (task2, taskIndex) => {
          _push(`<div class="flex bg-zinc-800 hover:border-gray-400 hover:border items-start rounded-lg gap-4 my-3 mx-auto w-full" data-v-1df83b87><p class="p-2 rounded-xl w-full text-gray-200 cursor-pointer text-lg font-light" data-v-1df83b87>${ssrInterpolate(task2.title)}</p><div class="group relative pt-2" data-v-1df83b87><button class="text-black" data-v-1df83b87><svg class="h-6 w-6 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-1df83b87><g id="SVGRepo_bgCarrier" stroke-width="0" data-v-1df83b87></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data-v-1df83b87></g><g id="SVGRepo_iconCarrier" data-v-1df83b87><path d="M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5Z" fill="#ffffff" data-v-1df83b87></path><path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#ffffff" data-v-1df83b87></path><path d="M12 21C13.1046 21 14 20.1046 14 19C14 17.8954 13.1046 17 12 17C10.8954 17 10 17.8954 10 19C10 20.1046 10.8954 21 12 21Z" fill="#ffffff" data-v-1df83b87></path></g></svg></button><div tabindex="0" class="border-4 z-10 border-gray-400 invisible w-40 absolute right-2 top-[-0.5rem] transition-all opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-y-1 rounded-lg" data-v-1df83b87><ul class="bg-gray-600 overflow-hidden" data-v-1df83b87><li data-v-1df83b87><p class="border-b-4 cursor-pointer block px-4 py-2 hover:bg-gray-500 text-white" data-v-1df83b87> Edit Task </p></li><li data-v-1df83b87><p class="cursor-pointer block px-4 py-2 hover:bg-gray-500 text-white" data-v-1df83b87> Delete Task </p></li></ul></div></div></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      });
      _push(`<!--]-->`);
      if (showForm.value) {
        _push(`<form class="z-30 flex flex-col gap-4 w-[325px]" data-v-1df83b87><textarea type=" text" placeholder="Enter column title" required class="text-white p-2 w-[325px] bg-black rounded-xl focus:ring-gray-200 focus:border-gray-200 focus:outline-none" data-v-1df83b87>${ssrInterpolate(column.value.title)}</textarea><div class="flex justify-end items-center gap-2" data-v-1df83b87><div class="border-2 border-gray-300 px-4 py-2 rounded-lg text-white hover:bg-gray-700 cursor-pointer text-xl" data-v-1df83b87>`);
        _push(ssrRenderComponent(_component_TheCrossIcon, null, null, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_TheButton, {
          type: "submit",
          "button-text": "Add Column"
        }, null, _parent));
        _push(`</div></form>`);
      } else {
        _push(`<!---->`);
      }
      if (!showForm.value && columns.value.length > 0) {
        _push(ssrRenderComponent(_component_TheButton, {
          buttonText: "Add Column",
          onClick: ($event) => showForm.value = true,
          class: "w-[325px]"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (editTaskModel.value) {
        _push(ssrRenderComponent(_component_EditTaskPopup, {
          "show-model": editTaskModel.value,
          onClose: ($event) => editTaskModel.value = false,
          task: editedTask.value,
          onSaveTask: updateTask
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (openDeleteModel.value) {
        _push(ssrRenderComponent(_component_ConfirmDeletePopup, {
          "show-model": openDeleteModel.value,
          onClose: ($event) => openDeleteModel.value = false,
          "delete-text": deleteConfirmationMessage.value,
          "delete-confirmation-for": deleteConfirmationValue.value,
          onConfirm: deleteAction,
          onSuccess: triggerSuccessMessage
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_ConfirmSuccessPopup, {
        message: successMessage.value,
        show: showSuccessMessage.value
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/HomePage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HomePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1df83b87"]]);
export {
  HomePage as default
};
//# sourceMappingURL=HomePage-Br5bMXte.js.map
