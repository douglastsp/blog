/**
 * Controller where there are all logic from articles
 */

//Loading Libraries
const express = require('express');
const Category = require('../categories/Category');
const Article = require('./Article');
const slugify = require('slugify');
//Instantiating
const router = express.Router();

//Routes
router.get('/admin/articles', (req, res) => {
    res.render('admin/articles/index');
});

router.get('/admin/articles/new', (req, res) => {
   //select to get categories
    Category.findAll().then(categories => {
        res.render('admin/articles/new', { categories: categories});
    });
});

router.post('/articles/save', (req, res) => {
    //getting data from from
    var title = req.body.title;
    var body = req.body.title;
    var category = req.body.category

    //Saving data (title, slug based on title, body and categoryId(fk)) on DB
    Article.create({
        title: title,
        slug: slugify(title),
        body: body,
        categoryId: category
    }).then(() => {
        //Redirecting user to
        res.redirect('/admin/articles')
    });
});

//Exporting Module
module.exports = router;