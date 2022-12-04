#!/usr/bin/env node
import GameRunner from '../src/services/GameRunner.js';
import BrainEven from '../src/games/brainEven/BrainEven.js';
import BrainEvenMessageService from '../src/games/brainEven/services/BrainEvenMessageService.js';
import BrainEvenDefaultConfig from '../src/games/brainEven/config/BrainEvenDefaultConfig.js';

const game = new BrainEven(BrainEvenMessageService, BrainEvenDefaultConfig);
const gameRunner = new GameRunner(game);

gameRunner.run();
