const mysql = require('mysql')

const informacoes = mysql.createPool({
    host: 'localhost:3306',
    user: 'root',
    password: 'Genesis@614',
    database: 'projeto',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

  module.exports = informacoes.promise();


