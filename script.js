document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const todoList = document.getElementById("todoList");

  // Add Task
  addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
      const listItem = createTaskElement(taskText);
      todoList.appendChild(listItem);
      taskInput.value = "";
    }
  });

  // Create Task Element
  function createTaskElement(taskText) {
    const listItem = document.createElement("li");
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => listItem.remove());

    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteBtn);

    return listItem;
  }

  // Add Task on Enter Key
  taskInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      addTaskBtn.click();
    }
  });
});
