import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { authServiceFactory } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});

    const authService = authServiceFactory();

    const onRegisterSubmit = async (data) => {
        try {
            const result = await authService.register(data);
            setAuth(result);
        } catch (err) {
            console.log(err);
        }
    }

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);
            setAuth(result);
        } catch (err) {
            console.log(err);
        }
    }

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit
    }

    return <AuthContext.Provider value={contextValues}>
        {children}
    </AuthContext.Provider>
};

export const useAuthContext = () => {
    return useContext(AuthContext);
}