<!-- Tasks.vue -->

<template>
    <div>
        <div v-for="(column, colIndex) in columns" :key="colIndex">

            <h2 class="my-2  text-xl"> Column title: {{ column.title }}</h2>
            <div v-for="(task, taskIndex) in column.tasks" :key="taskIndex" class="space-y-4">
                <p>{{ task.name }} </p>
                <p>{{ task.lastName }} </p>
                <p> {{ task.description }}</p>
                <button @click="openEditForm(colIndex, taskIndex)" class="mr-3">Edit</button>
                <button @click="deleteTask(colIndex, taskIndex)">Delete</button>
            </div>

            <form @submit.prevent="addTask(colIndex)">
                <input v-model="newTask.name" placeholder="Name" required>
                <input v-model="newTask.lastName" placeholder="Last Name" required>
                <input v-model="newTask.description" placeholder="Description" required>
                <button type="submit">Add Task</button>
            </form>
        </div>

        <div>
            <h2>Add Column</h2>
            <form @submit.prevent="addColumn">
                <input v-model="newColumnTitle" placeholder="Column Title" required>
                <button type="submit">Add Column</button>
            </form>
        </div>

        <form v-if="showEditForm" @submit.prevent="updateTask">
            <input v-model="editedTask.name" placeholder="Name" required>
            <input v-model="editedTask.lastName" placeholder="Last Name" required>
            <input v-model="editedTask.description" placeholder="Description" required>
            <button type="submit">Update Task</button>
            <button @click="cancelEdit">Cancel</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTasksStore } from '/store/crud'

const store = useTasksStore()

let editColumnIndex = null
let editTaskIndex = null
const columns = store.columns

const editedTask = ref(null)
const showEditForm = ref(false)

const newTask = {
    name: '',
    lastName: '',
    description: ''
}

const newColumnTitle = ref('')

function addTask(columnIndex) {
    store.addTask(columnIndex, { ...newTask })
    newTask.name = ''
    newTask.lastName = ''
    newTask.description = ''
}

function addColumn() {
    if (newColumnTitle.value.trim() !== '') {
        store.addColumn(newColumnTitle.value)
        newColumnTitle.value = ''
    }
}

function openEditForm(columnIndex, taskIndex) {
    if (columns[columnIndex] && columns[columnIndex].tasks && columns[columnIndex].tasks[taskIndex]) {
        editedTask.value = { ...columns[columnIndex].tasks[taskIndex] }
        editColumnIndex = columnIndex
        editTaskIndex = taskIndex
        showEditForm.value = true
    }
}

function updateTask() {
    if (editedTask.value !== null && editColumnIndex !== null && editTaskIndex !== null) {
        store.updateTask(editColumnIndex, editTaskIndex, editedTask.value)
        editedTask.value = null
        editColumnIndex = null
        editTaskIndex = null
        showEditForm.value = false
    }
}
function cancelEdit() {
    editedTask.value = null
    showEditForm.value = false
}

function deleteTask(columnIndex, taskIndex) {
    store.deleteTask(columnIndex, taskIndex)
}
</script>
