const express = require('express')
const router = express.Router()
const { getTodos, toggleCompleted, addTodo } = require('../db/todos')

// GET /api/v1/todos
router.get('/', (req, res) => {
    getTodos()
    .then((todos) => {
        res.json(todos)
    })
    .catch((err) => {
        console.log('ERROR!', err)
        res.status(500).json({error: 'Something went wrong'})
    })
})

// GET /api/v1/todos/toggle_completed/:todo_id
router.get('/toggle_completed/:todo_id', (req, res) => {
    let todo_id = req.params.todo_id
    toggleCompleted(todo_id)
    .then((response) => {
        res.json(response)
    })
    .catch((err) => {
        console.log('ERROR!', err)
        res.status(500).json({error: 'Something went wrong'})
    })
})

// GET /api/v1/todos/add_todo/:new_todo
router.get('/add_todo/:new_todo', (req, res) => {
    let new_todo = req.params.new_todo
    addTodo(new_todo)
    .then((response) => {
        res.json(response)
    })
    .catch((err) => {
        console.log('ERROR!', err)
        res.status(500).json({error: 'Something went wrong'})
    })
})

// POST /api/v1/todos
router.post('/', (req, res) => {

})

module.exports = router