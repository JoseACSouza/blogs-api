const { Category } = require('../models');

const getAll = async () => Category.findAll();

const getByCategoryId = async (id) => Category.findOne({
  where: {
    id,
  },
});

const getByName = async (name) => Category.findOne({
  where: {
    name,
  },
});

const createCategory = async (newCategory) => {
  await Category.create({ ...newCategory });
};

module.exports = {
  getAll,
  getByCategoryId,
  createCategory,
  getByName,
};