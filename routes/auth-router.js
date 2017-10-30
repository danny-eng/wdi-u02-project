const express = require('express');
const authRouter = express.Router();
const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth-helpers');
const playersController = require('../controllers/players-controller');

authRouter.get('/login', authHelpers.loginRedirect, (req, res) => {
  res.render('login');
});

authRouter.get('/register', authHelpers.loginRedirect, (req, res) => {
  res.render('register');
});

authRouter.post('/register', playersController.create);

authRouter.post('/login', passport.authenticate('local', {
    successRedirect: '/game',
    failureRedirect: '/auth/login',
    failureFlash: true
  })
);

authRouter.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/auth/login');
});

module.exports = authRouter;
