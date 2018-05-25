const express = require('express');
const loginRouter = express.Router();
const loginAuth =  require('./../controllers/login');

loginRouter.post('/signup', (req, res) => {
    loginAuth.signup(req, res);
})

loginRouter.post('/login', (req, res) => {
    loginAuth.login(req, res);
})
module.exports = loginRouter;