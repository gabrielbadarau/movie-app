import React from 'react'
import './Header.css'
import {Link} from "react-router-dom";
import Logo from '../assets/images/logo.png';

function Header(props){

    return(
        <header className='border-bottom'>
            <div className='header-height container-fluid container-min-max-width d-flex justify-content-between align-items-center'>
                <Link to='/'>
                    <img src={Logo} alt="logo" className=""/>
                </Link>
                <Link className='header-text' to="/login">Login</Link>
            </div>
        </header>
    )

}

export default Header