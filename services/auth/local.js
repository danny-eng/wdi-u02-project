const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const init = require('./passport');
const Player = require('../../models/Player');
const authHelpers = require('./auth-helpers');

const options = {};

init();

passport.use(
  new LocalStrategy(options, (player, password, done) => {
    Player.findByUsername(player)
      .then(player => {
        if (!player){
          return done(null, false);
        }
        if (!authHelpers.comparePass(password, player.password_digest)){
          return done(null, false);
        } else {
          return done(null, player);
        }
      }).catch(err => {
        console.log(err);
        return done(err);
      });
  })
);

module.exports = passport;
