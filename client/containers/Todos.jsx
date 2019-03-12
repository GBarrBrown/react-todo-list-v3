import React from 'react'

import { getTodos, toggleCompleted, addTodo, delTodo } from '../api/todos'

class Todos extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: [],
            addTodo: false,
            newTodoStr: '',
            delModeOn: false
        }
        this.updateCheckbox = this.updateCheckbox.bind(this)
        this.update = this.update.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.delTodo = this.delTodo.bind(this)
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

    onSubmit(e) {
        e.preventDefault()
        const new_todo = this.state.newTodoStr
        addTodo(new_todo).then(() => {
            getTodos()
            .then(res => this.setState(
                {todos: res,
                newTodoStr: ''})
            )
        })
    }

    delTodo(todo_id) {
        delTodo(todo_id).then(() => {
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
            <div>
                <h1>Todo List!</h1>
                <button id="add-button" onClick={() => {this.setState({addTodo: !this.state.addTodo})}}>
                    <h1 id={this.state.addTodo ? "add-text-active" : "add-text"}>+ ADD</h1>
                </button>
                <button id="del-button" onClick={() => {this.setState({delModeOn: !this.state.delModeOn})}}>
                    <h1 id={this.state.delModeOn ? "del-text-active" : "del-text"}>- DEL</h1>
                </button>
                {this.state.addTodo
                ? <div className="add-todo-container">
                    <form onSubmit={this.onSubmit}>
                        <h4 className="add-title">Todo Title:</h4>
                        <input onChange={this.update} className="add-title-input" value={this.state.newTodoStr} required/>
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
                                    {this.state.delModeOn
                                    ? <a className="del-todo" id={`todo_${todo.id}`} onClick={(e) => this.delTodo(e.target.id.substring(5))}>{todo.title}</a>
                                    : <span>{todo.title}</span>
                                    }
                                    
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