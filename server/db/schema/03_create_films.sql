DROP TABLE IF EXISTS films CASCADE;

CREATE TABLE films (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  length VARCHAR(255) NOT NULL,
  director VARCHAR(255) NOT NULL,
  price FLOAT,
  introduction VARCHAR(255) NOT NULL,
  released DATE DEFAULT CURRENT_DATE,
  year VARCHAR(255) NOT NULL,
  customer_id INTEGER REFERENCES users(id),
  category_id INTEGER REFERENCES categories(id)
);