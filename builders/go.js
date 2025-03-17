'use strict';

// Modules
const _ = require('lodash');
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

// Load config
const configPath = path.join(__dirname, 'builders.yml');
const {go: config} = yaml.load(fs.readFileSync(configPath, 'utf8'));

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
