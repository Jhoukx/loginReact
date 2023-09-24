import { createContext, useState,useContext } from "react";
import {loginRequest, registerRequest} from '../../api/auth.js';

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
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true)
        } catch (error) {
            setErrors(error.response.data.message)
        }
    }

    const signIn = async (user) => {
        try {
            const res = await loginRequest(user);
            console.log(res.data);
        } catch (error) {
            setLoginError(error.response.data.message);
        }
    }
    return (
        <AuthContext.Provider value={{
            signUp,
            signIn,
            user,
            isAuthenticated,
            registerError,
            loginError
        }}>
            {children}
        </AuthContext.Provider >
    )
}