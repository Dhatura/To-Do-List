export function renderTasks (toDoList) {
  const tasksList = document.getElementById("tasks__list");
  tasksList.innerHTML = "";
  toDoList.forEach(item => {
    const taskItem = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = item.name;

    taskItem.appendChild(taskText);
    tasksList.appendChild(taskItem);
    
  });

  
  // const taskText = inputText.value;
  // taskItem.innerText = taskText;
  // inputText.value = "";
}