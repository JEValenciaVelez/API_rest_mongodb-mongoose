
const mongoose = require('mongoose');

const URI = `mongodb://127.0.0.1:27017/Employe`; //Employe es el nombre de la base de datos

mongoose.connect(URI)
.then(db => console.log('DB is connected'))
.catch(err => console.error(err))

module.exports = mongoose;