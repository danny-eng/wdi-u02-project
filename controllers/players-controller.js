const bcrypt = require('bcryptjs');
const Player = require('../models/Player');

const playersController = {};

playersController.create = (req, res) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  Player.create({
    username: req.body.username,
    password_digest: hash,
    nick: req.body.nick,
    kills: 0,
    deaths: 0,
    knight: 1,
    archer: 1,
    k_kills: 0,
    a_kills: 0,
    k_deaths: 0,
    a_deaths: 0
  }).then(player => {
    req.login(player, (err) => {
      if (err) return next(err);
      res.redirect('/game');
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

playersController.index = (req, res) => {
  res.render('/game', { user: req.user });
};

playersController.update = (req, res) => {
  Player.update({
    username: req.body.username,
    password_digest: hash,
    nick: req.body.nick,
    kills: 0,
    deaths: 0,
    knight: 1,
    archer: 1,
    k_kills: 0,
    a_kills: 0,
    k_deaths: 0,
    a_deaths: 0
  }, req.user.id)
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

playersController.delete = (req, res) => {
  Player.delete(req.user.id)
  .then(() => {
    res.redirect('/');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

module.exports = playersController;
