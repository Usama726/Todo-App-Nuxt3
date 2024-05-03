<template>

    <Body class="h-screen overflow-hidden bg-secondary">
        <Navbar />
        <div class=" px-4 xl:px-0 w-full max-w-custom mx-auto flex justify-between mt-4 ">
            <TheButton buttonText="Add Column" @click="openAddColumnModel = true" />
            <TheButton v-if="columns?.length > 0" buttonText="Clear Task Board"
                @click="openDeleteConfirmation(null, null, 'all')" />
        </div>
        <AddColumnPopup v-if="openAddColumnModel" @addColumn="addColumn" show-add-column-model="openAddColumnModel"
            @close="openAddColumnModel = false" />
        <div>
            <div
                class="px-4 xl:px-0  flex overflow-x-scroll scroll-smooth gap-4 overflow-y-hidden no-scrollbar  h-auto max-h-[75vh] w-full max-w-custom mx-auto  mt-6 z-50 rounded-lg">
                <div v-for="(column, columnIndex) in   getColumns" :key="columnIndex"
                    class="w-[320px] max-h-[75vh]  bg-black rounded-xl" @dragover.prevent
                    @drop="moveColumn(columnIndex)" draggable="true" @dragstart="dragColumnIndex = columnIndex"
                    @dragend="updateColumnOrder">

                    <div class=" flex z-20 items-start justify-between bg-black p-2  w-[320px] rounded-xl ">
                        <div class=" w-full text-gray-300">
                            <h2 class=" p-2 text-lg font-medium" @click=" editColumnTitle(columnIndex)"
                                v-if="!column.editing">{{ column.title.title }}
                            </h2>
                            <textarea type="text"
                                class="p-2 text-lg font-medium  w-[100%] no-scrollbar text-wrap focus:ring-gray-400 bg-transparent"
                                v-model="column.title.title" v-else @blur="saveColumnTitle(columnIndex)"
                                @keydown.enter="saveColumnTitle(columnIndex)" ref="columnInput" />
                            <div class="flex items-center justify-between w-full">
                                <p class="text-gray-300 pl-2 ">{{ column.date.createdAt }}</p>
                                <p> {{ column.tasks.length }} Cards</p>
                            </div>
                        </div>
                        <div class="group relative ">
                            <button class=" text-black">
                                <svg class="h-6 w-6 cursor-pointer mt-2 " viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                    </g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5Z"
                                            fill="#ffffff"></path>
                                        <path
                                            d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                                            fill="#ffffff"></path>
                                        <path
                                            d="M12 21C13.1046 21 14 20.1046 14 19C14 17.8954 13.1046 17 12 17C10.8954 17 10 17.8954 10 19C10 20.1046 10.8954 21 12 21Z"
                                            fill="#ffffff"></path>
                                    </g>
                                </svg>
                            </button>
                            <div tabindex="0"
                                class=" border-4 z-10 border-gray-400 invisible w-40 absolute right-2 top-[-0.5rem] transition-all opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-y-1 rounded-lg">
                                <ul class=" bg-gray-600 overflow-hidden">
                                    <li>
                                        <p @click="showTaskInput(columnIndex)"
                                            class=" border-b-4 cursor-pointer block px-4 py-2 hover:bg-gray-500 text-white">
                                            Add Task
                                        </p>
                                    </li>
                                    <li>
                                        <p @click="openDeleteConfirmation(column.title, columnIndex, 'column')" class=" cursor-pointer block px-4 py-2 hover:bg-gray-500
                                                text-white">
                                            Delete Column
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- <div v-if="activeColumn === columnIndex && showButtons === true"
                                class="z-20 w-40 text-white rounded-lg border-4 border-white/50 absolute top-8 right-0 text-base font-normal bg-gray-600 ">

                                <p class=" border-b-4 block px-4 py-2 hover:bg-gray-500 cursor-pointer text-center "
                                    @click="showTaskInput(columnIndex)">
                                    Add Task
                                </p>
                                <p @click="openDeleteConfirmation(column.title, columnIndex, 'column')"
                                    class=" cursor-pointer block px-4 py-2 hover:bg-gray-500 text-center">
                                    Delete Column
                                </p>
                            </div> -->
                        <!-- <div class="relative group" @click="toggleButtons(columnIndex)">

                        </div> -->
                    </div>

                    <div class=" flex flex-col h-[76vh] overflow-y-auto no-scrollbar ">
                        <form v-if="activeColumn === columnIndex && openAddTaskModel === true"
                            @submit.prevent="addTask(columnIndex)" class=" z-30 flex flex-col gap-2 p-2 w-full "
                            :class="openAddTaskModel === true ? 'sticky top-0 ' : ''">
                            <input type=" text" v-model="task.title" placeholder="Add Title" required
                                class="text-white p-2 border border-gray-300 rounded-lg bg-transparent focus:ring-gray-200 focus:border-gray-200 focus:outline-gray-600">
                            <textarea type="text" v-model="task.description" placeholder="Add description" required
                                class="text-white p-2 border border-gray-300 rounded-lg bg-transparent focus:ring-gray-200 focus:border-gray-200 focus:outline-gray-600"></textarea>
                            <div class="flex justify-end items-center gap-2">
                                <Button type="submit"
                                    class=" border-2 border-gray-300 px-4 py-2 rounded-lg text-white hover:bg-gray-500 text-xl"
                                    @click="openAddTaskModel = false">Cancel</Button>
                                <TheButton type="submit" button-text="Add task" />

                            </div>

                        </form>

                        <!-- draggable="true" @dragstart="dragStart(colIndex, taskIndex)" @dragover="dragOver"
                        @drop="dropTask(colIndex, taskIndex)" -->

                        <!-- :to="`/task?columnIndex=${columnIndex}&taskIndex=${taskIndex}`"
                         -->
                        <div class=" relative w-full overflow-y-auto scroll-smooth no-scrollbar  p-2 mb-2 pb-32">
                            <div v-for="(task, taskIndex) in column.tasks" :key="taskIndex"
                                class=" flex bg-zinc-800 hover:border-gray-400 hover:border items-start rounded-lg gap-4 my-3 mx-auto w-full">
                                <p class=" p-2 rounded-xl w-full text-gray-200 cursor-pointer text-lg font-light"
                                    @click="openEditForm(columnIndex, taskIndex)">{{
                task.title }}</p>
                                <div class="group relative pt-2">
                                    <button class=" text-black">
                                        <svg class="h-6 w-6 cursor-pointer " viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                stroke-linejoin="round">
                                            </g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path
                                                    d="M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5Z"
                                                    fill="#ffffff"></path>
                                                <path
                                                    d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                                                    fill="#ffffff"></path>
                                                <path
                                                    d="M12 21C13.1046 21 14 20.1046 14 19C14 17.8954 13.1046 17 12 17C10.8954 17 10 17.8954 10 19C10 20.1046 10.8954 21 12 21Z"
                                                    fill="#ffffff"></path>
                                            </g>
                                        </svg>
                                    </button>
                                    <div tabindex="0"
                                        class=" border-4 z-10 border-gray-400 invisible w-40 absolute right-2 top-[-0.5rem] transition-all opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-y-1 rounded-lg">
                                        <ul class=" bg-gray-600 overflow-hidden">
                                            <li>
                                                <p @click="openEditForm(columnIndex, taskIndex)"
                                                    class=" border-b-4 cursor-pointer block px-4 py-2 hover:bg-gray-500 text-white">
                                                    Edit Task
                                                </p>
                                            </li>
                                            <li>
                                                <p @click="openDeleteConfirmation(task.title, taskIndex, 'task', columnIndex)"
                                                    class=" cursor-pointer block px-4 py-2 hover:bg-gray-500
                                                    text-white">
                                                    Delete Task
                                                </p>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <!-- <p class="text-gray-400 font bold text-lg p-2 " v-if="!openAddTaskModel"
                                button-text="Add task" @click="showTaskInput(columnIndex)">
                                <span class="text-2xl">+</span> Add Task
                            </p> -->
                        </div>
                    </div>
                </div>
                <form v-if="showForm" @submit.prevent="addColumnAtEnd" class=" z-30 flex flex-col gap-4 w-[325px] ">
                    <textarea type=" text" v-model="column.title" placeholder="Enter column title" required
                        class="text-white p-2 w-[325px] bg-black rounded-xl focus:ring-gray-200 focus:border-gray-200 focus:outline-none" />

                    <div class="flex justify-end items-center gap-2">
                        <div class=" border-2 border-gray-300 px-4 py-2 rounded-lg text-white hover:bg-gray-700 cursor-pointer text-xl"
                            @click="showForm = false">
                            <TheCrossIcon />
                        </div>
                        <TheButton type="submit" button-text="Add Column" />
                    </div>
                </form>

                <TheButton v-if="!showForm && columns?.length > 0" buttonText="Add Column" @click="showForm = true"
                    class="w-[325px] " />
            </div>
        </div>
        <EditTaskPopup v-if="editTaskModel" :show-model="editTaskModel" @close="editTaskModel = false"
            :task="editedTask" @save-task="updateTask" />
        <ConfirmDeletePopup v-if="openDeleteModel" :show-model="openDeleteModel" @close="openDeleteModel = false"
            :delete-text="deleteConfirmationMessage" :delete-confirmation-for="deleteConfirmationValue"
            @confirm="deleteAction" @success="triggerSuccessMessage" />
        <ConfirmSuccessPopup :message="successMessage" :show="showSuccessMessage" />
    </Body>
