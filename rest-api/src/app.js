const express = require('express');
const { swaggerConfig } = require('./utils/swagger');
const routerApi = require('./routes');
const cors = require('cors');
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
swaggerConfig(app);

const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options));
require('./utils/auth');


app.get('/',
  (req, res) => {
    res.json({
      message: "App is runnning!!"
    })
});

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, function () {
  console.log('Example app listening on port 8080!');
});