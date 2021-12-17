const { Double } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bmiSchema = new Schema ({
    username:{
        type: String
    },
    height: {
        type: Number
    },
    weight: {
        type: Number
    },
    bmi: {
        type: mongoose.Decimal128
    }
}, {timestamps: true});

const InfoBMI = mongoose.model('InfoBMI', bmiSchema);

module.exports = InfoBMI;