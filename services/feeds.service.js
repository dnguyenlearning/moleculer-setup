"use strict";

const { MoleculerClientError } = require("moleculer").Errors;
const { ForbiddenError } = require("moleculer-web").Errors;

const dbService = require("../mixins/db.mixin");
const cacheCleanerMixin = require("../mixins/cache.cleaner.mixin");


module.exports = {
	name: "feed",
	mixins: [dbService("feeds")],
		
	settings: {
		fields: ["name", "advertiserId", "publisherId", "startDate", "endDate"]
	},
		
	actions: {
		list: {
			
			handler(ctx) {
				const limit = ctx.params.limit ? Number(ctx.params.limit) : 20;
				const offset = ctx.params.offset ? Number(ctx.params.offset) : 0;

				let params = {
					limit,
					offset,
					query: {}
				};
					
				return this.adapter.find(params);
						
			}
		}
	},
		
	methods: {
			
	}
};
