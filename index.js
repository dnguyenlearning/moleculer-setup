const fs = require("fs");
const path = require("path");
const { ServiceBroker } = require("moleculer");
const config = require('./config');

function getConfig() {
	const env = config.settings.ENV;
	console.log('TEST', env);
	return require(`./config-moleculer/moleculer.${env}.js`);
}

let broker = new ServiceBroker(getConfig());


broker.loadService(path.join(__dirname, "services", "api.service.js"));
broker.loadService(path.join(__dirname, "services", "feeds.service.js"));
broker.loadService(path.join(__dirname, "services", "articles.service.js"));

broker.start();