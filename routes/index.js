var express = require('express');
var router = express.Router();
var todos = require('../data/todos');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'hello', todos },);
});

/* POST todos */
router.post('/todos', function(req, res, next) {
  todos.push({todos: req.body.todo})
  console.log(todos)
  res.redirect('/')
})

module.exports = router;
