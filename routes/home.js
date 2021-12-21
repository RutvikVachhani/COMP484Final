const express = require('express');
const router = express.Router();
const InfoBMI = require('../models/infoBMI');

router.post('/bmiInput', (req, res, next) => {
    var height = req.body.height;
    var weight = req.body.weight;
	var bmiC = ((703*weight)/(height*height)).toFixed(2);
    let Info = new InfoBMI ({
        //username: ,
        height: height,
        weight: weight,
        bmi: bmiC
    })
    Info.save()
    .then(
        res.json({
            message: 'info added'
        })
    )
    .catch(err => {
        res.json ({
            message: 'Error'
        })
    })
})

module.exports = router;
