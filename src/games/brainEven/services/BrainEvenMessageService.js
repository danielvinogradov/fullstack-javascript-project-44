import BooleanAnswer from '../../../enum/BooleanAnswer.js';

const BrainEvenMessageService = Object.freeze({
  getRulesDescriptionMessage(
    isEvenAnswerValue = BooleanAnswer.Yes,
    isOddAnswerValue = BooleanAnswer.No,
  ) {
    return `Answer "${isEvenAnswerValue}" if the number is even, otherwise answer "${isOddAnswerValue}".`;
  },
});

export default BrainEvenMessageService;
