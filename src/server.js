const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const hbs = require('hbs');
//const mongoose = require('./database/db.database');
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
const port = process.env.PORT || 3000;

//Middleware Morgan
//app.use(morgan('dev'));

//Static files
app.use(express.static(path.join(__dirname, '../public')));

//Decodificación de peticiones json
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Motor de plantillas
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));


//Routes
app.use('/',require('./routes/index.routes'));
app.use(require('./routes/nodemailer.routes'));

app.listen(port, () => console.log(`Servidor establecido en el puerto ${port}!`));