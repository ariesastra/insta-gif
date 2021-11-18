'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Profiles','gender',{type: Sequelize.INTEGER})
  },

  down:  (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Profiles','gender',{})
  }
};
