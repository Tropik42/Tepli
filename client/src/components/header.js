import React from 'react';
import {Navbar} from './navbar';

const Header = () => (

    <div className="container">

        <div>
            <div className="navbar-header header">
                <div className="container row">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 logo">
                        <a href="index.html">
                            <img src="img/logo.png" className="logo_img" alt="" />
                        </a>
                    </div>
                    <div className="phone col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-xs-6 phone-header text-center">
                                <h4>НАШ ТЕЛЕФОН:</h4>
                            </div>
                            <div className="col-lg-12 col-sm-12 col-xs-6 header-number ska text-center">
                                <h3>(499) 128 94 91</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-xs-6 phone-header text-center">
                                <h4>ПОЧТА:</h4>
                            </div>
                            <div className="col-lg-12 col-sm-12 col-xs-6 header-number text-center">
                                <h3>info@tepli.ru</h3>
                            </div>
                        </div>
                    </div>
                    <div className="dealer col-lg-4 col-md-4 col-sm-6 col-xs-12 header-dealer">
                        <div className="of-partner col-sm-12">
                            <h4>ОФИЦИАЛЬНЫЙ ПАРТНЕР</h4>
                        </div>
                        <div className="partner-name text-center col-sm-12">
                            <a href="https://www.deltalight.com/ru">
                                <img src="img/logo_deltalight.png" className="logo_del" alt="" />
                            </a>
                        </div>
                        <div className="dealer_href">
                            <h5 className="text-right">
                                <div className="hidden-md hidden-sm hidden-xs">
                                    <a href="https://www.deltalight.com">www.deltalight.com</a>
                                </div>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12">
                    <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle menu">
                        <i className="fas fa-bars fa-2x pull-left" /><div className="menu-text">Меню сайта</div>
                    </button>

                </div>
            </div>
        </div>
        <Navbar />

    </div>
);
export {Header};
