class HumanPlayer {
  constructor(name) {
    this.name = name;
  }

  setMark(mark) {
    this.mark = mark;
  }

  promptMove(reader, callback) {
    reader.question(`${this.name}, where do you wanna to move: `,
                    (answer) => {
      let row = parseInt(answer[0]);
      let col = parseInt(answer[answer.length - 1]);

      callback([row, col]);
    });
  }
}

module.exports = HumanPlayer;
