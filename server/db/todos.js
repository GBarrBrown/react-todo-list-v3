const connection = require('./connection')

module.exports = {
    getTodos,
    toggleCompleted,
    addTodo,
    delTodo
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

function addTodo(new_todo, testDb) {
    const db = testDb || connection

    return db('todos').insert({title: new_todo})
}

function delTodo(todo_id, testDb) {
    const db = testDb || connection

    return db('todos').where({id: todo_id}).del()
}