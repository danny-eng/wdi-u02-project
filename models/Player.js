const db = require('../db/config');

const Player = {};

Player.create = (player) => {
  return db.one(`
    INSERT INTO player
    (username, password_digest, nick, kills, deaths, knight, archer, k_kills, a_kills, k_deaths, a_deaths)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    RETURNING *
  `, [
    player.username,
    player.password_digest,
    player.nick,
    player.kills,
    player.deaths,
    player.knight,
    player.archer,
    player.k_kills,
    player.a_kills,
    player.k_deaths,
    player.a_deaths
  ]);
}

Player.findByUsername = (username) => {
  return db.one(`
    SELECT *
    FROM player
    JOIN knight ON player.knight = knight.id
    JOIN archer ON player.archer = archer.id
    WHERE username = $1
  `, [username]);
}

Player.update = (nick, username) => {
  return db.one(`
    UPDATE player SET
    nick = $1
    WHERE username = $2
    RETURNING *
  `, [
    nick,
    username
  ]);
}

Player.delete = (username) => {
  return db.none(`
    DELETE FROM player
    WHERE username = $1
  `, [username]);
}

module.exports = Player;
