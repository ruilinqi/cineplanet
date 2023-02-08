const db = require('../../configs/db.config');

const getAllFilms = () => {
	return db.query("SELECT * FROM films;").then(data => {
		return data.rows;
	})
}

const getFilmByTitle = title => {
	return db.query("SELECT * FROM films WHERE name = $1", [title]).then(data => {
		return data.rows;
	})
}

module.exports = {getAllFilms, getFilmByTitle}