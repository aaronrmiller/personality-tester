const mongoose = require('mongoose');

const { Schema } = mongoose;

const testOneIpip = new Schema({
  testOneIpip: {
    // Personality Scores for each Trait
    Openness: Number,
    Conscientiousness: Number,
    Extraversion: Number,
    Agreeableness: Number,
    EmotionalStability: Number,
  },
});

module.exports = mongoose.model('TestOneIpip', testOneIpip);
