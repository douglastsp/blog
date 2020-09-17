//Loading libraries
const Sequelize = require('sequelize');

//creating a connection object
const connection = new Sequelize('blog', 'root', '092021', {
    host: 'localhost',
    dialect: 'mysql'
});

//Exporting module
module.exports = connection;