const Users = require('./../models/user');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

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
                    console.log(err)
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

module.exports.login = (req, res) => {
    let email = req.body.userData.email;
    let password = req.body.userData.password;

    Users.findOne({
        email
    },  (err, result) => {
        if (! result) {
            res.status(202).json({
                status: 202,
                msg: 'Email not registered'
            })
        }
        else {
            const isValidPasswd = bcrypt.compareSync(password, result.password);
            if (! isValidPasswd) {
                res.status(201).json({
                    status: 201,
                    msg: 'Invalid password'
                })
            }
            else {
                let token = jwt.sign({ email: result.email, roles: ['customer'] }, "testapp");
                result['token'] = token;
                res.status(200).json({
                    status : 200,
                    data: result
                })
            }
        }
        

    });
}