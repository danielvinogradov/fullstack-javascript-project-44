const MathUtil = Object.freeze({
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
  generateRandomNumberInRange(minNumInclusive, maxNumExclusive) {
    const min = Math.ceil(minNumInclusive);
    const max = Math.floor(maxNumExclusive);
    return Math.floor(Math.random() * (max - min) + min);
  },

  /**
   * Checks if a provided number is even.
   *
   * @param {!number} number
   * @returns {!boolean}
   */
  isEven(number) {
    return number % 2 === 0;
  },

  /**
   * Finds the greatest common divisor of two numbers.
   *
   * @param {!number} a
   * @param {!number} b
   */
  findGCD(a, b) {
    let count = Math.min(a, b);

    for (let n = count; n >= 1; n -= 1) {
      if (a % n === 0 && b % n === 0) {
        count = n;
        break;
      }
    }

    return count;
  },

  /**
   * Checks if the number is prime.
   *
   * @param {!number} number
   * @returns {!boolean}
   */
  isPrime(number) {
    if (number < 2) return false;

    let isPrime = true;
    for (let i = 2; i <= number / 2; i += 1) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }

    return isPrime;
  },
});

export default MathUtil;
