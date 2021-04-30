
import React from 'react'
import WithClass from '../../hoc/WithClass/WithClass'
import TodoContainer from './TodoContainer/TodoContainer'

const Main = (props) => {
    return (
        <main>
            <WithClass classes="Main">
                {props.children}
            </WithClass>
        </main>
    )
}

export default Main;
