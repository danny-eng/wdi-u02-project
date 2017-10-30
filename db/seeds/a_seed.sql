DROP TABLE IF EXISTS archer;

CREATE TABLE IF NOT EXISTS archer (
  id SERIAL PRIMARY KEY,
  hp INTEGER,
  atk INTEGER,
  def INTEGER,
  spd INTEGER,
  rng INTEGER
);

INSERT INTO archer (hp, atk, def, spd, rng) VALUES
(1, 1, 1, 1, 1);
