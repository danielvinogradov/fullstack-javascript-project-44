#!/usr/bin/env node
import BrainCalc from '../src/games/brainCalc/BrainCalc.js';
import BrainCalcMessageService from '../src/games/brainCalc/services/BrainCalcMessageService.js';
import BrainCalcDefaultConfig from '../src/games/brainCalc/config/BrainCalcDefaultConfig.js';
import GameRunner from '../src/services/GameRunner.js';

const game = new BrainCalc(BrainCalcMessageService, BrainCalcDefaultConfig);
const gameRunner = new GameRunner(game);

gameRunner.run();
