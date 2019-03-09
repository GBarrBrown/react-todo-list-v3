const connection = require('./connection')

module.exports = {
    getTodos
}

function getTodos(testDb) {
    const db = testDb || connection

    return db('todos')
}