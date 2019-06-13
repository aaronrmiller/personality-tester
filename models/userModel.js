const mongoose = require('mongoose');

const { Schema } = mongoose;

const user = new Schema({
  account: {
    Login: String,
    Password: String,
  },
  demographicData: {
    // Demographic Data if provided
    // 1=Mixed Race, 2=Arctic (Siberian, Eskimo), 3=Caucasian (European), 4=Caucasian (Indian),
    // 5=Caucasian (Middle East), 6=Caucasian (North African, Other), 7=Indigenous Australian,
    // 8=Native American, 9=North East Asian (Mongol, Tibetan, Korean Japanese, etc),
    // 10=Pacific (Polynesian, Micronesian, etc),
    // 11=South East Asian (Chinese, Thai, Malay, Filipino, etc),
    // 12=West African, Bushmen, Ethiopian, 13=Other (0=missed)
    race: Number,
    // entered as a Number ( >= 13 is filtered out)
    age: Number,
    // "is English your native language?". 1=yes, 2=no (0=missed)
    engNat: Number,
    // Chosen from a drop down menu. 1=Male, 2=Female, 3=Other (0=missed)
    gender: Number,
    // "What hand do you use to write with?". 1=Right, 2=Left, 3=Both (0=missed)
    hand: Number,
  },
  referralData: {
    // data from HTTP
    // The participant's technical location. ISO country code.
    country: Number,
    // Based on HTTP Referer. 1=from another page on the test website, 2=from google,
    // 3=from facebook, 4=from any url with ".edu" in its domain name (e.g. xxx.edu, xxx.edu.au),
    // 6=other source, or HTTP Referer not provided.
    Source: Number,
  },
});


module.exports = mongoose.model('User', user);
