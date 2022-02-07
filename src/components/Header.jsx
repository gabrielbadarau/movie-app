import React,{useEffect} from 'react'
import './Header.css'
import {Link} from "react-router-dom";
import Logo from '../assets/images/logo.png';
import { connect } from 'react-redux';
import { ReactComponent as Logout } from '../assets/icons/logout.svg';
import {logout} from '../redux/actions/signInMethod';
import {addFavoriteList,addWatchList} from '../redux/actions/list'
import {writeUsers,checkUser} from '../apis/firebase'

function Header(props){
    useEffect(() => {
        checkUser(props.userEmail)
        .then((value)=>{
            if(value.exists()){
                // if user exists, populate watchList and favoriteList from firestore
               props.addWatchList(value.data().watchList);
               props.addFavoriteList(value.data().favoriteList);
            }
            else if(props.userEmail!==undefined){
                // if user doesn't exist, create user
                let docData={
                    watchList: [],
                    favoriteList:[]
                }
                props.addWatchList([]);
                props.addFavoriteList([]);
                writeUsers(props.userEmail,docData)
            }
            else{
                props.addWatchList([]);
                props.addFavoriteList([]);
            }
        })
        .catch((error)=>{
            console.log("You got the error ",error)
        })
    });

    return(
        <header className='border-bottom header-height container-fluid d-flex justify-content-between align-items-center text-center'>
            <div className=''>
                <Link to='/'>
                    <img src={Logo} alt="logo"/>
                </Link>
            </div>
            <div className='d-flex flex-row flex-nowrap align-items-center'>
                <div className='m-3'>
                    <Link className='header-text' to='/my-watch-list'>
                        Watch List
                    </Link>
                </div>
                <div className='m-3'>
                    <Link className='header-text' to='/my-favorite-list'>
                        Favorite List
                    </Link>
                </div>
                <div className='m-3'>
                    {props.user ?
                        <div className='d-flex flex-row align-items-center'>
                            <p style={{cursor:'default'}} className='mt-3 login-name header-text '>{props.user}</p>
                            <Logout 
                                className='logoutIcon'
                                onClick={()=>props.logout()}
                            />
                        </div>
                        : <Link className='header-text' to="/login">Login</Link>
                    }
                </div>
            </div>
        </header>
    )

}

function mapStateToProps(state){
    return {
        userEmail:state.signInMethod.user.email,
        user:state.signInMethod.user.displayName,
    }
}

function mapDispatchToProps(dispatch){
    return {
        logout: ()=>dispatch(logout()),
        addWatchList: (list)=>dispatch(addWatchList(list)),
        addFavoriteList: (list)=>dispatch(addFavoriteList(list))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)