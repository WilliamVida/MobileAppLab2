var tasks = [];
function addTask(task) {
    tasks.push(task);
    console.log("Insertion complete.");
    return tasks.length;
}
function listAllTasks() {
    console.log("Start of the array.");
    tasks.forEach(function (task) {
        console.log(task);
    });
    console.log("End of the array.");
}
function deleteTasks(task) {
    var key = task;
    var index = tasks.indexOf(key, 0);
    if (index > -1) {
        tasks.splice(index, 1);
        console.log("Deletion complete.");
    }
    else {
        console.log("Item not found.");
    }
    return tasks.length;
}
addTask("task1");
addTask("task2");
listAllTasks();
deleteTasks("task1");
listAllTasks();
deleteTasks("task3");
