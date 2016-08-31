'use strict';
const service = (function() {
  // jsonObject = require('.jsonstore/dic.json')
  var dictionary =
  [
    {"world":"valami"},
    {"world":"something"},
    {"world":"anything"},
  ];

  var highScoreStore = [];

  function scoreSaver(input){
    highScoreStore.push(input);
    console.log(highScoreStore);
  };


  // function loadFile(callback) {
  //
  //   var xobj = new XMLHttpRequest();
  //   xobj.overrideMimeType("application/json");
  //   xobj.open('GET', 'src/jsonstore/dic.json', true);
  //   xobj.onreadystatechange = function () {
  //     if (this.readyState == 4 && (this.status == "200" || this.status == 0)) {
  //       var json = window.JSON ? JSON.parse(this.reponseText) : eval("("+this.responseText+")");
  //         callback(json);
  //     }
  //   };
  // xobj.send(null);



  // function loadFile(cb){
    // var myInit = {
    //   method: 'GET',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   mode: 'no-cors',
    //   cache: 'default' };
    // var myRequest = '.jsonstore/dic';
    //
    // fetch(myRequest, myInit)
    //   .then(function(response) {
    //     return response.json();
    //   })
    //   .then(function(data) {
    //      console.log('FETCH:', data);
    //      cb(data);
    //   });


    return {
      // loadFile: loadFile,
      scoreSaver: scoreSaver,
      dictionary: dictionary,
      highScoreStore: highScoreStore
    }
})();
