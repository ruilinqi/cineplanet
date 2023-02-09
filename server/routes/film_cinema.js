const pool = require('../configs/db.config')
const express = require('express');
const router = express.Router();
const films_cinemas = require('../db/queries/films_cinemas')
router.get('/:title', (req, res) => {
  const title = req.params.title
  console.log(title)
  films_cinemas.getCinemaTimesByTitle(title).then(data => {
    console.log(data);
    res.json(data)
  })
});

module.exports = router;
