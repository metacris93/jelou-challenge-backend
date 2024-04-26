const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: "App is runnning!!"
  })
});

routerApi(app);

app.listen(port, function () {
  console.log('Example app listening on port 8080!');
});