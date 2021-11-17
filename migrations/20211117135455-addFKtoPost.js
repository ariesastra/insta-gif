'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Posts','UserId',
    {
      type: Sequelize.INTEGER,
      references:{
        model :{
          tableName: 'Users'
        },
          key: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },

  down:  (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Posts','UserId',{})
  }
};
