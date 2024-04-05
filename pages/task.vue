<template>
    <div class="mt-36 text-black max-w-custom ">
        <h1>{{ task.title }}</h1>
        <!-- <p>{{ task.description }}</p> -->
    </div>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useTodoAppStore } from '~/store/todoStore';
const store = useTodoAppStore();
const { getColumns } = storeToRefs(store)
const columnIndex = useRoute().query.columnIndex
const taskIndex = useRoute().query.taskIndex
const task = getColumns.value[columnIndex]?.tasks[taskIndex]
onMounted(() => {
    store.loadFromLocalStorage
    console.log(columnIndex, taskIndex, task.value)
})
</script>