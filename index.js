const express = require('express');

const port = process.env.PORT || 8080;

const app = express();

app.use(require('./controllers'));

app.listen(port, function () {
  console.log('Listening on port ' + port);
});
