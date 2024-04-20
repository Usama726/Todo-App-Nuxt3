<template>
    <div class="mt-32">
        <h2>columns</h2>
        <ul>
            <div v-for="(column, index) in todoColumns" :key="index" class="flex bg-gray-300 h-screen">
                <p class="w-full max-w-[400px]">{{ column.title }}</p>

                <div v-for="task in column.tasks" :key="task" class="flex flex-col">{{ task }}</div>
            </div>
        </ul>
    </div>
</template>

<script setup>
defineProps({
    todoColumns: {
        type: Array,
        defaul: () => [],
        required: true,
    },
});
const props = defineProps({
    columnId: {
        type: Number,
        required: true
    }
})

const column = computed(() => store.columns.find(col => col.id === props.columnId))

</script>
