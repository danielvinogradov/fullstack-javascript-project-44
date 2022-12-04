import MathUtil from '../../util/MathUtil.js';
import BrainProgressionUtil from './util/BrainProgressionUtil.js';
import RoundResult from '../../models/RoundResult.js';

export default class BrainProgression {
  /**
   * @typedef MessageService
   * @property {() => string} getRulesDescriptionMessage
   *
   * @type {MessageService}
   */
  #gameMessageService;

  /**
   * @typedef Config
   *
   * @property {!number} MIN_START_NUMBER
   * @property {!number} MAX_START_NUMBER
   * @property {!number} MIN_STEP
   * @property {!number} MAX_STEP
   * @property {!number} MIN_PROGRESSION_LENGTH
   * @property {!number} MAX_PROGRESSION_LENGTH
   * @property {!string} MISSING_ELEMENT_PLACEHOLDER
   * @property {!string} PROGRESSION_ELEMENTS_DELIMITER
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
    const startPositionNumber = MathUtil.generateRandomNumberInRange(
      this.#config.MIN_START_NUMBER,
      this.#config.MAX_START_NUMBER,
    );
    const step = MathUtil.generateRandomNumberInRange(
      this.#config.MIN_STEP,
      this.#config.MAX_STEP,
    );
    const progressionLength = MathUtil.generateRandomNumberInRange(
      this.#config.MIN_PROGRESSION_LENGTH,
      this.#config.MAX_PROGRESSION_LENGTH,
    );

    const progression = BrainProgressionUtil.generateProgression(
      startPositionNumber,
      step,
      progressionLength,
    );

    const missingElementIndex = MathUtil.generateRandomNumberInRange(0, progression.length);
    const correctAnswer = String(progression[missingElementIndex]);

    const progressionQuestion = [...progression];
    progressionQuestion[missingElementIndex] = this.#config.MISSING_ELEMENT_PLACEHOLDER;

    ioService.print(messageService.getQuestionMessage(
      progressionQuestion.join(this.#config.PROGRESSION_ELEMENTS_DELIMITER),
    ));
    const userAnswer = ioService.getUserInputWithQuestion(messageService.getAnswerMessage());

    return new RoundResult(userAnswer, correctAnswer);
  }
}
