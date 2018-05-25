const Users = require('./../models/user');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const config = require('./../config/config')

const transporter = nodemailer.createTransport(smtpTransport({
 host: 'smtp.gmail.com',
 secure: false, // secure:true for port 465, secure:false for port 587
 port: '587',
 auth: {
 user: config.gmailUser,
 pass: config.password
 }
}));

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
                let token = jwt.sign({ email: user.email}, config.token);
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
                let token = jwt.sign({ email: result.email}, config.token);
                result['token'] = token;
                res.status(200).json({
                    status : 200,
                    data: result
                })
            }
        }
        

    });
}

module.exports.resetpassword = (req, res) => {
    let email = req.body.email;
    Users.findOne({
        email: email,
        is_deleted: false
    }, (err, resp) => {
        if (resp) {
            let name = resp.fname;
            const token = jwt.sign({ email: resp.email}, config.token);
            const url = config.baseURL;
            resp.resetPasswordToken = token;
            resp.save((err, respo) => {});
            html = `Hi ${name} \n,
                    Your link to reset password is \n ${url}/reset-password/${token} \n
                    \n Copy link to reset password.`
            const mailOptions = {
                from:"Test Email<testmail@gmail.com>",
                to: email,
                subject: "Reset password email",
                html: html
            }
            transporter.sendMail(mailOptions, (err, response) => {
                if (err) {
                    res.status(201).json({
                        status : 201,
                        msg: 'Mail not sent'
                    })
                }
                else {
                    res.status(200).json({
                        status : 200,
                        msg: 'Mail sent succesfully'
                    })
                }
            })
        }
        else {
            res.status(202).json({
                status : 202,
                msg: 'Email not found'
            })
        }
    })
}

module.exports.changepassword = (req, res) => {
    let token = req.body.userData.token;
    let password = req.body.userData.password;
    Users.findOne({
        resetPasswordToken: token
    }, (err, resp) => {
        if (resp) {
            resp['password'] = bcrypt.hashSync(password, 8);
            resp['resetPasswordToken'] = '';
            Users(resp).save((err, response) => {
                if (response) {
                    let token = jwt.sign({ password: password}, config.token);
                    response['token'] = token;
                    return res.status(200).json({
                        data: response,
                        status: 200,
                        msg: 'Password changed successfully'
                    });
                }
            });
        }
        else {
            return res.status(201).json({
                msg: 'Token has already been used.',
                status: 201
            });
        }
    })
}