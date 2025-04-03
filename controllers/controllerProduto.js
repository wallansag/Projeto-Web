const modelProduto = require('../models/modelProduto');

async function getAllProdutos(req, res) {
  try {
    const produtos = await modelProduto.getAllProdutos();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getProdutoById(req, res) {
  const { id } = req.params;
  try {
    const produto = await modelProduto.getProdutoById(id);
    if (produto) {
      res.json(produto);
    } else {
      res.status(404).json({ message: 'Produto não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createProduto(req, res) {
  const { nome, preco, estoque } = req.body;

 
  if (!nome || nome.length < 3) {
    return res.status(400).json({ error: 'O nome do produto deve ter no mínimo 3 caracteres.' });
  }
  if (!preco || preco <= 0) {
    return res.status(400).json({ error: 'O preço deve ser um valor positivo.' });
  }
  if (!estoque || !Number.isInteger(estoque) || estoque < 0) {
    return res.status(400).json({ error: 'O estoque deve ser um número inteiro maior ou igual a zero.' });
  }

  try {
    const produtoId = await modelProduto.createProduto({ nome, preco, estoque });
    res.status(201).json({ id: produtoId, message: 'Produto criado com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateProduto(req, res) {
  const { id } = req.params;
  const { nome, preco, estoque } = req.body;

  
  if (!nome || nome.length < 3) {
    return res.status(400).json({ error: 'O nome do produto deve ter no mínimo 3 caracteres.' });
  }
  if (!preco || preco <= 0) {
    return res.status(400).json({ error: 'O preço deve ser um valor positivo.' });
  }
  if (!estoque || !Number.isInteger(estoque) || estoque < 0) {
    return res.status(400).json({ error: 'O estoque deve ser um número inteiro maior ou igual a zero.' });
  }

  try {
    const affectedRows = await modelProduto.updateProduto(id, { nome, preco, estoque });
    if (affectedRows > 0) {
      res.json({ message: 'Produto atualizado com sucesso!' });
    } else {
      res.status(404).json({ message: 'Produto não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteProduto(req, res) {
  const { id } = req.params;
  try {
    const affectedRows = await modelProduto.deleteProduto(id);
    if (affectedRows > 0) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Produto não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllProdutos,
  getProdutoById,
  createProduto,
  updateProduto,
  deleteProduto
};