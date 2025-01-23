const { Sequelize } = require('sequelize');
const config = require('../config/config');
const { PostCategory, BlogPost } = require('../models');

const env = process.env.NODE_ENV;
const sequelize = new Sequelize(config[env]);

const create = async (title, content, userId, categoryIds) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const blogPost = await BlogPost.create({ title, content, userId }, { transaction: t });
      const postId = blogPost.id;

      const promises = categoryIds.map(async (categoryId) => {
        await PostCategory.create({ postId, categoryId }, { transaction: t });
      });

      await Promise.all(promises);

      return blogPost;
    });

    return result;
  } catch (e) {
    return e.message;
  }
};

module.exports = {
  create,
};