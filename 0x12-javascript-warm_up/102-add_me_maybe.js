#!/usr/bin/node
// executes number x times a function.

exports.addMeMaybe = function (number, theFunction) {
  theFunction(number + 1);
};
