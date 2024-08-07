const express = require('express');
const router = express.Router();
const Articale = require('./../models/article');
const article = require('./../models/article');

router.get('/new', (req, res) => {
    res.render('articles/new', {article: new Articale()})
})

router.get('/:id', (req,res) => {

})

router.post('/', async (req,res) => {
const article = new Articale({
   title: req.body.title,
   descriprtion: req.body.descriprtion,
   markdown: req.body.markdown
})
try{
 article = await article.save() 
 res.redirect('/articles/${article.id}')
}catch (e) {
  res.render('articles/new', {article:article})
}


})


module.exports = router