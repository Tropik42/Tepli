import React from 'react';
import {NavLink} from 'react-router-dom';
import {SideBarComponent} from '../components/SideBarComponent';
import {Images} from '../components/imagesMain';
import {ImageUpload} from '../components/imageUploadMain';

const Index = () => (
    <div>
        <div className="wrapper">
            <div className="container">
                <div className="col-lg-3">
                    <div className="hidden-md hidden-sm hidden-xs">
                        <a href="#"><h3 className="mt--5">НОВОСТИ</h3></a>
                        <hr />
                        <SideBarComponent />
                    </div>
                </div>
                <div className="col-lg-9">
                    <div
                        id="carousel-example-generic"
                        className="carousel slide"
                        data-ride="carousel"
                        data-interval="10000"
                    >
                        <ol className="carousel-indicators">
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
                        <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left" />
                        </a>
                        <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right" />
                        </a>
                    </div>

                    <h2 className="h2_header">О КОМПАНИИ</h2>
                    <hr />
                    <div className="about-company">
                        <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the standard dummy  1500s,
                                when an unknown printer took a galley of type and scrambled it to ma
                                book. It has survived not only five centuries, but also the leap
                                typesetting, remaining essentially unchanged.
                                 It was popularised in the 1960s with the
                                release of Letraset sheets containing
                                Lorem Ipsum passages, and more recently with
                                desktop publishing software
                                 like Aldus PageMaker including versions of Lorem Ipsum.Lorem
                                Ipsum is simply dummy text
                                 of the printing and typesetting industry. Lorem Ipsum has
                                been the s standard dummy
                                text ever since the 1500s, when an unknown printer
                                took a galley of type and scrambled it
                                 to make a type specimen book. It has survived not
                                only five centuries, but
                                also the leap into electronic typesetting, remaining
                                essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset
                                sheets containing
                                Lorem Ipsum passages, and more recently with desktop publishing
                                software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div className="about-company hidden-xs">
                        <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the
                                standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of
                                type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic
                                typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the
                                release of Letraset sheets containing Lorem
                                Ipsum passages, and more recently with
                                desktop publishing software like Aldus </p>
                    </div>
                    <div className="learn_more">
                        <p className="text-right"><NavLink to="/About">Узнать о компании больше</NavLink></p>
                    </div>
                    <div className="margin-5" />
                    <ImageUpload />
                    <div className="row">
                        <Images />
                    </div>
                </div>
            </div>
        </div>
    </div>
);
export {Index};
