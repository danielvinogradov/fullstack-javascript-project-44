import BooleanAnswer from '../../../enum/BooleanAnswer.js';
import MathUtil from '../../../util/MathUtil.js';

const BrainEvenUtil = Object.freeze({
  /**
   * Provides a correct answer based on provided number.
   *
   * @param {!number} number
   * @param {!string} isEvenAnswer
   * @param {!string} isOddAnswer
   * @returns {!string}
   */
  defineCorrectAnswer({
    number,
    isEvenAnswer = BooleanAnswer.Yes,
    isOddAnswer = BooleanAnswer.No,
  }) {
    return MathUtil.isEven(number) ? isEvenAnswer : isOddAnswer;
  },
});

export default BrainEvenUtil;
