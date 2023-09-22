import { createContext, useState,useContext } from "react";
import {registerRequest} from '../../api/auth.js';

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
    return (
        <AuthContext.Provider value={{
            signUp,
            user,
            isAuthenticated,
            registerError
        }}>
            {children}
        </AuthContext.Provider >
    )
}