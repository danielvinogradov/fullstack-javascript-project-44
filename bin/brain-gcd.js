#!/usr/bin/env node
import BrainGCD from '../src/games/brainGCD/BrainGCD.js';
import BrainGCDMessageService from '../src/games/brainGCD/services/BrainGCDMessageService.js';
import BrainGCDDefaultConfig from '../src/games/brainGCD/config/BrainGCDDefaultConfig.js';
import GameRunner from '../src/services/GameRunner.js';

const game = new BrainGCD(BrainGCDMessageService, BrainGCDDefaultConfig);
const gameRunner = new GameRunner(game);

gameRunner.run();
