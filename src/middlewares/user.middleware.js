const { userServices } = require('../services');

const validEmail = (email) => /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
const validateUser = (req, res, next) => {
  const { displayName } = req.body;
  if (!displayName || displayName.length < 8) {
    return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  } if (!req.body.email || !validEmail(req.body.email)) {
    return res.status(400)
      .json({ message: '"email" must be a valid email' });
  }
  next();
};

const validateUserPassword = async (req, res, next) => {
  const { password } = req.body;
  const { email } = req.body;
  if (!password || password.length < 6) {
    return res.status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
  } if (await userServices.getByEmail(email)) {
    return res.status(409)
      .json({ message: 'User already registered' });
  }
  next();
};

const validateExistUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userServices.getByUserId(id);
    if (!user) {
      return res.sendStatus(404);
    }
  } catch (e) {
    return res.status(500).json(e);
  }
};

module.exports = {
  validateUser,
  validateUserPassword,
  validateExistUser,
};