import React, {useState, useContext} from 'react';
import {observer} from 'mobx-react-lite';
import {NewsList} from '../components/NewsList';
import instance from '../axios/axiosController';
import {AuthContext} from '../hoc/AuthProvider';

const News = observer(() => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const {user} = useContext(AuthContext);

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const postNews = {title, body};
            await instance.post('/news', postNews);
            setTitle('');
            setBody('');
        } catch (e) {
            console.error(e.message());
        }
    };

    return (
        <React.Fragment>
            {user.isAdmin ? (
                <form className="d-flex mt-2" onSubmit={onSubmitForm}>
                    <div className="mb-3 d-flex">
                        <label className="text-danger">Заголовок</label>
                        <input
                            type="text"
                            className="form-control"
                            value={title}
                            placeholder="Введите заголовок"
                            onChange={(e) => setTitle(e.target.value)}
                            id="exampleFormControlInput1"
                        />

                    </div>
                    <div className="mb-3">
                        <label className="text-danger">Новость</label>
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
                        <label className="text-danger">Изображение</label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <hr className="invisible" />
                    <button className="btn btn-success float">Add</button>
                </form>
            ) : (<div />)}

            <NewsList />

        </React.Fragment>
    );
});
export {News};
