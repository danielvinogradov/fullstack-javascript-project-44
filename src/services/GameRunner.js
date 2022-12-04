import defaultCli from '../cli.js';
import CliUtil from '../util/CliUtil.js';
import MessageService from './MessageService.js';
import UserProvidedAnswerType from '../enum/UserProvidedAnswerType.js';
import DefaultBrainGamesConfig from '../config/DefaultBrainGamesConfig.js';

export default class GameRunner {
  /**
   * @typedef UserGreetingService
   * @property {() => string} run
   *
   * @type {UserGreetingService}
   */
  #cli;

  /**
   * @callback playRound
   * @param ioService
   * @param messageService
   * @returns RoundResult
   *
   * @typedef Game
   * @property {() => void} printRules
   * @property {playRound} playRound
   */
  #game;

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
   * @property {number} MAX_ROUNDS
   *
   * @type {Config}
   */
  #config;

  /**
   * @type {string}
   */
  #username;

  constructor(
    game,
    ioService = CliUtil,
    messageService = MessageService,
    cli = defaultCli,
    config = DefaultBrainGamesConfig,
  ) {
    this.#game = game;
    this.#ioService = ioService;
    this.#messageService = messageService;
    this.#cli = cli;
    this.#config = config;
  }

  run() {
    this.#username = this.#cli();

    this.#game.printRules(this.#ioService);

    let roundResult;
    for (let i = 0; i < this.#config.MAX_ROUNDS; i += 1) {
      roundResult = this.#game.playRound(this.#ioService, this.#messageService);

      if (roundResult.userAnswerType === UserProvidedAnswerType.Correct) {
        this.#ioService.print(this.#messageService.getCorrectAnswerMessage());
      } else {
        this.#ioService.print(
          this.#messageService.getWrongAnswerMessage(
            roundResult.userAnswer,
            roundResult.correctAnswer,
            this.#username,
          ),
        );
        break;
      }
    }

    if (roundResult.userAnswerType === UserProvidedAnswerType.Correct) {
      this.#ioService.print(this.#messageService.getWinMessage(this.#username));
    }
  }
}
