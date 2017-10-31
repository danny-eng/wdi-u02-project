DROP TABLE IF EXISTS player CASCADE;
DROP TABLE IF EXISTS archer CASCADE;
DROP TABLE IF EXISTS knight CASCADE;
DROP TABLE IF EXISTS teams CASCADE;

CREATE TABLE IF NOT EXISTS knight (
  id SERIAL PRIMARY KEY,
  k_hp INTEGER,
  k_atk INTEGER,
  k_def INTEGER,
  k_spd INTEGER,
  k_rng INTEGER
);

CREATE TABLE IF NOT EXISTS archer (
  id SERIAL PRIMARY KEY,
  a_hp INTEGER,
  a_atk INTEGER,
  a_def INTEGER,
  a_spd INTEGER,
  a_rng INTEGER
);

CREATE TABLE IF NOT EXISTS player (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL,
  nick VARCHAR(16),
  kills INTEGER,
  deaths INTEGER,
  k_kills INTEGER,
  k_deaths INTEGER,
  a_kills INTEGER,
  a_deaths INTEGER,
  knight INTEGER REFERENCES knight(id),
  archer INTEGER REFERENCES archer(id)
);

CREATE TABLE IF NOT EXISTS teams (
  player_id INTEGER REFERENCES player(id),
  team TEXT
)
