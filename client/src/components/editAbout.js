import React, {useState} from 'react';
import {Container, Button} from 'react-bootstrap';
import instance from '../axios/axiosController';

const EditAbout = ({about}) => {
    const [body, setBody] = useState(about.body);
    const updateBody = async (e) => {
        e.preventDefault();
        try {
            await instance.put(`/about/${about.aboutId}`, {body});
        } catch (err) {
            console.error(err.message);
        }
    };
    return (
        <Container>
            <div className="container">
                <Button
                    type="button"
                    className="btn btn-info btn-lg pull-right"
                    data-toggle="modal"
                    data-target={`#id${about.aboutId}`}
                >
            Изменить
                </Button>
                <div className="modal fade" id={`id${about.aboutId}`} role="dialog">
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
                                    <label className="col-form-label" htmlFor="body-name">Изменить описание:</label>
                                    <textarea
                                        id="body-name"
                                        className="form-control"
                                        name="body"
                                        value={body}
                                        onChange={((e) => setBody(e.target.value))}
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
                                    onClick={(e) => updateBody(e)}
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
export default EditAbout;
