import {createContext} from 'react';
import userTepli from '../tepli/userTepli';

export const AuthContext = createContext(null);
export const AuthProvider = ({children}) => {
    const value = {user: new userTepli()};

    return (
        <AuthContext.Provider
            value={value}
        >
            {children}
        </AuthContext.Provider>
    );
};
