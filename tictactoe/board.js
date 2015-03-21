function Board(grid) {
  this.grid = grid;
}

// var board = new Board(grid);

var grid = [[0, 0, 0], [0,0,0], [0,0,0]];

Board.prototype.validMove = function(rowIdx, colIdx) {
  // console.log(this);
  // console.log(typeof this);
  // console.log(rowIdx, colIdx);
  if (this.grid[rowIdx][colIdx] === 0) {
    return true;
  }
  return false;
};

Board.prototype.markSpace = function(rowIdx, colIdx, player) {
  if (this.validMove(rowIdx, colIdx) === true) {
    if (player === 1) {
      this.grid[rowIdx][colIdx] = "x";
    } else {
      this.grid[rowIdx][colIdx] = "y";
    }
  }
};

Board.prototype.print = function() {
  var board = this;
  console.log(JSON.stringify(board.grid));
};

Board.prototype.isOver = function(grid) {
  for (var i = 0; i < this.grid.length; i++) {
    if (this.checkEqual(this.grid[i][0], this.grid[i][1], this.grid[i][2]) ) {
      return true;
    } else if (this.checkEqual( this.grid[0][i], this.grid[1][i], this.grid[2][i])) {
      return true;
    }
  }

  if (this.checkEqual(this.grid[0][0], this.grid[1][1], this.grid[2][2]) ||
        this.checkEqual(this.grid[0][2], this.grid[1][1], this.grid[2][0]) ) {
          return true;
  }
  return false;
};

Board.prototype.checkEqual = function(arg1, arg2, arg3) {
  if (arg1 === arg2 && arg2 === arg3 && arg1 !== 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = Board;
