const express = require('express');
const { loginController,
  userController,
  categoryController,
  postController } = require('./controllers');
const { userMiddleware,
  categoryMiddleware,
  postMiddleware } = require('./middlewares');
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
  async (req, res) => userController.create(req, res),
);

app.get('/user', validateJWT, async (_req, res) => userController.index(res));
app.get('/user/:id', validateJWT, async (req, res) => userController.show(req, res));

app.post(
  '/categories',
  validateJWT,
  categoryMiddleware.validateCategory, 
  async (req, res) => categoryController.create(req, res),
);
app.get('/categories', validateJWT, async (_req, res) => categoryController.index(res));

app.post(
  '/post',
  validateJWT,
  postMiddleware.validatePost,
  postMiddleware.validateExistingCategories,
  async (req, res) => postController.create(req, res),
);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
