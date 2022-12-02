import React from "react";
import instance from "../axios/axiosController";

class EditNews extends React.Component {
    state = {
        newsId: '',
        newsTitle: this.props.news.newsTitle,
        newsBody: this.props.news.newsBody
    }
    handleChangeTitle = (e) => {
        this.setState({newsTitle: e.target.value})
    }
    handleChangeBody = (e) => {
        this.setState({newsBody: e.target.value})
    }
    handleUpdate = (e) => {
        e.preventDefault()
        instance.put(`/news/${this.state.newsId}`, {
            "title": this.state.newsTitle,
            "body": this.state.newsBody
        })
            .then(res => {
                console.log(res)
            })
    }

    render() {
        if (this.state.newsId == '') {
            this.setState({
                newsId: this.props.news.newsId,
                newsTitle: this.props.news.newsTitle,
                newsBody: this.props.news.newsBody
            })
        }
        return (
            <div className={"container"} >

                <button type={"button"} className={"btn btn-info btn-lg"} data-toggle={"modal"} data-target={`#id${this.props.news.newsId}`}>
                    Изменить
                </button>

                <div className={"modal fade"} id={`id${this.props.news.newsId}`} role={"dialog"}>
                    <div className={"modal-dialog"}>
                    <div className={"modal-content"} >
                        <div className={"modal-header"}>
                            <h4 className={"modal-title"}>Че сюда написать? =)</h4>
                            <button type={"button"} className={"close"} data-dismiss={"modal"}>&times;</button>
                        </div>
                        <div className={"modal-body"}>
                            <div className={"mb-3"}>
                                <label className={"col-form-label"} for={"title-name"}>Новый заголовок:</label>
                                <input id={"title-name"} className={"form-control"} name={"title"}
                                       value={this.state.newsTitle} onChange={(e => this.handleChangeTitle(e))}/>
                            </div>
                            <div className={"mb-3"}>
                                <label className={"col-form-label"} htmlFor={"body-name"}>Изменить новость:</label>
                                <textarea id={"body-name"} className={"form-control"} name={"body"}
                                          value={this.state.newsBody} onChange={(e => this.handleChangeBody(e))}/>
                            </div>
                            <div className={"modal-footer"}>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                    Закрыть
                                </button>
                                <button onClick={(e) => this.handleUpdate(e)} type="button" className="btn btn-primary">
                                    Сохранить
                                </button>
                            </div>
                        </div>
                    </div> </div> </div> </div>
        )
    }
}

export default EditNews;
