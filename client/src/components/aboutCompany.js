import React, {useEffect, useState} from 'react';
import instance from '../axios/axiosController';
import EditAbout from './editAbout';

const AboutCompany = () => {
    const [allAbout, setAbout] = useState([]);

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
                    <div>
                        <EditAbout about={about} />
                    </div>
                </div>
            ))}
        </React.Fragment>
    );
};
export {AboutCompany};
