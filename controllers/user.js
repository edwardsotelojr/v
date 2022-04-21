const User = require('../models/User')
const bcrypt = require('bcrypt')

exports.signup = async (req, res) => {
    console.log(req.body)
    const {name, email, password} = req.body
    User.findOne({email: email}).then((user) => {
        if(user) return res.status(400).json({msg: "email exist"})
    })
    const newUser = new User({name: name, email: email, password: password})
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) return res.status(500).json({msg: "err: " + err })
            newUser.password = hash
            newUser.save().then(user => {
                res.status(200).json({msg: "success", user})
            })
            .catch(error => {
                res.status(500).json({msg: "err" + error})
            })
        })
    })
}

exports.deleteUser = async (req, res) => {
    const {email} = req.body
    User.findOneAndDelete({email: email}).exec().then(user => {
        console.log('deteled')
    }) 
}