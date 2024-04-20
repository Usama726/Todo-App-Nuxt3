<template>
    <div class="border border-blue-400 w-full p-2 rounded-lg flex items-center justify-between">
        <div>
            <h1 class="text-xl font-medium text-white">
                Title : <span class="text-base font-medium "> {{ todo.taskTitle }}</span>
            </h1>
            <p>{{ todo.taskType || nothing }}</p>
            <span class="text-xs text-gray-400"> `{{ todo.createdDate }} {{ createdTime }}`</span>
        </div>
        <div class="flex items-center gap-3">
            <TheButton button-text="Move to Active " button-styling="px-4 py-1  " />
            <svg class="h-8 w-8 cursor-pointer" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M4 5L15 5" stroke="#f7f7f7" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"></path>
                    <path d="M4 8H15" stroke="#f7f7f7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    </path>
                    <path d="M4 11H11" stroke="#f7f7f7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    </path>
                    <path
                        d="M18.4563 13.5423L13.9268 18.0719C13.6476 18.3511 13.292 18.5414 12.9048 18.6188L10.8153 19.0367L11.2332 16.9472C11.3106 16.5601 11.5009 16.2045 11.7801 15.9253L16.3096 11.3957M18.4563 13.5423L19.585 12.4135C19.9755 12.023 19.9755 11.3898 19.585 10.9993L18.8526 10.2669C18.4621 9.8764 17.8289 9.8764 17.4384 10.2669L16.3096 11.3957M18.4563 13.5423L16.3096 11.3957"
                        stroke="#f7f7f7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
            </svg>
            <svg class="h-7 w-6 cursor-pointer" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z">
                    </path>
                </g>
            </svg>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    todo: {
        type: Object,
        default: () => { },
    },
    todoId: {
        type: Number,
        default: -1,
    },
})
const todoNumber = computed(() => {
    return props.todoId + 1
})
onBeforeMount(() => {
    console.log(props.todo.createdAt)
})
</script>

<style lang="scss" scoped></style>