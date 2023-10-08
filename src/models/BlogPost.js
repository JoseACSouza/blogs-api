module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      primaryKey: true,
      allowNull:false,
      autoIncrement:true,
      type: DataTypes.INTEGER
    },
    title: {
      allowNull:false,
      type: DataTypes.STRING
    },
    content: {
      allowNull:false,
      type: DataTypes.STRING
    },
    userId: {
      allowNull:false,
      type: DataTypes.INTEGER
    },
    published: {
      allowNull:false,
      type: DataTypes.DATE
    },
    updated: {
      allowNull:false,
      type: DataTypes.DATE
    }},
    {
      tableName: 'blog_posts',
      timestamps: true,
      underscored: true,
      createdAt: 'published',
      updatedAt:'updated',
    });
    
    BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    }

  return BlogPost;
};
