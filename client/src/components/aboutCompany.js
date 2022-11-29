import React, {useEffect, useState} from 'react';
import instance from '../axios/axiosController';

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
            {allAbout.map((about) => (
                <div>
                    <h2>
                        {about.body}
                    </h2>
                </div>
            ))}
        </React.Fragment>
    );
};
export {AboutCompany};
