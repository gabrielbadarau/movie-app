import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../configs/firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
initializeApp(firebaseConfig);

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
        const provider = new GoogleAuthProvider();
        const auth = getAuth(); 
        dispatch(startLoading());
        signInWithPopup(auth, provider)
        .then((result) => {
            dispatch(updateUserName(result.user.displayName));
        }).catch((error) => {
            dispatch(updateError(error.message))
        });
    }
}

export function loginWithFacebook(){
    return (dispatch)=>{
        const provider = new FacebookAuthProvider();
        const auth = getAuth();
        dispatch(startLoading());
        signInWithPopup(auth, provider)
        .then((result) => {
            dispatch(updateUserName(result.user.displayName));
        }).catch((error) => {
            dispatch(updateError(error.message))
        });
    }
}
