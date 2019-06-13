const TestOneIpip = require('../models/testOneModel');
// const TestOneNorm = require('../testOnePopulate');
const TestOneNorms = require('../models/testOneNormModel');
const testOneController = {};

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

// const testOneNormData = new testOneNorm({
//   testOneNorms: {
//     OpennessNorm: norms.OpennessNorm,
//     ConscientiousnessNorm: norms.ConscientiousnessNorm,
//     ExtraversionNorm: norms.ExtraversionNorm,
//     AgreeablenessNorm: norms.AgreeablenessNorm,
//     EmotionalStabilityNorm: norms.EmotionalStabilityNorm,
//   },
// });


function createTestOneResult (req, res, next) {
  console.log(req.body);
  const {
    id, Openness, Conscientiousness, Extraversion, Agreeableness, EmotionalStability,
  } = req.body;
  // TestOneIpip.create({
  //   id,
  //   Openness,
  //   Conscientiousness,
  //   Extraversion,
  //   Agreeableness,
  //   EmotionalStability,
  // }, (err, testOneRes) => {
  //   if (err) console.log(err);
  //   console.log(`test one results ${testOneRes}.`);
  // });
  const testOneResults = new TestOneIpip({
    testOneIpip: {
      id,
      Openness,
      Conscientiousness,
      Extraversion,
      Agreeableness,
      EmotionalStability,
    },
  });
  console.log(testOneResults);
  //   next();
  testOneResults.save((err, testOneRes) => {
    if (err) console.log(err);
    console.log(`test one results ${testOneRes}.`);
    next();
  });
}

testOneController.createTestOneResult = createTestOneResult;

function testOneMostRecent (req, res, next) {
  console.log('arriving at most recent')
  TestOneIpip
    .find({})
    .sort({ date: -1 })
    .exec((err, score) => {
      if (err) console.log(err);
      req.body.locals = score;
      
      console.log(`most recent test results ${score}`);
      // console.log('testing body', res.body);
      // console.log('testing req body', req.body);
      next();
    });
}

testOneController.testOneMostRecent = testOneMostRecent;

function testOneMostRecentFormat (req, res, next) {
  // console.log('testing body', res.body);
  req.body.locals = req.body.locals[0];
  // console.log('testing locals', req.body.locals)
  next();
}

testOneController.testOneMostRecentFormat = testOneMostRecentFormat;

function testOneNormsCb (req, res, next) {
  console.log('testing norms', TestOneNorms);
  TestOneNorms
    .find({})
    .exec((err, normScore) => {
      if (err) console.log(err);
      console.log(`norm data retrieved: ${normScore}`);
      req.body.locals = normScore;
      next();
    });
}

testOneController.testOneNormsCb = testOneNormsCb;

function testOneNormsCbFormat (req, res, next) {
  console.log('testing format', req.body.locals[0].testOneNorms);
  req.body.locals = req.body.locals[0].testOneNorms;
  // console.log('testing changeover', req.body.locals)
  next();
}

testOneController.testOneNormsCbFormat = testOneNormsCbFormat;


function deleteTestOneResult (req, res, next) {
  
};

testOneController.deleteTestOneResult = deleteTestOneResult;

module.exports = testOneController;
