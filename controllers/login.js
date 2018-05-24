const Users = require('./../models/user');
const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const jwt = require('jsonwebtoken');

module.exports.signup = (req, res) => {
    let userData = req.body.userData;
    let user = {
        fname: userData.fname,
        lname: userData.lname,
        email: userData.email,
        cname: userData.cname,
        address: userData.address,
        phone: userData.phone,
        password: userData.password
    }
    console.log('user email', user.email)
    user['password'] = bcrypt.hashSync(userData['password'], 8);
    Users.findOne({
        email: user.email
    }, (err, resp) => {
        if (resp) {
            res.status(500).json({
                status: 500,
                msg: 'Email already exits'
            })
        }
        else {
            Users(user).save((err, response) => {
                if (err) {
                    console.log(err )
                    return res.status(500).json(err);
                }
                let token = jwt.sign({ email: user.email}, "testapp");
                response['token'] = token;
                return res.status(200).json({
                    data: response,
                    success: true,
                    status: 200
                });
            })
        }
    })

}