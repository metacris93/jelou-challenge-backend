const bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
	definition: {
		openapi: "3.1.0",
		info: {
			title: "Jelou API REST",
			version: "0.1.0",
			description:
				"This is a simple CRUD API application made with Express and documented with Swagger",
			license: {
				name: "MIT",
				url: "https://spdx.org/licenses/MIT.html",
			},
			contact: {
				name: "Cristian Pisco",
				email: "cristian.pisco@outlook.com",
			},
		},
		servers: [
			{
				url: "http://localhost:8080/api",
			},
		],
	},
	apis: ["./routes/*.js"],
};
// ['**/*.js']
function swaggerConfig(app) {
	const specs = swaggerJsdoc(options);
	app.use(
		"/api-docs",
		swaggerUi.serve,
		swaggerUi.setup(specs, { explorer: true })
	);
}
module.exports = { swaggerConfig };