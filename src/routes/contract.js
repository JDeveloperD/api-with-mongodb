const { Router } = require('express');
const router = Router();
const ContractController = require('../controllers/ContractController');

// obtener todos los Contratos
router.get('/', ContractController.getAll);
// crear Contratos
router.post('/', ContractController.create);

module.exports = router;