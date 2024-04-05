<template>
    <div :show="showModel">
        <div
            class="z-50 fixed h-screen flex items-center justify-center inset-0 bg-black bg-opacity-50 transition-opacity">
            <div class="fixed inset-0 top-[25%] px-4">
                <div
                    class="relative flex w-full transform flex-col gap-y-2 overflow-auto rounded-lg bg-white p-4 text-left transition-all mx-auto md:w-8/12 lg:w-6/12 xl:w-4/12">
                    <div class="flex justify-end ">
                        <button type="button" @click=" $emit('close')" class=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg
                text-sm p-1.5 ml-auto inline-flex items-center">
                            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>

                    <div class=" pt-0 text-center">
                        <svg class="w-20 h-20 text-red-600 mx-auto" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <h3 class="text-lg font-normal text-gray-700 mt-5 mb-2">Are you sure you want to delete
                            {{ deleteConfirmationFor }}
                        </h3>
                        <p class="text-lg font-medium text-black mb-6"> " {{ deleteText }} " </p>

                        <div class="flex flex-col items-center md:flex-row justify-center md:justify-end w-full gap-3">
                            <p class="text-sm font-medium text-red-600"> You'll not be able to restore it.</p>
                            <div class="flex items-center justify-center gap-3">
                                <Button type="submit"
                                    class=" border-2 border-gray-400 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 text-xl"
                                    @click="$emit('close')">Cancel</Button>
                                <button @click="confirmDelete"
                                    class="cursor-pointer text-white bg-red-600 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2">
                                    Yes, I'm sure
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    showModel: {
        type: Boolean,
        default: false,
    },
    deleteText: {
        type: String,
        default: '',
    },
    deleteConfirmationFor: {
        type: String,
        default: '',
    },
})
const emits = defineEmits(['close', 'confirm'])
const confirmDelete = () => {
    emits('confirm')

}
onBeforeMount(() => {
    console.log(props.deleteText.title);
});
</script>
