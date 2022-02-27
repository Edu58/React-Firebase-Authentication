import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const ProtectedRoutes = ({children}) => {
    const { currentUser } = useAuth();

    return currentUser ? children : <Navigate to="/login" />
}

export default ProtectedRoutes;