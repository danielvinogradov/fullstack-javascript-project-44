#!/usr/bin/env node
import BrainProgression from '../src/games/brainProgression/BrainProgression.js';
import BrainProgressionMessageService from '../src/games/brainProgression/services/BrainProgressionMessageService.js';
import BrainProgressionDefaultConfig from '../src/games/brainProgression/config/BrainProgressionDefaultConfig.js';
import GameRunner from '../src/services/GameRunner.js';

const game = new BrainProgression(BrainProgressionMessageService, BrainProgressionDefaultConfig);
const gameRunner = new GameRunner(game);

gameRunner.run();
