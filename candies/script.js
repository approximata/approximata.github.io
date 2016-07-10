'use strict';
var button1 = document.querySelector('.candy');
var button2 = document.querySelector('.lolipop');
var candies = 0;
var lolipop = 0;
var speed = 1;

function createCandies() {
  candies ++;
  document.querySelector('.result').textContent = candies;
}

function getLoliPop() {
  if (candies > 10) {
    candies -= 10;
    lolipop++;
    document.querySelector('.loli').textContent = lolipop;
    document.querySelector('.result').textContent = candies;
    starvideo();
    speddlolipop(lolipop);
    console.log(speed);
    speedup(speed);
  } else {
    alert("Not enough candies");
  }
}

function autoCandies() {
  if (lolipop > 0) {
    candies += lolipop;
    document.querySelector('.result').textContent = candies;
  }
}

setInterval(autoCandies, 1000);

var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('video-placeholder', {
      width: 600,
      height: 400,
      videoId: '3rYoRaxgOE0',
      playerVars: {
          color: 'white',
          playlist: ''
      },
      events: {
          onReady: initialize
      }
  });
}

function initialize() {
  updateTimerDisplay();
  updateProgressBar();

  clearInterval(time_update_interval);

  time_update_interval = setInterval(function () {
      updateTimerDisplay();
      updateProgressBar();
  }, 1000);
}

function starvideo() {
  player.playVideo();
}
function speedup(x) {
  player.setPlaybackRate(x)
}

function speddlolipop(loli) {
  var speedi = [0.5 ,1, 1.25, 1.5, 2];
  if (loli < 4) {
    console.log(speedi[loli]);
    speed = speedi[loli];
  } else {
    console.log(speedi[4]);
    speed = speedi[4];
  }
}

button1.addEventListener('click', createCandies);
button2.addEventListener('click', getLoliPop);
