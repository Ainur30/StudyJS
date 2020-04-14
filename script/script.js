'use strict';


const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const headerButton = document.querySelector('.header-button');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');

let todoData = JSON.parse(localStorage.getItem('Key'));

if (todoData === null) {
  todoData = [];
} else {
  todoData = JSON.parse(localStorage.getItem('Key'));
}

const render = function() {
  todoList.textContent = '';
  todoCompleted.textContent = '';


  localStorage.setItem('Key', JSON.stringify(todoData));

  todoData.forEach(function(item) {
    const li = document.createElement('li');
    li.classList.add('todo-item');

    li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
    '<div class="todo-buttons">' +
      '<button class="todo-remove"></button>' +
      '<button class="todo-complete"></button>' +
    '</div>';

    if (item.complited) {
      todoCompleted.append(li);
    } else {
    todoList.append(li);
    }

    const btnTodoComplete = li.querySelector('.todo-complete');
    btnTodoComplete.addEventListener('click', function() {   

      item.complited = !item.complited;
      render();
    });

   
    const btnTodoRemove = li.querySelector('.todo-remove');
    btnTodoRemove.addEventListener('click', function() {

      todoData.splice(item, 1);

      render();
    });
    
  });

  
  headerInput.value = '';
};



todoControl.addEventListener('submit', function(event) {

  event.preventDefault();

  const newTodo = {
    value: headerInput.value,
    complited: false,
  };

  if (headerInput.value.trim() !== ''){

    todoData.push(newTodo);

  }

  localStorage.setItem('Key', JSON.stringify(todoData));

  render();
});
render();