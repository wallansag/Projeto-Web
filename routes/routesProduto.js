const express = require('express');
const router = express.Router();
const controllerProduto = require('../controllers/controllerProduto');

router.get('/', controllerProduto.getAllProdutos);
router.get('/:id', controllerProduto.getProdutoById);
router.post('/', controllerProduto.createProduto);
router.put('/:id', controllerProduto.updateProduto);
router.delete('/:id', controllerProduto.deleteProduto);

module.exports = router;