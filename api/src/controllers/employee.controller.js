//requiero el modelo employe de la base de datos para consultas
const Employe = require('../models/employee');
const axios = require('axios');

const employectrl = {};

employectrl.getEmployes = async  (req, res)=>{
   try{
    //en la coleccion de empleados busca todos los datos
    const employes = await Employe.find();
    res.json(employes);
   }catch(err){
    res.status(400).json({error: err.message});
   }
};

employectrl.createEmploye = async (req, res) => {
    console.log(req.body);
    try{
        const employe = new Employe(req.body);
        await employe.save();
        res.json({
            'status':'Employed saved'
        });
    }catch(error){
        res.status(400).json({error : error.message});
    }
    
};

employectrl.getEmployeById = async () =>{};

employectrl.updateEmploye = async () =>{};

employectrl.deleteEmploye = async () =>{};


module.exports = employectrl;