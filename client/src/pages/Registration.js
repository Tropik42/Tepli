import React, {useState, useContext} from "react";
import {NavLink,useNavigate, useLocation} from "react-router-dom";
import {Form, Container, Card, Button} from 'react-bootstrap'
import {registration} from './../http/userApi';
import {observer} from 'mobx-react-lite';
import {AuthContext} from '../hoc/AuthProvider'

const Registration = observer(() =>{
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const {user}= useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const goPage = () => navigate(fromPage)
    const fromPage = location.state?.from?.pathname || '/'
    const onSubmitForm = async e => {
        e.preventDefault()
        try {            
            const result = await registration(username, password)
            if (!result) {
                window.alert('логин уже существует')
                return false
            } 
            goPage()
            user.setUser(user)
            user.setIsAuth(true)
        } catch (err) {
            console.error(err.message)
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
                        <Button className="ueb-button  col-md-offset-3 pull-right"
                            onClick={onSubmitForm}
                        >
                            Зарегистрируйся
                        </Button>
                        </div>
                    </Form>
                    </div>
                </Card>
            </Container>
        </React.Fragment>
    );
});
export {Registration};
