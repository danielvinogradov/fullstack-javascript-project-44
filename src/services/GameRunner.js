import defaultCli from '../cli.js';
import CliUtil from '../util/CliUtil.js';
import MessageService from './MessageService.js';
import UserProvidedAnswerType from '../enum/UserProvidedAnswerType.js';
import DefaultBrainGamesConfig from '../config/DefaultBrainGamesConfig.js';

/**
 * @callback playRound
 * @param ioService
 * @param messageService
 * @returns RoundResult
 *
 * @typedef Game
 * @property {() => void} printRules
 * @property {playRound} playRound
 *
 * @typedef UserGreetingService
 * @property {() => string} run
 *
 * @typedef IoService
 * @property {(any) => void} print
 * @property {(any) => string} getUserInputWithQuestion
 *
 * @callback getWrongAnswerMessageFn
 * @param {string|number} usersAnswer
 * @param {string|number} correctAnswer
 * @param {string} username
 *
 * @typedef MessageService
 * @property {(number) => string} getQuestionMessage
 * @property {() => string} getAnswerMessage
 * @property {getWrongAnswerMessageFn} getWrongAnswerMessage
 * @property {() => string} getCorrectAnswerMessage
 * @property {(string) => string} getWinMessage
 *
 * @typedef Config
 * @property {number} MAX_ROUNDS
 *
 * @param {Game} game
 * @param {IoService} ioService
 * @param {MessageService} messageService
 * @param {UserGreetingService} cli
 * @param {Config} config
 * @returns {Readonly<{run(): void}>}
 * @constructor
 */
function GameRunner(
  game,
  ioService = CliUtil,
  messageService = MessageService,
  cli = defaultCli,
  config = DefaultBrainGamesConfig,
) {
  let username;

  return Object.freeze({
    run() {
      username = cli();

      game.printRules(ioService);

      let roundResult;
      for (let i = 0; i < config.MAX_ROUNDS; i += 1) {
        roundResult = game.playRound(ioService, messageService);

        if (roundResult.userAnswerType === UserProvidedAnswerType.Correct) {
          ioService.print(messageService.getCorrectAnswerMessage());
        } else {
          ioService.print(
            messageService.getWrongAnswerMessage(
              roundResult.userAnswer,
              roundResult.correctAnswer,
              username,
            ),
          );
          break;
        }
      }

      if (roundResult.userAnswerType === UserProvidedAnswerType.Correct) {
        ioService.print(messageService.getWinMessage(username));
      }
    },
  });
}

export default GameRunner;
