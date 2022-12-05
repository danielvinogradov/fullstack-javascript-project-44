import MathUtil from '../../util/MathUtil.js';
import RoundResult from '../../models/RoundResult.js';

/**
 * @typedef MessageService
 * @property {() => string} getRulesDescriptionMessage
 *
 * @typedef Config
 * @property {!number} MIN_GENERATED_NUMBER
 * @property {!number} MAX_GENERATED_NUMBER
 *
 * @param {!MessageService} gameMessageService
 * @param {!Config} config
 */
function BrainGCD(gameMessageService, config) {
  return Object.freeze({
    printRules(ioService) {
      ioService.print(gameMessageService.getRulesDescriptionMessage());
    },

    playRound(ioService, messageService) {
      const a = MathUtil.generateRandomNumberInRange(
        config.MIN_GENERATED_NUMBER,
        config.MAX_GENERATED_NUMBER,
      );
      const b = MathUtil.generateRandomNumberInRange(
        config.MIN_GENERATED_NUMBER,
        config.MAX_GENERATED_NUMBER,
      );

      const correctAnswer = String(MathUtil.findGCD(a, b));

      ioService.print(messageService.getQuestionMessage(`${a} ${b}`));
      const userAnswer = ioService.getUserInputWithQuestion(messageService.getAnswerMessage());

      return new RoundResult(userAnswer, correctAnswer);
    },
  });
}

export default BrainGCD;
