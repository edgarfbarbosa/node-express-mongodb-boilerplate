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
app.get('/api/v1/users', async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(jsend.success(users));
  } catch (error) {
    res.status(404).json(jsend.fail(error.message));
  }
});

/**
 * Rota GET para obter um usuário específico pelo ID.
 * @description Procura um usuário no banco de dados pelo ID fornecido na URL e retorna o usuário no formato JSON.
 * @param {string} req.params.id - O ID do usuário que será buscado.
 * @returns {Object} Objeto JSON com os dados do usuário.
 * @throws {Error} Mensagem de erro caso o usuário não seja encontrado ou ocorra algum problema na busca.
 */
app.get('/api/v1/users/:id', async (req, res) => {
  try {
    console.log(typeof req.params.id);
    const user = await User.findById(req.params.id);

    res.status(200).json(jsend.success(user));
  } catch (error) {
    res.status(404).json(jsend.fail(error.message));
  }
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
