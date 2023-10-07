'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('users', {
       id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      displayName: {
        allowNull:false,
        type: Sequelize.STRING,
        field:'display_name'
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      image: {
        allowNull:true,
        type: Sequelize.STRING
      },
      
       });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.dropTable('users');
  }
};
