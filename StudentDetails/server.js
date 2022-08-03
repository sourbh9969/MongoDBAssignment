const express = require('express');
const bodyParser = require('body-parser');
const route = require('./router');


const app = express();

app.use(bodyParser.json());

app.use('/students', route)


app.listen(5000, () => {
    console.log('http://localhost:5000');
})