import { addTask } from "./modules/addTask.js";
import { renderTasks } from "./modules/renderTasks.js";
import { filterTasks } from "./modules/filterTasks.js";

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
  renderTasks(toDoList);
}

addTaskButton.addEventListener("click", handleAddTask);

taskNameInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    handleAddTask();
  }
});


document.getElementById("showAll").addEventListener("click", () => {
  const allTasks = filterTasks(toDoList, "all");
  renderTasks(allTasks);
});

document.getElementById("showCompleted").addEventListener("click", () => {
  const completedTasks = filterTasks(toDoList, "completed");
  renderTasks(completedTasks);
});

document.getElementById("showIncomplete").addEventListener("click", () => {
  const incompleteTasks = filterTasks(toDoList, "incomplete");
  renderTasks(incompleteTasks);
});