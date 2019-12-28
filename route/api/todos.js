const express = require('express');
const router = express.Router();
const config = require('config');
const Todo = require('../../models/Todo');

router.get('/', (req, res) => {
  Todo.find((err, todos) => {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

module.exports = router;
