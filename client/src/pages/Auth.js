import React from 'react';
import {Form, Container, Card, Button} from 'react-bootstrap'

const Auth = () => {
    return (
        <Container style = {{height: window.innerHeight - 54}}>
          <Card>
            <h2 style = {{color: 'white'}}>Авторизация</h2>
            <Form>
                <Form.Control
                placeholder='Логин администратора...'
                />
                <Form.Control
                placeholder='Пароль администатора...'
                />
                <Button>
                    Войти
                </Button>
            </Form>
          </Card>
        </Container>
    )
}

export {Auth};