import { addTask } from "./modules/addTask.js";
import { completeTask } from "./modules/completeTask.js";
import { removeTask } from "./modules/removeTask.js";
import { displayTasks } from "./modules/displayTasks.js";
import { renderTasks } from "./modules/renderTasks.js";

const toDoList = [];

const taskNameInput = document.getElementById("task__name-input");
const addTaskButton = document.getElementById("task__add-task-button");

function handleAddTask () {
  const taskName = taskNameInput.value.trim();
  taskNameInput.value = "";
  if (taskName.trim() === "") {
    alert(("название задачи не может быть пустым"));
    return
  }
  addTask(taskName, toDoList);
  console.log(toDoList);
  renderTasks(toDoList);
}

addTaskButton.addEventListener("click", handleAddTask);




// addTask("Выучить JavaScript", toDoList);
// addTask("Купить продукты", toDoList);
// addTask("Сделать домашнее задание", toDoList);
// addTask("Выучить HTML", toDoList);
// addTask("           ", toDoList);
// displayTasks(toDoList); // Cписок задач
// completeTask("Купить продукты", toDoList);
// removeTask("Сделать домашнее задание", toDoList);
// removeTask("Выгулять собаку", toDoList);
// displayTasks(toDoList); // Обновленный список задач