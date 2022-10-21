import React, {useEffect, useState} from "react"
import axios from "axios";

const SideBarComponent = () => {
    const [allNews, setNews] = useState([])

    async function getNews() {
        await axios.get('http://localhost:5000/api/v1/news')
            .then(response => setNews(response.data.slice(-5)))
    }

    useEffect(() => {
        getNews();
    }, []);

    return (
        <div>
            {(allNews.slice(0).reverse().map(news => (
                <React.Fragment key={news.newsId}>
                    <div className="wrapper">
                        <a href="#"><h4>{news.title}</h4></a>
                        <p id="dateSpan">{`${
                            new Date(news.newsDate).getDate()}.${
                            new Date(news.newsDate).getMonth()}.${
                            new Date(news.newsDate).getFullYear()}`
                        }</p>
                        <div className="text-justify, sideBarNewsElement">{news.body.substring(0, 100) + '...'}</div>
                        <hr/>
                    </div>
                </React.Fragment>
            )))}
        </div>
    );
}
export {SideBarComponent};
