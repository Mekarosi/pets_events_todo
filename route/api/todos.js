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

router.post('/add', async (req, res) => {
  try {
    let todo = new Todo(req.body);
    await todo.save().then(todo => {
      res.status(200).json({ todo: 'todo added successfully' });
    });
  } catch (err) {
    console.error(err.message);
    res.status(400).send('adding new todo failed');
  }
});

module.exports = router;
