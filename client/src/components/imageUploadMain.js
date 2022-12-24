import React, {useState, useRef} from 'react';
import {Button} from 'react-bootstrap';
import instance from '../axios/axiosController';

const ImageUpload = ({image}) => {
    const filePicker = useRef(null);
    const [img, setImage] = useState('');
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
        formData.append('img', img);
        await instance.put(`/${image.imageId}`, formData);
        setImgURL('');
    };
    const handlePick = () => {
        filePicker.current.click();
    };
    return (
        <React.Fragment>
            <div>
                <Button onClick={handlePick}>
                выбрать файл
                </Button>
                <input
                    className="hidden"
                    type="file"
                    name="file"
                    onChange={handleImage}
                    accept="image/*, .png, .jpg"
                    ref={filePicker}
                />
                <Button className="marginImg" onClick={handleApi}>
                заменить
                </Button>
            </div>
            <div>
                <img
                    className="img-add  img-responsive"
                    src={imgUrl}
                />
            </div>
        </React.Fragment>
    );
};

export default ImageUpload;
