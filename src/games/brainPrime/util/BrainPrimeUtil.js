import MathUtil from '../../../util/MathUtil.js';
import BooleanAnswer from '../../../enum/BooleanAnswer.js';

export default class BrainPrimeUtil {
  static defineCorrectAnswer(
    number,
    isPrimeAnswer = BooleanAnswer.Yes,
    isNotPrimeAnswer = BooleanAnswer.No,
  ) {
    return MathUtil.isPrime(number) ? isPrimeAnswer : isNotPrimeAnswer;
  }
}
