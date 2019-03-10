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
            <div>list</div>
        )
    }
}

export default Todos