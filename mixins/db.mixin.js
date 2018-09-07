const path = require("path");
const mkdir = require("mkdirp").sync;
const config = require('../config')
const dbService	= require("moleculer-db");

module.exports = function(collection) {
	const MongoAdapter = require("moleculer-db-adapter-mongo");
	
	if (process.env.MONGO_URI) {
		return {
			mixins: [dbService],
			adapter: new MongoAdapter(process.env.MONGO_URI),
			collection
		};
	}
	
	return {
		mixins: [dbService],
		adapter: new MongoAdapter(config.settings.MONGO_URI),
		collection
	};
}