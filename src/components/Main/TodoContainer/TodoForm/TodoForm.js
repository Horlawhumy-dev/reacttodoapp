import React from 'react'
import WithClass from '../../../../hoc/WithClass/WithClass'
const TodoForm = () => {
    return (
        <form>
            <WithClass classes="TodoForm">
                <input type="text" placeholder="Add Task..."/>
                <button type="submit">Submit</button>
            </WithClass>
        </form>
    )
}

export default TodoForm;