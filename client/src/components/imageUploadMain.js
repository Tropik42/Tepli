import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import instance from '../axios/axiosController';

const ImageUpload = () => {
    const [image, setImage] = useState('');
    function handleImage(e) {
        console.log(e.target.files);
        setImage(e.target.files[0]);
    }
    const handleApi = async () => {
        const formData = new FormData();
        formData.append('img', image);
        await instance.post('/', formData);
    };
    return (
        <div>
            <input
                type="file"
                name="file"
                onChange={handleImage}
                accept="image/*, .png, .jpg"
            />
            <Button onClick={handleApi}>
            отправить
            </Button>
        </div>
    );
};

export {ImageUpload};
