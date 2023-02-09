DROP TABLE IF EXISTS films_cinemas CASCADE;

CREATE TABLE films_cinemas (
  id SERIAL PRIMARY KEY,
  film_id INTEGER REFERENCES films(id),
  cinema_id INTEGER REFERENCES cinemas(id),
  play_date DATE DEFAULT CURRENT_DATE,
  play_time TIME
);