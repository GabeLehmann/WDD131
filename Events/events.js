function newTask() {
    let list = document.querySelector('#todoList');
  
    let inputBox = document.querySelector('#todo');
    let taskText = inputBox.value;
  
    if (taskText !== "") {
      list.innerHTML += `
        <li> ${taskText}
          <div>
            <span data-function="delete">Delete</span>
            <span data-function="complete">Complete</span>
          </div>
        </li>
      `;
  
      inputBox.value = "";
    }
  }
  
  function manageTasks(event) {
    let clickedTask = event.target.closest("li");
  
    if (event.target.getAttribute('data-function') === "delete") {
      clickedTask.remove();
    }
  
    if (event.target.getAttribute('data-function') === "complete") {
      clickedTask.classList.toggle('strike');
    }
  }
  
  let button = document.querySelector('#submitTask');
  button.addEventListener('click', newTask);
  
  let list = document.querySelector('#todoList');
  list.addEventListener('click', manageTasks);
  