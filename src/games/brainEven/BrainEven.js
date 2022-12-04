import UserProvidedAnswerType from './enum/UserProvidedAnswerType.js';
import BrainEvenUtil from './util/BrainEvenUtil.js';

export default class BrainEven {
  /**
   * @typedef UserGreetingService
   * @property {() => string} run
   *
   * @type {UserGreetingService}
   */
  #cli;

  /**
   * @typedef IoService
   * @property {(any) => void} print
   * @property {(any) => string} getUserInputWithQuestion
   *
   * @type {IoService}
   */
  #ioService;

  /**
   * @callback getWrongAnswerMessageFn
   * @param {string|number} usersAnswer
   * @param {string|number} correctAnswer
   * @param {string} username
   *
   * @typedef MessageService
   * @property {() => string} getRulesDescriptionMessage
   * @property {(number) => string} getQuestionMessage
   * @property {() => string} getAnswerMessage
   * @property {getWrongAnswerMessageFn} getWrongAnswerMessage
   * @property {() => string} getCorrectAnswerMessage
   * @property {(string) => string} getWinMessage
   *
   * @type {MessageService}
   */
  #messageService;

  /**
   * @typedef Config
   * @property {number} MIN_GENERATED_NUMBER
   * @property {number} MAX_GENERATED_NUMBER
   * @property {number} MAX_ROUNDS
   *
   * @type {Config}
   */
  #config;

  /**
   * @type {string}
   */
  #username;

  /**
     * @param {any} cli
     * @param {IoService} ioService
     * @param {MessageService} messageService
     * @param {Config} config
     */
  constructor(cli, ioService, messageService, config) {
    this.#cli = cli;
    this.#ioService = ioService;
    this.#messageService = messageService;
    this.#config = config;
  }

  /**
   * Plays one game round.
   *
   * @returns {UserProvidedAnswerType}
   */
  #playRound() {
    const number = BrainEvenUtil.generateRandomNumberInRange(
      this.#config.MIN_GENERATED_NUMBER,
      this.#config.MAX_GENERATED_NUMBER,
    );
    const correctAnswer = BrainEvenUtil.defineCorrectAnswer({ number });

    this.#ioService.print(this.#messageService.getQuestionMessage(number));

    const userAnswer = this.#ioService.getUserInputWithQuestion(
      this.#messageService.getAnswerMessage(),
    )
      .trim()
      .toLowerCase();

    if (userAnswer === correctAnswer) {
      this.#ioService.print(this.#messageService.getCorrectAnswerMessage());
      return UserProvidedAnswerType.Correct;
    }

    this.#ioService.print(
      this.#messageService.getWrongAnswerMessage(userAnswer, correctAnswer, this.#username),
    );
    return UserProvidedAnswerType.Incorrect;
  }

  run() {
    this.#username = this.#cli();
    this.#ioService.print(this.#messageService.getRulesDescriptionMessage());

    let userProvidedAnswerType = UserProvidedAnswerType.Correct;
    for (
      let i = 0;
      i < this.#config.MAX_ROUNDS && userProvidedAnswerType === UserProvidedAnswerType.Correct;
      i += 1) {
      userProvidedAnswerType = this.#playRound();
    }

    if (userProvidedAnswerType === UserProvidedAnswerType.Correct) {
      this.#ioService.print(this.#messageService.getWinMessage(this.#username));
    }
  }
}
