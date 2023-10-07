const { User } = require('../models');

const getAll = async () => User.findAll();
const getByEmail = async (email) => User.findOne({
  where: {
    email,
  },
});

module.exports = {
  getAll,
  getByEmail,
};