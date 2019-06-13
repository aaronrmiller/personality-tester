/* eslint-disable no-plusplus */
const mongoose = require('mongoose');
const TestOneNorms = require('./models/testOneNormModel');

require('dotenv').config();

const { Schema, model } = mongoose;

mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log('MongoDB successfully connected...'))
  .catch(err => console.error(err));


const norms = {
  OpennessNorm: 13.59,
  ConscientiousnessNorm: 11.67,
  ExtraversionNorm: 10.13,
  AgreeablenessNorm: 13.48,
  EmotionalStabilityNorm: 6.57,
};

// const testOneNorms = new Schema({
//   testOneNorms: {
//     OpennessNorm: Number,
//     ConscientiousnessNorm: Number,
//     ExtraversionNorm: Number,
//     AgreeablenessNorm: Number,
//     EmotionalStabilityNorm: Number,
//   },
// });

// const testOneNorm = model('TestOneNorms', testOneNorms);

const testOneNormData = new TestOneNorms({
  testOneNorms: {
    OpennessNorm: norms.OpennessNorm,
    ConscientiousnessNorm: norms.ConscientiousnessNorm,
    ExtraversionNorm: norms.ExtraversionNorm,
    AgreeablenessNorm: norms.AgreeablenessNorm,
    EmotionalStabilityNorm: norms.EmotionalStabilityNorm,
  },
});
// console.log('testing data', testOneNormData);

testOneNormData.save((err, testOneNormRes) => {
  if (err) console.log(err);
  console.log(`test one Norms ${testOneNormRes}.`);
});

// module.export = testOneNorm;

// const csv = require('csv-parser');
// const fs = require('fs');

// fs.createReadStream('data.csv')
//   .pipe(csv())
//   .on('data', (row) => {
 
//   })
//   .on('end', () => {
//     console.log('CSV file completed.');
//   });