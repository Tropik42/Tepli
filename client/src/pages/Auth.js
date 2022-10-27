import React, { useState } from 'react';
import {Form, Container, Card, Button} from 'react-bootstrap'
import { login } from './../http/userApi';
import {useNavigate, NavLink} from "react-router-dom";





const Auth = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const goBack = () => navigate('/')

    const signIn = async () => {
        let data = await login(username, password,)
            data? goBack() : window.alert('неверный логин или пароль')

    }

    return (
        <Container >

          <Card>
              <div className='row'>

                  <h2 className="col-md-6 col-md-offset-3 hello colorite" >Авторизация</h2>
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
                        Нет аккаунта? <NavLink to={'/News'}>прочитай новости)</NavLink>
                    </div>
                <Button className="ueb-button col-md-3 col-md-offset-3 pull-right"
                  onClick={signIn}
                >
                    Войти
                </Button>
                </div>
            </Form>
              </div>
          </Card>

        </Container>
    )
}

export {Auth};
