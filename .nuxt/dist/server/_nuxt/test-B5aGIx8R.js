import { ref, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { d as defineStore } from "../server.mjs";
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
const useTasksStore = defineStore({
  id: "tasks",
  state: () => ({
    columns: []
  }),
  actions: {
    addColumn(title) {
      this.columns.push({ title, tasks: [] });
    },
    addTask(columnIndex, task) {
      this.columns[columnIndex].tasks.push(task);
    },
    updateTask(columnIndex, taskIndex, updatedTask) {
      this.columns[columnIndex].tasks[taskIndex] = updatedTask;
    },
    deleteTask(columnIndex, taskIndex) {
      this.columns[columnIndex].tasks.splice(taskIndex, 1);
    }
  }
});
const _sfc_main = {
  __name: "test",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useTasksStore();
    const columns = store.columns;
    const editedTask = ref(null);
    const showEditForm = ref(false);
    const newTask = {
      name: "",
      lastName: "",
      description: ""
    };
    const newColumnTitle = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(unref(columns), (column, colIndex) => {
        _push(`<div><h2 class="my-2 text-xl"> Column title: ${ssrInterpolate(column.title)}</h2><!--[-->`);
        ssrRenderList(column.tasks, (task, taskIndex) => {
          _push(`<div class="space-y-4"><p>${ssrInterpolate(task.name)}</p><p>${ssrInterpolate(task.lastName)}</p><p>${ssrInterpolate(task.description)}</p><button class="mr-3">Edit</button><button>Delete</button></div>`);
        });
        _push(`<!--]--><form><input${ssrRenderAttr("value", newTask.name)} placeholder="Name" required><input${ssrRenderAttr("value", newTask.lastName)} placeholder="Last Name" required><input${ssrRenderAttr("value", newTask.description)} placeholder="Description" required><button type="submit">Add Task</button></form></div>`);
      });
      _push(`<!--]--><div><h2>Add Column</h2><form><input${ssrRenderAttr("value", newColumnTitle.value)} placeholder="Column Title" required><button type="submit">Add Column</button></form></div>`);
      if (showEditForm.value) {
        _push(`<form><input${ssrRenderAttr("value", editedTask.value.name)} placeholder="Name" required><input${ssrRenderAttr("value", editedTask.value.lastName)} placeholder="Last Name" required><input${ssrRenderAttr("value", editedTask.value.description)} placeholder="Description" required><button type="submit">Update Task</button><button>Cancel</button></form>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=test-B5aGIx8R.js.map
