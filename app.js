const express = require('express')
const app = express();
require('dotenv').config();
const cors = require('cors');

const port = process.env.PORT || 3005;

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

//Rutas
app.use('/', require('./routers/routerFront'))

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
})