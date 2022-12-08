import React, {useState, useEffect} from 'react';
import instance from '../axios/axiosController';

const AboutMain = () => {
    const [allAbout, setAbout] = useState([]);

    const getAbout = async () => {
        try {
            const {data} = await instance.get('/about');
            setAbout(data.slice(-1));
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
                    <div>
                        {about.body}
                    </div>
                </div>
            ))}
        </React.Fragment>
    );
};
export {AboutMain};
