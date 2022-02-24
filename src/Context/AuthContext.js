import React, { useContext, useEffect, useState } from "react";
import {auth} from '../firebase';
import {onAuthStateChanged, createUserWithEmailAndPassword} from 'firebase/auth'

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}


const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();

    function signup(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            console.log(res.user)
        })
        .catch(err => console.log(err.message))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth ,user => {
            setCurrentUser(user)
        })

        return unsubscribe
    }, []);

    const value = {
        currentUser,
        signup
    }


    return ( 
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
     );
}
 
export default AuthProvider;