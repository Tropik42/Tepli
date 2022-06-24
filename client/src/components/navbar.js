import React from 'react'
import {Route, Routes, Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="hello" >
                <div className="container">
                    <nav >
                        <ul className="nav nav-pills">
                            <li><Link to="/">Главная</Link></li>
                            <li><Link to="/about">О компании</Link></li>
                            <li><Link to="/news">Новости</Link></li>
                            <li><Link to="/catalog">Каталог продукции</Link></li>
                            <li><Link to="/price">Скачать прайс-лист</Link></li>
                            <li><Link to="/contacts">Контакты</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>

    );
}

export { Navbar };
