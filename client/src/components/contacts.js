import React, {useEffect, useState, useContext} from 'react';
import {observer} from 'mobx-react-lite';
import instance from '../axios/axiosController';
import EditContacts from './editContacts';
// import {AuthContext} from '../hoc/AuthProvider';

const ContactList = observer(() => {
    const [allContacts, setContacts] = useState([]);
    const getContacts = async () => {
        try {
            const {data} = await instance.get('/contacts');
            setContacts(data);
        } catch (err) {
            console.error(err.message);
        }
    };
    // console.log(allContacts);
    useEffect(() => {
        getContacts();
    }, []);
    return (
        <React.Fragment>
            {allContacts.map((cont) => (
                <div key={cont.contId}>
                    <EditContacts cont={cont} />
                    <div>
                        <div className="wrapper">
                            <div className="container">
                                <div className="col-lg-12">
                                    <h2 className="h2_header">КОНТАКТЫ</h2>
                                    <hr />
                                </div>
                                <div className="col-lg-12 cont_phone">
                                    <h3 className="h3_cont text-center">НОМЕРА ТЕЛЕФОНОВ</h3>
                                    <br />
                                    {cont.data.phone.map((ph) => (
                                        <div key={ph.id}>
                                            <div className="col-lg-6 text-center">
                                                <p className="phone_number">{ph.num}</p>
                                            </div>
                                        </div>
                                    ))}
                                    <hr className="col-lg-12" />
                                </div>
                            </div>
                            <div className="col-lg-12 cont_phone">
                                <h3 className="h3_cont text-center">ПОЧТА</h3>
                                <br />
                                {cont.data.email.map((em) => (
                                    <div key={em.id}>
                                        <div className="col-lg-12 text-center">
                                            <p className="phone_number">{em.ref}</p>
                                        </div>
                                    </div>
                                ))}
                                <hr className="col-lg-12" />
                            </div>
                            <div className="col-lg-12 cont_phone">
                                <h3 className="h3_cont text-center">СТРАНИЦЫ В СОЦСЕТЯХ</h3>
                                <br />
                                {cont.data.network.map((net) => (
                                    <div className="col-lg-6 text-center" key={net.id}>
                                        <span className="phone_number">
                                            <a href={net.ref} className="link" target="_blank">{net.name}</a>
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </React.Fragment>
    );
});
export {ContactList};
