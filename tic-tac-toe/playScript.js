const TicTacToe = require('./game.js');
const HumanPlayer = require('./humanplayer.js');
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function completionCallback(winner) {
  console.log(`${winner.name} wins!`);
  reader.close();
}

let chris = new HumanPlayer('Chris');
let tu = new HumanPlayer('Tu');
let game = new TicTacToe(chris, tu);
game.play(reader, completionCallback);
