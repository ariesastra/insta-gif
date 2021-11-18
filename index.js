const express = require('express');
const app = express();
const session = require('express-session')
const port = process.env.PORT || 3000;
const path = require('path');

// view engine
app.set('view engine', 'ejs');
// body parser
app.use(express.urlencoded({ extended: true }));
// using public resource
app.use(express.static(path.join(__dirname, '/public')));
//session
app.use(session({
  secret: 'top secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    sameSite: true,
    maxAge: 30 * 24 * 3600 * 1000
  }
}))

// routes
const routes = require('./routes');
app.use(routes);

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
})