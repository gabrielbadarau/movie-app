import React from 'react'
import './Header.css'
import {Link} from "react-router-dom";
import Logo from '../assets/images/logo.png';
import { connect } from 'react-redux';
import { ReactComponent as Logout } from '../assets/icons/logout.svg';
import {logout} from '../redux/actions/signInMethod';

function Header(props){

    return(
        <header className='border-bottom header-height container-fluid d-flex justify-content-around align-items-center text-center'>
            {/* <div className='header-height container-fluid container-min-max-width d-flex justify-content-between align-items-center text-center'> */}
                <div className=''>
                    <Link to='/'>
                        <img src={Logo} alt="logo" className=""/>
                    </Link>
                </div>
                <div className=''>
                    <Link className='header-text' to='/my-watch-list'>
                        Watch List
                    </Link>
                </div>
                <div className=''>
                    <Link className='header-text' to='/my-favorite-list'>
                        Favorite List
                    </Link>
                </div>
                {props.user ?
                    <div className='d-flex flex-row align-items-center'>
                        <p style={{cursor:'default'}} className='login-name header-text mt-2'>{props.user}</p>
                        <Logout 
                            className='logoutIcon'
                            onClick={()=>props.logout()}
                        />
                    </div>
                    : <Link className='header-text' to="/login">Login</Link>
                }
            {/* </div> */}
        </header>
    )

}

function mapStateToProps(state){
    return {
        user:state.signInMethod.user.displayName
    }
}

function mapDispatchToProps(dispatch){
    return {
        logout: ()=>dispatch(logout())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)