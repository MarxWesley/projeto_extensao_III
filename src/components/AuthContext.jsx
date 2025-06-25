import { createContext, useContext, useEffect, useState } from 'react';
import api from '../assets/api/Api';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || '');
    const [user, setUser] = useState(null);

    useEffect(() => {
    if (token) {
            try {
                const decoded = jwtDecode(token);
                setUser(decoded);
            } catch (error) {
                console.error("Token inválido:", error);
                setUser(null);
            }
        }
    }, [token]);

    const login = async (email, password) => {
        const response = await api.post('auth/login', { email, password });
        const jwt = `Bearer ${response.data.access_token}`;
        localStorage.setItem('token', jwt);
        setToken(jwt);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
    };

    const isAuthenticated = !!token;

    return (
        <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);