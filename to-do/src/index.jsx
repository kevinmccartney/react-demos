import React from 'react';
import { render } from 'react-dom';

const Title = ({ todoCount }) => {
    return (
        <div>
            <div>
                <h1>to-do ({ todoCount })</h1>
            </div>
        </div>
    );
}

class TodoApp extends React.Component{
    render() {
        return(
            <div>
                <Title todoCount="1"/>
            </div>
        )
    }
}

render(<TodoApp />, document.getElementById('container'));
