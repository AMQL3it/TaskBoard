const Sequelize = require('sequelize');

const sequelize = new Sequelize("taskboard", "root", "12345", {
    host: "localhost",
    dialect: "mysql",
    logging: false,
  });

module.exports = sequelize;