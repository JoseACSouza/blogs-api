const tokenGenerate = require('../auth/tokenGenerate');
const { userServices } = require('../services');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password } = req.body;
    if (req.body.image) {
      await userServices
        .createUser({ displayName, email, password, image: req.body.image });
    } else {
      await userServices
        .createUser({ displayName, email, password, image: null });
    }
    const jwtConfig = {
      expiresIn: '8h',
      algorithm: 'HS256',
    };
    const token = tokenGenerate(email, jwtConfig);
    return res.status(201).json({ token });
  } catch (e) {
    res.status(500).json({ message: e });
  }
};

module.exports = {
  createUser,
};