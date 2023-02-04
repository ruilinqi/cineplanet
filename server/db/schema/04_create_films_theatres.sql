DROP TABLE IF EXISTS films_theatres CASCADE;

CREATE TABLE films_theatres (
  id SERIAL PRIMARY KEY,
  film_id INTEGER REFERENCES films(id),
  theatre_id INTEGER REFERENCES theatres(id)
);