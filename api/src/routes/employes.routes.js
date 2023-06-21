
const { Router } = require('express');
const employe = require('../controllers/employee.controller')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', employe.getEmployes);
router.post('/', employe.createEmploye);
router.get('/:id', employe.getEmployeById);
router.put('/:id', employe.updateEmploye);
router.delete('/:id', employe.deleteEmploye)


module.exports = router;