import React from 'react'
import WithClass from '../../../../hoc/WithClass/WithClass'

const Todo = (props) => {
    return (
        <WithClass classes="Todo">
            <p>{props.todo.title}</p>
            <button onClick={props.removed}><i className="fa fa-times"></i></button>
        </WithClass>
    )
}

export default Todo;
