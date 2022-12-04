import UserProvidedAnswerType from '../enum/UserProvidedAnswerType.js';

export default class RoundResult {
  #userAnswerType;

  #userAnswer;

  #correctAnswer;

  constructor(userAnswer, correctAnswer) {
    this.#userAnswerType = userAnswer === correctAnswer
      ? UserProvidedAnswerType.Correct
      : UserProvidedAnswerType.Incorrect;
    this.#userAnswer = userAnswer;
    this.#correctAnswer = correctAnswer;
  }

  get userAnswerType() {
    return this.#userAnswerType;
  }

  get userAnswer() {
    return this.#userAnswer;
  }

  get correctAnswer() {
    return this.#correctAnswer;
  }
}
