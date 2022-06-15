import React from 'react';
import {Container, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button"

const Auth = () => {

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <div style={{width: 600}} className="p-5">
                <h2> Авторизация </h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."

                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."

                    />

                        <Button className="btn btn-primary btn-lg btn_xls">
                        Войти
                        </Button>

                </Form>
            </div>
        </Container>
    );
};

export {Auth};