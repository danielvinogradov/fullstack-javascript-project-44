import Operation from '../enum/Operation.js';

export default class BrainCalcUtil {
  /**
   *
   * @param {!number} a
   * @param {!number} b
   * @param {!Operation} operation
   */
  static defineCorrectAnswer(a, b, operation) {
    switch (operation) {
      case Operation.Summation:
        return a + b;
      case Operation.Subtraction:
        return a - b;
      case Operation.Multiplication:
        return a * b;
      default:
        throw new Error('Operation is not supported!');
    }
  }
}
