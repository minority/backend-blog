const express = require('express');

const port = 7777;
const app = express();

app.get('/', (request, response) => {
  response.send('Hello Max!');
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
