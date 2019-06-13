const express = require('express');
const testOneController = require('../testOneController/TestOneController');
// const ipipUserData = require('../models/ipipModel');

const testOneRouter = express.Router();

// sends ipip data for individual
testOneRouter.get('/results', (req, res, next) => {
  console.log('testing get Request');
  res.send('Testing Get Request for results');
});

testOneRouter.post(
  '/testonelastitem',
  testOneController.createTestOneResult,
  (req, res, next) => {
    // res.json({ requestBody: req.body });
    // console.log(req.body);
    res.status(200).json(req.body);
    // res.status(200).send(req.body.Openness);
    // res.send('Testing post request for last item');
  }
);

testOneRouter.get(
  '/testonemostrecent',
  testOneController.testOneMostRecent,
  testOneController.testOneMostRecentFormat,
  (req, res, next) => {
    res.status(200).json(req.body);
  }
);

testOneRouter.get(
  '/testonenorms',
  testOneController.testOneNormsCb,
  testOneController.testOneNormsCbFormat,
  (req, res, next) => {
    res.status(200).json(JSON.stringify(req.body.locals));
  }
);

testOneRouter.delete(
  '/testonedelete',
  testOneController.deleteTestOneResult,
  (req, res, next) => {
    res.status(205);
  }
);

module.exports = testOneRouter;
