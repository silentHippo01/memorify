import { useSelector } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';



export function RequireAuth({ children }: any) {
    const isAuth = useSelector((state: any) => state.auth.isAuth);
    console.log('isAuth', isAuth)
    const location = useLocation();

    const navigate = useNavigate();

    if (!isAuth) {
        return navigate('/login')
    }
    return children;
}
