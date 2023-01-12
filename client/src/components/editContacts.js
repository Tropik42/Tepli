import React, {useState} from 'react';
import {Container, Button} from 'react-bootstrap';
import instance from '../axios/axiosController';

const EditContacts = ({cont}) => {
    const [Phone, setPhone] = useState(cont.data.phone);
    const [number, setNumber] = useState('');
    const [Email, setEmail] = useState(cont.data.email);
    const [emRef, setEmRef] = useState('');
    const [Network, setNetwork] = useState(cont.data.network);
    const [netRef, setNetRef] = useState('');
    const [netName, setNetName] = useState('');

    const addNumber = (e) => {
        e.preventDefault();
        Phone.push({
            id: Date.now(),
            num: number,
        });
        setNumber('');
        setPhone(Phone);
    };
    const deletePhone = (e, id) => {
        e.preventDefault();
        const delPhone = Phone.filter((ph) => ph.id !== id);
        setPhone(delPhone);
    };
    const addEmail = (e) => {
        e.preventDefault();
        Email.push({
            id: Date.now(),
            ref: emRef,
        });
        setEmRef('');
        setEmail(Email);
    };
    const deleteEmail = (e, id) => {
        e.preventDefault();
        const delEmail = Email.filter((em) => em.id !== id);
        setEmail(delEmail);
    };
    const addNet = (e) => {
        e.preventDefault();
        Network.push({
            id: Date.now(),
            ref: netRef,
            name: netName,
        });
        setNetRef('');
        setNetName('');
        setNetwork(Network);
    };
    const deleteNet = (e, id) => {
        e.preventDefault();
        const delNet = Network.filter((net) => net.id !== id);
        setNetwork(delNet);
    };
    const updateContacts = async (e) => {
        e.preventDefault();
        const editedCont = {Phone, Email, Network};
        try {
            await instance.put(`/contacts/${cont.contId}`, editedCont);
        } catch (err) {
            console.error(err.message);
        }
    };
    return (
        <Container>

            <div className="container">
                <Button
                    type="button"
                    className="btn btn-info btn-lg"
                    data-toggle="modal"
                    data-target={`#id${cont.contId}`}
                >
            Изменить
                </Button>
                <div className="modal fade" id={`id${cont.contId}`} role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Редактирование контактов</h4>
                                <Button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                >
                            &times;
                                </Button>
                            </div>
                            <div>
                                <div className="col-lg-12 cont_phone">
                                    <div className="col-form-label text-center">
                                        Номера телефонов:
                                    </div>
                                    {Phone.map((ph) => (
                                        <div key={ph.id}>
                                            <div className="col-lg-6 text-center">
                                                <label className="col-form-label">{ph.num}</label>
                                                <Button
                                                    className="close"
                                                    type="button"
                                                    value={ph.id}
                                                    onClick={(e) => deletePhone(e, ph.id)}
                                                >
                                            &times;
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                    <input
                                        className="form-control"
                                        name="phone"
                                        placeholder="Введите номер телефона"
                                        value={number}
                                        onChange={((e) => setNumber(e.target.value))}
                                    />
                                    <Button
                                        className="btn btn-primary"
                                        type="button"
                                        onClick={(e) => addNumber(e)}
                                    >
                                     добавить
                                    </Button>
                                    <hr className="col-lg-12" />
                                </div>
                                <div className="col-lg-12 cont_phone">
                                    <div className="col-form-label text-center">
                                        Почта:
                                    </div>
                                    {Email.map((em) => (
                                        <div key={em.id}>
                                            <div className="col-lg-12 text-center">
                                                <label className="col-form-label">{em.ref}</label>
                                                <Button
                                                    className="close"
                                                    type="button"
                                                    value={em.id}
                                                    onClick={(e) => deleteEmail(e, em.id)}
                                                >
                                            &times;
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                    <input
                                        className="form-control"
                                        name="email"
                                        placeholder="Введите адрес почты"
                                        value={emRef}
                                        onChange={((e) => setEmRef(e.target.value))}
                                    />
                                    <Button
                                        className="btn btn-primary"
                                        type="button"
                                        onClick={(e) => addEmail(e)}
                                    >
                                     добавить
                                    </Button>
                                    <hr className="col-lg-12" />
                                </div>
                                <div className="col-lg-12 cont_phone">
                                    <div className="col-form-label text-center">
                                        Страницы в соц.сетях:
                                    </div>
                                    {Network.map((net) => (
                                        <div className="col-lg-6 text-center" key={net.id}>
                                            <span className="col-form-label">
                                                <a href={net.ref} className="link" target="_blank">{net.name}</a>
                                            </span>
                                            <Button
                                                className="close"
                                                type="button"
                                                value={net.id}
                                                onClick={(e) => deleteNet(e, net.id)}
                                            >
                                            &times;
                                            </Button>
                                        </div>
                                    ))}
                                    <input
                                        className="form-control"
                                        name="ref"
                                        placeholder="добавьте ссылку на соц.сеть"
                                        value={netRef}
                                        onChange={((e) => setNetRef(e.target.value))}
                                    />
                                    <input
                                        className="form-control"
                                        name="name"
                                        placeholder="Введите название соц.сети"
                                        value={netName}
                                        onChange={((e) => setNetName(e.target.value))}
                                    />
                                    <Button
                                        className="btn btn-primary"
                                        type="button"
                                        onClick={(e) => addNet(e)}
                                    >
                                     добавить
                                    </Button>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <Button
                                    className="btn btn-secondary"
                                    type="button"
                                    data-dismiss="modal"
                                >
                            Закрыть
                                </Button>
                                <Button
                                    className="btn btn-primary"
                                    type="button"
                                    data-dismiss="modal"
                                    onClick={(e) => updateContacts(e)}
                                >
                            Сохранить
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Container>
    );
};
export default EditContacts;
