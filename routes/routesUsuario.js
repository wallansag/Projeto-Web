const express = require('express');
const router = express.Router();
const controllerUsuario = require('../controllers/controllerUsuario');

router.get('/', controllerUsuario.getAllUsuarios);
router.get('/:id', controllerUsuario.getUsuarioById);
router.post('/', controllerUsuario.createUsuario);
router.put('/:id', controllerUsuario.updateUsuario);
router.delete('/:id', controllerUsuario.deleteUsuario);

module.exports = router;