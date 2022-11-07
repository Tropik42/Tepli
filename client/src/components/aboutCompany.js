import React, {useEffect, useState} from "react"
import instance from "../axios/axiosController"

const AboutCompany = () => {
    const [allabout, setAbout] = useState([])

    async function getAbout() {
        await instance.get('/about')
            .then(response => setAbout(response.data))
    }

    useEffect(() => {
        getAbout();
    }, []);

    return (
        <React.Fragment>
            {allabout.map(about=>(
                <div>
                    <h2>
                        {about.body}
                    </h2>
                </div>
            ))}
        </React.Fragment>
    );

}
export {AboutCompany};