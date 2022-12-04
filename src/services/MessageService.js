export default class MessageService {
  static getQuestionMessage(question) {
    return `Question: ${question}`;
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
