const express = require('express');
const app = express();
const hbs = require('hbs');
// Helpers
require('./hsb/helpers');

const port = process.env.PORT || 3000

app.use(express.static( __dirname + '/public'))

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.get('/', function (req, res) {
    res.render('home',{
        nombre: 'luis carlos rosas orellano'
    });
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.listen(port, () => console.log(`Escuchando por el puerto ${port}`));