'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("newsletter-assignments",{
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
          },
        signerId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: "users", key: "id"},
          onUpdate: "CASCADE",
          onDelete: "CASCADE"
        },
        signerSince: {
            type: Sequelize.DATE,
            allowNull: false
        }
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("newsletter-assignments");
  }
};