</template>

<script setup>
import { ref } from 'vue';
import { useTodoAppStore } from '~/store/todoStore';
const store = useTodoAppStore();
const { getColumns } = storeToRefs(store)
//  Variables

const showForm = ref(false)
const openDeleteModel = ref(false)
const editTaskModel = ref(false)
const successMessage = ref('');
const showSuccessMessage = ref(false);
const deleteConfirmationMessage = ref('');
const deleteConfirmationValue = ref('')
const deleteConfirmationAction = ref('');
const columnToDeleteIndex = ref(null)
const colIndexForTask = ref(null)
const columns = ref([]);
const currentDate = ref(new Date());
const formattedTime = ref('');
const formattedDate = ref('');
const openAddColumnModel = ref(false)
const showButtons = ref(false)
const openAddTaskModel = ref(false)
const activeColumn = ref(null)
let dragColumnIndex = ref(null)
let dragTaskIndex = ref(null)
const editColumnIndex = ref(null)
const editTaskIndex = ref(null)
const editedTask = ref(null)
let dragData = null
const column = ref({
    title: '',
    createdAt: formattedDate,
})

const task = ref({
    title: '',
    description: '',
    createdAt: formattedDate,
})

// Functions
function editColumnTitle(columnIndex) {
    columns.value[columnIndex].editing = true
    nextTick(() => {
        const input = this.$refs.columnInput
        input.focus()
        // input.select()
    })
    store.editColumnTitle(columnIndex, columns.value[columnIndex].title)
}
function saveColumnTitle(columnIndex) {
    columns.value[columnIndex].editing = false
}
const openDeleteConfirmation = (title, index, action, colIndex) => {
    openDeleteModel.value = true
    columnToDeleteIndex.value = index
    colIndexForTask.value = colIndex
    deleteConfirmationAction.value = action;
    if (action === 'column') {
        deleteConfirmationValue.value = ' column'
        deleteConfirmationMessage.value = title.title;
    } else if (action === 'task') {
        deleteConfirmationValue.value = 'task'
        deleteConfirmationMessage.value = title;
    } else if (action === 'all') {
        deleteConfirmationValue.value = ''
        deleteConfirmationMessage.value = "Entire task board ";
    }
    console.log(deleteConfirmationMessage.value)
}

