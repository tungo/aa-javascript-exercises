class Board {

  constructor() {
    this.grid = [
      new Array(3),
      new Array(3),
      new Array(3)
    ];
  }

  isWon() {
    let winner = this.winner();
    console.log(winner);
    if (winner) {
      return true;
    } else {
      return false;
    }
  }

  winner() {
    for (let i = 0; i < Board.DIRS.length; i++) {
      let dir = Board.DIRS[i];

      let mark1 = this.grid[dir[0][0]][dir[0][1]];
      let mark2 = this.grid[dir[1][0]][dir[1][1]];
      let mark3 = this.grid[dir[2][0]][dir[2][1]];

      if (mark1 === mark2 && mark1 === mark3 && mark1 !== undefined) {
        return mark1;
      }
    }

    return null;
  }

  isEmpty(pos) {
    if (this.grid[pos[0]][pos[1]] === undefined) {
      return true;
    } else {
      return false;
    }
  }

  placeMark(pos, mark) {
    if (this.isEmpty(pos)) {
      this.grid[pos[0]][pos[1]] = mark;
      return true;
    }
    return false;
  }

  print() {
    console.log(this.grid[0]);
    console.log(this.grid[1]);
    console.log(this.grid[2]);
  }

}

Board.DIRS = [
  [[0, 0], [0, 1], [0, 2]],
  [[1, 0], [1, 1], [1, 2]],
  [[2, 0], [2, 1], [2, 2]],

  [[0, 0], [1, 0], [2, 0]],
  [[0, 1], [1, 1], [2, 1]],
  [[0, 2], [1, 2], [2, 2]],

  [[0, 0], [1, 1], [2, 2]],
  [[0, 2], [1, 1], [2, 0]]
];

module.exports = Board;
