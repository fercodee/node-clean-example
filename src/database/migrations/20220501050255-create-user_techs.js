'use strict';
// ! parei em 1:11:05. Obs: verificar se os campos estão certos!
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('users_techs', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
      },
      tech_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'techs',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
     return queryInterface.dropTable('users_techs');
  }
};
