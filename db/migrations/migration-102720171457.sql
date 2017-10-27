

CREATE TABLE IF NOT EXISTS knight (
  id SERIAL PRIMARY KEY,
  hp INTEGER,
  atk INTEGER,
  def INTEGER,
  spd INTEGER,
  rng INTEGER
);

CREATE TABLE IF NOT EXISTS archer (
  id SERIAL PRIMARY KEY,
  hp INTEGER,
  atk INTEGER,
  def INTEGER,
  spd INTEGER,
  rng INTEGER
);

CREATE TABLE IF NOT EXISTS player (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL,
  nick VARCHAR(16),
  kills INTEGER,
  deaths INTEGER,
  knight INTEGER REFERENCES knight(id),
  archer INTEGER REFERENCES archer(id),
  k_kills INTEGER,
  a_kills INTEGER,
  k_deaths INTEGER,
  a_deaths INTEGER
);

CREATE TABLE IF NOT EXISTS teams (
  player_id INTEGER REFERENCES player(id),
  team TEXT
)
