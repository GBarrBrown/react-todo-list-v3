import React from 'react'

import { getTodos, toggleCompleted} from '../api/todos'

class Todos extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: []
        }
        this.updateCheckbox = this.updateCheckbox.bind(this)
    }

    updateCheckbox(e, todo_id) {
        e.preventDefault()
        toggleCompleted(todo_id).then(() => {
            getTodos()
            .then(res => this.setState({todos: res}))
        })
    }
    
    componentDidMount(){
        getTodos()
        .then(res => this.setState({todos: res}))
    }

    render() {
        return (
            <div className="todo-container">
                <div className="uncompleted">
                    <h3>uncompleted</h3>
                    {this.state.todos.map((todo) => {
                        return (todo.completed == false
                            ? <div >
                                <input type="checkbox" onClick={(e,) => this.updateCheckbox(e, todo.id)}/>
                                <span>{todo.title}</span>
                            </div>
                            : null)
                    })}
                </div>
                <div className="completed">
                    <h3>completed</h3>
                    {this.state.todos.map((todo) => {
                            return (todo.completed == true
                                ? <div>
                                    <input type="checkbox" onClick={(e) => this.updateCheckbox(e, todo.id)} checked/>
                                    <span>{todo.title}</span>
                                </div>
                                : null)
                        })}
                </div>
            </div>
        )
    }
}

export default Todos