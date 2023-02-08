const pool = require('../configs/db.config')

const express = require('express');
const router = express.Router();
// const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    const queryResponse = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = queryResponse.rows[0];
    console.log("Login in user:", user);
    if (!user) {
      return res.status(400).json({ error: 'The email is not found. Please try again.' });
    }
  console.log("password:", password, "user.password:", user.password);

  if (!bcrypt.compareSync(password, user.password)) {
    return res.status(400).json({ error: 'Ooops! The password does not match. Please try again.' });
  }
    // const isMatch = await bcrypt.compare(password, user.password);
    // console.log("ismatch:", isMatch);
    // if (!isMatch) {
    //   return res.status(400).json({ error: 'Incorrect email or password' });
    // }

    const payload = {
      userId: user.id,
      email: user.email,
    };
    // const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json (payload);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;

