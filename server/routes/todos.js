const express = require('express')
const router = express.Router()

// GET /api/v1/todos
router.get('/', (req, res) => {
    res.json([
        {
            id: 1,
            task: "task 1",
            completed: false
        }
    ])

})

// POST /api/v1/todos
router.post('/', (req, res) => {

})

module.exports = router