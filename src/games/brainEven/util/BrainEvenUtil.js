import IsEvenAnswer from '../enum/IsEvenAnswer.js';

export default class BrainEvenUtil {
  /**
   * Generates a random integer. The maximum is exclusive and the minimum is inclusive.
   *
   * @param {!number} minNumInclusive
   * @param {!number} maxNumExclusive
   * @returns {!number}
   *
   * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random">
   *     Generating random ints between values on MDN
   * </a>
   */
  static generateRandomNumberInRange(minNumInclusive, maxNumExclusive) {
    const min = Math.ceil(minNumInclusive);
    const max = Math.floor(maxNumExclusive);
    return Math.floor(Math.random() * (max - min) + min);
  }

  /**
   * Checks if a provided number is even.
   *
   * @param {!number} number
   * @returns {!boolean}
   */
  static isEven(number) {
    return number % 2 === 0;
  }

  /**
   * Provides a correct answer based on provided number.
   *
   * @param {!number} number
   * @param {!string} isEvenAnswer
   * @param {!string} isOddAnswer
   * @returns {!string}
   */
  static defineCorrectAnswer({
    number,
    isEvenAnswer = IsEvenAnswer.Yes,
    isOddAnswer = IsEvenAnswer.No,
  }) {
    return this.isEven(number) ? isEvenAnswer : isOddAnswer;
  }
}