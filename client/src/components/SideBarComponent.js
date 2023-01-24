import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import instance from '../axios/axiosController';

const SideBarComponent = () => {
    const [allNews, setNews] = useState([]);

    async function getNews() {
        await instance.get('/news')
            .then((response) => setNews(response.data));
    }

    useEffect(() => {
        getNews().catch();
    }, []);

    return (
        <div>
            {(allNews.slice(0, 5).map((news) => (
                <React.Fragment key={news.newsId}>
                    <div className="back">
                        <Link to={`/news/${news.newsId}`}><h4>{news.title}</h4></Link>
                        <div className="text-justify, sideBarNewsElement">{`${news.body.substring(0, 100)}...`}</div>
                        <p id="dateSpan">{news.newsDate}</p>
                        <hr className="hr-main-top" />
                    </div>
                </React.Fragment>
            )))}
        </div>
    );
};
export {SideBarComponent};
