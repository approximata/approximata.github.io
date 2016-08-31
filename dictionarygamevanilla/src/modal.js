'use strict';
var highscorebutton = document.querySelector('.highscorebutton');
var modal = document.querySelector('.modal');
var closeModal =document.querySelector('.close');

highscorebutton.onclick = function() {
    modal.style.display = "block";
}

closeModal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
