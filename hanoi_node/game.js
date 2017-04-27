const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor() {
    this.towers = [[3, 2, 1], [], []];
  }

  run() {
    // until stack is moved to position 1 or 2
      // ask user from move
      // ask user to move
      // check for valid move
      // move the piece
  }

  promtMove(callback) {
    console.log(this.towers);

    let startTowerIdx;
    let endTowerIdx;

    reader.question("Where do you want to move from", (from) => {
      startTowerIdx = parseInt(from);
      reader.question("Where do you want to move to", (to) => {
        endTowerIdx = parseInt(to);
        callback(startTowerIdx, endTowerIdx);
      });
    });
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    if (startTowerIdx > 2 || startTowerIdx < 0) {
      return false;
    }
    if (endTowerIdx > 2 || endTowerIdx < 0) {
      return false;
    }
    if (endTowerIdx === startTowerIdx) {
      return false;
    }
    if (this.towers[startTowerIdx].length === 0) {
      return false;
    }
    if (this.towers[startTowerIdx][this.towers[startTowerIdx].length - 1] > this.towers[endTowerIdx][this.towers[endTowerIdx].length - 1]) {
      return false;
    }
    return true;
  }
}


// let game = new Game();
// // game.promtMove((start, end) => console.log(start + " " + end));
// console.log(game.isValidMove(2,0));
// console.log(game.isValidMove(-1,10));
// console.log(game.isValidMove(0,1));
// console.log(game.isValidMove(2,2));
// console.log(game.isValidMove(0,0));
