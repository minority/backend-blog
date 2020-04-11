const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('Hello World!');
});

app.listen(8888, () => {
  console.log('Express server listening on port 8888');
});
