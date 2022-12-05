const MessageService = Object.freeze({
  getQuestionMessage(question) {
    return `Question: ${question}`;
  },

  getAnswerMessage() {
    return 'Your answer: ';
  },

  getWrongAnswerMessage(usersAnswer, correctAnswer, username) {
    return `'${usersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${username}!`;
  },

  getCorrectAnswerMessage() {
    return 'Correct!';
  },

  getWinMessage(username) {
    return `Congratulations, ${username}!`;
  },
});

export default MessageService;
