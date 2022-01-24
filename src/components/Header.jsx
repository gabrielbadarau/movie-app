import React from 'react'
import './Header.css'
import {Link} from "react-router-dom";

function Header(props){

    return(
        <header className='border-bottom'>
            <div className='header-height container-fluid container-min-max-width d-flex justify-content-between align-items-center'>
                <Link to="/login">Login</Link>
            </div>
        </header>
    )

}

export default Header