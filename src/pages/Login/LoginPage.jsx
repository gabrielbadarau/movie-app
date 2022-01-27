import React,{useEffect,useRef} from 'react';
import {Link,useNavigate} from "react-router-dom";
import { ReactComponent as Google } from '../../assets/icons/google.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import './LoginPage.css'
// import Logo from '../../assets/images/logo.png';
import {connect} from 'react-redux'
import {loginWithGoogle,loginWithFacebook} from '../../redux/actions/signInMethod'


function LoginPage(props) {

    const navigate = useNavigate();
    const isInitialMount = useRef(true);
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            // it executes only when the component is updated, it is not executed the first time!
            navigate('/');
        }
    });

    return <div className='login-page'>
        {/* <Link to='/'>
            <img src={Logo} alt="logo" className="mt-2 mb-5"/>
        </Link> */}
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

function mapStateToProps(state){
    return {
        user:state.user.displayName,
        email:state.user.email
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);
