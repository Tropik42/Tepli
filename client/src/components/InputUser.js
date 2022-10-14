import React, {Fragment, useState} from "react";
import axios from "axios";

const InputUser = () =>{
    const [userPassword, setUserPassword] = useState('password')
    const [userName, setUserName] = useState('name')
    const onSubmitForm = async e => {
        e.preventDefault()
        try {
            const createUser = {userName, userPassword}
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
                       value={userName}
                       onChange={e => {setUserName(e.target.value)}}/>
                <input className="container  col-lg-3 col-sm-4 form-control"
                        value={userPassword}
                       onChange={e => {setUserPassword(e.target.value)}}
                />
                <button>войти</button>
            </form>
        </Fragment>

    );
};
export default InputUser;