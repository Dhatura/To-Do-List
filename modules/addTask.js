export function addTask (taskName, toDoList) {
    toDoList.push({name: taskName, completed: false});
    return toDoList;
}