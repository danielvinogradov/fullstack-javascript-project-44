#!/usr/bin/env node
import CliUtil from '../src/util/CliUtil.js';
import CONFIG from '../src/games/brainEven/config/BrainEvenDefaultConfig.js';
import cli from '../src/cli.js';
import BrainEven from '../src/games/brainEven/BrainEven.js';
import BrainEvenMessageService from '../src/games/brainEven/services/BrainEvenMessageService.js';

new BrainEven(cli, CliUtil, BrainEvenMessageService, CONFIG).run();
