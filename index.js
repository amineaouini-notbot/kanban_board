const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors()) // allow server to use CORS
app.use(bodyParser.json()); // convert coming data from json

app.use('/api/board', require('./routes/boards')); 
// any http request starts with /board uses boards router to handle endpoints

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)});