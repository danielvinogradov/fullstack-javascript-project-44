import BooleanAnswer from '../../../enum/BooleanAnswer.js';

export default class BrainPrimeMessageService {
  static getRulesDescriptionMessage(
    isEvenAnswerValue = BooleanAnswer.Yes,
    isOddAnswerValue = BooleanAnswer.No,
  ) {
    return `Answer "${isEvenAnswerValue}" if the number is prime, otherwise answer "${isOddAnswerValue}".`;
  }
}
