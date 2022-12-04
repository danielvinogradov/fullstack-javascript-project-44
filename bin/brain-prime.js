#!/usr/bin/env node
import BrainPrime from '../src/games/brainPrime/BrainPrime.js';
import BrainPrimeMessageService from '../src/games/brainPrime/services/BrainPrimeMessageService.js';
import BrainPrimeDefaultConfig from '../src/games/brainPrime/config/BrainPrimeDefaultConfig.js';
import GameRunner from '../src/services/GameRunner.js';

const game = new BrainPrime(BrainPrimeMessageService, BrainPrimeDefaultConfig);
const gameRunner = new GameRunner(game);

gameRunner.run();
