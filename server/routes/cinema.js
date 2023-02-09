const express = require("express");
const pool = require("../configs/db.config");

const router = express.Router();
const { getCinemas } = require("../api/CinemaAPI");

router.get("/fetch", async (req, res) => {
  try {
    await getCinemas();
    res.status(200).json({
    message: "Cinemas successfully fetched and populated"
    });
  } catch (err) {
    res.status(500).json({
    error: err
    });
  }
});

router.get("/", (req, res) => {
  pool.query("SELECT * FROM cinemas", (err, results) => {
    if (err) {
      return res.status(500).json({
        error: err
      });
    }

    res.json(results.rows);
  });
});

module.exports = router;

