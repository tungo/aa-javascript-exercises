const Board = require("./board.js");

class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.board = new Board();

    this.currentPlayer = player1;
    this.player1.setMark('X');
    this.player2.setMark('O');
  }

  switchPlayer() {
    if (this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    }
  }

  play(reader, completionCallback) {
    function makeMove(pos) {
      if (this.board.placeMark(pos, this.currentPlayer.mark)) {
        this.switchPlayer();
      } else {
        console.log('Invalid move!');
      }
      if (this.board.isWon()) {
        let winnerMark = this.board.winner();
        let winner =
          this.player1.mark === winnerMark
            ? this.player1
            : this.player2;
        completionCallback(winner);
      } else {
        this.play(reader, completionCallback);
      }
    }

    this.board.print();
    this.currentPlayer.promptMove(reader, makeMove.bind(this));

  }

}

module.exports = Game;
