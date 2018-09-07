const fs = require("fs");
const path = require("path");
const { ServiceBroker } = require("moleculer");
const config = require('./config');
const env = config.settings.ENV;

function getConfig() {
	return require(`./config-moleculer/moleculer.${env}.js`);
}

let broker = new ServiceBroker(getConfig());

const serviceNames = config.settings.serviceToInit(env);
serviceNames.map(serviceName => {
    broker.loadService(path.join(__dirname, 'services', `${serviceName}.service.js`));
});

broker.start();