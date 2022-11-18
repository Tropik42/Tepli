import {useLocation, Navigate} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider"
import {observer} from "mobx-react-lite"

const RequireMain = observer(({children}) => {
    const location = useLocation()
    const {user} = useContext(AuthContext)
    
    if(user.isAuth){
        return <Navigate to='/' state={{from: location}}/>
    }
    return children
})
export {RequireMain}