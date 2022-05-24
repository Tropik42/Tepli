import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
    return (

        <div class="container-fluid row">
            <nav class="navbar navbar-inverse" />
            <div class="container">
                <div class="navbar-header header">
                    <div class="container row">
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 logo">
                            <a href="index.html">
                                <img src="img/logo.png" class="logo_img" alt="" />
                            </a>
                        </div>
                        <div class="phone col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div class="row">
                                <div class="col-lg-12 col-sm-12 col-xs-6 phone-header text-center">
                                    <h4>НАШ ТЕЛЕФОН:</h4>
                                </div>
                                <div class="col-lg-12 col-sm-12 col-xs-6 header-number ska text-center">
                                    <h3>(499) 128 94 91</h3>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 col-sm-12 col-xs-6 phone-header text-center">
                                    <h4>ПОЧТА:</h4>
                                </div>
                                <div class="col-lg-12 col-sm-12 col-xs-6 header-number text-center">
                                    <h3>info@tepli.ru</h3>
                                </div>
                            </div>
                        </div>
                        <div class="dealer col-lg-4 col-md-4 col-sm-6 col-xs-12 header-dealer">
                            <div class="of-partner col-sm-12">
                                <h4>ОФИЦИАЛЬНЫЙ ПАРТНЕР</h4>
                            </div>
                            <div class="partner-name text-center col-sm-12">
                                <a href="https://www.deltalight.com/ru">
                                    <img src="img/logo_deltalight.png" class="logo_del" alt="" />
                                </a>
                            </div>
                            <div class="dealer_href">
                                <h5 class="text-right">
                                    <div class="hidden-md hidden-sm hidden-xs">
                                        <a href="https://www.deltalight.com">www.deltalight.com</a>
                                    </div>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12">
                        <button type="button" data-target="#navbarCollapse" data-toggle="collapse" class="navbar-toggle menu">
                            <i class="fas fa-bars fa-2x pull-left"></i><div class="menu-text">Меню сайта</div>
                        </button>
                    </div>
                </div>
                <Link to="/">Главная</Link>
                <Link to="/about">О компании</Link>
                <Link to="/news">Новости</Link>
                <Link to="/catalog">Каталог продукции</Link>
                <Link to="/price">Скачать прайс-лист</Link>
                <Link to="/contacts">Контакты</Link>
            </div>

        </div>

    )
}
export { Header }