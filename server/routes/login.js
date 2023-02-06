const pool = require('../configs/db.config')

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// const pool = require('../database');

router.get('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  pool.query('SELECT * FROM users WHERE email = $1', [email], (error, results) => {
    if (error) {
      res.status(500).json({
        error: 'Internal server error',
      });
    } else if (results.rows.length === 0) {
      res.status(401).json({
        error: 'Email not found',
      });
    } else {
      const user = results.rows[0];
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          res.status(200).json({
            token: generateToken(user),
          });
        } else {
          res.status(401).json({
            error: 'Password incorrect',
          });
        }
      });
    }
  });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const queryResponse = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = queryResponse.rows[0];
    if (!user) {
      return res.status(400).json({ error: 'Incorrect email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Incorrect email or password' });
    }

    const payload = {
      userId: user.id,
      email: user.email,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;

// router.post('/', async (req, res) => {
//     try {
//         const { email, password } = req.body
//         const client = await pool.connect()
//         let sql = "SELECT * FROM users_cred WHERE email=$1"
//         const { rows } = await client.query(sql, [email])
//         client.release()
//         if(rows.length === 0){
//             return res.status(404).json({  message: 'User Not Found' })
//         }
//         const user = rows[0]
//         const passwordMatch = await bcrypt.compare(password, user.password)
//         if(!passwordMatch){
//             return res.status(401).json({ message: 'Password Is Not Correct' })
//         }
//         const token = jwt.sign(user, 'CODER')
//         res.status(200).json({ token })
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({ message: 'Internal Server Error' })
//     }
// })

// router.get('/logout', (req, res) => {
//   const userID = req.session["user_id"];

//   let templateVars = { user: [{}] };
//   let usersQuery = `SELECT id, name, email FROM users WHERE id = ${userID};`;
//   pool.query(usersQuery)
//     .then(data => {
//       templateVars.user = data.rows;
//       console.log("/post data", data);
//     })
//     .catch(err => {
//       console.log(err);
//     });

//   if (userID) {
//     return res.redirect("/");
//   }

//   res.json({users: templateVars});
//   // res.render("login", templateVars);

// });
// module.exports = router
