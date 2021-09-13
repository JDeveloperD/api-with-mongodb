const { Router } = require('express');
const router = Router();
const EmployeeController = require('../controllers/EmployeeController');

// obtener todos los Empleados
router.get('/', EmployeeController.getAll);
// crear un Empleado
router.post('/', EmployeeController.create);

module.exports = router;