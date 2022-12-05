import MathUtil from '../../util/MathUtil.js';
import Operation from './enum/Operation.js';
import BrainCalcUtil from './util/BrainCalcUtil.js';
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
function BrainCalc(gameMessageService, config) {
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
    },
  });
}

export default BrainCalc;
