import React, {useState} from 'react';
import {Container, Button} from 'react-bootstrap';
import instance from '../axios/axiosController';

const EditPrice = ({price}) => {
    const [file, setFile] = useState('');
    function handleFile(event) {
        event.preventDefault();
        if (event.target.files && event.target.files.length) {
            const eventFile = event.target.files[0];
            setFile(eventFile);
        }
    }
    const handleApi = async () => {
        const formData = new FormData();
        formData.append('pricePath', file);
        await instance.put(`/price/${price.priceId}`, formData);
    };
    return (
        <Container>
            <div className="container">
                <Button
                    type="button"
                    className="btn btn-info btn-lg pull-left"
                    data-toggle="modal"
                    data-target={`#id${price.priceId}`}
                >
            Изменить
                </Button>
                <div className="modal fade" id={`id${price.priceId}`} role="dialog">
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
                                <div className="mb-3">
                                    <label className="col-form-label" htmlFor="body-name">{price.priceName}</label>
                                    <input
                                        className="hello"
                                        type="file"
                                        onChange={handleFile}
                                        accept
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <Button
                                    className="btn btn-secondary"
                                    type="button"
                                    data-dismiss="modal"
                                >
                            Закрыть
                                </Button>
                                <Button
                                    className="btn btn-primary"
                                    type="button"
                                    onClick={handleApi}
                                    data-dismiss="modal"
                                >
                            Сохранить
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};
export default EditPrice;
