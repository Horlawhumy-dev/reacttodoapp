
import React from 'react'
import WithClass from '../../hoc/WithClass/WithClass'
import TodoContainer from './TodoContainer/TodoContainer'

const Main = () => {
    return (
        <main>
            <WithClass classes="Main">
                <TodoContainer />
            </WithClass>
        </main>
    )
}

export default Main;
