export interface ToDoInterface {
    tasks : Array<string>;
    addTask(task : string) : number;
    listAllTasks();
    deleteTasks(task : string) : number;
}

