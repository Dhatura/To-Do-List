export function removeTask (taskName, toDoList) {
  let taskIndex = toDoList.findIndex(task => task.name === taskName);
  if (taskIndex === -1) {
    console.log(`задача ${taskName} не найдена`);
    return;
  }
  toDoList.splice(taskIndex, 1);
}