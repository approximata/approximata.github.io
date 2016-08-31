'use strict';

var domManager = (function() {
  var domResultField =  document.querySelector('.result');
  var domDicField = document.querySelector('.dic');
  var domInputField = document.querySelector('.input');
  var domHighscoreList = document.querySelector('.highscore')


  function clearDom() {
    domInputField.value = '';
  }

  function addInnerHtmlToAddHtml(element) {
    return  '<td>'+element.world+'</td> <td>'+element.score+'</td>';
  }

  function addHtml(element) {
    var newLine = document.createElement('tr');
    newLine.classList.add('worldtd');
    newLine.innerHTML = addInnerHtmlToAddHtml(element);
    newLine.setAttribute('worldtd', element.world);
    domHighscoreList.appendChild(newLine);
  }

  function clearTable(){
    var lines = document.querySelector('.worldtd');
    console.log(lines);
    domHighscoreList.removeChild(lines);
  }

  function drawTable(inputdata) {
    // console.log(inputdata);
    // clearTable()
    inputdata.forEach(function (element) {
      addHtml(element);
    });
  }

  function fillHighscore(input){
    domHighscoreList.textContent = input;
  }

  function fillContent(input) {
    domResultField.textContent = 'Input: ' + input;
    clearDom()
  }

  function showDictionary(input) {
    domDicField.textContent = input;
  }

  return {
    showDictionary: showDictionary,
    fillContent: fillContent,
    fillHighscore: fillHighscore,
    drawTable: drawTable,
  };
})();
