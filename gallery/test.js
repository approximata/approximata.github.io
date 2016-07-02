'use strict';
var planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true
  }
]
for (var i = 0; i < planetData.length; i++) {
  if (planetData[i].asteroid) {
    var newItem = document.createElement('li');
    newItem.textContent = planetData[i].content;
    newItem.classList.add(planetData[i].category)
    asteroids.appendChild(newItem);
  }
}
