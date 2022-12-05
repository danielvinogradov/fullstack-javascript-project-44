import BooleanAnswer from '../../../enum/BooleanAnswer.js';

const BrainPrimeMessageService = Object.freeze({
  getRulesDescriptionMessage(
    isEvenAnswerValue = BooleanAnswer.Yes,
    isOddAnswerValue = BooleanAnswer.No,
  ) {
    return `Answer "${isEvenAnswerValue}" if given number is prime. Otherwise answer "${isOddAnswerValue}".`;
  },
});

export default BrainPrimeMessageService;
