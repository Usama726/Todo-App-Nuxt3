// tasks.js

import { defineStore } from 'pinia'

export const useTasksStore = defineStore({
    id: 'tasks',
    state: () => ({
        columns: []
    }),
    actions: {
        addColumn(title) {
            this.columns.push({ title, tasks: [] })
        },
        addTask(columnIndex, task) {
            this.columns[columnIndex].tasks.push(task)
        },
        updateTask(columnIndex, taskIndex, updatedTask) {
            this.columns[columnIndex].tasks[taskIndex] = updatedTask
        },
        deleteTask(columnIndex, taskIndex) {
            this.columns[columnIndex].tasks.splice(taskIndex, 1)
        }
    }
})
