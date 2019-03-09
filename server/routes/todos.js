const express = require('express')
const router = express.Router()
const { getTodos } = require('../db/todos')

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

// POST /api/v1/todos
router.post('/', (req, res) => {

})

module.exports = router