const express = require('express');
const gameRouter = express.Router();
const authHelpers = require('../services/auth/auth-helpers');

gameRouter.get('/', authHelpers.loginRequired, (req, res) => {
  res.render('game');
});

module.exports = gameRouter;
