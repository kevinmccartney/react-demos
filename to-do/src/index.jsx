import React from 'react';
import { render } from 'react-dom';

const TodoCount = ({ todoCount }) => {
    return (
        <div>
            <div>
                <h5>You have ({ todoCount }) things to do.</h5>
            </div>
        </div>
    );
}

const TodoForm = ({ addTodo }) => {
    // input Tracker
    let input;
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            addTodo(input.value);
            input.value = '';
        }}>
            <input className="form-control col-md-12" ref={node => {
                input = node;
            }} />
            <br />
        </form>
    );
};

const Todo = ({todo, remove}) => {
    // the individual Todos
    return (
        <li className="list-group-item">{todo.text}<span className="badge" onClick={() => {remove(todo.id)}}>X</span></li>
    );
}

const TodoList = ({todos, remove}) => {
    const todoNode = todos.map((todo) => {
        return (<Todo todo={todo} key={todo.id} remove= {remove}/>)

    });
    return (
        <div className="list-group" style={{marginTop:'30px'}}>{todoNode}</div>
    );
}

window.id = 0;
class TodoApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    addTodo(val){
        const todo = {text: val, id: window.id++}
        this.state.data.push(todo);
        this.setState({data: this.state.data});
    }

    handleRemove(id){
        const remainder = this.state.data.filter((todo) => {
            if(todo.id !== id) return todo;
        });
        this.setState({data: remainder});
    }

    render() {
        return(
            <div>
                <TodoCount todoCount={this.state.data.length}/>
                <TodoForm addTodo={this.addTodo.bind(this)}/>
                <TodoList 
                    todos={this.state.data}
                    remove={this.handleRemove.bind(this)}
                />
            </div>
        )
    }
}

render(<TodoApp />, document.getElementById('container'));
