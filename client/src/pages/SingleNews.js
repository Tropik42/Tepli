import React from 'react';
import {useParams} from "react-router-dom";
import instance from "../axios/axiosController";
import {useState, useEffect} from "react";

const SingleNews = () => {
    const {id} = useParams()
    const [singleNews, setSingleNews] = useState([])

    const getOneNews = async () => {
        try {
            const {data} = await instance.get(`/news/${id}`)
                setSingleNews(data)
        } catch (err) {
            console.error(err.message)
        }

    }
    useEffect(() => {
        getOneNews()
    } );

    return (
        <div className={"col-md-6 col-md-offset-3"}>
            <h1 className={`hello colorite`}>{singleNews.title}</h1>
            <p className={`hello colorite`}>{singleNews.body}</p>
            <img className="img-thumbnail img-responsive pull-left" src="../img/lumb2.jpg"
                 alt="Безумный Макс"/>
        </div>
    );
};

export  {SingleNews};
