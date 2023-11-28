require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

const app = express();

app.use(express.static('public'));

//Middleware
//Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', require('./server/route/main'));

app.listen(process.env.PORT, () => {
    console.log(`App is listening on PORT ${process.env.PORT}`);
});
