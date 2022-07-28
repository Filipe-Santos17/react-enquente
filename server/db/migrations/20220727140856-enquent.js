'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable("enquentes",{
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      titulo:{
        type: Sequelize.STRING,
        allowNull: false
      },
      op_one:{ 
        type: Sequelize.STRING,
        allowNull: false,
      },
      op_two:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      op_three:{ 
        type: Sequelize.STRING,
        allowNull: false,
      },
      op_four:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      start_date:{
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      finish_date:{
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      created_At:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_At:{
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },
  async down (queryInterface, Sequelize) {
  }
};
