import { removeTask } from "./removeTask.js";
import { toggleTaskCompletion } from "./toggleTaskCompletion.js";


export function renderTasks (toDoList) {
  console.log(toDoList);
  const tasksList = document.getElementById("tasks__list");
  //очистка список задач
  tasksList.innerHTML = "";

  toDoList.forEach((item, index) => {
    const taskItem = document.createElement("li");

    //переключатель состояния (задача выполнена / невыполнена)
    if(item.completed) {
      taskItem.classList.add("completed");
    }
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.completed;

    checkbox.addEventListener("change", () => {
      toggleTaskCompletion(item);
      renderTasks(toDoList);
    })
    //отображение текста задачи в списке
    const taskText = document.createElement("span");
    taskText.textContent = item.name;
    
    //замена текста по двойному клику
    taskItem.ondblclick = () => {
      const input = document.createElement("input");
      input.type = "text";
      input.value = item.name;
      taskItem.replaceChild(input, taskText);

      input.addEventListener("keypress", (event) => {
        if(event.key === "Enter") {
          item.name = input.value.trim() || item.name;
          renderTasks(toDoList);
        }
      })

      input.addEventListener("blur", () => {
        if(input.value.trim()) {
          item.name = input.value.trim();
        }
        renderTasks(toDoList);
      })
      
      input.focus();
    }

    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.classList.add("delete-btn")
    deleteTaskButton.textContent = "Удалить";

    deleteTaskButton.onclick = () => {
      removeTask(index, toDoList);
      renderTasks(toDoList);
    }

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteTaskButton);
    tasksList.appendChild(taskItem);
    
  });
}