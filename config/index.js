const _ = require('lodash');

const enviroment = require('./enviroment')

module.exports = {
    settings: _.merge(enviroment)
};