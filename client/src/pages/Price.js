import React from 'react';
import {PriceList} from '../components/price';

const Price = () => (
    <div>
        <div className="wrapper">
            <div className="container">
                <div className="col-lg-12">
                    <h2 className="h2_header">СКАЧАТЬ ПРАЙС-ЛИСТ</h2>
                    <hr />
                    <h4>Здесь вы можете скачать прайс-листы на нашу продукцию</h4>
                    <div className="margin-5" />
                    <div>
                        <PriceList />
                    </div>
                </div>
            </div>
        </div>
    </div>
);
export {Price};
