const { Double } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bmiSchema = new Schema ({
    username:{
        type: String
    },
    gender:{
        type: String
    },
    age : {
        type: Number
    },
    height: {
        type: Number
    },
    weight: {
        type: Number
    },
    activity:{
        type: String
    },
    goal:{
        type: String
    },
    bmi: {
        type: mongoose.Decimal128
    }
}, {timestamps: true});

const InfoBMI = mongoose.model('InfoBMI', bmiSchema);

module.exports = InfoBMI;