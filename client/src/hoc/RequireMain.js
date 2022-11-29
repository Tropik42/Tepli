import {useLocation, Navigate} from 'react-router-dom';
import {useContext} from 'react';
import {observer} from 'mobx-react-lite';
import {AuthContext} from './AuthProvider';

const RequireMain = observer(({children}) => {
    const location = useLocation();
    const {user} = useContext(AuthContext);
    if (user.isAuth) {
        return <Navigate to="/" state={{from: location}} />;
    }
    return children;
});
export {RequireMain};
