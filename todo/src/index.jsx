import React from 'react';
import { render } from 'react-dom';

const TodoCount = ({ todoCount }) => {
    if(todoCount != 0) {
        return (
            <div>
                <div>
                    <h5>You have ({ todoCount }) things to do.</h5>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

const TodoForm = ({ addTodo }) => {
    // input Tracker
    let input;
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                if(!input.value.trim()) {
                    return;
                }
                addTodo(input.value);
                input.value = '';
            }}>
                <div className="input-group">
                    <input className="form-control" placeholder="//TODO" ref={node => {
                        input = node;
                    }} />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="submit">Add</button>
                    </span>
                </div>
            </form>
        </div>
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
        <ul className="list-group" style={{marginTop:'30px'}}>{todoNode}</ul>
    );
}

const TodoWelcome = () => {
    return(
        <div>
            <div>
                <h1>What are you going to do today?</h1>
                <h3><em>Let's get started!</em></h3>
            </div>
        </div>
    );
}

const Footer = () => {
    return(
        <footer>
            <p><a href="https://github.com/kevinmccartney/react-demos/tree/master/to-       do">This project</a> was made by <a href="https://twitter.com/kevinmccartney">@kevinmccartney</a> with some     love & some begrudging acceptance that the Earth will someday be consumed by the sun.</p>
        </footer>
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
            <div className="container">
                <TodoWelcome />
                <TodoForm addTodo={this.addTodo.bind(this)}/>
                <TodoCount todoCount={this.state.data.length}/>
                <TodoList
                    todos={this.state.data}
                    remove={this.handleRemove.bind(this)}
                />
                <Footer />
            </div>
        )
    }
}

render(<TodoApp />, document.getElementById('TodoApp'));
