import React from 'react'
import WithClass from '../../hoc/WithClass/WithClass'
import Logo from '../Header/Logo/Logo'
// import Wrap from '../../hoc/Wrap/Wrap'

const Footer = () => {
    return (
        <footer>
            <WithClass classes="Footer">
                <Logo />
                <div>
                <p>Copyright &copy; </p>
                <p><span>HaroffCodes 2021.</span></p>
                </div>
            </WithClass>
        </footer>
       
    )
}


export default Footer;
