import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
// import { useAuth } from '../hook/useAuth';
import {Button} from 'react-bootstrap'
import {observer} from 'mobx-react-lite'
import { AuthContext } from '../hoc/AuthProvider'
import {useNavigate} from "react-router-dom";

const Navbar = observer(() => {
    const navigate = useNavigate()
    const goPage = () => navigate('/Auth')
    const {user} = useContext(AuthContext)
    const logOut = () =>{
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }
    return (
        <>
            <div className="hello" >
                <div className="container">
                    {user.isAuth ?
                    <nav >
                        <ul className="nav nav-pills">
                            <li><Link to="/">Главная</Link></li>
                            <li><Link to="/about">О компании</Link></li>
                            <li><Link to="/news">Новости</Link></li>
                            <li><Link to="/catalog">Каталог продукции</Link></li>
                            <li><Link to="/price">Скачать прайс-лист</Link></li>
                            <li><Link to="/contacts">Контакты</Link></li>
                            <li><Button className="ueb-button  navbarButton"
                                    onClick={()=> logOut()}>
                                    выйти
                                </Button>
                            </li> 
                        </ul>
                    </nav>
                    :
                    <nav >
                        <ul className="nav nav-pills">
                            <li><Link to="/">Главная</Link></li>
                            <li><Link to="/about">О компании</Link></li>
                            <li><Link to="/news">Новости</Link></li>
                            <li><Link to="/catalog">Каталог продукции</Link></li>
                            <li><Link to="/price">Скачать прайс-лист</Link></li>
                            <li><Link to="/contacts">Контакты</Link></li>
                            <li><Button className="ueb-button navbarButton"
                                    onClick={()=> goPage()}>
                                    войти
                                </Button>
                            </li> 
                            <li className="col-md-offset-3"></li>
                        </ul>
                    </nav>
                    }
                    
                </div>
            </div>
        </>

    );
})

export { Navbar };
