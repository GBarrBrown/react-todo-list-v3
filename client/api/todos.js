import request from 'superagent'

export function getTodos() {
    return request.get('/api/v1/todos/')
    .then(res => {
        return res.body
    })
}