import IsEvenAnswer from '../enum/IsEvenAnswer.js';

export default class BrainEvenMessageService {
  static getRulesDescriptionMessage(
    isEvenAnswerValue = IsEvenAnswer.Yes,
    isOddAnswerValue = IsEvenAnswer.No,
  ) {
    return `Answer "${isEvenAnswerValue}" if the number is even, otherwise answer "${isOddAnswerValue}".`;
  }
}
