import React, {useEffect, useState} from "react"
import axios from "axios";

const SideBarComponent = () => {
    const [allnews, setNews] = useState([])

    async function getNews() {
        await axios.get('http://localhost:5000/api/v1/news')
            .then(response => setNews(response.data.slice(-5)))
    }

    useEffect(() => {
        getNews();
    }, []);

    return (
        <React.Fragment>
            {(allnews.slice(0).reverse().map(news => (
                        <div className="wrapper">
                            <a href="#"><h4>{news.title}</h4></a>
                            <p id="dateSpan">{`${
                                new Date(news.newsDate).getDate()}.${
                                new Date(news.newsDate).getMonth()}.${
                                new Date(news.newsDate).getFullYear()}`
                            }</p>
                            <p className="text-justify">{news.body}</p>
                            <hr/>
                        </div>
            )))}
        </React.Fragment>
    );
}
export {SideBarComponent};
