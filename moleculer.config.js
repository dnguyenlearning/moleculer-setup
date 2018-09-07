"use strict";
const config = require('./config');
const env = config.settings.ENV;

module.exports = require(`./config-moleculer/moleculer.${env}`);

