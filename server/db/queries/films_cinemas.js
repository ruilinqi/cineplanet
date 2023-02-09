const db = require('../../configs/db.config');

const getAllFilmsCinemaTimes = () => {
	return db.query("SELECT * FROM films_cinemas;").then(data => {
		return data.rows;
	})
}

const getCinemaTimesByTitle = (title) => {
	
	const result = db.query(`
	SELECT * FROM films_cinemas
	JOIN films ON films_cinemas.film_id = films.id
	WHERE name = $1;`, [title]);

	return result.then(data => {
		return data.rows;
	})
}

module.exports = {getAllFilmsCinemaTimes, getCinemaTimesByTitle}
