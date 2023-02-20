import React, {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import {observer} from 'mobx-react-lite';
import instance from '../axios/axiosController';
import EditNewsModal from '../components/EditNewsModal';
import {AuthContext} from '../hoc/AuthProvider';

const SingleNews = observer(() => {
    const {id} = useParams();
    const {user} = useContext(AuthContext);
    const [singleNews, setSingleNews] = useState([]);

    const getOneNews = async () => {
        try {
            const {data} = await instance.get(`/news/${id}`);
            setSingleNews(data);
        } catch (err) {
            console.error(err.message);
        }
    };
    useEffect(() => {
        getOneNews();
    });

    return (
        <div className="col-md-6 col-md-offset-3">
            <h1 className="hello colorite">{singleNews.title}</h1>
            <p className="hello colorite">{singleNews.body}</p>
            <img
                className="img-thumbnail img-responsive pull-left"
                src={process.env.REACT_APP_URL + singleNews.img}
                alt="Безумный Макс"
            />
            <span className="pull-left">
                {user.isAdmin ? (<EditNewsModal news={singleNews} />) : (<div />)}
            </span>
        </div>
    );
});

export {SingleNews};
