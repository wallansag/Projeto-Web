const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const produtoRoutes = require('./routes/produtoRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');


app.use(express.json());


app.use(express.static(path.join(__dirname, 'views')));


app.use('/produtos', produtoRoutes);


app.use('/usuarios', usuarioRoutes);


app.get('/produto', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'produto.html'));
});


app.get('/usuario', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'usuario.html'));
});

app