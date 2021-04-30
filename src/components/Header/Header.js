import React from 'react'
import WithClass from '../../hoc/WithClass/WithClass'
import Logo from './Logo/Logo'
import Toolbar from './Toolbar/Toolbar'

const Header = () => {
    return (
       <WithClass classes="header">
            <Logo />
       </WithClass>
    )
}


export default Header;

