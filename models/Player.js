const db = require('../db/config');

const Player = {};

Player.findAll = () => {
  return db.any(`
    SELECT *
    FROM player
  `);
}

Player.findById = (id) => {
  return db.one(`
    SELECT *
    FROM player
    WHERE id = $1
  `, [id]);
}

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

Player.update = (player, id) => {
  return db.one(`
    UPDATE player SET
    username = $1,
    password_digest = $2,
    nick = $3,
    kills = $4,
    deaths = $5,
    knight = $6,
    archer = $7,
    k_kills = $8,
    a_kills = $9,
    k_deaths = $10,
    a_deaths = $11
    WHERE id = $12
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
    player.a_deaths,
    id
  ]);
}

Player.delete = (id) => {
  return db.none(`
    DELETE FROM player
    WHERE id = $1
  `, [id]);
}

module.exports = Player;
