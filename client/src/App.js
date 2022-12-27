import React, {useContext, useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import {observer} from 'mobx-react-lite';
import jwt_decode from 'jwt-decode';
import {About} from './pages/About';
import {Catalog} from './pages/Catalog';
import {Contacts} from './pages/Contacts';
import {Index} from './pages/Index';
import {News} from './pages/News';
import {Price} from './pages/Price';
import {Auth} from './pages/Auth';
import {Registration} from './pages/Registration';
import {SingleNews} from './pages/SingleNews';
import './App.css';
import {RequireAuth} from './hoc/RequireAuth';
import {AuthContext} from './hoc/AuthProvider';
import {check} from './http/userApi';
import {RequireMain} from './hoc/RequireMain';

const App = observer(() => {
    const {user} = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    // eslint-disable-next-line max-len
    const asd = jwt_decode(localStorage.getItem('token') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJ1c2VybmFtZSI6ImNoeWdhMiIsImlzQWRtaW4iOmZhbHNlfSwiaWF0IjoxNjcxOTgzNDU1LCJleHAiOjE2NzE5OTQyNTV9.WrOyMosaVVLl2Ke6Zo4k_M2phFdsbyHrD7BaUVc06hM');
    useEffect(() => {
        check().then((data) => {
            user.setUser(true);
            user.setIsAuth(true);
            user.setIsAdmin(asd.user.isAdmin);
        }).finally(() => setLoading(false));
    }, []);
    if (loading) { return console.log('загрузка'); }
    return (
        <div className="container pt-4">
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/:id" element={<SingleNews />} />
                <Route
                    path="/catalog"
                    element={(
                        <RequireAuth>
                            <Catalog />
                        </RequireAuth>
                    )}
                />
                <Route path="/price" element={<Price />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route
                    path="/auth"
                    element={(
                        <RequireMain>
                            <Auth />
                        </RequireMain>
                    )}
                />
                <Route
                    path="/registration"
                    element={(
                        <RequireMain>
                            <Registration />
                        </RequireMain>
                    )}
                />
            </Routes>
        </div>

    );
});

export default App;
