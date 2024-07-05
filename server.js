const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => console.log('Conectado ao banco de dados com sucesso!'));

const hostname = 'localhost';
const port = 3000;
app.listen(port, hostname, () => {
  console.log(`Servidor em execução em http://${hostname}:${port}`);
});
