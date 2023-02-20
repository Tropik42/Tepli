import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite';
import {NewsList} from '../components/NewsList';
import {CreateNewsModal} from '../components/CreateNewsModal';
import {AuthContext} from '../hoc/AuthProvider';

const News = observer(() => {
    const {user} = useContext(AuthContext);

    return (
        <React.Fragment>
            {user.isAdmin ? (
                <CreateNewsModal />
            ) : (<div />)}
            <NewsList />

        </React.Fragment>

    );
});
export {News};
