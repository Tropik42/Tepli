import React, {useState} from 'react';
import {Container, Button} from 'react-bootstrap';
import instance from '../axios/axiosController';

const CreateNewsModal = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [img, setImg] = useState([]);

    const selectImg = (e) => {
        setImg(e.target.files);
    };
    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('body', body);
            for (let i = 0; i < img.length; i++) {
                formData.append('img', img[i]);
            }
            await instance.post('/news', formData);
        } catch (e) {
            console.log(e.message());
        }
    };

    return (
        <Container>
            <div className="container">
                <Button
                    type="button"
                    className="btn btn-info btn-lg pull-right"
                    data-toggle="modal"
                    data-target="#createNews"
                >
                    Добавить новость
                </Button>

                <div className="modal fade" id="createNews" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <Button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                >
                                    &times;
                                </Button>
                                <div className="mb-3">
                                    <label className="col-form-label" htmlFor="title-name">Заголовок</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={title}
                                        placeholder="Введите заголовок"
                                        onChange={(e) => setTitle(e.target.value)}
                                        id="exampleFormControlInput1"
                                    />
                                    <div className="mb-3">
                                        <label className="col-form-label" htmlFor="body-name">Описание новости</label>
                                        <textarea
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            value={body}
                                            placeholder="Введите текст"
                                            onChange={(e) => setBody(e.target.value)}
                                            rows="3"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="col-form-label" htmlFor="title-name">Вставить иллюстрацию</label>
                                        <input
                                            multiple
                                            type="file"
                                            name="file"
                                            accept="image/*, .png, .jpg"
                                            onChange={selectImg}
                                        />
                                    </div>
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
                                    onClick={(e) => onSubmitForm(e)}
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
export {CreateNewsModal};
