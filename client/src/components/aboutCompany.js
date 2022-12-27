import React, {useEffect, useState, useContext} from 'react';
import {observer} from 'mobx-react-lite';
import instance from '../axios/axiosController';
import EditAbout from './editAbout';
import {AuthContext} from '../hoc/AuthProvider';

const AboutCompany = observer(() => {
    const [allAbout, setAbout] = useState([]);
    const {user} = useContext(AuthContext);
    const getAbout = async () => {
        try {
            const {data} = await instance.get('/about');
            setAbout(data);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getAbout();
    }, []);

    return (
        <React.Fragment>
            {allAbout.slice(0).reverse().map((about) => (
                <div key={about.aboutId}>
                    <h2>
                        {about.body}
                    </h2>
                    {user.isAdmin ? (<div><EditAbout about={about} /></div>) : (<div />)}
                </div>
            ))}
        </React.Fragment>
    );
});
export {AboutCompany};
