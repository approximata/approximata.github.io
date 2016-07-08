'use strict';
var button = document.querySelector('.button-text');

var todolist = document.querySelector('.todo-list');

function drawTasks(inputdata) {
  inputdata.forEach(function (element, index) {
    if ((inputdata[index].text).length > 0) {
      console.log(element);
      var newTodo = document.createElement('div');
      newTodo.classList.add('taskholder');
      newTodo.innerHTML = '<div class="todo-item">' + inputdata[index].text + '</div> <div class="buttons" id="1"> <button class="delete" type="button"></button> <input class="check" type="checkbox"></input> </div>';
      newTodo.setAttribute('id', inputdata[index].id);
      todolist.appendChild(newTodo);
      var checked = newTodo.querySelector('.check');
      checked.checked = inputdata[index].completed;
    }
  });
}

function getToDolList() {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    var inputdata = JSON.parse(xhr.response);
    drawTasks(inputdata);
  };
  xhr.open('GET', 'https://mysterious-dusk-8248.herokuapp.com/todos/');
  xhr.send();
}

button.addEventListener('click', getToDolList);
