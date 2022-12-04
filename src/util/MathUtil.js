export default class MathUtil {
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
   * Finds the greatest common divisor of two numbers.
   *
   * @param {!number} a
   * @param {!number} b
   */
  static findGCD(a, b) {
    let count = Math.min(a, b);

    for (let n = count; n >= 1; n -= 1) {
      if (a % n === 0 && b % n === 0) {
        count = n;
        break;
      }
    }

    return count;
  }
}
