// store/columns.js

import { defineStore } from 'pinia';

export const useTodoAppStore = defineStore({
    id: 'columns',
    state: () => ({
        columns: []
    }),
    getters: {
        getColumns: (state) => state.columns,
    },
    actions: {


        // About Columns 


        addColumn(column) {
            this.columns.unshift({
                title: column,
                date: column,
                tasks: [],
            });
            this.saveToLocalStorage();
        },

        addColumnAtEnd(column) {
            this.columns.push({
                title: column,
                date: column,
                tasks: [],
            });
            this.saveToLocalStorage();
        },

        editColumnTitle(columnIndex, newTitle) {
            this.columns[columnIndex].title = newTitle
            this.saveToLocalStorage();
        },

        deleteColumn(columnIndex) {
            this.columns.splice(columnIndex, 1)
            this.saveToLocalStorage();
        },

        deleteAllColumns() {
            this.columns = []
            this.saveToLocalStorage();
        },

        moveColumn(fromIndex, toIndex) {
            const columns = [...this.columns]
            const [columnToMove] = columns.splice(fromIndex, 1)
            columns.splice(toIndex, 0, columnToMove)
            this.columns = columns
            this.saveToLocalStorage();
            // return this.getColumns()
        },


        // About Tasks


        addTask(columnIndex, task) {
            this.columns[columnIndex].tasks.unshift(task);
            this.saveToLocalStorage();

        },
        deleteTask(columnIndex, taskIndex) {
            this.columns[columnIndex].tasks.splice(taskIndex, 1)
            this.saveToLocalStorage();
        },

        updateTask(columnIndex, taskIndex, updatedTask) {

            this.columns[columnIndex].tasks[taskIndex] = updatedTask;
            this.saveToLocalStorage();

        },

        // moveTask(sourceColumnIndex, sourceTaskIndex, destinationColumnIndex, destinationTaskIndex, task) {
        //     // Remove the task from the source column
        //     const movedTask = this.columns[sourceColumnIndex].tasks.splice(sourceTaskIndex, 1)[0];
        //     // Insert the task into the destination column
        //     this.columns[destinationColumnIndex].tasks.splice(destinationTaskIndex, 0, movedTask);
        //     // If provided, update task data
        //     if (task) {
        //         this.updateTask(destinationColumnIndex, destinationTaskIndex, task);
        //     }
        // },


        //About Local Storage


        loadFromLocalStorage() {
            const storedColumns = JSON.parse(localStorage.getItem('columns'));
            if (storedColumns) {
                return this.columns = storedColumns;
            }
        },
        saveToLocalStorage() {
            localStorage.setItem('columns', JSON.stringify(this.columns));
        },

    },

});
