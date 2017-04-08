'use strict';
var button = document.querySelector('.button-text');
var todolist = document.querySelector('.todo-list');
var inputField = document.querySelector('input');
var url = 'https://mysterious-dusk-8248.herokuapp.com/todos/';


function addHtml(element) {
  var newTodo = document.createElement('div');
  newTodo.classList.add('taskholder');
  newTodo.innerHTML = '<div class="todo-item">' + element.text + '</div> <div class="buttons"> <button class="delete" type="button" id=' + 'd' + element.id + '></button> <input class="check" type="checkbox" id=' + 'c' + element.id + '></input> </div>';
  newTodo.setAttribute('id', 'task' + element.id);
  todolist.appendChild(newTodo);
  newTodo.querySelector('#d' + element.id).addEventListener('click', deleteTask);
  newTodo.querySelector('#c' + element.id).addEventListener('click', chkTask);
  var checked = newTodo.querySelector('.check');
  checked.checked = element.completed;
  inputField.value = '';
}

function deleteTask(event) {
  var xhr = new XMLHttpRequest();
  var targetId = event.target.id;
  console.log(targetId);
  var serverId = targetId.slice(1);
  console.log(serverId);
  xhr.open('DELETE', url + serverId, true);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onload = function() {
    if (xhr.readyState === 4) {
      todolist.removeChild(document.querySelector('#task' + serverId));
    }
  }
  xhr.send(null);
}

function chkTask(event) {
  var xhr = new XMLHttpRequest();
  var id = event.target.getAttribute('id').slice(1);
  console.log(id);
  console.log(document.querySelector('#task' + id).textContent);
  var sendComplete = {
    text: document.querySelector('#task' + id).textContent,
    completed: true
  };
  xhr.open('PUT', url + id, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if (xhr.readyState === 4) {
      document.querySelector('#c' + id).classList.add('checked');
    }
  };
  xhr.send(JSON.stringify(sendComplete));
}

function drawTasks(inputdata) {
  inputdata.forEach(function (element) {
    if ((element.text).length > 0) {
      console.log(element);
      addHtml(element);
    }
  });
}

function addTask() {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-Type', 'application/json');
  var inputFieldValue = inputField.value
  console.log(inputFieldValue);
  xhr.send(JSON.stringify({ "text": inputFieldValue }));
  console.log(JSON.stringify({ "text": inputFieldValue }));
  xhr.onload = function() {
    if (xhr.readyState === xhr.DONE) {
      addHtml(JSON.parse(xhr.response));
      console.log(JSON.parse(xhr.response));
    }
  };
}

function getToDolList() {
  var xhr = new XMLHttpRequest();
  console.log('get started');
  xhr.onload = function() {
    var inputdata = JSON.parse(xhr.response);
    drawTasks(inputdata);
  };
  xhr.open('GET', url);
  xhr.send();
}

getToDolList();

button.addEventListener('click', addTask);
