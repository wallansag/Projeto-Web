const banco = require(`../database`)

async function getAllProdutos() {
    const [rows] = await banco.query('SELECT*FROM produtos')
        return rows;

        async function getProdutoById(id) {
            const [rows] = await banco.query('SELECT * FROM produtos WHERE id = ?', [id]);
            return rows[0];
          }       
          async function createProduto(produto) {
            const [result] = await banco.query('INSERT INTO produtos (nome, preco, estoque) VALUES (?, ?, ?)', [produto.nome, produto.preco, produto.estoque]);
            return result.insertId;
          } 
          async function updateProduto(id, produto) {
            const [result] = await banco.query('UPDATE produtos SET nome = ?, preco = ?, estoque = ? WHERE id = ?', [produto.nome, produto.preco, produto.estoque, id]);
            return result.affectedRows;
          }
          async function deleteProduto(id) {
            const [result] = await banco.query('DELETE FROM produtos WHERE id = ?', [id]);
            return result.affectedRows;
          }
    
}
module.exports = {
    getAllProdutos,
    getProdutoById,
    createProduto,
    updateProduto,
    deleteProduto
  };