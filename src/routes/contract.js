const { Router } = require('express');
const router = Router();
const ContractController = require('../controllers/ContractController');

// obtener todos los Contratos
router.get('/', ContractController.getAll);
// obtener el último contrato por el id del empleado
router.get('/employeeid/:id', ContractController.lastContractByEmployeeId);
// obtener contrato por id
router.get('/id/:id', ContractController.getById);
// crear Contratos
router.post('/', ContractController.create);

module.exports = router;