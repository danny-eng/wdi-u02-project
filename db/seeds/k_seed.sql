DROP TABLE IF EXISTS knight;

CREATE TABLE IF NOT EXISTS knight (
  id SERIAL PRIMARY KEY,
  hp INTEGER,
  atk INTEGER,
  def INTEGER,
  spd INTEGER,
  rng INTEGER
);

INSERT INTO knight (hp, atk, def, spd, rng) VALUES
(1, 1, 1, 1, 1);
