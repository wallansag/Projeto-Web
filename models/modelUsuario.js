const banco = require('../banco.js');

async function getAllUsuarios() {
  const [rows] = await banco.query('SELECT * FROM usuarios');
  return rows;
}

async function getUsuarioById(id) {
  const [rows] = await banco.query('SELECT * FROM usuarios WHERE id = ?', [id]);
  return rows[0];
}

async function createUsuario(usuario) {
  const [result] = await banco.query('INSERT INTO usuarios (nome, email) VALUES (?, ?)', [usuario.nome, usuario.email]);
  return result.insertId;
}

async function updateUsuario(id, usuario) {
  const [result] = await banco.query('UPDATE usuarios SET nome = ?, email = ? WHERE id = ?', [usuario.nome, usuario.email, id]);
  return result.affectedRows;
}

async function deleteUsuario(id) {
  const [result] = await banco.query('DELETE FROM usuarios WHERE id = ?', [id]);
  return result.affectedRows;
}

module.exports = {
  getAllUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  deleteUsuario
};