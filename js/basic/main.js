'use strict';

alert('Start JS!!!');
let arc = {
  oneZ: "Hello",
  twoZ : function () {
      console.log(this.oneZ +', World!!!');
  }
};

//одностроковий коментар
/*
двостроковий коментар
 */

var leftBorderWidth = 1;
let second = 2;
const pi = 3.14;
console.log(second);
console.log(pi);
console.log(leftBorderWidth);

// var number = 5;
// var string = "Hello!";
// var sym = Symbol();
// var boolean = true;
// null;
// undefined;
// var obj ={};

arc.twoZ();

