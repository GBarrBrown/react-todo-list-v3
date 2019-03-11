const connection = require('./connection')

module.exports = {
    getTodos,
    toggleCompleted
}

function getTodos(testDb) {
    const db = testDb || connection

    return db('todos')
}

function toggleCompleted(todo_id, testDb) {
    const db = testDb || connection

    return db('todos').where('id', todo_id).select('completed').first()
    .then(res => {
        let newState = (res.completed == 0 ? 1 : 0)
        return db('todos').where('id', todo_id).update({completed: newState})
    })
}