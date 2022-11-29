import {useLocation, Navigate} from 'react-router-dom';
import {useContext} from 'react';
import {observer} from 'mobx-react-lite';
import {AuthContext} from './AuthProvider';

const RequireAuth = observer(({children}) => {
    const location = useLocation();
    const {user} = useContext(AuthContext);
    console.log(user);
    if (!user.isAuth) {
        return <Navigate to="/Auth" state={{from: location}} />;
    }
    return children;
});

export {RequireAuth};
