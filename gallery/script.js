'use strict';

var listofpiccontent = ['./pictures/01.jpg', './pictures/02.jpg', './pictures/03.jpg', './pictures/04.jpg']
var imageinfo = [
  {
    path:'./pictures/01.jpg',
    title: 'lamp with trees',
    display: true,
  },
  {
    path: './pictures/02.jpg',
    title: 'sky with stuff',
    display: true
  },
  {
    path: './pictures/03.jpg',
    title: 'sky with other stuff',
    display: true,
  },
  {
    path: './pictures/04.jpg',
    title: 'sky with other again',
    display: true,
  },
  {
    path: './pictures/05.jpg',
    title: 'sky with something',
    display: true,
  },
  {
    path: './pictures/06.jpg',
    title: 'sky with houses',
    display: true,
  },
  {
    path: './pictures/07.jpg',
    title: 'sky in the beach',
    display: true,
  },
]

var picpreviewed = document.querySelector('.previewed');
var picList = document.querySelector('.tumbpic');
console.log(picList);
var titleplace = document.querySelector('.titleimage');
console.log(titleplace);

var rightbutton = document.querySelector('.rightbutton');
var leftbutton = document.querySelector('.leftbutton');
var index = 0;
var indexofthumb = 0;


function createOneTumb(i) {
  var newpic = document.createElement('img');
  newpic.src = imageinfo[i].path;
  picList.appendChild(newpic);
}

function createAllTumb() {
  picList.innerHTML = '';
  picList.scrollTop = 0;
  for(var i = 0; i < imageinfo.length; i++){
    createOneTumb((i+index) % imageinfo.length);
  }
}

function nextPic() {
  index++;
  if(index >= imageinfo.length) {
    index = 0;
  }
  console.log(index);
  previewAndTitle(index)
}

function previousPic() {
  index--;
  if(index <= -1) {
    index = imageinfo.length - 1;
  }
  console.log(index);
  previewAndTitle(index)
}

function previewAndTitle(index){
  picpreviewed.setAttribute('src', imageinfo[index].path);
  titleplace.innerHTML = imageinfo[index].title;
  createAllTumb();
}


rightbutton.addEventListener('click', nextPic);
leftbutton.addEventListener('click', previousPic);

createAllTumb();
