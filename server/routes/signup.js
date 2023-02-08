const pool = require('../configs/db.config')

const express = require('express');
const router = express.Router();
// const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


router.post('/', async (req, res) => {
    const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const queryResponse = await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *', [name, email, hashedPassword]); //hashedPassword
    const user = queryResponse.rows[0];

    console.log("Sign up user:", user);
    const payload = {
        userId: user.id,
        email: user.email,
      };
      // const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      res.json (payload);

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

