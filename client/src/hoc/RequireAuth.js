import {useLocation, Navigate} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider"
import {observer} from "mobx-react-lite"

const RequireAuth = observer(({children}) => {
    const location = useLocation()
    const {user} = useContext(AuthContext)
    console.log(user)
    if(!user.isAuth){
        return <Navigate to='/Auth' state={{from: location}}/>
    }
    return children
})

export {RequireAuth}

