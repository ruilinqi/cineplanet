const pool = require('../configs/db.config')
const express = require('express');
const router = express.Router();
const films = require('../db/queries/films')
router.get('/:title', (req, res) => {
  // const title = req.baseUrl.slice(7).replaceAll('%20'," ")
  const title = req.params.title
  console.log(title)
  films.getFilmByTitle(title).then(data => {
    console.log(data);
    res.json(data)
  })
});

module.exports = router;

