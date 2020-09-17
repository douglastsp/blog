//Loading libraries
const Sequelize = require('sequelize');
const connection = require('../database/database');
const Category = require('../categories/Category'); //Model to create a relationship

//Creating model 
const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

//Creating a relationship 1-n
Category.hasMany(Article);
//Creating a relationship 1-1
Article.belongsTo(Category);

//Update DB
/*//Article.sync({ force: true });  When the table has created we have to comment
this line for it doesn't create a table again whenever server started */

//Exporting module
module.exports = Article;