const express = require('express');
const router = express.Router();
const Articale = require('./../models/article');
const article = require('./../models/article');

router.get('/new', (req, res) => {
    res.render('articles/new', {article: new Articale()})
})

router.get('/:id', async (req,res) => {
  const article = await Articale.findById(req.params.id)
  if (article == null) res.redirect('/')
   res.render('articles/show'), {article:article}
})

router.post('/', async (req,res) => {
let article = new Articale({
   title: req.body.title,
   descriprtion: req.body.descriprtion,
   markdown: req.body.markdown
})
try{
 article = await article.save() 
 res.redirect('/articles/${article.id}')
}catch (e) {
  console.log(e)
  res.render('articles/new', {article:article})
}


})


module.exports = router