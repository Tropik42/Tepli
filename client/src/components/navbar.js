import React from 'react'
import {Route, Routes, Link} from 'react-router-dom';


import {About} from '../pages/About';
import {Catalog} from '../pages/Catalog'
import {Contacts} from '../pages/Contacts'
import {Index} from '../pages/Index'
import {News} from '../pages/News'
import {Price} from '../pages/Price'






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

            <div className="container">
                <Routes>
                    <Route path="/" element={<Index/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/news" element={<News/>} />
                    <Route path="/catalog" element={<Catalog/>} />
                    <Route path="/price" element={<Price/>} />
                    <Route path="/contacts" element={<Contacts/>} />
                </Routes>
            </div>
        </>

    );
}

export { Navbar };
