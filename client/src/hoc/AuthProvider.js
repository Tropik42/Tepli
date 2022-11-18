import {createContext} from "react";
import userTepli from "../tepli/userTepli";
import {observer} from "mobx-react-lite"

export const AuthContext =  createContext(null);
export const AuthProvider = ({children}) =>{
    
    const value = {user: new userTepli()}

    return (<AuthContext.Provider value={value}>
    {children}
    </AuthContext.Provider>)
}