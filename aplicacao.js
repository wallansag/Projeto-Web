const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const produtoRoutes = require('./routes/produtoRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');

// Middleware para analisar o corpo das requisições como JSON
app.use(express.json());

// Servir arquivos estáticos da pasta 'views'
app.use(express.static(path.join(__dirname, 'views')));

// Rotas para produtos
app.use('/produtos', produtoRoutes);

// Rotas para usuários
app.use('/usuarios', usuarioRoutes);

// Rota para a página de cadastro de produtos
app.get('/cadastro/produto', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'cadastro_produto.html'));
});

// Rota para a página de cadastro de usuários
app.get('/cadastro/usuario', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'cadastro_usuario.html'));
});

app