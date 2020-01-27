require('./config/db');

const express = require('express');
const path = require('path');
const swig = require('swig');
const bodyparser = require('body-parser');

const bukuController = require('./controllers/bukuController');
const indexController = require('./controllers/indexController');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(bodyparser.json());

// view engine setup
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
    // Swig will cache templates for you, but you can disable
    // that and use Express's caching instead, if you like:
app.set('view cache', false);
    // To disable Swig's cache, do the following:
swig.setDefaults({ cache: false });

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

app.use('/', indexController);
app.use('/buku', bukuController);
