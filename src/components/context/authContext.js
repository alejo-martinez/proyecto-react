import { useState, createContext, useContext, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../../assets/firebase"

const userContext = createContext()


const useAuth = () => {
    const context = useContext(userContext)
    if (!context) throw new Error("There is no Auth provider");
    return context
}

 const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)


    const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);


    const login =  (email, password) =>  signInWithEmailAndPassword(auth, email, password);

    const logOut = () => signOut(auth);

    useEffect(()=> {
        const unsub = onAuthStateChanged(auth, (currentUser) => {
            console.log({currentUser});
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsub();
    }, [])
    return (
        <userContext.Provider value={{signUp, login, user, logOut, loading}}>
            {children}
        </userContext.Provider>
    )
}

export {AuthProvider, userContext, useAuth}