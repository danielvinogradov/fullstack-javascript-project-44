import readlineSync from 'readline-sync';

const CliUtil = Object.freeze({
  /**
   * Prints value to console.
   *
   * @param {string} value
   * @returns {void}
   */
  print(value) {
    console.log(value);
  },

  /**
   * Prints a question to console and waits for user input. Returns this input.
   *
   * @param {string} question
   * @returns {string}
   */
  getUserInputWithQuestion(question) {
    return readlineSync.question(question);
  },
});

export default CliUtil;
