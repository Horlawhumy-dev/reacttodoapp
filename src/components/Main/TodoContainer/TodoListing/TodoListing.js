import React from 'react'
import WithClass from '../../../../hoc/WithClass/WithClass'


const TodoListing = (props) => {
    return (
        <WithClass classes="TodoListing">
            {props.children}
        </WithClass>
    )
}

export default TodoListing;
