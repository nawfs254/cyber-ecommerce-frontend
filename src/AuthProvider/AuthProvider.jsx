import { createContext, useEffect, useState } from "react"
import { app } from "../../Firebase/firebase"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const signin = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const signout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return(() => {
            return unsubscribe
        })
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signin,
        signout

    }

    return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider