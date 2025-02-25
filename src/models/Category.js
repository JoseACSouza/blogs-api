module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      primaryKey: true,
      allowNull:false,
      autoIncrement:true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull:false,
      type: DataTypes.STRING
    }},
    {
      timestamps: false,
      tableName: 'categories',
      underscored: true
    });
  return Category;
};
