import MathUtil from '../../util/MathUtil.js';
import BrainProgressionUtil from './util/BrainProgressionUtil.js';
import RoundResult from '../../models/RoundResult.js';

/**
 * @typedef MessageService
 * @property {() => string} getRulesDescriptionMessage
 *
 * @typedef Config
 * @property {!number} MIN_START_NUMBER
 * @property {!number} MAX_START_NUMBER
 * @property {!number} MIN_STEP
 * @property {!number} MAX_STEP
 * @property {!number} MIN_PROGRESSION_LENGTH
 * @property {!number} MAX_PROGRESSION_LENGTH
 * @property {!string} MISSING_ELEMENT_PLACEHOLDER
 * @property {!string} PROGRESSION_ELEMENTS_DELIMITER
 *
 * @param {!MessageService} gameMessageService
 * @param {!Config} config
 */
function BrainProgression(gameMessageService, config) {
  return Object.freeze({

    printRules(ioService) {
      ioService.print(gameMessageService.getRulesDescriptionMessage());
    },

    playRound(ioService, messageService) {
      const startPositionNumber = MathUtil.generateRandomNumberInRange(
        config.MIN_START_NUMBER,
        config.MAX_START_NUMBER,
      );
      const step = MathUtil.generateRandomNumberInRange(
        config.MIN_STEP,
        config.MAX_STEP,
      );
      const progressionLength = MathUtil.generateRandomNumberInRange(
        config.MIN_PROGRESSION_LENGTH,
        config.MAX_PROGRESSION_LENGTH,
      );

      const progression = BrainProgressionUtil.generateProgression(
        startPositionNumber,
        step,
        progressionLength,
      );

      const missingElementIndex = MathUtil.generateRandomNumberInRange(0, progression.length);
      const correctAnswer = String(progression[missingElementIndex]);

      const progressionQuestion = [...progression];
      progressionQuestion[missingElementIndex] = config.MISSING_ELEMENT_PLACEHOLDER;

      ioService.print(messageService.getQuestionMessage(
        progressionQuestion.join(config.PROGRESSION_ELEMENTS_DELIMITER),
      ));
      const userAnswer = ioService.getUserInputWithQuestion(messageService.getAnswerMessage());

      return new RoundResult(userAnswer, correctAnswer);
    },
  });
}

export default BrainProgression;
