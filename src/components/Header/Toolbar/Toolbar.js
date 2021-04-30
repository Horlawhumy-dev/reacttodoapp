import React from 'react'
import WithClass from '../../../hoc/WithClass/WithClass'


const Toolbar = () => {
    return (
       <WithClass classes="Toolbar">
            <ul>
                <li>Link1</li>
                <li>Link2</li>
                <li>Link3</li>
            </ul>
       </WithClass>
    )
}

export default Toolbar;