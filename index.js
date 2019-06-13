const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
// const bodyParser = require('body-parser');
const testOne = require('./mainRoutes/testOneRoutes');

const app = express();

mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log('MongoDB successfully connected...'))
  .catch(err => console.error(err));

const port = process.env.port || 5000;

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-type, Accept');
//   next();
// });

app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());

app.use((req, res, next) => {
  // res.send('Request from any point should return this');
  console.log('testing use');
  next();
});

app.use('/testone', testOne);

app.use((req, res, next) => {
  res.send('final route point before error');
})

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
