import React, {useState} from 'react';
import {Container, Button} from 'react-bootstrap';
import instance from '../axios/axiosController';

const EditNewsModal = ({news}) => {
    const [title, setTitle] = useState(news.title);
    const [body, setBody] = useState(news.body);
    const [img, setImg] = useState(null);

    const selectImg = (e) => {
        setImg(e.target.files[0]);
    };

    const updateNews = async (e) => {
        e.preventDefault();
        try {
            const editedNews = {img, title, body};
            console.log(editedNews);
            const result = await instance.put(`/news/${news.newsId}`, editedNews);
            console.log(result);
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
                    data-target={`#id${news.newsId}`}
                >
            Изменить
                </Button>
                <div className="modal fade" id={`id${news.newsId}`} role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Редактирование новости</h4>
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
                                    <label className="col-form-label" htmlFor="title-name">Новый заголовок:</label>
                                    <input
                                        id="title-name"
                                        className="form-control"
                                        name="title"
                                        value={title}
                                        onChange={((e) => setTitle(e.target.value))}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="col-form-label" htmlFor="body-name">Изменить новость:</label>
                                    <textarea
                                        id="body-name"
                                        className="form-control"
                                        name="body"
                                        value={body}
                                        onChange={((e) => setBody(e.target.value))}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="col-form-label" htmlFor="title-name">Вставить иллюстрацию</label>
                                    <input
                                        type="file"
                                        name="file"
                                        accept="image/*, .png, .jpg"
                                        onChange={selectImg}
                                    />
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
                                        data-dismiss="modal"
                                        onClick={(e) => updateNews(e)}
                                    >
                                Сохранить
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Container>
    );
};
export default EditNewsModal;
