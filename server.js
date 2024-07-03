const express = require('express');
const mongoose = require('mongoose');
const jsend = require('jsend');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const User = require('./models/user.model');

const app = express();

app.use(express.json());

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

/**
 * Rota POST para criar um novo usuário.
 * @description Adiciona um novo usuário no banco de dados e retorna o usuário criado.
 * @param {newUser} Objeto JSON contendo os dados do novo usuário.
 * @returns {Object} Objeto JSON contendo o usuário recém-criado.
 * @throws {Error} Mensagem de erro caso a criação do usuário falhe.
 */
app.post('/api/v1/users', async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    res.status(201).json(jsend.success(newUser));
  } catch (error) {
    res.status(400).json(jsend.fail(error.message));
  }
});

mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => console.log('Conectado ao banco de dados com sucesso!'));

const hostname = 'localhost';
const port = 3000;
app.listen(port, hostname, () => {
  console.log(`Servidor em execução em http://${hostname}:${port}`);
});