const deleteAction = () => {
    if (deleteConfirmationAction.value === 'column') {
        if (columnToDeleteIndex.value !== null) {
            deleteColumn(columnToDeleteIndex.value)
        }
        triggerSuccessMessage('Column deleted successfully')
    } else if (deleteConfirmationAction.value === 'task') {
        deleteTask(colIndexForTask.value, columnToDeleteIndex.value)
        triggerSuccessMessage('Task deleted successfully')
    } else if (deleteConfirmationAction.value === 'all') {

        deleteAllColumns()
        triggerSuccessMessage('All columns deleted successfully')
        columns.value = store.loadFromLocalStorage();

    }
    openDeleteModel.value = false

}
const triggerSuccessMessage = (message) => {
    successMessage.value = message;
    showSuccessMessage.value = true;
    setTimeout(() => {
        showSuccessMessage.value = false;
    }, 5000);
}
const toggleButtons = (colIndex) => {
    setActiveColumn(colIndex)
    showButtons.value = !showButtons.value
}
const setActiveColumn = (index) => {
    activeColumn.value = index;
};
const showTaskInput = (colIndex) => {
    setActiveColumn(colIndex)
    openAddTaskModel.value = true

}

const formatDate = () => {
    formattedDate.value = currentDate.value.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

const formatTime = () => {
    formattedTime.value = currentDate.value.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });
}
const addColumn = (column) => {
    if (column.title.trim() !== '') {
        store.addColumn(column);
        triggerSuccessMessage('Column Added successfully')
    }
    console.log(column)
    openAddColumnModel.value = false
};

