import React, {Fragment, useState} from "react";
import axios from "axios";

const InputUser = () =>{
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const onSubmitForm = async e => {
        e.preventDefault()
        try {
            const createUser = {username, password}
            const result = await axios.post('http://localhost:5001/api/v1/user', createUser)
            console.log(result)
        } catch (e) {
            console.log(e.message())
        }
    }
    return (
        <Fragment>
            <h4 className="text-center ">asda</h4>
            <form className='d-flex' onSubmit={onSubmitForm}>
                <input className="container col-lg-4 col-md-4 col-sm-12 col-xs-12   form-control"
                       placeholder='Логин ..'
                       value={username}
                       onChange={e => {setUsername(e.target.value)}}/>
                <input className="container  col-lg-3 col-sm-4 form-control"
                       placeholder='пароль..'
                       value={password}
                       onChange={e => {setPassword(e.target.value)}}
                />
                <button>войти</button>
            </form>
        </Fragment>

    );
};
export default InputUser;