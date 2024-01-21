import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { authServiceFactory } from "../services/authService";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useLocalStorage('auth', {});
    const [serverError, setServerError] = useState(null);

    const authService = authServiceFactory();

    const onRegisterSubmit = async (data) => {
        try {
            const result = await authService.register(data);
            setAuth(result);
            setServerError(null);
            navigate('/');
        } catch (err) {
            setServerError(err.message);
        }
    };

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);
            setAuth(result);
            setServerError(null);
            navigate('/');
        } catch (err) {
            setServerError(err.message);
        }
    };

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        serverError,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
    };

    return <AuthContext.Provider value={contextValues}>
        {children}
    </AuthContext.Provider>;
};

export const useAuthContext = () => {
    return useContext(AuthContext);
};