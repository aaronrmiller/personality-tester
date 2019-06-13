const mongoose = require('mongoose');

const { Schema } = mongoose;

const testOneNorms = new Schema({
  testOneNorms: {
    OpennessNorm: Number,
    ConscientiousnessNorm: Number,
    ExtraversionNorm: Number,
    AgreeablenessNorm: Number,
    EmotionalStabilityNorm: Number,
  },
});

module.exports = mongoose.model('TestOneNorms', testOneNorms);
