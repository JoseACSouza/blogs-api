const { categoryServices } = require('../services');

const validatePost = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!(title && content && categoryIds)) {
    return res.status(400)
      .json({ message: 'Some required fields are missing' });
  }
  next();
};

const validateExistingCategories = async (req, res, next) => {
  const { categoryIds } = req.body;
  let allCategories = await categoryServices.getAll();
  allCategories = allCategories.map((item) => item.id);

  if (!categoryIds.every((categoryId) => allCategories.includes(categoryId))) {
    return res.status(400)
      .json({ message: 'one or more "categoryIds" not found' });
  }
  next();
};

module.exports = {
  validatePost,
  validateExistingCategories,
};
