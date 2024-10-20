export function completeTask (taskName, toDoList) {
  let task = toDoList.find(task => task.name === taskName);
  if (!task) {
    console.log(`задача ${taskName} не найдена`);
    return;
  }
  task.comleted = true;
}