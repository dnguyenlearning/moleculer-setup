const _ = require("lodash");
const ApiGateway = require("moleculer-web");

const logger = require("../middlewares/logger");

module.exports = {
	name: "api",
	mixins: [ApiGateway],

	settings: {
		port: process.env.PORT || 3000,
		routes: [
			{
				path: "/api",
				aliases: {
					"GET /test": "api.test",
					"GET /feed/list": "feed.list",
					"GET /article/list": "article.list"
				},	
				// Disable to call not-mapped actions
				mappingPolicy: "restrict",
				cors: true,
				// Parse body content
				bodyParsers: {
					json: {
						strict: false
					},
					urlencoded: {
						extended: false
					}
				}
			},
				
			{
				path: "/mediabroker",
				aliases: {
				}
			},
			{
				path: "/lumina",
				aliases: {
				}
			},
			{
				path: "/arena",
				aliases: {
				}
			}],
			
		onError(req, res, err) {
			// Return with the error as JSON object
			res.setHeader("Content-type", "application/json; charset=utf-8");
			res.writeHead(err.code || 500);

			if (err.code == 422) {
				let o = {};
				err.data.forEach(e => {
					let field = e.field.split(".").pop();
					o[field] = e.message;
				});

				res.end(JSON.stringify({ errors: o }, null, 2));
			} else {
				const errObj = _.pick(err, ["name", "message", "code", "type", "data"]);
				res.end(JSON.stringify(errObj, null, 2));
			}
			this.logResponse(req, res, err? err.ctx : null);
		}
	},
		
	actions: {
		test(ctx) {
			return "for testing purpose";
		},
	},
		
	created() {
		// Pointer to the original function
	}
};
