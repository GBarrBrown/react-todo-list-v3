import request from 'superagent'

export function getTodos() {
    return request.get('/api/v1/todos')
    .then(res => res.body)
    .catch(err => {
        console.log('ERROR!', err)
    })
}
export function toggleCompleted(todo_id) {
    return request.get(`/api/v1/todos/toggle_completed/${todo_id}`)
    .then(res => res.body)
    .catch(err => {
        console.log('ERROR!', err)
    })
}