// routes/users.js
const express = require('express');
const router = express.Router();
const users = require('../db/queries/users');
const pool = require('../configs/db.config.js');

/* GET users listing. */
router.get('/', (req, res) => {
  users.getAllUsers().then(data => {
    console.log(data);
    res.json({users: data});
  })
});

/* GET user by id. */
// router.get('/:id', (req, res) => {
//   const id = req.params.id;
//   try {
//     users.getUserById(id).then(data => {
//       console.log(data);
//       res.json({users: data});
//     })
//   } catch (err) {
//     res.status(500).json({
//       err: true
//     });
//   }
// });



// router.post("/login", (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;
//   // console.log("BOD", req)
//   pool.query(`SELECT * FROM users WHERE email = $1;`, [email])
//   .then(
//     (result) => {
//       if (password === result.rows[0].password) {
//         console.log(`result of db query: `, result.rows[0])
//         // req.session["user_id"] = result.rows[0].id
//         // console.log(resul)
//         res.send(result.rows[0])
//       } else {
//         res.send({ error: "error" });
//         return;
//       }
//     }
//   );
// });

module.exports = router;

