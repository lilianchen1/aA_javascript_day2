

var readline = require('readline');
var reader = readline.createInterface( {
  input: process.stdin,
  output: process.stdout
});

var stack = [[3, 2 ,1], [], []];
var hanoi = new HanoiGame(stack);

function HanoiGame(stack) {
  this.stack = stack;
}


HanoiGame.prototype.isWon = function() {
  if (hanoi.stack[0].length === 0 && (hanoi.stack[1].length === 3 || hanoi.stack[2].length === 3)) {
    return true;
  }
  return false;
};

HanoiGame.prototype.isValidMove = function(startIdx, endIdx) {
  var from = hanoi.stack[startIdx][hanoi.stack[startIdx].length - 1];
  var to = hanoi.stack[endIdx][hanoi.stack[endIdx].length - 1];
  if (from < to || hanoi.stack[endIdx].length === 0) {
    return true;
  }
  return false;

};

HanoiGame.prototype.move = function(startIdx, endIdx) {
  var from = hanoi.stack[startIdx][hanoi.stack[startIdx].length - 1];
  var to = hanoi.stack[endIdx][hanoi.stack[endIdx].length - 1];
  if (hanoi.isValidMove(startIdx, endIdx)) {
    hanoi.stack[endIdx].push(from);
    console.log(hanoi.stack);
    hanoi.stack[startIdx].pop();
    console.log(hanoi.stack);
  } else {
    return console.log("Not a valid move");
  }
};

HanoiGame.prototype.print = function() {
  console.log( JSON.stringify(hanoi.stack));
};

HanoiGame.prototype.promptMove = function(callback) {
  hanoi.print;

  reader.question("Pick a starting tower index :", function(numString1){
    reader.question("Pick an ending tower index :", function(numString2){
      var startIdx = parseInt(numString1);
      var endIdx = parseInt(numString2);
      console.log(hanoi.stack);
      callback(startIdx, endIdx);
    });
  });

};

HanoiGame.prototype.run = function(completionCallback) {
  this.promptMove(function(start, end) {
    hanoi.move(start, end);
    if (hanoi.isWon() === false) {
      hanoi.run(completionCallback);
    } else {
      completionCallback();
    }
  });
  // pass in anonymous fxn which calls self.move. Because don't want the loop to run until we get input

};

var printWon = function() {
  console.log("wonnnnnn");
  reader.close();
};

var game1 = new HanoiGame(stack);
hanoi.run(printWon);
