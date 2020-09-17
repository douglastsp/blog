//Loading libraries
const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./database/database');
//Controlers
const categoriesController = require('./categories/CategoriesController');
const articlesController = require('./articles/ArticlesController');
//Models
const Article = require('./articles/Article');
const Category = require('./categories/Category');

//Instantiating
const app = express();

//View Engine
app.set('view engine', 'ejs');

//Loading static files
app.use(express.static('public'));

//Setting Body-Parser to use forms
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //To work with JSON

//Connecting to database
connection
    .authenticate()
    .then(() => {
        console.log('DB Connection was successfuly!');
    }).catch((error) => {
        console.log(error);
});

//Using routes from Controllers
app.use('/', categoriesController);
app.use('/', articlesController);

//routes
app.get('/', (req, res) => {
    //Rendering views 
    res.render('index'); 
});

//Creating server
app.listen(3000, () => {
    console.log('Server is running...');
});