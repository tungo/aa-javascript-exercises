const Hanoi = require('./game.js');
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let game = new Hanoi(reader);
game.run(() => {
  console.log('Congrats, you win!');
  reader.close();
});
