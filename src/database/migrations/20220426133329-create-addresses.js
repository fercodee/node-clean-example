'use strict';

module.exports = {
   async up (queryInterface, Sequelize) {
 
   await queryInterface.createTable('addresses', { 
     id:{ 
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
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      zipcode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      street: {
        type: Sequelize.STRING,
        allowNull: false
      },
      number: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('addresses');
  }
};


/**
 * Explicação dos atrr onUpdate e onDelete
 * onUpdate: 'CASCADE',
   onDelete: 'CASCADE'

   onUpdate -> Qual é a ação que você quer que seja executada ao houver uma alteração
   no campo que está sendo referenciado?
   CASCADE = Quero que replique a mesma ação
   onDelete -> Mesma coisa do onUpdate, porém na ação de deletar, o que eu quero que aconteça quando o campo referenciado for deletado?

   Obs: Não existe somente o CASCADE, mas vários outras opções, por exemplo o RESTRICT que restringe a ação...
 */