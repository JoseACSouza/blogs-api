module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      primaryKey: true,
      allowNull:false,
      autoIncrement:true,
      type: DataTypes.INTEGER,
    },
    displayName: {
      allowNull:false,
      type: DataTypes.STRING,
      field:'display_name'
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    }},
    {
      timestamps: false,
      tableName: 'users',
      underscored: true,
    });
  return User;
};
