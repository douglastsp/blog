/**
 * Controller where there are all logic from categories
 */

//Loading Libraries
const express = require('express');

//Instantiating
const router = express.Router();

//Routes
router.get('/categories', (req, res) => {
    res.send('Pagina de categorias');
});

router.get('/admin/categories/new', (req, res) => {
    res.send('Rota para criar uma nova categoria');
});

//Exporting Module
module.exports = router;