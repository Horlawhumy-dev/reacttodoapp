import React from 'react'
import WithClass from '../../../hoc/WithClass/WithClass'
import TodoForm from './TodoForm/TodoForm'
import Wrap from '../../../hoc/Wrap/Wrap'
import TodoListing from './TodoListing/TodoListing'


const TodoContainer = (props) => {
    return (
        <WithClass classes="Container">
            <TodoForm />
            <Wrap>
                <h3>Added Tasks</h3>
            </Wrap>
            <TodoListing>
               {props.children}
            </TodoListing>
        </WithClass>
    )
}

export default TodoContainer;
