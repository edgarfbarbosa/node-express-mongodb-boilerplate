const express = require('express');
const app = express();
const jsend = require('jsend');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');

/**
 * Rota GET para obter a lista de usuários.
 * @description Retorna a lista de usuários no formato JSON.
 * @returns {Object} Objeto JSON com a lista de usuários.
 */
app.get('/api/v1/users', (req, res) => {
  res.status(200).json(
    jsend.success({
      name: 'Edgar Faria Barbosa',
      email: 'edgarfbarbosa@outlook.com'
    })
  );
});

mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => console.log('Conectado ao banco de dados com sucesso!'));

const hostname = 'localhost';
const port = 3000;
app.listen(port, hostname, () => {
  console.log(`Servidor em execução em http://${hostname}:${port}`);
});
