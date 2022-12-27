import React, {useState} from 'react';
import {NewsList} from '../components/NewsList';
import instance from '../axios/axiosController';
import {CreateNewsModal} from '../components/CreateNewsModal';

const News = () => (
    <React.Fragment>

        <CreateNewsModal />
        <NewsList />

    </React.Fragment>
);
export {News};
