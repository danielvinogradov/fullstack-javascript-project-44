import IsEvenAnswer from '../enum/IsEvenAnswer.js';

export default class BrainEvenMessageService {
  static getRulesDescriptionMessage(
    isEvenAnswerValue = IsEvenAnswer.Yes,
    isOddAnswerValue = IsEvenAnswer.No,
  ) {
    return `Answer "${isEvenAnswerValue}" if the number is even, otherwise answer "${isOddAnswerValue}".`;
  }

  static getQuestionMessage(number) {
    return `Question: ${number}`;
  }

  static getAnswerMessage() {
    return 'Your answer: ';
  }

  static getWrongAnswerMessage(usersAnswer, correctAnswer, username) {
    return `'${usersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${username}!`;
  }

  static getCorrectAnswerMessage() {
    return 'Correct!';
  }

  static getWinMessage(username) {
    return `Congratulations, ${username}!`;
  }
}
