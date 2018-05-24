const express = require('express');
const loginRouter = express.Router();
const login =  require('./../controllers/login');

loginRouter.post('/signup', (req, res) => {
    login.signup(req, res);
})

module.exports = loginRouter;