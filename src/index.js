document.addEventListener("DOMContentLoaded", () => {
  let taskInput = document.getElementById('taskInput');
  let submitTaskButton = document.getElementById('submitTask');
  let taskList = document.getElementById('taskList');

  submitTaskButton.addEventListener('click', function () {
    
    const task = taskInput.value.trim();

    
    if (task !== '') {
     
      const listItem = document.createElement('li');
      listItem.textContent = task;

      
      taskList.appendChild(listItem);

    
      taskInput.value = '';
    }
  });
});

