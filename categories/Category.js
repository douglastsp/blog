//Loading libraries
const Sequelize = require('sequelize');
const connection = require('../database/database');

//Creating model 
const Category = connection.define('categories', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//Update DB
/*//Category.sync({ force: true });  When the table has created we have to comment
this line for it doesn't create a table again whenever server started */

//Exporting module
module.exports = Category;