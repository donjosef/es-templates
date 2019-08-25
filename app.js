const express = require('express');

const bodyParser = require('body-parser');

const homeRoutes = require('./routes/home');
const usersRoutes = require('./routes/users');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

app.use(homeRoutes);
app.use(usersRoutes);

app.listen(3000, () => console.log('App listening on port 3000'));