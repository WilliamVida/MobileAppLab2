import { ToDoInterface } from './ToDoInterface';

class ToDoClass implements ToDoInterface {

    tasks: Array<string> = [];

    addTask(task: string): number {
        this.tasks.push(task);
        console.log("Insertion complete.");
        return this.tasks.length;
    }
    
    listAllTasks() {
        console.log("Start of the array.");
        this.tasks.forEach(function (task) {
            console.log(task);
        });
        console.log("End of the array.");
    }
    
    deleteTasks(task: string): number {
        let key: string = task;
        let index: number = this.tasks.indexOf(key, 0);
    
        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log("Deletion complete.");
        }
        else {
            console.log("Item not found.");
        }
    
        return this.tasks.length;
    }

}

let testClass = new ToDoClass();
testClass.addTask("task1");
testClass.addTask("task2");
testClass.listAllTasks();
testClass.deleteTasks("task1");
testClass.listAllTasks();
testClass.deleteTasks("task3");