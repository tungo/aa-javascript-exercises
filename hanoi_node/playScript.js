const Hanoi = require('./game.js');
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function completionCallback() {
  console.log('Congrats, you win!');
  reader.question('Want to play again?', (answer) => {
    if (answer === 'yes') {
      game = new Hanoi(reader);
      game.run(completionCallback);
    }
    else {
      reader.close();
    }
  });
}

let game = new Hanoi(reader);
game.run(completionCallback);
