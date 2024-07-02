const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const usuarioRoutes = require('./routes/usuarioRoutes');
const dramaRoutes = require('./routes/dramaRoutes');
const comentarioRoutes = require('./routes/comentarioRoutes');
const swaggerDocs = require('./swagger');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/usuario', usuarioRoutes);
app.use('/api', comentarioRoutes);
app.use('/api', dramaRoutes);


swaggerDocs(app);

sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Servidor: 3001');
    console.log('Documentacao: http://localhost:3001/docs')
  });
}).catch((error) => {
  console.log('Falha na BD:', error);
});
