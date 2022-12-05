import Operation from '../enum/Operation.js';

const BrainCalcUtil = Object.freeze({
  /**
   *
   * @param {!number} a
   * @param {!number} b
   * @param {!Operation} operation
   */
  defineCorrectAnswer(a, b, operation) {
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
  },
});

export default BrainCalcUtil;
