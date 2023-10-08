module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      primaryKey: true,
      allowNull:false,
      field:'post_id',
      type: DataTypes.INTEGER
    },
    categoryId: {
      primaryKey: true,
      allowNull:false,
      field:'category_id',
      type: DataTypes.INTEGER
    }},
    {
      tableName: 'posts_categories',
      timestamps: false,
      underscored: true,
    });
    
    PostCategory.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
        as: 'BlogPosts',
        through: PostCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId',
      });
      models.Category.belongsToMany(models.BlogPost, {
        as: 'categories',
        through: PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId',
      });
    };

  return PostCategory;
};
