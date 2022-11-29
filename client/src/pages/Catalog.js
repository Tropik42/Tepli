import React from 'react';

const Catalog = () => (
    <div className="container">
        <div className="col-lg-12">
            <h2 className="h2_header">КАТАЛОГ ПРОДУКЦИИ</h2>
            <hr />
            <h4>Каталог продукции находится на сайте нашего партнёра - Deltalight </h4>
            <div className="margin-5" />
            <div className="col-lg-12 col-xs-12 btn">
                <a
                    className="btn btn-primary btn-lg btn_pdf"
                    href="https://www.deltalight.com/ru/products/overview"
                    target="_blank"
                >
                        Перейти на сайт Deltalight</a>
            </div>
        </div>
    </div>

);
export {Catalog};
