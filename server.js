const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, './build')));

app.set('port', process.env.PORT || 3001);

app.get('/', (request, response) => {
  response.readFile(path.resolve(__dirname, './build', 'index.html', (err, file) => {
    response.send(file);
  }));
});
