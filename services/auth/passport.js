const passport = require('passport');
const Player = require('../../models/Player');

module.exports = () => {

  passport.serializeUser((user, done) => {
    done(null, user.username);
  });

  passport.deserializeUser((username, done) => {
    Player.findByUsername(username)
      .then(player => {
        done(null, player);
      }).catch(err => {
        done(err, null);
      });
  });
};
