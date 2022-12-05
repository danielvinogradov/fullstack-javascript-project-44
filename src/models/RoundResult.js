import UserProvidedAnswerType from '../enum/UserProvidedAnswerType.js';

function RoundResult(userAnswer, correctAnswer) {
  return Object.freeze({
    userAnswerType: userAnswer === correctAnswer
      ? UserProvidedAnswerType.Correct
      : UserProvidedAnswerType.Incorrect,
    userAnswer,
    correctAnswer,
  });
}

export default RoundResult;
