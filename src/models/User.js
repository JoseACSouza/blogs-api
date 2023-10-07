module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: sequelize.INTEGER
    },
    displayName: {
      allowNull:false,
      type: sequelize.STRING,
      field:'display_name'
    },
    email: {
      type: sequelize.STRING,
      unique: true
    },
    password: {
      allowNull: false,
      type: sequelize.STRING
    },
    image: {
      type: sequelize.STRING
    }},
    {
      timestamps: false,
      tableName: 'users',
      underscored: true,
    });

  return User;
};
