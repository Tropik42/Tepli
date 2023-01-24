import React from 'react';
import {NavLink} from 'react-router-dom';
import {SideBarComponent} from '../components/SideBarComponent';
import {Images} from '../components/imagesMain';
import {AboutMain} from '../components/aboutMain';
// eslint-disable-next-line import/named
import {EditMainImg} from '../components/editMainImg';

const Index = () => (
    <div>
        <div className="wrapper">
            <div className="container">
                <div className="col-lg-3">
                    <div className="hidden-md hidden-sm hidden-xs">
                        <a href="#"><h3 className="mt--5 main-pad">НОВОСТИ</h3></a>
                        <hr />
                        <div className="back">
                            <SideBarComponent />
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div
                        id="carousel-example-generic"
                        className="carousel slide"
                        data-ride="carousel"
                        data-interval="10000"
                    >
                        <ol className="carousel-indicators ">
                            <li data-target="#carousel-example-generic" data-slide-to="0" className="active" />
                            <li data-target="#carousel-example-generic" data-slide-to="1" />
                            <li data-target="#carousel-example-generic" data-slide-to="2" />
                        </ol>
                        <div className="carousel-inner mt--5">
                            <div className="item active">
                                <img src="img/car1.jpg" alt="..." />
                                <div className="carousel-caption">
                                    <h2>Шикарные светильники</h2>
                                </div>
                            </div>
                            <div className="item">
                                <img src="img/car2.jpg" alt="..." />
                                <div className="carousel-caption">
                                    <h2>А эти ещё лучше</h2>
                                </div>
                            </div>
                            <div className="item">
                                <img src="img/car3.jpg" alt="..." />
                                <div className="carousel-caption">
                                    <h2>Эта лампа - просто бомба</h2>
                                </div>
                            </div>
                                ...
                        </div>
                        <a className="left carousel-control bor-main" href="#carousel-example-generic" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left" />
                        </a>
                        <a className="right carousel-control bor-main" href="#carousel-example-generic" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right" />
                        </a>
                    </div>
                    <hr />
                    <h2 className="h2_header">О КОМПАНИИ</h2>
                    <div className="back">
                        <hr />
                        <div className="back">
                            <p className="text-justify">
                                <AboutMain />
                            </p>
                            <div className="learn_more">
                                <p className="text-right"><NavLink to="/About">Узнать о компании больше</NavLink></p>
                            </div>
                        </div>
                    </div>
                    <div className="margin-5" />
                    <div className="row back">
                        <EditMainImg />
                        <Images />
                    </div>
                </div>
            </div>
        </div>
    </div>
);
export {Index};
