const mongoose = require('mongoose');

const instituteSchema = new mongoose.Schema({
    code: {
		type: String,
		required: true
    },
    name: {
		type: String,
		required: true
    },
    description: {
		type: String,
		required: true
    },
    instLogo: {
		type: String,
		required: true
    },
    adrss: {
		type: String,
		required: true
    },
    mobile: {
      type: Number,
      required: true
    },
    mail: {
      type: String,
    },
    achivemnt: [{
        name: {
          type: String,
          required: true
        },
        desc: {
          type: String,
          required: true
        }
    }]
   
  });

module.exports = mongoose.model('institute', instituteSchema);