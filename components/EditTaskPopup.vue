<template>
    <div :show="showModel">
        <div
            class="z-50 fixed h-screen flex items-center justify-center inset-0 bg-black bg-opacity-50 transition-opacity ">
            <div class="fixed inset-0 top-[25%] px-4 ">
                <div
                    class="relative flex w-full transform flex-col gap-y-2 overflow-auto rounded-lg bg-white p-4 text-left transition-all mx-auto sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
                    <div class="flex items-center justify-between">
                        <p class="text-lg font-medium text-black">Edit task: {{ task.title }}</p>
                        <div class=" flex justify-end hover:bg-gray-200 rounded-lg p-2 cursor-pointer  text-black"
                            @click="$emit('close')">
                            <TheCrossIcon />
                        </div>
                    </div>
                    <form @submit.prevent="updateValues" class="w-full flex flex-col gap-4">
                        <div class="w-full flex flex-col gap-3">
                            <div>
                                <label for="task-title" class="text-xs">
                                    Edit task title
                                </label>
                                <input type="text" v-model="editedTask.title"
                                    class="text-black block w-full rounded-lg border border-gray-400 p-3 pl-4 shadow-sm placeholder:text-zinc-400 focus:border-blue-800 focus:outline-blue-800 focus:ring-blue-800 sm:text-sm" />
                            </div>
                            <div>
                                <label for="task-title" class="text-xs">
                                    Edit task description
                                </label>
                                <textarea rows="4" type="text" v-model="editedTask.description"
                                    class="text-black block w-full rounded-lg border border-gray-400 p-3 pl-4 shadow-sm placeholder:text-zinc-400 focus:border-blue-800 focus:outline-blue-800 focus:ring-blue-800 sm:text-sm"></textarea>
                            </div>

                        </div>
                        <div class="flex items-center justify-end gap-3">
                            <Button type="button"
                                class=" border-2 border-gray-400 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 text-xl"
                                @click="$emit('close')">Cancel</Button>
                            <TheButton type="submit" button-text="Save" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
// const { task, showModel } = defineProps()
const props = defineProps({
    showModel: {
        type: Boolean,
        default: false,
    },
    task: {
        type: Object,
        default: {},
    },
})
const taskTitle = ref(props.task.title)
const emit = defineEmits(['close', 'save-task'])

const editedTask = ref({ ...props.task })
function updateValues() {
    emit('save-task', editedTask.value)
}
</script>