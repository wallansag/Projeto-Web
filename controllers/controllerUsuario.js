const usuarioM = require('../models/modelUsuario');

async function getAllUsuarios(req, res) {
  try {
    const usuarios = await usuarioM.getAllUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getUsuarioById(req, res) {
  const { id } = req.params;
  try {
    const usuario = await usuarioM.getUsuarioById(id);
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createUsuario(req, res) {
  const { nome, email } = req.body;

  // Validação dos dados (exemplo básico)
  if (!nome) {
    return res.status(400).json({ error: 'O nome é obrigatório.' });
  }
  if (!email) {
    return res.status(400).json({ error: 'O email é obrigatório.' });
  }

  try {
    const usuarioId = await modelUsuario.createUsuario({ nome, email });
    res.status(201).json({ id: usuarioId, message: 'Usuário criado com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateUsuario(req, res) {
  const { id } = req.params;
  const { nome, email } = req.body;

  // Validação dos dados (exemplo básico)
  if (!nome) {
    return res.status(400).json({ error: 'O nome é obrigatório.' });
  }
  if (!email) {
    return res.status(400).json({ error: 'O email é obrigatório.' });
  }

  try {
    const affectedRows = await modelUsuario.updateUsuario(id, { nome, email });
    if (affectedRows > 0) {
      res.json({ message: 'Usuário atualizado com sucesso!' });
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteUsuario(req, res) {
  const { id } = req.params;
  try {
    const affectedRows = await modelUsuario.deleteUsuario(id);
    if (affectedRows > 0) {
      res.status(204).send(); // No Content
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  deleteUsuario
};