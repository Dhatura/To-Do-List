export function addTask (taskName, toDoList) {
  // if (taskName.trim() === "") {

  //   alert("название задачи не может быть пустым");
  //   return
  // }
    toDoList.push({name: taskName, comleted: false});
    return toDoList;
}