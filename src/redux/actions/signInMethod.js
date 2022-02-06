
import {signInWithGoogle,signInWithFacebook,signOutFunction} from '../../apis/firebase';

function startLoading(){
    return{
        type:'UPDATE_LOADING'
    }
}

function updateUserName(payload){
    return{
        type:'UPDATE_USER_NAME',
        payload
    }
}

function updateError(payload){
    return{
        type:'UPDATE_ERROR',
        payload
    }
}

export function loginWithGoogle(){ 
    return dispatch=>{
        dispatch(startLoading());
        signInWithGoogle()
        .then((result) => {
            dispatch(updateUserName(result.user));
        }).catch((error) => {
            dispatch(updateError(error.message))
        });
    }
}

export function loginWithFacebook(){
    return (dispatch)=>{
        dispatch(startLoading());
        signInWithFacebook()
        .then((result) => {
            dispatch(updateUserName(result.user));
        }).catch((error) => {
            dispatch(updateError(error.message))
        });
    }
}

export function logout(){
    return (dispatch)=>{
        signOutFunction().then(() => {
            dispatch(updateUserName(""));
          }).catch((error) => {
            dispatch(updateError(error.message))
          });          
    }
}