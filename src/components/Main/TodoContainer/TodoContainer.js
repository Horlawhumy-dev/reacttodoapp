import React from 'react'
import WithClass from '../../../hoc/WithClass/WithClass'
import TodoForm from './TodoForm/TodoForm'
import Wrap from '../../../hoc/Wrap/Wrap'

const TodoContainer = () => {
    return (
        <WithClass classes="Container">
            <TodoForm />
            <Wrap>
                <h3>Added Tasks</h3>
            </Wrap>
        </WithClass>
    )
}

export default TodoContainer;
