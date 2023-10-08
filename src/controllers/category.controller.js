const { categoryServices } = require('../services');

const create = async (req, res) => {
  try {
    const { name } = req.body;
    await categoryServices.createCategory({ name });
    const response = await categoryServices.getByName(name);
    return res.status(201).json(response);
  } catch (e) {
    res.status(500).json({ message: e });
  }
};

const index = async (res) => {
  try {
    return res.status(200).json(await categoryServices.getAll());
  } catch (e) {
    return res.status(500).json(e);
  }
};

const show = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await categoryServices.getByCategoryId(id);
    if (!category) {
      return res.status(404).json({ message: 'Category does not exist' });
    }
    return res.status(200).json(category);
  } catch (e) {
    return res.status(500).json(e);
  }
};

module.exports = {
  create,
  index,
  show,
};