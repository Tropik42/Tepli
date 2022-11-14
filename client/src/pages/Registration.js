import React, {Fragment, useState} from "react";
import instance from "../axios/axiosController";
import {useNavigate, NavLink} from "react-router-dom";
import {Form, Container, Card, Button} from 'react-bootstrap'

const Registration = () =>{
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const navigate = useNavigate()
    const goHomePage = () => navigate('/')
    const onSubmitForm = async e => {
        e.preventDefault()
        try {
            const createUser = {username, password}
            const result = await instance.post('/user', createUser)
            result ? goHomePage() : window.alert('неверный логин или пароль')
            console.log(result)
        } catch (e) {
            console.log(e.message())
        }
    }
    return (
        <React.Fragment>
            <Container >
                <Card>
                    <div className='row'>
                        <h2 className="col-md-6 col-md-offset-3 hello colorite" >Регистрация</h2>
                        <div className="row col-md-8 col-md-offset-4"></div>
                    </div>
                    <div className="row">
                    <Form className="col-md-4 col-md-offset-4 form-horizontal" >
                        <div className="form-group">
                            <Form.Control className="form-group"
                            placeholder='Логин...'
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            />
                            <Form.Control className="form-group"
                            placeholder='Пароль...'
                            type='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="row">
                            <div className="form-group colorite text-center">
                                Есть аккаунт? <NavLink to={'/Auth'}>Войди</NavLink>
                            </div>
                        <Button className="ueb-button col-md-3 col-md-offset-3 pull-right"
                            onClick={onSubmitForm}
                        >
                            Войти
                        </Button>
                        </div>
                    </Form>
                    </div>
                </Card>
            </Container>
        </React.Fragment>
    );
};
export {Registration};