const addColumnAtEnd = () => {
    store.addColumnAtEnd(column.value);
    showForm.value = false
    column.value = {
        title: '',
        createdAt: '',
    }
    triggerSuccessMessage('Column Added successfully')
};

const deleteColumn = (index) => {
    store.deleteColumn(index)
    openDeleteModel.value = false;
}

const deleteAllColumns = () => {
    store.deleteAllColumns()
    columns.value = store.columns
}
const moveColumn = (toIndex) => {
    if (dragColumnIndex !== null && dragColumnIndex !== toIndex) {
        store.moveColumn(dragColumnIndex.value, toIndex)
        dragColumnIndex.value = toIndex
        columns.value = store.columns
    }
}
const updateColumnOrder = () => {
    // Ensure immediate update of columns order after drag and drop
    // This method gets triggered when the drag operation ends
    store.columns = [...store.columns]
}

const addTask = (columnIndex) => {
    store.addTask(columnIndex, task.value)
    task.value = {
        title: '',
        description: '',
    }
    openAddTaskModel.value = false
    triggerSuccessMessage('Task Added successfully')
}
const openEditForm = (columnIndex, taskIndex) => {
    editedTask.value = { ...columns.value[columnIndex].tasks[taskIndex] }
    editColumnIndex.value = columnIndex
    editTaskIndex.value = taskIndex
    editTaskModel.value = true
}

const updateTask = (editedTask) => {
    store.updateTask(editColumnIndex.value, editTaskIndex.value, editedTask)
    editedTask.value = null
    editColumnIndex.value = null
    editTaskIndex.value = null
    editTaskModel.value = false
}
const deleteTask = (columnIndex, taskindex) => {
    store.deleteTask(columnIndex, taskindex)
    console.log(columnIndex, taskindex)
}

// function dragStart(colIndex, taskIndex) {
//     dragData.value = { colIndex, taskIndex }
// }

// function dragOver() {
//     $event.preventDefault()
// }

// function dropTask(toColIndex, toTaskIndex) {
//     if (dragData.value) {
//         const { colIndex: fromColIndex, taskIndex: fromTaskIndex, task } = dragData.value;
//         store.moveTask(fromColIndex, fromTaskIndex, toColIndex, toTaskIndex, task);
//         dragData.value = null;
//     }
// }


//  Lifecycle Hooks

onMounted(() => {
    formatDate();
    formatTime();
    store.loadFromLocalStorage
    // store.getColumns
    columns.value = store.loadFromLocalStorage();
});

// onBeforeMount(() => {
//     store.loadFromLocalStorage
//     // store.getColumns
//     columns.value = store.loadFromLocalStorage();
// });
useHead(({
    title: 'TaskMaster - Task board'
}))
</script>
<style scoped>
#show_hide {
    display: none;
}
</style>