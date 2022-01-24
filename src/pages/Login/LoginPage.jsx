import React from 'react';
import {Link} from "react-router-dom";
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../configs/firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { ReactComponent as Google } from '../../assets/icons/google.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import './LoginPage.css'
import Logo from '../../assets/images/logo.png';

initializeApp(firebaseConfig);

function signInWithGoogle(){
    const provider = new GoogleAuthProvider();
    const auth = getAuth(); 
    signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user;
        console.log(user)
    }).catch((error) => {
        console.log(error.message)
    });
}

function signInWithFacebook(){
    const provider = new FacebookAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user;
        console.log(user)
    }).catch((error) => {
        console.log(error.message)
    });
}

function LoginPage() {
    return <div className='login-page'>
        <Link to='/'>
            <img src={Logo} alt="logo" className="mt-2 mb-5"/>
        </Link>
        <p>Choose the provider with which you want to login:</p>
        
        <div className='d-flex flex-column'>
            <button onClick={signInWithGoogle}>
                <Google className="mr-3"/>
                <span className='text-nowrap'>Login with Google</span>
            </button>
            <button onClick={signInWithFacebook}>
                <Facebook className="mr-3"/>
                <span className='text-nowrap'>Login with Facebook</span>
            </button>
        </div>
    </div>
}

export default LoginPage;
