import React, {useEffect, useState} from 'react';
import instance from '../axios/axiosController';

const PriceList = () => {
    const [allPrice, setPrice] = useState([]);

    const getPrice = async () => {
        try {
            const {data} = await instance.get('/price');
            setPrice(data);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getPrice();
    }, []);

    return (
        <React.Fragment>
            {allPrice.map((price) => (
                <div key={price.priceId}>
                    <button>
                        {price.price_name}
                    </button>
                </div>
            ))}
        </React.Fragment>
    );
};
export {PriceList};
