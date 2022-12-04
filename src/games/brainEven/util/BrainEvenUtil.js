import IsEvenAnswer from '../enum/IsEvenAnswer.js';
import MathUtil from '../../../util/MathUtil.js';

export default class BrainEvenUtil {
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
    return MathUtil.isEven(number) ? isEvenAnswer : isOddAnswer;
  }
}
