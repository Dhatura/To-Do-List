export function displayTasks (toDoList) {
  if (toDoList.length === 0) {
    console.log("Список задач пуст");
    return;
  }
  toDoList.forEach(task => {
    const status = task.comleted ? "Выполнена" : "Не выполнена";
    console.log(`- ${task.name}: ${status}`);
  });
}