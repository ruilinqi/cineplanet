const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const cors = require('cors')

const app = express();

const indexRouter = require('./routes/index');
 const usersRouter = require('./routes/users');
 const loginRouter = require('./routes/login');
 const signupRouter = require('./routes/signup');
 const filmsRouter = require('./routes/films');
 const paymentRouter = require('./routes/payment');
 const cinemaRouter = require('./routes/cinema');
const films_cinemasRouter = require('./routes/film_cinema');

app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/login', loginRouter);
app.use('/signup', signupRouter);

app.use('/films',filmsRouter)
app.use('/payment',paymentRouter)
app.use('/cinema',cinemaRouter)
app.use('/film_cinema',films_cinemasRouter)


module.exports = app;
