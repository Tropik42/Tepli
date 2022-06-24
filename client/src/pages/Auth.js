import React, { useState } from 'react';
import {Form, Container, Card, Button} from 'react-bootstrap'
import { login } from './../http/userApi';

const logIn = async () => {
    const response = await login()
    console.log(response)
}

const Auth = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    return (
        <Container style = {{height: window.innerHeight - 54}}>
          <Card>
            <h2 style = {{color: 'white'}}>Авторизация</h2>
            <Form>
                <Form.Control
                placeholder='Логин администратора...'
                value={username}
                onChange={e => setUsername(e.target.value)}
                />
                <Form.Control
                placeholder='Пароль администатора...'
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
                <Button
                  onClick={logIn}
                >
                    Войти
                </Button>
            </Form>
          </Card>
        </Container>
    )
}

export {Auth};
