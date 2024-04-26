const boom = require('@hapi/boom');

function checkApiToken(req, res, next) {
  const apiToken = req.headers['api'];
	if (apiToken === '123') {
		next();
	} else {
		next(boom.unauthorized());
	}
}
module.exports = { checkApiToken }