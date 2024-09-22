document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const taskItem = document.createElement('li');
        taskItem.className = 'task';
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;
        taskItem.addEventListener('click', toggleTaskCompletion);
        taskList.appendChild(taskItem);

        taskInput.value = '';
    }

    window.removeTask = function(button) {
        const taskItem = button.parentElement;
        taskList.removeChild(taskItem);
    }

    function toggleTaskCompletion(event) {
        if (event.target.tagName === 'BUTTON') return;
        const taskItem = event.currentTarget;
        taskItem.classList.toggle('completed');
    }
});