const express = require('express');
const loginRouter = express.Router();
const loginAuth =  require('./../controllers/login');

loginRouter.post('/signup', (req, res) => {
    loginAuth.signup(req, res);
});

loginRouter.post('/login', (req, res) => {
    loginAuth.login(req, res);
});

loginRouter.post('/reset-password', (req, res) => {
    loginAuth.resetpassword(req, res);
});

loginRouter.post('/resetpassword', (req, res) => {
    loginAuth.changepassword(req, res);
})
module.exports = loginRouter;