class Game {
  constructor(reader) {
    this.towers = [[3, 2, 1], [], []];
    this.reader = reader;
  }

  run(completionCallback) {
    this.promtMove((start, end) => {
      if (!this.move(start, end)) {
        console.log('Invalid move!');
      }
      if (this.isWon()) {
        return completionCallback();
      }
      this.run(completionCallback);
    });
  }

  promtMove(callback) {
    this.print();

    let startTowerIdx;
    let endTowerIdx;

    this.reader.question("Where do you want to move from", (from) => {
      startTowerIdx = parseInt(from);
      this.reader.question("Where do you want to move to", (to) => {
        endTowerIdx = parseInt(to);
        return callback(startTowerIdx, endTowerIdx);
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

  move(startTowerIdx, endTowerIdx) {
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop());
      return true;
    } else {
      return false;
    }
  }

  print() {
    console.log(JSON.stringify(this.towers));
  }

  isWon() {
    let tower1Complete = true;
    let tower2Complete = true;
    for (let i = 0; i < 3; i++) {
      if (this.towers[1][i] !== 3 - i) {
        tower1Complete = false;
      }
      if (this.towers[2][i] !== 3 - i) {
        tower2Complete = false;
      }
    }
    if (tower1Complete || tower2Complete) {
      return true;
    } else {
      return false;
    }
  }
}


module.exports = Game;
