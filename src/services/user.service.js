const { User } = require('../models');

const getAll = async () => User.findAll();

const getByEmail = async (email) => User.findOne({
  where: {
    email,
  },
});

const getByUserId = async (id) => User.findOne({
  where: {
    id,
  },
});

const createUser = async (newUser) => {
  await User.create({ ...newUser });
};

module.exports = {
  getAll,
  getByEmail,
  getByUserId,
  createUser,
};