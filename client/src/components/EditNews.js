import React from 'react';
import {Container, Button} from 'react-bootstrap';
import instance from '../axios/axiosController';

class EditNews extends React.Component {
    state = {
        newsId: '',
        newsTitle: this.props.news.newsTitle,
        newsBody: this.props.news.newsBody,
    };

    handleChangeTitle = (e) => {
        this.setState({newsTitle: e.target.value});
    };

    handleChangeBody = (e) => {
        this.setState({newsBody: e.target.value});
    };

    handleUpdate = (e) => {
        e.preventDefault();
        instance.put(`/news/${this.state.newsId}`, {
            title: this.state.newsTitle,
            body: this.state.newsBody,
        })
            .then((res) => {
                console.log(res);
            });
    };

    render() {
        if (this.state.newsId == '') {
            this.setState({
                newsId: this.props.news.newsId,
                newsTitle: this.props.news.newsTitle,
                newsBody: this.props.news.newsBody,
            });
        }
        return (
            <Container>

                <div className="container">
                    <Button
                        type="button"
                        className="btn btn-info btn-lg pull-right"
                        data-toggle="modal"
                        data-target={`#id${this.props.news.newsId}`}
                    >
                Изменить
                    </Button>
                    <div className="modal fade" id={`id${this.props.news.newsId}`} role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Че сюда написать? =)</h4>
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
                                            value={this.state.newsTitle}
                                            onChange={((e) => this.handleChangeTitle(e))}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="col-form-label" htmlFor="body-name">Изменить новость:</label>
                                        <textarea
                                            id="body-name"
                                            className="form-control"
                                            name="body"
                                            value={this.state.newsBody}
                                            onChange={((e) => this.handleChangeBody(e))}
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
                                            onClick={(e) => this.handleUpdate(e)}
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
    }
}

export default EditNews;
