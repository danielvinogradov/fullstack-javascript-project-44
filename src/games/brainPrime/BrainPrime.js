import MathUtil from '../../util/MathUtil.js';
import BrainPrimeUtil from './util/BrainPrimeUtil.js';
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
function BrainPrime(gameMessageService, config) {
  return Object.freeze({
    printRules(ioService) {
      ioService.print(gameMessageService.getRulesDescriptionMessage());
    },

    playRound(ioService, messageService) {
      const number = MathUtil.generateRandomNumberInRange(
        config.MIN_GENERATED_NUMBER,
        config.MAX_GENERATED_NUMBER,
      );

      const correctAnswer = BrainPrimeUtil.defineCorrectAnswer(number);

      ioService.print(messageService.getQuestionMessage(number));
      const userAnswer = ioService.getUserInputWithQuestion(messageService.getAnswerMessage());

      return new RoundResult(userAnswer, correctAnswer);
    },
  });
}

export default BrainPrime;
