const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/auth', (req, res) => {
    const { username, password} = req.body
    User.findOne({ username: username}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
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


module.exports = router;
