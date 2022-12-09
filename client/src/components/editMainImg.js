import React, {useState, useEffect} from 'react';
import {Container, Button} from 'react-bootstrap';
import instance from '../axios/axiosController';
import DeleteImg from './deleteMainImg';
import ImageUpload from './imageUploadMain';

const EditMainImg = () => {
    const [allImages, setImages] = useState([]);
    const getImages = async () => {
        try {
            const {data} = await instance.get('/');
            setImages(data);
        } catch (err) {
            console.error(err.message);
        }
    };
    useEffect(() => {
        getImages();
    }, []);

    return (
        <React.Fragment>
            <Container>
                <div className="container">
                    <Button
                        type="button"
                        className="btn btn-info btn-lg"
                        data-toggle="modal"
                        data-target="#myModal"
                    >
                Изменить
                    </Button>
                    <div className="modal fade" id="myModal" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Редактирование</h4>
                                    <Button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                    >
                                &times;
                                    </Button>
                                </div>
                                <div className="modal-body">
                                    <ImageUpload />
                                </div>
                                <div className="modal-footer">
                                    {allImages.map((image) => (
                                        <div key={image.imageId}>
                                            <div className="col-lg-3 col-md-2 text-center">
                                                <img
                                                    className="img-thumbnail img-responsive"
                                                    src={process.env.REACT_APP_URL + image.img}
                                                    alt="Безумный Макс"
                                                />
                                                <DeleteImg image={image} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </React.Fragment>
    );
};
export {EditMainImg};
