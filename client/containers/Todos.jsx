import React from 'react'

import { getTodos, toggleCompleted} from '../api/todos'

class Todos extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: [],
            addTodo: false,
            newTodoStr: ''
        }
        this.updateCheckbox = this.updateCheckbox.bind(this)
        this.update = this.update.bind(this)
    }

    updateCheckbox(e, todo_id) {
        e.preventDefault()
        toggleCompleted(todo_id).then(() => {
            getTodos()
            .then(res => this.setState({todos: res}))
        })
    }

    update(e) {
        this.setState({newTodoStr: e.target.value})
    }
    
    componentDidMount(){
        getTodos()
        .then(res => this.setState({todos: res}))
    }

    render() {
        return (
            <div>
                <h1>Todo List!</h1>
                <button id="add-button" onClick={() => {this.setState({addTodo: !this.state.addTodo})}}><h1 id="add-text">+ ADD</h1></button>
                {this.state.addTodo
                ? <div className="add-todo-container">
                    <form onSubmit={(event) => event.preventDefault()}>
                        <h4 className="add-title">Todo Title:</h4>
                        <input onChange={this.update} className="add-title-input" required/>
                        <input type="submit" />
                    </form>
                </div>
                : null
                }
                
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
            </div>
        )
    }
}

export default Todos