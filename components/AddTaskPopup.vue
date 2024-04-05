<template>
    <div :show="showModel">
        <div class="z-20 fixed inset-0 bg-black bg-opacity-50 transition-opacity">
            <div class="fixed inset-0 top-[15%] z-10 ">
                <div
                    class="relative mx-4 flex max-h-[85vh] w-full transform flex-col gap-y-4 overflow-auto rounded-lg bg-white p-4 text-left transition-all md:p-8 lg:mx-auto lg:w-6/12">
                    <div class="flex items-center justify-between">
                        <TheCrossIcon class="absolute right-5 top-4 inline-block" @click="closePopup" />
                        <h1 class="text-2xl text-blue-900 font-medium">Manage your all tasks at single place</h1>
                    </div>
                    <form type="action" @submit.prevent="addTask">
                        <div class="grid md:grid-cols-2 gap-4">
                            <div class="col-span-2">
                                <label for="task-title" class="text-sm font-light">
                                    Task Title
                                </label>
                                <input id="task-title" type="text" v-model="todoData.title"
                                    class="mt-1 block w-full rounded-lg focus:outline-blue-500 border border-gray-300 p-3 pl-4 shadow-sm placeholder:text-zinc-400 focus:border-blue-400 focus:ring-blue-400 sm:text-sm"
                                    placeholder="Enter your task title" required="true" />
                            </div>
                            <div class="col-span-2">
                                <label for="task-description" class="text-sm font-light">
                                    Task Description
                                </label>
                                <textarea id="task-description" type="text" rows="3" v-model="todoData.description"
                                    class="mt-1 block w-full rounded-lg focus:outline-blue-500 border border-gray-300 p-3 pl-4 shadow-sm placeholder:text-zinc-400 focus:border-blue-400 focus:ring-blue-400 sm:text-sm"
                                    placeholder="Enter your task description" required />
                            </div>
                            <div>
                                <label for="tstart-date" class="text-sm font-light">
                                    Start Date
                                </label>
                                <input id="start-date" type="date" v-model="todoData.startDate"
                                    class="mt-1 block w-full rounded-lg focus:outline-blue-500 border border-gray-300 p-3 pl-4 shadow-sm placeholder:text-zinc-400 focus:border-blue-400 focus:ring-blue-400 sm:text-sm"
                                    placeholder="Enter your starting date" required="true" />
                            </div>
                            <div>
                                <label for="tlast-date" class="text-sm font-light">
                                    Last Date
                                </label>
                                <input id="last-date" type="date" v-model="todoData.lastDate"
                                    class="mt-1 block w-full rounded-lg focus:outline-blue-500 border border-gray-300 p-3 pl-4 shadow-sm placeholder:text-zinc-400 focus:border-blue-400 focus:ring-blue-400 sm:text-sm"
                                    placeholder="Enter your last date" required="true" />
                            </div>
                            <!-- <div class="col-span-2">
                                <label for="task-type">
                                    List Type
                                </label>
                            </div>
                            <div class="flex gap-4 items-center">
                                <input type="checkbox" v-model="checkboxOne" value="check 1" :disabled="checkboxTwo"
                                    class="cursor-pointer appearance-none w-10 focus:outline-none checked:bg-blue-300 h-6 bg-gray-300 rounded-full before:inline-block before:rounded-full before:bg-blue-500 before:h-6 before:w-5 disabled:cursor-not-allowed disabled:before-bg-gray-400 disabled:before:bg-gray-400 checked:before:translate-x-full shadow-inner transition-all duration-300 before:ml-0.5">
                                Personal
                            </div>
                            <div class="flex gap-4 items-center">
                                <input type="checkbox" v-model="checkboxTwo" value="check 2" :disabled="checkboxOne"
                                    class="cursor-pointer appearance-none w-10 focus:outline-none checked:bg-blue-300 h-6 bg-gray-300 rounded-full before:inline-block before:rounded-full before:bg-blue-500 before:h-6 before:w-5 disabled:cursor-not-allowed disabled:before:bg-gray-400 checked:before:translate-x-full shadow-inner transition-all duration-300 before:ml-0.5">
                                Official
                            </div> -->
                            <div class="flex items-center justify-end gap-4 w-full col-span-2 mt-4">
                                <TheButton button-styling="py-2 px-6 bg-red-400 hover:bg-red-500" button-text="Cancel"
                                    @click="closePopup" />
                                <TheButton button-styling="py-2 px-6" button-text="Save" type="submit" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useTodoAppStore } from '~/store/todoStore';
const store = useTodoAppStore();

//  Props 

const props = defineProps({
    showModel: {
        type: Boolean,
        default: false,
    },
    colIndex: {
        type: Number,
        default: -1,
    },
})

// Emits

const emit = defineEmits(['close', 'addTask'])

//  Variables

const columnIndex = ref(props.colIndex || 0)
const currentDate = ref(new Date());
const formattedDate = ref('');
const formattedTime = ref('');
const taskTitle = ref('');
const taskDescription = ref('');
const startDate = ref('');
const lastDate = ref('');


// Functions 

onMounted(() => {
    formatDate();
    formatTime();
});

onBeforeMount(() => {
    store.loadFromLocalStorage
    console.log(columnIndex.value)
    console.log(todoData)

});

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

const todoData = reactive({
    title: '',
    description: '',
    startDate: '',
    lastDate: '',
    createdDate: formattedDate,
    createdTime: formattedTime,
})
const addTask = () => {
    // emit('addTask', todoData)
    store.addTask(columnIndex.value, { title: todoData.title, description: todoData.description, startData: todoData.startDate, lastDate: todoData.lastDate, ceatedAt: todoData.createdDate })
    // closePopup()
    todoData.value = {
        title: '',
        description: '',
        startDate: '',
        lastDate: '',
    }
    store.loadFromLocalStorage()

    console.log(todoData)
    emit('close')

};

const closePopup = () => {
    emit('close')
    //     todo.value.taskTitle = '';
    //     selectedType.value = null;
    //     todo.value.startDate = '';
    //     todo.value.lastDate = '';
}


// const todo = ref({
//     taskTitle: '',
//     taskDescription: '',
//     startDate: '',
//     lastDate: '',
//     createdDate: formattedDate,
//     createdTime: formattedTime.value,

// })

// const AddTask = () => {
//     const todo = {
//         title: todo.taskTitle,
//         description: todo.taskDescription,
//         startDate: todo.startDate,
//         lastDate: todo.lastDate,
//         createdDate: todo.createdDate,
//         createdTime: todo.createdTime,
//     }
//     emit('addTask', todo)
//     closePopup()
// }


</script>