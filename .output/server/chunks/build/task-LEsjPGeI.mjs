import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { s as storeToRefs } from './server.mjs';
import { useRoute } from 'vue-router';
import { u as useTodoAppStore } from './todoStore-CxR8zpuc.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';

const _sfc_main = {
  __name: "task",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const store = useTodoAppStore();
    const { getColumns } = storeToRefs(store);
    const columnIndex = useRoute().query.columnIndex;
    const taskIndex = useRoute().query.taskIndex;
    const task = (_a = getColumns.value[columnIndex]) == null ? void 0 : _a.tasks[taskIndex];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-36 text-black max-w-custom" }, _attrs))}><h1>${ssrInterpolate(unref(task).title)}</h1></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/task.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=task-LEsjPGeI.mjs.map
