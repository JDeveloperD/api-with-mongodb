const { Router } = require('express');
const router = Router();
const AfpController = require('../controllers/AfpController');

// obtener todas las Afps
router.get('/', AfpController.getAll);
// crear una Afp
router.post('/', AfpController.create);

module.exports = router;