//modelar los datos

const mongoose = require('mongoose');
const { Schema } = mongoose;

//empiezo a modelar los datos
const EmployeeSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    office : {
        type: String,
        required: true
    },
    salary : {
        type: Number,
        required: true
    }
});

//primer parametro como se guarda en la base de datos
module.exports = mongoose.model('Employee', EmployeeSchema)
