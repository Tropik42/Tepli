import React from 'react';

const Price = () => (
    <div>
        <div className="wrapper">
            <div className="container">
                <div className="col-lg-12">
                    <h2 className="h2_header">СКАЧАТЬ ПРАЙС-ЛИСТ</h2>
                    <hr />
                    <h4>Здесь вы можете скачать прайс-листы на нашу продукцию</h4>
                    <div className="margin-5" />
                    <div className="col-lg-6 col-xs-12 btn">
                        <a href="files/Price_main.pdf" target="_blank" download="">
                            <button type="button" className="btn btn-primary btn-lg btn_xls">Скачать основной прайс PDF <i className="fas fa-download" /></button>
                        </a>
                    </div>
                    <div className="col-lg-6 col-xs-12 btn">
                        <a href="files/Price_main.xlsx" download="">
                            <button type="button" className="btn btn-primary btn-lg btn_xls">Скачать основной прайс XLS <i className="fas fa-download" /></button>
                        </a>
                    </div>
                    <div className="col-lg-6 col-xs-12 btn">
                        <a href="files/Price_essentials.pdf" target="_blank" download="">
                            <button type="button" className="btn btn-primary btn-lg btn_xls">Дополнительная серия продукции Essentials PDF <i className="fas fa-download" /></button>
                        </a>
                    </div>
                    <div className="col-lg-6 col-xs-12 btn">
                        <a href="files/Price_essentials.xlsx" download="">
                            <button type="button" className="btn btn-primary btn-lg btn_xls">Дополнительная серия продукции Essentials XLS <i className="fas fa-download" /></button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
export {Price};
