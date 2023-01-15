import React from 'react';
import {ContactList} from '../components/contacts';

const Contacts = () => (
    <div>
        <div className="wrapper">
            <div className="container">
                <div><ContactList /></div>
                <div className="col-lg-12">
                    <div className="col-lg-12 cont_phone">
                        <div className="col-lg-12 cont_phone no_padding">
                            <h3 className="h3_cont text-center">НАШ АДРЕС</h3>
                            <br />
                            <div className="col-lg-12 adress no_padding">
                                <h4>Основной офис</h4>
                                <p className="phone_number">г. Москва, ул. Новочеремушкинская, 61, 117418</p>
                                <div className="embed-responsive embed-responsive-4by3">
                                    <iframe
                                        src="https://yandex.ru/map-widget/v1/-/CKANNR3Y"
                                        width="560"
                                        height="400"
                                        frameBorder="1"
                                        allowFullScreen
                                    />
                                </div>
                                <br />
                            </div>
                        </div>
                        <hr className="col-lg-12" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);
export {Contacts};
