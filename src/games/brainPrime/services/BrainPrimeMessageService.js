import BooleanAnswer from '../../../enum/BooleanAnswer.js';

export default class BrainPrimeMessageService {
  static getRulesDescriptionMessage(
    isEvenAnswerValue = BooleanAnswer.Yes,
    isOddAnswerValue = BooleanAnswer.No,
  ) {
    return `Answer "${isEvenAnswerValue}" if the given number is prime. Otherwise answer "${isOddAnswerValue}".`;
  }
}
