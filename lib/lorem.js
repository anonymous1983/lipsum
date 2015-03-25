'use strict'

/*
    Base: https://github.com/f/loremjs
*/
var Lorem;
//Create a class named Lorem and constructor
Lorem = function() {
    //Default values.
    this.type = null;
    this.query = null;
    this.data = null;
};
//Static variables
Lorem.IMAGE = 1;
Lorem.TEXT = 2;
Lorem.TYPE = {
    PARAGRAPH: 1,
    SENTENCE: 2,
    WORD: 3
};


var x = 5;
var addX = function(value) {
  return value + x;
};
module.exports.Lorem = Lorem;
module.exports.x = x;
module.exports.addX = addX;