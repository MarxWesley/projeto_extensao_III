import { useAuth } from "./AuthContext";
import { Navigate } from 'react-router-dom'

export function PrivateRoute ({children}) {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to='/login'/>
}