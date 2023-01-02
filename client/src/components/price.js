import React, {useEffect, useState, useContext} from 'react';
import {observer} from 'mobx-react-lite';
import instance from '../axios/axiosController';
import EditPrice from './editPrice';
import {AuthContext} from '../hoc/AuthProvider';

const PriceList = observer(() => {
    const [allPrice, setPrice] = useState([]);
    const {user} = useContext(AuthContext);
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
                <div key={price.priceId} className="col-lg-6 col-xs-12 btn fas fa-download">
                    <a href={process.env.REACT_APP_URL + price.pricePath} target="_blank" download>
                        <button type="button" className="btn btn-primary btn-lg btn_xls">
                            {price.priceName}
                        </button>
                    </a>
                    <div>
                        {user.isAdmin ? (<div><EditPrice price={price} /></div>) : (<div />)}
                    </div>
                </div>
            ))}
        </React.Fragment>
    );
});
export {PriceList};
