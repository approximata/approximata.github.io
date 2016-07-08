'use strict';
var button1 = document.querySelector('.candy');
var button2 = document.querySelector('.lolipop');
var candies = 80;
var lolipop = 0;


function createCandies() {
  candies ++;
  document.querySelector('.result').textContent = candies;
}

function getLoliPop() {
  if (candies > 100) {
    candies -= 100;
    lolipop++;
    document.querySelector('.loli').textContent = lolipop;
    document.querySelector('.result').textContent = candies;
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
          playlist: 'taJ60kskkns,FG0fTKAqZ5g'
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
// // This function is called by initialize()
// function updateTimerDisplay(){
//     // Update current time text display.
//     $('#current-time').text(formatTime( player.getCurrentTime() ));
//     $('#duration').text(formatTime( player.getDuration() ));
// }
//
// function formatTime(time){
//     time = Math.round(time);
//
//     var minutes = Math.floor(time / 60),
//     seconds = time - minutes * 60;
//
//     seconds = seconds < 10 ? '0' + seconds : seconds;
//
//     return minutes + ":" + seconds;
// }
// $('#progress-bar').on('mouseup touchend', function (e) {
//
//     var newTime = player.getDuration() * (e.target.value / 100);
//
//     player.seekTo(newTime);
//
// });

function starvideo() {
  player.playVideo();
}
function speedup(x) {
  player.setPlaybackRate(x)
}

function speddlolipop(loli) {
  var speedi = [0.5 ,1, 1.25, 1.5, 2];
  if (loli < 3) {
    speedup(speddi[loli]);
  } else {
    speedup(speddi[4]);
  }
}

// speddlolipop(lolipop);

button1.addEventListener('click', createCandies);
button2.addEventListener('click', getLoliPop);
button2.addEventListener('click', starvideo);
button2.addEventListener('click', speddlolipop);
