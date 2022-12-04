import MathUtil from '../../util/MathUtil.js';
import RoundResult from '../../models/RoundResult.js';

export default class BrainGCD {
  /**
   * @typedef MessageService
   * @property {() => string} getRulesDescriptionMessage
   *
   * @type {MessageService}
   */
  #gameMessageService;

  /**
   * @typedef Config
   * @property {!number} MIN_GENERATED_NUMBER
   * @property {!number} MAX_GENERATED_NUMBER
   *
   * @type {Config}
   */
  #config;

  /**
   * @param {!MessageService} messageService
   * @param {!Config} config
   */
  constructor(messageService, config) {
    this.#gameMessageService = messageService;
    this.#config = config;
  }

  printRules(ioService) {
    ioService.print(this.#gameMessageService.getRulesDescriptionMessage());
  }

  playRound(ioService, messageService) {
    const a = MathUtil.generateRandomNumberInRange(
      this.#config.MIN_GENERATED_NUMBER,
      this.#config.MAX_GENERATED_NUMBER,
    );
    const b = MathUtil.generateRandomNumberInRange(
      this.#config.MIN_GENERATED_NUMBER,
      this.#config.MAX_GENERATED_NUMBER,
    );

    const correctAnswer = String(MathUtil.findGCD(a, b));

    ioService.print(messageService.getQuestionMessage(`${a} ${b}`));
    const userAnswer = ioService.getUserInputWithQuestion(messageService.getAnswerMessage());

    return new RoundResult(userAnswer, correctAnswer);
  }
}