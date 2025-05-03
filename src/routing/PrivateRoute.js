import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute(){
    const { isAuthanticated } = useAuth();

    if(!isAuthanticated){
        return <Navigate to="/login" replace />;
    }
    return <Outlet />
}