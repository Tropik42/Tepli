import React, {useEffect, useState} from "react"
import axios from "axios";

const NewsList = () => {
    const [allnews, setNews] = useState([])

    async function getNews() {
        await axios.get('http://localhost:5000/api/v1/news')
            .then(response => setNews(response.data))
    }

    useEffect(() => {
        getNews();
    }, []);

    return (
        <React.Fragment>
            {allnews.slice(0).reverse().map(news => (
                <div className="wrapper">
                    <div className="container">
                        <div className="col-lg-12">
                            <div className="row news">
                                <h2 className="h2_header">{news.title}</h2>
                                <hr/>
                                <div className="col-lg-3 col-md-2 text-center">
                                    <img className="img-thumbnail img-responsive pull-left" src="img/lumb2.jpg"
                                         alt="Безумный Макс"/>
                                </div>
                                <div className="col-lg-9 col-md-10">
                                    <p className="text-justify">{news.body}</p>
                                </div>
                                <div className="col-lg-12">
                                    <a href="" className="btn btn-lg btn-primary pull-right">Подробнее</a>
                                </div>
                            </div>
                            <div className="margin-5"></div>
                        </div>
                    </div>
                </div>
            ))}
        </React.Fragment>
    );

}
export {NewsList};
