import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from './firebase.config';
import axios from 'axios';
import UseAxios from '../Hooks/UseAxios';

export const authContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const axiosUrl =UseAxios()
    const googleProvider = new GoogleAuthProvider()


    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }


    const updateUser = (name,imgUrl) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName:name, 
            photoURL:imgUrl
        })}

        
    const login = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password   )
    }

    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider )
    }

    const logOut = async() =>{
        setLoading(true) 
        await axiosUrl.get('/logOut')
        const {data} = axios.get(`${import.meta.env.VITE_API_URL}/logout`,{withCredentials:true})
        console.log(data);
        return signOut(auth)
        
    }

    useEffect(()=>{
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth,data=>{
            setUser(data)  
            const loggedUser = user?.email;
            if(data){
                 axios.post(`${import.meta.env.VITE_API_URL}/jwt`,{loggedUser},{withCredentials:true})
                // axiosUrl.post('/jwt',{loggedUser})
                .then(res=>res)
                .catch(err=>console.log(err))
            }
            setLoading(false)
        })
         return ()=>{unsubscribe()}
    },[user])



const data =  { createUser , updateUser , login , googleLogin , logOut ,user,setUser, loading,setLoading } 
return (
        <authContext.Provider value={data}>
        {children}
        </authContext.Provider>
    );
};

export default AuthProvider;