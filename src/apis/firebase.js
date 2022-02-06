import { initializeApp } from 'firebase/app';
import firebaseConfig from '../configs/firebase';

import {getFirestore,setDoc,doc, getDoc} from 'firebase/firestore'
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, signOut } from "firebase/auth";

initializeApp(firebaseConfig);

export const signInWithGoogle=function(){
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    return signInWithPopup(auth, provider)
}

export const signInWithFacebook=function(){
    const provider = new FacebookAuthProvider();
    const auth = getAuth();
    return signInWithPopup(auth, provider)
}

export const signOutFunction=function(){
    const auth = getAuth();
    return signOut(auth)
}

const firestore=getFirestore();

export function writeUsers(userEmail,userData){
    const users=doc(firestore,`Users/${userEmail}`);
    const docData=userData;
    setDoc(users,docData,{merge:true})
    .then(()=>{
        console.log("Succesfuly written to the database!")
    })
    .catch((error)=>{
        console.log("You got the error ",error)
    })
  
};

export const checkUser = function(userEmail){
    const user=doc(firestore,`Users/${userEmail}`)
    return getDoc(user);
}

