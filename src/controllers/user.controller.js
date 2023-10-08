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
      algorithm: 'HS256',
    };
    const user = userServices.getByEmail(email);
    const token = tokenGenerate(user, jwtConfig);
    return res.status(201).json({ token });
  } catch (e) {
    res.status(500).json({ message: e });
  }
};

const index = async (res) => {
  try {
    return res.status(200).json(await userServices.getAll());
  } catch (e) {
    return res.status(500).json(e);
  }
};

module.exports = {
  createUser,
  index,
};