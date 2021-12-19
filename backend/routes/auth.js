const express = require('express');
const router = express.Router();
const User = require('../models/User');

var globalUsername = "";

router.post('/auth', (req, res) => {
    const { username, password } = req.body;
    User.findOne({username: username}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
                globalUsername = user.username;
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
})

//user info input in mongodb
router.post('/registerInput', function(req, res, next) {
    let user = new User ({
        name:req.body.name,
        username:req.body.username,
        password:req.body.password,
        email:req.body.email
    })
    if(user){
        user.save()
        .then(
            //res.redirect('/signIn')
            res.json({
                message: "added"
            })
        )
        .catch(err => {
            res.json ({
                message: 'Error'
            })
        })
    }
});

const InfoBMI = require('../models/infoBMI');

router.post('/bmiInput', (req, res, next) => {
    var gender = req.body.gender;
    var age = req.body.age;
    var height = req.body.height;
    var weight = req.body.weight;
    var activity = req.body.activity;
    var goal = req.body.goal;
	var bmiC = ((703*weight)/(height*height)).toFixed(2);
    let Info = new InfoBMI ({
        username: globalUsername,
        gender: gender,
        age: age,
        height: height,
        weight: weight,
        activity: activity,
        goal: goal,
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

router.post('/display', (req, res, next) => {
    var result = User.findOne({username: req.body.Username}).sort({createdAt:-1}).limit(1)
    if(result){
        res.send({
            message: "info here", info: result
        })
    }
});

module.exports = router;
