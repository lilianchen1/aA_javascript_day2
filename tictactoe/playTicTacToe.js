var readline = require('readline');
var reader = readline.createInterface( {
  input: process.stdin,
  output: process.stdout
});

// var grid = [[0, 0, 0], [0,0,0], [0,0,0]];
var GameBoard = require("./index");

var game = new GameBoard.Game(reader);
// var board = new GameBoard.Board(grid);

var completionCallback = function(){
  if (game.player === 1) {
    console.log("Y wins!");
  } else {
    console.log("X wins!");
  }
  reader.close();
};
game.run(completionCallback);
