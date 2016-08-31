'use strict';

var gameLogic = (function() {

  let validValue = {};

  function filterData(data, input){
    console.log(data);
    return data.some(function(element){
      return input === element.world;
    })
  };

  function uniqueLetterCounter(input){
    var arr = input.split('').sort();
    var count = 0;
    for(var i = 0; i < arr.length; i++){
      if(arr[i] !== arr[i+1]){
        count ++
      }
    }
    return count;
  };

  function scoreFeedbacker(data, input) {
    if (filterData(data, input)){
      validValue.world = input;
      validValue.score = uniqueLetterCounter(input);
      console.log(validValue);
      service.scoreSaver(validValue);
      return 'world: ' + validValue.world + ' score: ' + validValue.score;
    }
    return 'Not in the dictionary';
  };


  return {
    scoreFeedbacker: scoreFeedbacker,
    validValue: validValue,
  }



})();
