import MathUtil from '../../util/MathUtil.js';
import Operation from './enum/Operation.js';
import BrainCalcUtil from './util/BrainCalcUtil.js';
import RoundResult from '../../models/RoundResult.js';

export default class BrainCalc {
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

    const possibleOperationsArray = Object.values(Operation);
    const possibleOperationsArrayRandomIndex = MathUtil.generateRandomNumberInRange(
      0,
      possibleOperationsArray.length,
    );
    const operation = possibleOperationsArray[possibleOperationsArrayRandomIndex];

    const correctAnswer = String(BrainCalcUtil.defineCorrectAnswer(a, b, operation));

    ioService.print(messageService.getQuestionMessage(`${a} ${operation} ${b}`));
    const userAnswer = ioService.getUserInputWithQuestion(messageService.getAnswerMessage());

    return new RoundResult(
      userAnswer,
      correctAnswer,
    );
  }
}
