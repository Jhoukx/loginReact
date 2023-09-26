import { createContext, useState,useContext, useEffect } from "react";
import {loginRequest, registerRequest, verifyToken} from '../../api/auth.js';
import Cookies from 'js-cookie';
export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {throw new Error("useAuth most be used with AuthProvider")};
    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [registerError, setErrors] = useState(null);
    const [loginError, setLoginError] = useState(null);

    const signUp = async(user) => {
        try {
            const res = await registerRequest(user);
            setUser(res.data);
            setIsAuthenticated(true)
        } catch (error) {
            setErrors(error.response.data.message)
        }
    }

    const signIn = async (user) => {
        try {
            const res = await loginRequest(user);
            setIsAuthenticated(true);
            setUser(res.data);
        } catch (error) {
            console.log(error);
            setLoginError(error.response.data.message);
        }
    }
    const logOut = () => {
        try {
            setIsAuthenticated(false);
            setUser(null);
        } catch (error) {
            console.log('Error logOut',error);
        }
    }
    useEffect(() => {
        async function checkLogin() {
            try {
                const cookies = Cookies.get();
                console.log('valor de cookies', cookies);
                if (cookies.token) {
                    const res = await verifyToken(cookies.token)
                    if (res.data) {
                        setIsAuthenticated(true);
                        setUser(res.data);
                    }
                    setIsAuthenticated(false);
                    setUser(null);
                }
            } catch (error) {
                console.log(error);
            }
        }
        checkLogin()
    }, []);
    return (
        <AuthContext.Provider value={{
            signUp,
            signIn,
            user,
            isAuthenticated,
            registerError,
            loginError,
            logOut
        }}>
            {children}
        </AuthContext.Provider >
    )
}