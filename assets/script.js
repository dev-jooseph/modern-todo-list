const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', addTask);
taskList.addEventListener('click', handleTaskClick);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.className = 'task';

  li.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">✖</button>
  `;

  taskList.appendChild(li);
  taskInput.value = '';
}

function handleTaskClick(e) {
  if (e.target.classList.contains('delete-btn')) {
    e.target.parentElement.remove();
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.classList.toggle('completed');
  }
}