import React from 'react'

import { getTodos } from '../api/todos'

class Todos extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: []
        }
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
                                <input type="checkbox" onClick={() => console.log('mark completed')}/>
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
                                    <input type="checkbox" onClick={() => console.log('mark uncompleted')} checked/>
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