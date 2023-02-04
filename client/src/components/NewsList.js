import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import instance from '../axios/axiosController';
import EditNewsModal from './EditNewsModal';

const NewsList = () => {
    const [allNews, setNews] = useState([]);

    async function getNews() {
        await instance.get('/news')
            .then((response) => setNews(response.data));
    }

    useEffect(() => {
        getNews();
    }, []);

    return (
        <React.Fragment>
            {allNews.map((news) => (
                <div key={news.newsId} className="wrapper">
                    <div className="container">
                        <div className="col-lg-12">
                            <div className="row news">
                                <h2 className="h2_header">{news.title}</h2>
                                <hr />
                                {news.img.map((i) => (
                                    <div className="col-lg-3 col-md-2 text-center">
                                        <img
                                            className="img-thumbnail img-responsive pull-left"
                                            src={process.env.REACT_APP_URL + i}
                                            alt="Безумный Макс"
                                        />
                                    </div>
                                ))}
                                <div className="col-lg-9 col-md-10">
                                    <p className="text-justify">{news.body}</p>
                                </div>
                                <div className="col-lg-12">
                                    <Link to={`/news/${news.newsId}`} className="btn btn-lg btn-primary pull-right">Подробнее</Link>
                                    <div><EditNewsModal news={news} /></div>
                                </div>
                            </div>
                            <div className="margin-5" />
                        </div>
                    </div>
                </div>
            ))}
        </React.Fragment>
    );
};
export {NewsList};
