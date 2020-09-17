/**
 * Controller where there are all logic from categories
 */

//Loading Libraries
const express = require('express');

//Instantiating
const router = express.Router();

//Routes
router.get('/articles', (req, res) => {
    res.send('Pagina de Artigos');
});

router.get('/admin/articles/new', (req, res) => {
    res.send('Rota para criar um novo artigo');
});

//Exporting Module
module.exports = router;