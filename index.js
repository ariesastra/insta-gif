const express = require('express');
const app = express();
const session = require('express-session')
const upload = require('express-fileupload');

const port = 3000;

// view engine
app.set('view engine', 'ejs');
// body parser
app.use(express.urlencoded({ extended: true }));
// using public resource
app.use(express.static('public'));
// upload file
app.use(upload);
//session
app.use(session({
  secret: 'top secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    sameSite: true
  }
}))

// routes
const routes = require('./routes');
app.use(routes);

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
})