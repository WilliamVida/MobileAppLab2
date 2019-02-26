"use strict";
exports.__esModule = true;
var ToDoClass = /** @class */ (function () {
    function ToDoClass() {
        this.tasks = [];
    }
    ToDoClass.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("Insertion complete.");
        return this.tasks.length;
    };
    ToDoClass.prototype.listAllTasks = function () {
        console.log("Start of the array.");
        this.tasks.forEach(function (task) {
            console.log(task);
        });
        console.log("End of the array.");
    };
    ToDoClass.prototype.deleteTasks = function (task) {
        var key = task;
        var index = this.tasks.indexOf(key, 0);
        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log("Deletion complete.");
        }
        else {
            console.log("Item not found.");
        }
        return this.tasks.length;
    };
    return ToDoClass;
}());
var testClass = new ToDoClass();
testClass.addTask("task1");
testClass.addTask("task2");
testClass.listAllTasks();
testClass.deleteTasks("task1");
testClass.listAllTasks();
testClass.deleteTasks("task3");
