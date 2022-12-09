import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import instance from '../axios/axiosController';

const ImageUpload = () => {
    const [image, setImage] = useState('');
    const [imgUrl, setImgURL] = useState('');
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
        setImgURL(fileReader.result);
    };
    console.log(imgUrl);
    function handleImage(event) {
        event.preventDefault();
        if (event.target.files && event.target.files.length) {
            const file = event.target.files[0];
            setImage(file);
            fileReader.readAsDataURL(file);
        }
    }
    const handleApi = async () => {
        const formData = new FormData();
        formData.append('img', image);
        await instance.post('/', formData);
    };
    return (
        <React.Fragment>
            <div>
                <input
                    type="file"
                    name="file"
                    onChange={handleImage}
                    accept="image/*, .png, .jpg"
                    multiple
                />
                <Button onClick={handleApi}>
                отправить
                </Button>
            </div>
            <div>
                <img
                    className="img-thumbnail img-responsive"
                    src={imgUrl}
                    alt="Безумный Макс"
                />
            </div>
        </React.Fragment>
    );
};

export default ImageUpload;
