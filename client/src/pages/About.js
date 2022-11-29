import React from 'react';
import {AboutCompany} from '../components/aboutCompany';

const About = () => (
    <div>
        <div className="wrapper">
            <div className="container">
                <div className="col-lg-12">
                    <h2 className="h2_header">О КОМПАНИИ</h2>
                    <hr />
                </div>
                <AboutCompany />
            </div>
        </div>
    </div>
);
export {About};
