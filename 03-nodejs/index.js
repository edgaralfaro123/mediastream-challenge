`
Pasos
1.- crear base datos mongo mediastream-challenge
2.- node 03-nodejs/utils/seed.js
3.- ir a http://localhost:3000/users
4.- usar el codigo siguiente

Se consulta la coleccion de mongo y se le agrega el await para hacerlo asincrono
luego se recorren los resultados y se crea un string que sera escrito
en el archivo csv mediante el modulo fs`

'use strict';
 
console.log(`
3.
---
 
We need to create a route that downloads the entire database to a .csv file.
The endpoint must be set to: GET /users
 
Make sure to have an instance of MongoDB running at: mongodb://localhost
 
Run the database seed with:
$ node utils/seed.js
 
-> Warning: It contains hundreds of entities and our production server is quite small
`);
 
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const fs = require('fs')
 
// Setup database
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/mediastream-challenge');
const User = require('./models/User');
 
// Setup Express.js app
const app = express();
 
// TODO
 
app.listen(3000);
 
function writeCsv(csv){
    fs.writeFileSync("users.csv", csv)
}
 
app.get('/users', async (req, res) => {
    const users = await User.find({}).exec()
    let csv = "";
    users.forEach(user => {
        csv += `${user.name},${user.email}\r\n`
    });
    writeCsv(csv)
});