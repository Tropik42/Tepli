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
            <div className={"wrapper-single"}>
                <h1 className={`hello colorite single-title`}>{singleNews.title}</h1>
                <p className={'below-title-meta'}>Создана | {singleNews.newsDate}</p>
                <img className={'single-img'} src="../img/lumb2.jpg"/>
                <p className={`hello colorite`}>{singleNews.body}</p>
            </div>
        </div>
    );
};

export  {SingleNews};
