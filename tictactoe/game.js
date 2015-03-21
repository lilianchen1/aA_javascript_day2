var Board = require("./board");

function Game(reader) {
  this.reader = reader;
  var grid = [[0, 0, 0], [0,0,0], [0,0,0]];
  // game = new Game(reader);
  this.board = new Board(grid);
  this.player = 1;
}

Game.prototype.run = function(completionCallback) {
  this.board.print();
  var game = this;
  this.chooseMark(function(rowIdx, colIdx){
    if (game.player === 1) {
      game.board.markSpace(rowIdx, colIdx, 1);
      game.player = 2;
    } else {
      game.board.markSpace(rowIdx, colIdx, 2);
      game.player = 1;
    }

    // game.board.print();
    if (!game.board.isOver()) {
      game.run(completionCallback);
    } else {
      completionCallback();
    }
  });
};

Game.prototype.chooseMark = function(callback) {
  var game = this;
  this.reader.question("Pick a row index :", function(numString1){
    game.reader.question("Pick a column index :", function(numString2){
      var rowIdx = parseInt(numString1);
      var colIdx = parseInt(numString2);
      callback(rowIdx, colIdx);
    });
  });

};

module.exports = Game;
