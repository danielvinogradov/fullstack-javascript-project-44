import MathUtil from '../../../util/MathUtil.js';
import BooleanAnswer from '../../../enum/BooleanAnswer.js';

const BrainPrimeUtil = Object.freeze({
  defineCorrectAnswer(
    number,
    isPrimeAnswer = BooleanAnswer.Yes,
    isNotPrimeAnswer = BooleanAnswer.No,
  ) {
    return MathUtil.isPrime(number) ? isPrimeAnswer : isNotPrimeAnswer;
  },
});

export default BrainPrimeUtil;
