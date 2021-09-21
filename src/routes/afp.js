const { Router } = require('express');
const router = Router();
const AfpController = require('../controllers/AfpController');

// obtener todas las Afps
router.get('/', AfpController.getAll);
// obtener una Afp por su id
router.get('/:id', AfpController.getById);
// crear una Afp
router.post('/', AfpController.create);
// actualizar Afp
router.put('/', AfpController.update);
// eliminar el afp
router.delete('/', AfpController.deleteById);

module.exports = router;