const { Router } = require('express');
const router = Router();
const EmployeeController = require('../controllers/EmployeeController');

// obtener todos los Empleados
router.get('/', EmployeeController.getAll);
// obtener todos los Empleados
router.get('/dni/:dni', EmployeeController.getByDni);
// obtener todos los Empleados
router.get('/id/:id', EmployeeController.getById);
// crear un Empleado
router.post('/', EmployeeController.create);

module.exports = router;