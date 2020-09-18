/**
 * Controller where there are all logic from categories
 */

//Loading Libraries
const express = require('express');
const Category = require('./Category'); //to use on save route
const slugify = require('slugify'); //transform string to slug

//Instantiating
const router = express.Router();

//Routes
router.get('/admin/categories/new', (req, res) => {
    res.render('admin/categories/new');
});

//Route to get info and save on DB
router.post('/categories/save', (req, res) => {
    var title = req.body.title; //Getting info from form

    //Verifying if there is a valid info
    if (title != undefined) {
        //Everything is alright
        //add info on DB
        Category.create({
            title: title,
            slug: slugify(title)
        }).then(() => {
            res.redirect('/admin/categories');
        });


    } else {
        res.redirect('/admin/categories/new');
    }
});

//Route to show categories 
router.get('/admin/categories', (req, res) => {
    //select info from DB
    Category.findAll().then(categories => {
        res.render('admin/categories/index', { categories: categories });
    });
});

//Route to delete info from DB
router.post('/categories/delete', (req, res) => {
    //getting info ID to delete
    var id = req.body.id;
    //checking if ID is valid
    if (id != undefined) {
        //checkin if ID is a number
        if (!isNaN(id)){
            //Deleting category from DB
            Category.destroy({
                where: {
                    id: id
                }
            }).then(() =>{
                //Everything alright
                //redirecting user
                res.redirect('/admin/categories');
            });
        } else {
            res.redirect('/admin/categories');
        } 
    } else {
        res.redirect('/admin/categories');
    }
});

//Route to Edit category from DB
router.get('/admin/categories/edit/:id', (req, res) => {
    //Getting id from params
    var id = req.params.id;
    //Checking if id is a number
    if (isNaN(id)) {
        //Redirecting User
        res.redirect('/admin/categories');
    }
    //Select the category by ID
    Category.findByPk(id).then(category => {
        //checking if category is null
        if (category != undefined) {
            //Everything is alright
            res.render('admin/categories/edit', {
                category: category 
            });
        } else {
            //Redirecting User
            res.redirect('/admin/categories');
        }
    }).catch( erro => {
        //Redirecting User
        res.redirect('/admin/categories');
    });
});

//Route to update category on DB
router.post('/categories/update', (req, res) => {
    //Getting infos from form
    var id = req.body.id;
    var title = req.body.title;

    //Updating category on DB
    Category.update({ 
        title: title,
        slug: slugify(title) 
    }, {
        where: {
            id: id
        }
    }).then(() => {
        //Redirecting user
        res.redirect('/admin/categories');
    })
});

//Exporting Module
module.exports = router;