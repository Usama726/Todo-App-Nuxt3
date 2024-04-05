<template>

    <div>
        <div :show="showAddColumnModel">
            <div
                class="z-50 fixed h-screen flex items-center justify-center inset-0 bg-black bg-opacity-50 transition-opacity">
                <div class="fixed inset-0 top-[25%] z-10 px-4">
                    <div
                        class="relative flex w-full transform flex-col gap-y-2 overflow-auto rounded-lg bg-white p-4 text-left transition-all mx-auto sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-base font-medium"> Write a precise title for a column</p>
                                <p class="text-base font-medium">i.e ( In progress, To do )</p>
                            </div>
                            <div class=" flex justify-end  hover:bg-gray-200 rounded-lg p-2 cursor-pointer">
                                <TheCrossIcon @click="$emit('close')" />
                            </div>
                        </div>
                        <form @submit.prevent="submitForm" class="w-full flex flex-col gap-4">
                            <div class="w-full flex flex-col gap-3">
                                <div>
                                    <label for="task-title" class="text-sm">
                                        Column title
                                    </label>
                                    <textarea type="text" v-model="column.title"
                                        class="  mt-1 block w-full rounded-lg border border-gray-300 p-3 pl-4 shadow-sm placeholder:text-zinc-500 focus:border-blue-800 focus:outline-blue-800 focus:ring-blue-800 sm:text-sm"
                                        placeholder="Enter your column title" required="true" />
                                </div>

                            </div>
                            <div class="flex items-center justify-end gap-3">
                                <Button type="submit"
                                    class=" border-2 border-gray-400 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 text-xl"
                                    @click="$emit('close')">Cancel</Button>
                                <TheButton class="text-end" type="submit" button-text="Add Column" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const currentDate = ref(new Date());
const formattedTime = ref('');
const formattedDate = ref('');

onMounted(() => {
    formatDate();
    formatTime();
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

const column = ref({
    title: '',
    createdAt: formattedDate,
})
// const title = ref('');

defineProps({
    showAddColumnModel: {
        type: Boolean,
        default: false,
    },
})
const emit = defineEmits(['close', 'addColumn'])
const submitForm = () => {
    emit('addColumn', column.value)
    column.value = {}
}
</script>

<style lang="scss" scoped></style>