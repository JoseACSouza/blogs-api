const express = require('express');
const { loginController, userController } = require('./controllers');
const { userMiddleware } = require('./middlewares');
const validateJWT = require('./auth/validateJWT');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', (req, res) => loginController(req, res));

app.post( 
  '/user',
  userMiddleware.validateUser,
  userMiddleware.validateUserPassword,
  async (req, res) => userController.createUser(req, res),
);

app.get('/user', validateJWT, async (_req, res) => userController.index(res));

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
