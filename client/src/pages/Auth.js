import React, { useState,useContext } from 'react';
import {Form, Container, Card, Button} from 'react-bootstrap'
import { login } from './../http/userApi';
import {useNavigate, NavLink, useLocation} from "react-router-dom";
import {observer} from 'mobx-react-lite';
import { AuthContext } from '../hoc/AuthProvider'


const Auth = observer(() => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const goPage = () => navigate(fromPage)
    const location = useLocation()
    const fromPage = location.state?.from?.pathname || '/'
    const {user}= useContext(AuthContext)

    const signIn = async () => {
        try{ 
            let data = await login(username, password,)
                data ? goPage() : window.alert('неверный логин или пароль')
            console.log(data)
            user.setUser(user)
            user.setIsAuth(true)
        }catch(err){
        console.error(err.message)
    }
        
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
                        Нет аккаунта? <NavLink to={'/Registration'}>Зарегистрируйся</NavLink>
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
})

export {Auth};
