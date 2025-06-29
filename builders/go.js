'use strict';

// Modules
const _ = require('lodash');

// Define config directly
const config = {
  version: '1.24', // Default version
  supported: [
    '1.24',
    '1.23',
    '1.22',
    '1.21',
    '1.20',
  ],
  patchesSupported: true,
  legacy: [
    '1.19',
    '1.18',
    '1.17',
    '1.16',
    '1.15',
    '1.14',
    '1.13',
    '1.12',
    '1.11',
    '1.10',
    '1.9',
    '1.8',
  ],
  command: 'tail -f /dev/null',
  ssl: false,
};

// Builder
module.exports = {
  name: 'go',
  config: config,
  parent: '_appserver',
  builder: (parent, config) => class LandoGo extends parent {
    constructor(id, options = {}) {
      options = _.merge({}, config, options);
      // Make sure our command is an array
      if (!_.isArray(options.command)) options.command = [options.command];
      options.command = options.command.join(' && ');
      // Build the goz
      const go = {
        image: `golang:${options.version}`,
        ports: (options.command !== 'tail -f /dev/null') ? ['80'] : [],
        command: `/bin/sh -c "${options.command}"`,
      };
      // Send it downstream
      super(id, options, {services: _.set({}, options.name, go)});
    };
  },
};
