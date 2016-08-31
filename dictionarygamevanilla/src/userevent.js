'use strict';

var gameButton = document.querySelector('.buttonadd');
var highScoreButton = document.querySelector('.highscorebutton');


gameButton.addEventListener('click', controll.listDicToDom);

gameButton.addEventListener('click', controll.listResultToDom);

highScoreButton.addEventListener('click', controll.listHighScore);
