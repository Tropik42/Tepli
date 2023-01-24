import React, {useState, useEffect, useContext} from 'react';
import {Container, Button} from 'react-bootstrap';
import {observer} from 'mobx-react-lite';
import instance from '../axios/axiosController';
import ImageUpload from './imageUploadMain';
import {AuthContext} from '../hoc/AuthProvider';

const EditMainImg = observer(() => {
    const [allImages, setImages] = useState([]);
    const {user} = useContext(AuthContext);
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
                <div>
                    {user.isAdmin ? (
                        <button
                            type="button"
                            className="btn btn-info btn-lg web-button"
                            data-toggle="modal"
                            data-target="#myModal"
                        >
                Изменить
                        </button>
                    ) : (<div />)}

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
                                <div className="modal-footer">
                                    {allImages.map((image) => (
                                        <div key={image.imageId}>
                                            <div className="col-lg-3 col-md-4 text-center">
                                                <img
                                                    className="marginImg img-thumbnail img-responsive"
                                                    src={process.env.REACT_APP_URL + image.img}
                                                    alt="Безумный Макс"
                                                />
                                                <ImageUpload image={image} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="modal-footer" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </React.Fragment>
    );
});
export {EditMainImg};
