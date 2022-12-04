import BooleanAnswer from '../../../enum/BooleanAnswer.js';

export default class BrainEvenMessageService {
  static getRulesDescriptionMessage(
    isEvenAnswerValue = BooleanAnswer.Yes,
    isOddAnswerValue = BooleanAnswer.No,
  ) {
    return `Answer "${isEvenAnswerValue}" if the number is even, otherwise answer "${isOddAnswerValue}".`;
  }
}
