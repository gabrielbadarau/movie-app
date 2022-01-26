import React from 'react';
import {Link} from "react-router-dom";
import { ReactComponent as Google } from '../../assets/icons/google.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import './LoginPage.css'
import Logo from '../../assets/images/logo.png';
import {connect} from 'react-redux'
import {loginWithGoogle,loginWithFacebook} from '../../redux/actions/signInMethod'


function LoginPage(props) {
    return <div className='login-page'>
        <Link to='/'>
            <img src={Logo} alt="logo" className="mt-2 mb-5"/>
        </Link>
        <p>Choose the provider with which you want to login:</p>
        
        <div className='d-flex flex-column'>
            <button onClick={props.signInWithGoogle}>
                <Google className="mr-3"/>
                <span className='text-nowrap'>Login with Google</span>
            </button>
            <button onClick={props.signInWithFacebook}>
                <Facebook className="mr-3"/>
                <span className='text-nowrap'>Login with Facebook</span>
            </button>
        </div>
    </div>
}

function mapDispatchToProps(dispatch){
    return {
        signInWithGoogle: ()=> dispatch(loginWithGoogle()),
        signInWithFacebook: ()=> dispatch(loginWithFacebook())
    }
}

export default connect(null,mapDispatchToProps)(LoginPage);
