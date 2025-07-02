document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("create-task-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    let taskInput = document.getElementById("new-task-description");
    let taskText = taskInput.value;

    let li = document.createElement("li");
    li.textContent = taskText;

    let taskList = document.getElementById("tasks");
    taskList.appendChild(li);

    taskInput.value = "";
  });
});

