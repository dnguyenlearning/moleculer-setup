const email = require("moleculer-mail");
const path = require("path");

module.exports = {
	name: "email",
	mixins:[email],
	settings: {
		from: "sender@moleculer.services",
		transport: {
			host: "smtp.mailtrap.io",
			port: 2525,
			auth: {
				user: "367335eaa82697636",
				pass: "e5a76af9b056d0"
			}
		},
		templateFolder: path.join(__dirname, "templates")
	},
	actions: {
		sendMail: {
			handler(ctx) {
				const templateType = ctx.params.templateType || "approval";
				this.email.send(
					{ 
						to: "lam.doe@knorex.com", 
						template: "content-approval",
						locale: "en-us",
						data: {
							name: "Lam Do",
							username: "lamdo",
							verifyToken: "123456"
						}
					});
			}
		}
	}
};
