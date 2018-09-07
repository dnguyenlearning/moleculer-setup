const _ = require('lodash');

const enviroment = require('./enviroment')
const serviceToInit = require('./servicesToInit');

module.exports = {
    settings: _.merge(enviroment, {serviceToInit}),
};