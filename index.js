const express = require('express');
const bodyParser = require('body-parser');
const {boards_api} = require('./routes/boards');

const app = express();

app.use(bodyParser.json());

app.use('/board', boards_api); 
// any http request starts with /board uses boards.js to handle endpoints

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)});