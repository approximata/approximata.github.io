'use strict';
var controll = (function(){

  var inputField = document.querySelector('.input');

  function checkTheWord(){
    return gameLogic.scoreFeedbacker(service.dictionary, inputField.value);
  }

  function listResultToDom(){
    domManager.fillContent(checkTheWord())
  }

  function listHighScore() {
    domManager.drawTable(service.highScoreStore)
  }

  function listDicToDom() {
    // service.loadFile(domManager.showDictionary);
    domManager.showDictionary(JSON.stringify(service.dictionary));
  }

  return{
    listDicToDom: listDicToDom,
    listResultToDom: listResultToDom,
    listHighScore: listHighScore,
  }
})();
