const express = require('express');
const app = express();
const port = 3000;

// view engine
app.set('view engine', 'ejs');
// body parser
app.use(express.urlencoded({ extended: true }));
// using public resource
app.use(express.static('public'));

// routes
const routes = require('./routes');
app.use(routes);

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
})